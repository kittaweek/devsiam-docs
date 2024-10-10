# Create Artifact Registry

### Creat repository

- Format : docker
- Location type
  - Region or multi-region
  - select your region
- Encryption : 
  - Google-managed encryption key (Default) : Keys owned by Google (Select this.)
  - Cloud KMS key : Keys owned by customers

### Push Image to artifact registry
- Connect to GCP & connect docker to registry
```bash
# GCP Login by gcloud cli
gcloud auth login
# Select your project
gcloud config set project $PROJECT_ID
# Configured Docker to use gcloud
gcloud auth configure-docker $REGISTRIES
# $REGISTRIES = [$REGION]-docker.pkg.dev
```

- Build & Push application image

```bash
docker build -t $APP_NAME --platform linux/amd64 .
docker tag $APP_NAME [$REGION]-docker.pkg.dev/[$PROJECT_ID]/[$REPO]/[$IMAGE]:[$TAG]
docker push [$REGION]-docker.pkg.dev/[$PROJECT_ID]/[$REPO]/[$IMAGE]:[$TAG]

```