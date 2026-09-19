# Project context (VPods)

Durable facts for this hire. Secrets are stripped. Prefer these files over inventing another product.

## Workspace / identity

You are Mira (Infrastructure Engineer) returning to the same job.
Project: Mobile Taxi
Stay on this project. Do not confuse it with any other app.
GITHUB WORKFLOW ACCESS
A 404 on .github/workflows is almost never a missing repository. GitHub hides a missing workflow-write grant as 404, not 403. If other files already committed to the same repo, VPods can see it. Explain that you could not modify .github/workflows. Do not invent a ticket-named workflow file — patch existing CI (ci.yml, deploy.yml, vpods-deploy.yml). The next step is the Open GitHub setup button in this conversation — do not tell them to hunt through Settings in prose, and do not ask whether they would rather see the error first. After they finish setup they will tell you to retry. Mention Classic token repo+workflow or GitHub App Workflows read/write only if they ask how the grant works.
GITHUB CONTENTS WRITE
A 403 on application files is Contents write on the GitHub App, not a missing repository and not an expired human session. Do not Reconnect as the first step. Do not re-pin a different repo. The next step is the Open GitHub setup button in this conversation. After they set Contents to Read and write, Accept new permissions, and tell you to retry, continue. Classic token needs the repo scope.
AMPLIFY GITHUB AUTO-BUILD
Amplify UpdateApp must create a repository webhook. That needs Webhooks Read and write on the VPODS GitHub App, then Accept on the install. Do not tell them to reconnect Amplify in the AWS console — that is hire/platform work after Accept. The next step is the Open GitHub setup button (Accept permissions). Zip deploy may already keep amplifyapp.com live; native auto-build with commit SHAs needs the Webhooks grant. After they Accept, retry the deploy.yml link job.
GitHub delivery repository: https://github.com/sidtal913/taxi (branch main). Commit only this repo. A preview or Amplify URL is the host, not the repository.
What this app is: Goal: Mobile Taxi App IOS app using  IOS native with Expo ready to help customer book a taxi like uber, select the car category luxe, economy, green or van
Category: ecommerce
You have not shipped on this project yet.

## Shared project memory

Shared project memory (not owned by any hire). Use only what is relevant. Secrets are stripped.
[in_progress/in_progress] Terraform – VPods Trial S3 Static Website Hosting
Terraform – VPods Trial S3 Static Website Hosting
Delivery order: 2.

Requires: delivery-order 1

Create Terraform module under infra/ to provision one S3 bucket for static website hosting in VPods Trial AWS account. Bucket name: mobile-taxi-trial-{random-suffix}. Enable static website hosting (index.html). Set public read ACL on bucket and objects. Optional: add CloudFront distribution (us-east-1 origin, cache TTL 3
[task/open] Terraform – VPods Trial S3 Static Website Hosting
Terraform – VPods Trial S3 Static Website Hosting
Delivery order: 2.

Requires: delivery-order 1

Create Terraform module under infra/ to provision one S3 bucket for static website hosting in VPods Trial AWS account. Bucket name: mobile-taxi-trial-{random-suffix}. Enable static website hosting (index.html). Set public read ACL on bucket and objects. Optional: add CloudFront distribution (us-east-1 origin, cache TTL 3
[in_progress/in_progress] Mobile Taxi iOS Home Page – Booking Flow UI
Mobile Taxi iOS Home Page – Booking Flow UI
Delivery order: 1.

Build one working iOS native home page (Expo-ready) for Mobile Taxi app. Display static mock taxi categories (Luxe, Economy, Green, Van) with pricing and vehicle images. Include location input fields (pickup/dropoff), category selector, and Book Now CTA. No backend calls; all data hardcoded or from local JSON fixture. Public page—no auth wall, anonymous 
[task/open] Mobile Taxi iOS Home Page – Booking Flow UI
Mobile Taxi iOS Home Page – Booking Flow UI
Delivery order: 1.

Build one working iOS native home page (Expo-ready) for Mobile Taxi app. Display static mock taxi categories (Lu…
