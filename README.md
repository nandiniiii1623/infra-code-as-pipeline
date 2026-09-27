# 🚀 Infrastructure as Code CI/CD Pipeline on AWS using Terraform, Docker, ECS Fargate & GitHub Actions

## Project Overview

This project automates the deployment of a containerized web application on AWS using **Terraform**, **Amazon ECS Fargate**, **Docker**, and **GitHub Actions**.

The objective is to eliminate manual deployments by creating a secure, scalable, repeatable CI/CD pipeline following DevOps best practices.

---

# Business Scenario

A growing e-commerce company was deploying applications manually using SSH.

### Challenges

- Manual deployments
- Human errors
- Configuration drift
- Production outages
- No rollback mechanism
- No Infrastructure as Code

### Solution

This project provides

- Infrastructure as Code
- Automated CI/CD
- Dockerized deployments
- Environment isolation
- Automatic application deployment
- Cloud monitoring
- Rollback support
- Auto Scaling

---

# Architecture
<img width="437" height="387" alt="image" src="https://github.com/user-attachments/assets/081a19d3-22bb-41d4-bc31-42699453faf9" />

```
Developer
    │
    ▼
GitHub Repository
    │
    ▼
GitHub Actions
    │
    ├───────────────┐
    │               │
Pull Request      Push to Main
(Staging)        (Production)
    │               │
    ▼               ▼
Docker Build    Docker Build
    │               │
    ▼               ▼
Amazon ECR      Amazon ECR
    │               │
    ▼               ▼
Amazon ECS Fargate
    │
    ▼
Application Load Balancer
    │
    ▼
CloudWatch Logs
```

---

# Technologies Used

- Terraform
- AWS ECS Fargate
- Amazon ECR
- Docker
- Application Load Balancer
- CloudWatch Logs
- IAM
- Security Groups
- GitHub Actions
- GitHub Secrets
- HTML
- CSS
- JavaScript

---

# Project Structure

```
infra-as-code-pipeline/

│

├── app/
│   ├── Dockerfile
│   ├── index.html
│   ├── style.css
│   └── script.js

│

├── terraform/
│
├── backend.tf
├── provider.tf
├── main.tf
├── variables.tf
├── outputs.tf
│
└── modules/
    ├── networking/
    ├── security/
    ├── compute/
    ├── monitoring/
    └── ecr/

│

└── .github/
    └── workflows/
        ├── staging.yml
        └── production.yml
```

---

# Project Phases

## Phase 1 – Frontend Application

Built a responsive deployment dashboard using

- HTML
- CSS
- JavaScript

The application displays

- Deployment Status
- Deployment Logs
- Pipeline Dashboard
- Simulated Deploy Button

---

## Phase 2 – Docker

Containerized the application using Nginx.

Dockerfile

```dockerfile
FROM nginx:alpine

COPY . /usr/share/nginx/html
```

Build Image

```bash
docker build -t ecommerce-app .
```

Run Container

```bash
docker run -p 8081:80 ecommerce-app
```

---

## Phase 3 – Amazon ECR

Created separate ECR repositories for different environments.

Repositories

- ecommerce-default
- ecommerce-staging

Authentication

```bash
aws ecr get-login-password \
| docker login \
--username AWS \
--password-stdin ACCOUNT_ID.dkr.ecr.ap-south-1.amazonaws.com
```

Push Image

```bash
docker tag ecommerce-app:latest ACCOUNT_ID.dkr.ecr.ap-south-1.amazonaws.com/ecommerce-default:latest

docker push ACCOUNT_ID.dkr.ecr.ap-south-1.amazonaws.com/ecommerce-default:latest
```

---

## Phase 4 – Terraform Backend

Configured remote backend using

- Amazon S3
- DynamoDB State Locking

Benefits

- Shared State
- Remote Storage
- State Locking
- Team Collaboration

---

## Phase 5 – Networking Module

Provisioned

- VPC
- Public Subnet 1
- Public Subnet 2
- Internet Gateway
- Route Tables
- Route Associations

---

## Phase 6 – Security Module

Provisioned

- ALB Security Group
- ECS Security Group
- IAM Execution Role

Attached Policy

- AmazonECSTaskExecutionRolePolicy

---

## Phase 7 – Monitoring Module

Created

CloudWatch Log Group

Retention

14 Days

Purpose

- ECS Logs
- Container Logs
- Deployment Monitoring

---

## Phase 8 – Compute Module

Provisioned

- ECS Cluster
- ECS Task Definition
- ECS Service
- Application Load Balancer
- Target Group
- Listener
- ECS Service Auto Scaling

Deployment Platform

AWS Fargate

---

## Phase 9 – Terraform Workspaces

Created

```bash
terraform workspace new dev
terraform workspace new staging
terraform workspace new production
```

Purpose

Same Terraform code

Different environments

Current environments

- Default
- Staging
- Production

---

# Environment Mapping

| Terraform Workspace | ECS Cluster | ECS Service | ECR Repository |
|----------------------|------------|------------|---------------|
| default | ecommerce-default-cluster | ecommerce-default-service | ecommerce-default |
| staging | ecommerce-staging-cluster | ecommerce-staging-service | ecommerce-staging |
| production | ecommerce-production-cluster | ecommerce-production-service | ecommerce-production |

---

# GitHub Actions CI/CD

## Staging Workflow

Triggered on

- Pull Request → main

Pipeline

```
Checkout Code

↓

Terraform Validation

↓

TFLint

↓

Build Docker Image

↓

Push Image to ECR

↓

Deploy to ECS (Default)
```

---

## Production Workflow

Triggered on

- Push → main

Pipeline

```
Checkout Code

↓

Build Docker Image

↓

Push Image to ECR

↓

Deploy ECS

↓

Wait for Stable Service

↓

Automatic Rollback (if deployment fails)
```

---

# Rollback Strategy

Production workflow includes automatic rollback.

If

- ECS deployment fails
- Service becomes unstable

GitHub Actions automatically

- Detects previous task definition
- Redeploys previous revision
- Waits until service becomes healthy

---

# Security

Implemented

- IAM Roles
- GitHub Secrets
- ECS Task Execution Role
- Security Groups
- No hardcoded AWS credentials

GitHub Secrets

- AWS_ACCESS_KEY_ID
- SECRET_ACCESS_KEY
- AWS_REGION

---

# Monitoring

Amazon CloudWatch

Used for

- ECS Logs
- Container Logs
- Deployment Monitoring

---

# Auto Scaling

Configured ECS Service Auto Scaling

Scaling Metric

- ECS Average CPU Utilization

Target

70%

---

# Infrastructure Modules

- Networking
- Security
- Compute
- Monitoring
- ECR

---

# Commands Used

## Terraform

```bash
terraform init

terraform validate

terraform plan

terraform apply

terraform destroy

terraform workspace list

terraform workspace select staging
```

---

## Docker

```bash
docker build

docker run

docker tag

docker push
```

---

## Git

```bash
git add .

git commit -m "message"

git push

git checkout
```

---

## AWS CLI

```bash
aws configure

aws ecs list-clusters

aws ecs list-services

aws ecs describe-services

aws ecs describe-task-definition

aws ecr describe-images

aws ecr list-images
```

---

# Features

- Infrastructure as Code
- Modular Terraform
- Dockerized Application
- ECS Fargate Deployment
- Multiple Environments
- Terraform Workspaces
- GitHub Actions CI/CD
- Automatic Rollback
- ECS Auto Scaling
- CloudWatch Logging
- Load Balancer
- Secure Credentials
- Remote Terraform State
- State Locking using DynamoDB

---

# Learning Outcomes

Through this project I learned

- Terraform Modules
- Terraform Remote Backend
- Terraform Workspaces
- Amazon ECS Fargate
- Amazon ECR
- Docker
- GitHub Actions
- ECS Service Auto Scaling
- Application Load Balancer
- CloudWatch Monitoring
- IAM Roles
- Infrastructure as Code
- CI/CD Automation
- Deployment Rollback Strategy

---

# Author

**Omkar Manjrekar**

DevOps | AWS | Docker | Terraform | GitHub Actions | ECS | CI/CD
---
# Outputs
<img width="925" height="427" alt="image" src="https://github.com/user-attachments/assets/cf253fa6-ac42-4c05-93c4-1edd5699c7c5" />
<img width="975" height="445" alt="image" src="https://github.com/user-attachments/assets/23832ed9-6d1c-404e-b19c-8f66eb49d59a" />

For Different workspace Different Load Balancer is being created
<img width="975" height="436" alt="image" src="https://github.com/user-attachments/assets/69b9ccc8-55cb-4288-ac86-57e458fcb174" />


<img width="934" height="473" alt="image" src="https://github.com/user-attachments/assets/050a9c8a-f750-4514-98d3-c6478d2060f7" />

<img width="956" height="437" alt="image" src="https://github.com/user-attachments/assets/881c0a03-009e-4001-bedf-583bbc545d1d" />

<img width="920" height="458" alt="image" src="https://github.com/user-attachments/assets/f3551af9-0369-45bd-b737-fe8becb7ab4e" />

Two ECR for staging and Production Images
<img width="953" height="404" alt="image" src="https://github.com/user-attachments/assets/b2465021-be3e-43f0-8615-ffd28d8570a1" />

Two ECS For Staging and Production
<img width="953" height="397" alt="image" src="https://github.com/user-attachments/assets/27b87cc3-52da-4baf-a5a2-3084314c3347" />

When we create a feature branch and do some changes and push it to it the same branch 
<img width="761" height="126" alt="image" src="https://github.com/user-attachments/assets/64a539f8-edc3-4517-ac93-6aaf4ca08318" />

we need to create a pull request
<img width="948" height="377" alt="image" src="https://github.com/user-attachments/assets/d5937582-620c-453b-b4d5-293e9c9c6d4a" />
<img width="954" height="289" alt="image" src="https://github.com/user-attachments/assets/4ad0cd0a-5b40-4bd6-9609-4c04c924ecf8" />
<img width="949" height="460" alt="image" src="https://github.com/user-attachments/assets/72067246-64f4-4586-b918-ae6ec676869e" />

Once the Pull request is succedd we merge it to main

<img width="959" height="406" alt="image" src="https://github.com/user-attachments/assets/88a9de9b-b2f2-48e0-a763-9a11194c97ec" />

<img width="949" height="449" alt="image" src="https://github.com/user-attachments/assets/3a0923be-1e2b-4c49-a819-2578b26eacc9" />
<img width="953" height="460" alt="image" src="https://github.com/user-attachments/assets/714c234f-4421-41e0-8df1-a50bf35fa4bb" />
<img width="941" height="447" alt="image" src="https://github.com/user-attachments/assets/3b6ffd4b-1270-4236-bab4-41f085b158d3" />

<img width="944" height="452" alt="image" src="https://github.com/user-attachments/assets/097905c1-704b-4eda-a869-9f40effa721d" />
<img width="950" height="497" alt="image" src="https://github.com/user-attachments/assets/7c752c7a-e52a-46c9-82c6-826a53dad916" />
<img width="975" height="441" alt="image" src="https://github.com/user-attachments/assets/f677116b-9992-4150-8d07-2d3179a4462d" />


# 👨‍💻 Author

Omkar

DevOps Engineer (Learning)
Approval Test
Approval Test
# staging test
