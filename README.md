# neetchy.com source repository


### notes
```bash
ssh -i ~/.ssh/2ko.pem ubuntu@ec2-3-129-102-151.us-east-2.compute.amazonaws.com

ansible-playbook deploy.yml --inventory hosts/webserver.ini
```

### SSL
```bash
# prereqs
sudo apt-get update
sudo apt-get install software-properties-common
sudo add-apt-repository universe
sudo add-apt-repository ppa:certbot/certbot
sudo apt-get update
# install
sudo apt-get install certbot python3-certbot-nginx
# configure (IMPORTANT: stop nginx before running this, restart afterwards)
WEBSITE=neetchy.com
sudo certbot --standalone --config /etc/letsencrypt/configs/$WEBSITE.conf certonly
```
