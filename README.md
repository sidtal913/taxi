# Mobile Taxi - Infrastructure

Terraform infrastructure as code for the Mobile Taxi VPods Trial deployment on AWS.

## Overview

This repository contains Terraform configuration for provisioning S3 static website hosting with optional CloudFront distribution for the Mobile Taxi trial environment.

## Structure

```
.
├── main.tf                          # Root module configuration
├── variables.tf                     # Root module variables
├── outputs.tf                       # Root module outputs
├── infra/
│   ├── trial.tfvars                 # Trial environment configuration
│   └── modules/
│       └── s3_static_website/       # S3 static website module
│           ├── main.tf
│           ├── variables.tf
│           ├── outputs.tf
│           └── README.md
└── .github/
    └── workflows/
        └── vpods-verify.yml         # CI verification workflow
```

## Usage

### Plan

```bash
terraform init
terraform plan -var-file=infra/trial.tfvars
```

### Apply

**Important**: Apply only from customer GitHub Actions with proper AWS credentials. Do NOT apply from VPods control plane.

```bash
terraform apply -var-file=infra/trial.tfvars
```

### Destroy

```bash
terraform destroy -var-file=infra/trial.tfvars
```

## Module Documentation

See [infra/modules/s3_static_website/README.md](infra/modules/s3_static_website/README.md) for detailed module documentation.

## Configuration

The trial environment is configured in `infra/trial.tfvars`:

- **AWS Region**: us-east-1
- **Bucket Prefix**: mobile-taxi-trial
- **CloudFront**: Enabled
- **Cache TTL**: 3600 seconds

## Outputs

After applying, the following outputs are available:

- `bucket_id`: S3 bucket name
- `website_url`: HTTP URL for S3 static website
- `cloudfront_domain_name`: CloudFront distribution domain
- `cloudfront_url`: HTTPS URL via CloudFront

## Requirements

- Terraform >= 1.5.0
- AWS Provider ~> 5.0
- AWS credentials for VPods Trial account
