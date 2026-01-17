# ROTOHAUS 网站部署指南

## 快速部署

### 方法一：使用自动部署脚本（推荐）

```bash
cd /root/rotohaus
chmod +x deploy.sh
sudo bash deploy.sh
```

脚本会自动完成：
- ✅ 安装 Node.js（如果未安装）
- ✅ 安装项目依赖
- ✅ 构建生产版本
- ✅ 配置 Nginx
- ✅ 启动 Web 服务器

### 方法二：手动部署

#### 1. 安装 Node.js

```bash
# 安装 Node.js 20.x
curl -fsSL https://rpm.nodesource.com/setup_20.x | sudo bash -
sudo yum install -y nodejs

# 验证安装
node --version
npm --version
```

#### 2. 安装依赖并构建

```bash
cd /root/rotohaus
npm install
npm run build
```

构建完成后，静态文件会在 `dist/` 目录中。

#### 3. 配置 Nginx

创建 Nginx 配置文件：

```bash
sudo nano /etc/nginx/conf.d/rotohaus.conf
```

添加以下内容：

```nginx
server {
    listen 80;
    server_name _;  # 或您的域名，如 rotohaus.com
    
    root /root/rotohaus/dist;
    index index.html;

    # React Router 支持
    location / {
        try_files $uri $uri/ /index.html;
    }

    # 静态资源缓存
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

#### 4. 测试并启动 Nginx

```bash
# 测试配置
sudo nginx -t

# 启动 Nginx
sudo systemctl enable nginx
sudo systemctl restart nginx
```

#### 5. 配置防火墙

```bash
# 如果使用 firewalld
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --reload

# 或者如果使用 iptables
sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT
```

## 访问网站

部署完成后，可以通过以下方式访问：

- **本地访问**: `http://localhost`
- **外部访问**: `http://您的服务器IP地址`
- **域名访问**: 如果有域名，配置 DNS 后访问 `http://您的域名`

## 常用命令

```bash
# 查看 Nginx 状态
sudo systemctl status nginx

# 重启 Nginx
sudo systemctl restart nginx

# 查看 Nginx 错误日志
sudo tail -f /var/log/nginx/error.log

# 查看访问日志
sudo tail -f /var/log/nginx/access.log

# 重新构建网站（更新后）
cd /root/rotohaus
npm run build
sudo systemctl restart nginx
```

## 配置域名（可选）

如果您有域名，需要：

1. **配置 DNS 解析**：将域名 A 记录指向服务器 IP
2. **修改 Nginx 配置**：
   ```bash
   sudo nano /etc/nginx/conf.d/rotohaus.conf
   ```
   将 `server_name _;` 改为 `server_name your-domain.com;`
3. **重启 Nginx**：
   ```bash
   sudo systemctl restart nginx
   ```

## 配置 HTTPS（推荐）

使用 Let's Encrypt 免费 SSL 证书：

```bash
# 安装 Certbot
sudo yum install -y certbot python3-certbot-nginx

# 获取证书（替换为您的域名）
sudo certbot --nginx -d your-domain.com

# 证书会自动续期
```

## 故障排查

### 无法访问网站

1. **检查 Nginx 是否运行**：
   ```bash
   sudo systemctl status nginx
   ```

2. **检查防火墙**：
   ```bash
   sudo firewall-cmd --list-all
   ```

3. **检查端口是否监听**：
   ```bash
   sudo netstat -tlnp | grep :80
   ```

4. **查看错误日志**：
   ```bash
   sudo tail -50 /var/log/nginx/error.log
   ```

### 页面显示 404

确保 Nginx 配置中有 `try_files $uri $uri/ /index.html;` 这一行，用于支持 React Router。

### 静态资源加载失败

检查 `dist` 目录权限：
```bash
sudo chown -R nginx:nginx /root/rotohaus/dist
```

## 更新网站

当代码更新后：

```bash
cd /root/rotohaus
git pull          # 拉取最新代码
npm install       # 更新依赖（如果有新依赖）
npm run build     # 重新构建
sudo systemctl restart nginx  # 重启 Nginx
```

## 安全建议

1. ✅ 配置防火墙，只开放必要端口
2. ✅ 使用 HTTPS（Let's Encrypt）
3. ✅ 定期更新系统和软件包
4. ✅ 使用强密码和 SSH 密钥认证
5. ✅ 配置 Nginx 安全头（已在配置中）
