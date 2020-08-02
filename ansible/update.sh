#!/usr/bin/env bash
ansible-playbook deploy.yml --inventory hosts/webserver.ini --tags "app, server, test" "$@"
