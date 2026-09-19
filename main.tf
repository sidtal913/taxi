# VPods Trial — S3 static website (Mobile Taxi). Apply via customer GitHub Actions only.
# Never terraform apply from the VPods control plane.

terraform {
  required_version = ">= 1.5.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
    random = {
      source  = "hashicorp/random"
      version = "~> 3.6"
    }
  }

  # Local backend for trial plans; switch to S3 remote state in customer CI before apply.
  backend "local" {
    path = "infra/terraform.tfstate"
  }
}

provider "aws" {
  region = var.aws_region
}

module "s3_static_website" {
  source = "./infra/modules/s3_static_website"

  bucket_prefix          = var.bucket_prefix
  index_document         = var.index_document
  enable_cloudfront      = var.enable_cloudfront
  cloudfront_default_ttl = var.cloudfront_default_ttl
  tags                   = var.tags
}
