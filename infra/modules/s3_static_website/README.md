# s3_static_website

Terraform module that provisions an S3 bucket for **static website hosting** with public read access and an optional CloudFront distribution.

## Features

- Bucket name `{bucket_prefix}-{random_hex_suffix}` (default prefix `mobile-taxi-trial`)
- Static website hosting with a configurable index document (default `index.html`)
- Public read bucket ACL and bucket policy allowing `s3:GetObject` for all principals
- Optional CloudFront distribution (S3 **website** endpoint as custom origin, default TTL 3600s)

Apply only from customer CI (OIDC → VPodsDeploy). Do **not** run `terraform apply` from VPods.

## Usage

```hcl
module "trial_site" {
  source = "./infra/modules/s3_static_website"

  bucket_prefix       = "mobile-taxi-trial"
  index_document      = "index.html"
  enable_cloudfront   = true
  cloudfront_default_ttl = 3600

  tags = {
    Project = "mobile-taxi"
    Env     = "trial"
  }
}

output "website_url" {
  value = module.trial_site.website_url
}

output "cloudfront_url" {
  value = module.trial_site.cloudfront_url
}
```

Upload site assets with public-read object ACL (or rely on the bucket policy for `GetObject`):

```bash
aws s3 cp ./dist/index.html "s3://${module.trial_site.bucket_id}/index.html" \
  --acl public-read \
  --content-type "text/html"
```

## Inputs

| Name | Description | Type | Default |
|------|-------------|------|---------|
| `bucket_prefix` | Bucket name prefix before random suffix | `string` | `mobile-taxi-trial` |
| `index_document` | Website index document | `string` | `index.html` |
| `enable_cloudfront` | Create CloudFront distribution | `bool` | `false` |
| `cloudfront_default_ttl` | CloudFront default/max TTL (seconds) | `number` | `3600` |
| `tags` | Resource tags | `map(string)` | `{}` |

## Outputs

| Name | Description |
|------|-------------|
| `bucket_id` | S3 bucket name |
| `website_url` | `http://` website endpoint URL |
| `cloudfront_domain_name` | CloudFront hostname (if enabled) |
| `cloudfront_url` | `https://` CloudFront URL (if enabled) |
