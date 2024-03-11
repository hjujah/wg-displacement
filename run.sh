#!/bin/sh

yarn
npm run build

# staging
pm2 delete wg3028
pm2 start --name "wg3028" npm -- run startrbln
sudo cp nginx/wg.synchronized.studio /etc/nginx/sites-available/wg.synchronized.studio
sudo ln -s -f /etc/nginx/sites-available/wg.synchronized.studio /etc/nginx/sites-enabled/

# sudo certbot --nginx -d herocollective.co -d www.herocollective.co

sudo nginx -t
sudo systemctl restart nginx
pm2 save
