output "bucket_id" {
  description = "Name (ID) of the S3 bucket."
  value       = aws_s3_bucket.website.id
}

output "bucket_arn" {
  description = "ARN of the S3 bucket."
  value       = aws_s3_bucket.website.arn
}

output "website_endpoint" {
  description = "S3 static website hosting endpoint (hostname)."
  value       = aws_s3_bucket_website_configuration.website.website_endpoint
}

output "website_url" {
  description = "HTTP URL for the S3 static website."
  value       = "http://${aws_s3_bucket_website_configuration.website.website_endpoint}"
}

output "cloudfront_domain_name" {
  description = "CloudFront distribution domain name when enable_cloudfront is true; otherwise null."
  value       = var.enable_cloudfront ? aws_cloudfront_distribution.website[0].domain_name : null
}

output "cloudfront_url" {
  description = "HTTPS URL for the CloudFront distribution when enabled; otherwise null."
  value       = var.enable_cloudfront ? "https://${aws_cloudfront_distribution.website[0].domain_name}" : null
}
