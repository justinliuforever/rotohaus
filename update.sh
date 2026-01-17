#!/bin/bash

# ROTOHAUS 网站更新脚本
# 用于快速更新已部署的网站

set -e  # 遇到错误立即退出

echo "=========================================="
echo "ROTOHAUS 网站更新开始"
echo "=========================================="

# 进入项目目录
cd /root/rotohaus

# 1. 拉取最新代码
echo "正在从 GitHub 拉取最新代码..."
git pull

# 2. 安装依赖（如果有新依赖）
echo "正在检查并安装依赖..."
npm install

# 3. 构建生产版本
echo "正在构建生产版本..."
npm run build

# 4. 检查构建结果
if [ ! -d "dist" ]; then
    echo "错误: 构建失败，未找到 dist 目录"
    exit 1
fi

echo "构建完成！"

# 5. 复制新文件到网站目录
echo "正在更新网站文件..."
rm -rf /var/www/rotohaus/*
cp -r /root/rotohaus/dist/* /var/www/rotohaus/
chown -R nginx:nginx /var/www/rotohaus
chmod -R 755 /var/www/rotohaus

# 6. 重启 Nginx（可选，但建议执行以确保配置生效）
echo "正在重启 Nginx..."
systemctl restart nginx

echo ""
echo "=========================================="
echo "更新完成！"
echo "=========================================="
echo "网站已更新到最新版本"
echo ""
echo "访问地址: http://8.131.77.133/residency"
echo "=========================================="
