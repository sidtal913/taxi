variable "bucket_prefix" {
  description = "Prefix for the S3 bucket name; a random suffix is appended."
  type        = string
  default     = "mobile-taxi-trial"
}

variable "index_document" {
  description = "Index document for static website hosting."
  type        = string
  default     = "index.html"
}

variable "enable_cloudfront" {
  description = "When true, provision a CloudFront distribution in front of the S3 website endpoint."
  type        = bool
  default     = false
}

variable "cloudfront_default_ttl" {
  description = "Default cache TTL (seconds) for the CloudFront distribution."
  type        = number
  default     = 3600
}

variable "tags" {
  description = "Tags applied to supported resources."
  type        = map(string)
  default     = {}
}
