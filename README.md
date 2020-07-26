# neetchy.com source repository

### todo
1. create new AWS account ✅
2. purchase neetchy.com ✅
3. copy ansible playbook for initalizing ec2 instance and security group ✅
4. install nginx and set up redirect ✅
5. write playbook for deploying the site to the server ✅
6. configure ssl ❗️
7. create qr code for code.neetchy.com ✅
8. integration test ✅

### notes
```bash
ssh -i ~/.ssh/2ko.pem ubuntu@ec2-3-129-102-151.us-east-2.compute.amazonaws.com

ansible-playbook deploy.yml --inventory hosts/webserver.ini
```

```
## code.neetchy.com
server {
    listen 80;
    listen 443 ssl;
    server_name www.code.{{ hostname }} code.{{ hostname }};
    return 301 $scheme://www.google.com$request_uri;
}
```
