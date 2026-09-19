variable "aws_region" {
  description = "AWS region for the trial static website bucket (CloudFront is global; use us-east-1 for the origin bucket per trial defaults)."
  type        = string
  default     = "us-east-1"
}

variable "bucket_prefix" {
  description = "S3 bucket name prefix; module appends a random suffix."
  type        = string
  default     = "mobile-taxi-trial"
}

variable "index_document" {
  description = "Static website index document."
  type        = string
  default     = "index.html"
}

variable "enable_cloudfront" {
  description = "Provision CloudFront in front of the S3 website endpoint."
  type        = bool
  default     = true
}

variable "cloudfront_default_ttl" {
  description = "CloudFront default cache TTL in seconds."
  type        = number
  default     = 3600
}

variable "tags" {
  description = "Tags applied to trial infrastructure."
  type        = map(string)
  default = {
    Project = "mobile-taxi"
    Env     = "trial"
  }
}
