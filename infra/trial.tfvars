aws_region             = "us-east-1"
bucket_prefix          = "mobile-taxi-trial"
index_document         = "index.html"
enable_cloudfront      = true
cloudfront_default_ttl = 3600

tags = {
  Project = "mobile-taxi"
  Env     = "trial"
}
