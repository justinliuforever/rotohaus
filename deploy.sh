#!/bin/bash

# ROTOHAUS 网站部署脚本
# 此脚本将自动安装依赖、构建项目并配置 Nginx

set -e  # 遇到错误立即退出

echo "=========================================="
echo "ROTOHAUS 网站部署开始"
echo "=========================================="

# 检查是否为 root 用户
if [ "$EUID" -ne 0 ]; then 
    echo "请使用 root 权限运行此脚本: sudo bash deploy.sh"
    exit 1
fi

# 1. 安装 Node.js (如果未安装)
if ! command -v node &> /dev/null; then
    echo "正在安装 Node.js..."
    # 使用 NodeSource 仓库安装 Node.js 20.x
    curl -fsSL https://rpm.nodesource.com/setup_20.x | bash -
    yum install -y nodejs
    echo "Node.js 安装完成: $(node --version)"
else
    echo "Node.js 已安装: $(node --version)"
fi

# 2. 进入项目目录
cd /root/rotohaus

# 3. 安装项目依赖
echo "正在安装项目依赖..."
npm install

# 4. 构建生产版本
echo "正在构建生产版本..."
npm run build

# 5. 检查构建结果
if [ ! -d "dist" ]; then
    echo "错误: 构建失败，未找到 dist 目录"
    exit 1
fi

echo "构建完成！构建文件位于: $(pwd)/dist"

# 6. 配置 Nginx
echo "正在配置 Nginx..."

# 创建 Nginx 配置文件
cat > /etc/nginx/conf.d/rotohaus.conf << 'EOF'
server {
    listen 80;
    server_name _;  # 监听所有域名，您可以根据需要修改为具体域名
    
    root /root/rotohaus/dist;
    index index.html;

    # 启用 gzip 压缩
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/json;

    # 处理 React Router 的路由
    location / {
        try_files $uri $uri/ /index.html;
    }

    # 静态资源缓存
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # 安全头
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
EOF

# 7. 测试 Nginx 配置
echo "正在测试 Nginx 配置..."
nginx -t

# 8. 启动/重启 Nginx
echo "正在启动 Nginx..."
systemctl enable nginx
systemctl restart nginx

# 9. 配置防火墙（如果启用了 firewalld）
if systemctl is-active --quiet firewalld; then
    echo "正在配置防火墙..."
    firewall-cmd --permanent --add-service=http
    firewall-cmd --reload
    echo "防火墙已配置，允许 HTTP 流量"
fi

# 10. 获取服务器 IP
SERVER_IP=$(hostname -I | awk '{print $1}')

echo ""
echo "=========================================="
echo "部署完成！"
echo "=========================================="
echo "网站已部署成功！"
echo ""
echo "访问方式："
echo "  本地访问: http://localhost"
echo "  外部访问: http://$SERVER_IP"
echo ""
echo "如果服务器有域名，请修改 /etc/nginx/conf.d/rotohaus.conf"
echo "将 'server_name _;' 改为 'server_name your-domain.com;'"
echo ""
echo "Nginx 状态: systemctl status nginx"
echo "查看日志: tail -f /var/log/nginx/error.log"
echo "=========================================="
