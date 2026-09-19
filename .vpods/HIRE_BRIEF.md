# Hire brief
Project: Mobile Taxi
Hire agent: mira
Task id: task_276f9bab
Title: Terraform – VPods Trial S3 Static Website Hosting
Shape: document
## Description
Delivery order: 2.

Requires: delivery-order 1

Create Terraform module under infra/ to provision one S3 bucket for static website hosting in VPods Trial AWS account. Bucket name: mobile-taxi-trial-{random-suffix}. Enable static website hosting (index.html). Set public read ACL on bucket and objects. Optional: add CloudFront distribution (us-east-1 origin, cache TTL 3600s). Output bucket URL and CloudFront domain (if enabled). No EC2, no Cognito, no API Gateway. PR only—do not apply from VPods console.

Module path: infra/modules/s3_static_website/main.tf, variables.tf, outputs.tf. Include README with usage example. Terraform state: local or S3 backend (specify in PR description).

Given: Terraform CLI installed; AWS credentials for VPods Trial account available locally.
When: `terraform plan -var-file=infra/trial.tfvars` runs.
Then: (1) plan shows one S3 bucket creation; (2) bucket policy allows public GetObject; (3) static website hosting enabled (index.html as index document); (4) optional CloudFront distribution appears in plan; (5) no errors; (6) outputs include bucket website URL.

Requires: none

## Scope
In scope: Terraform under infra/ for VPods Trial S3 static hosting (+ optional CloudFront).
Out of scope: customer AWS credentials, EC2/compute, APIs, and apply outside the VPods Trial account.

Labels: vpods-generated
## Rules
- Read `.vpods/FRONTEND_AGENT.md` (frontend), `.vpods/MAYA_AGENT.md` (iOS), `.vpods/PROJECT.md`, `.vpods/CRAFT_*.md` (packed craft grammar including `CRAFT_UX.md` / `CRAFT_MOTION.md` / `CRAFT_IOS.md` when present), `.vpods/DESIGN_PACK.md` when present, and Brand Kit when present before writing code.
- Stay on this ticket's lane. Do not rewrite sibling hire pages/APIs unless required for integration.
- Ship a complete artifact for this shape — not a stub.
- If the brief is genuinely ambiguous, ask exactly one intake question before writing code (waiting-on-answer). After generation starts, do not stop mid-execution to ask.
