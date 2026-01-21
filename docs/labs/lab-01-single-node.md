---
title: "Lab 01 – Wazuh Single Node Deployment"
sidebar_position: 1
---

# Lab 01 – Wazuh Single Node Deployment


## 🎯 Objective
Deploy a single-node Wazuh environment for learning and testing purposes.

## 🧱 Architecture
This lab uses a single-node architecture where all Wazuh components run on the same server.

## ⚙️ Prerequisites
- Linux VM (Ubuntu 22.04 recommended)
- 4 GB RAM
- Internet access

## 🛠️ Installation
```bash
curl -sO https://packages.wazuh.com/4.7/wazuh-install.sh
sudo bash wazuh-install.sh -a

