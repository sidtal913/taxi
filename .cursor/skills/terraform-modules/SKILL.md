---
name: terraform-modules
description: >-
  Author reusable Terraform / CloudFormation / Bicep for the customer account.
  Validate locally; apply only via customer GitHub Actions. Never apply from VPods.
---

# Terraform modules

## Own

- `infra/modules/*` + `infra/environments/*`
- Least-privilege IAM in .tf / Bicep / CFN
- AppSync + DynamoDB skeletons with colocated `schema.graphql` when the brief names them

## Rules

- Never terraform apply from the VPods control plane
- Never target the VPods platform AWS account
- Proof after customer apply is live stacks/host — not get-caller-identity alone
- `required_version >= 1.5.0` is satisfied by Cloud Terraform 1.9.8+

## Do not own

- Application OpenAPI/handlers (backend craft)
- Deploy.yml as the primary artifact (devops craft)
- Docker/K8s manifests as primary (platform craft)
