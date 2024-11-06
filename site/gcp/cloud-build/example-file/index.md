# Example file.

## cloudbuild.yaml

| Environment name      | Description                               |
| --------------------- | ----------------------------------------- |
| _GCR_HOSTNAME         | Google Container Registry (GCR) hostnames |
| _IMAGE_NAME           | Image name from GCR ([$REPO]/[$IMAGE])    |
| _SERVICE_NAME         | Cloud Run Service name                    |
| _DEPLOY_REGION        | Region name                               |
| _PLATFORM             | Default is `managed`                      |
| _APP_ENVIRONMENT_NAME | Your application environments name |
| PROJECT_ID         | ID of your Cloud project hostnames* |

*Cloud Build provides the following default substitutions for all builds. [Link](https://cloud.google.com/build/docs/configuring-builds/substitute-variable-values)

```bash
# cloudbuild.yaml
steps:
    # Setup application environment to .env.
  - name: 'node'
    entrypoint: 'npm'
    args: ['run', 'create-env']
    env:
    - 'APP_ENVIRONMENT_NAME=${_APP_ENVIRONMENT_NAME}'
    # Docker build from Dockerfile
  - name: gcr.io/cloud-builders/docker
    args: [
      'build',
      '-t',
      '${_GCR_HOSTNAME}/${PROJECT_ID}/${_IMAGE_NAME}',
      '.']
    # Push to GCP Artifact Registry
  - name: gcr.io/cloud-builders/docker
    args: ['push', '${_GCR_HOSTNAME}/${PROJECT_ID}/${_IMAGE_NAME}']
    # Deploy to GCP Cloud Run
  - name: gcr.io/google.com/cloudsdktool/cloud-sdk
    args:
      - run
      - deploy
      - ${_SERVICE_NAME}
      - '--image'
      - '${_GCR_HOSTNAME}/${PROJECT_ID}/${_IMAGE_NAME}'
      - '--region'
      - ${_DEPLOY_REGION}
      - '--platform'
      - ${_PLATFORM}
    entrypoint: gcloud
timeout: 1200s
images:
  - '${_GCR_HOSTNAME}/${PROJECT_ID}/${_IMAGE_NAME}'
options:
  logging: CLOUD_LOGGING_ONLY

```