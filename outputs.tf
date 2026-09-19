output "bucket_id" {
  description = "Trial S3 bucket name."
  value       = module.s3_static_website.bucket_id
}

output "website_url" {
  description = "Public HTTP URL for the S3 static website."
  value       = module.s3_static_website.website_url
}

output "cloudfront_domain_name" {
  description = "CloudFront distribution domain when enable_cloudfront is true."
  value       = module.s3_static_website.cloudfront_domain_name
}

output "cloudfront_url" {
  description = "HTTPS URL via CloudFront when enabled."
  value       = module.s3_static_website.cloudfront_url
}
