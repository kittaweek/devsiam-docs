# Create Cloud Build

- In sidebar select **"Trigger"** and **"Create Trigger"**

----------------------------------------------------------------

## Name

- Must be unique within the project's region

----------------------------------------------------------------

## Region

- Required
- Select : global (Global) ✅
- Can't select asia-southeast1 (Singapore), Besause it's has quota limits.

----------------------------------------------------------------

## Event

- Repository event that invokes trigger

  - Push to a branch : as default **[SELECT ✅]**
  - Push new tag
  - Pull request : Not available for Cloud Source Repositories
- Or in response to
  - Manual invocation
  - Pub/Sub message
  - Webhook event

----------------------------------------------------------------

## Source

- 1st gen : as default **[SELECT ✅]**
- 2nd gen
- Select repository : You can connect new repositories here.
- Select branch : Auto generate to `^main$`.

----------------------------------------------------------------

## Configuration

### Type

- Autodetected : A cloudbuild.yaml or Dockerfile will be detected in the repository : as default
- Cloud Build configuration file (YAML or JSON) **[SELECT ✅]**
- Dockerfile
- Buildpacks

### Location

Has 2 locations

- Repository : your repository. **[SELECT ✅]**
- Inline : Write inline YAML (use editor instead)

**Recommend : select `Repository` to fully manage your CI/CD.**

#### Autodetected

- Select `Repository` only.

#### Cloud Build configuration file

- Cloud Build configuration file location : default as `cloudbuild.yaml`**[Use default ✅]**

### Dockerfile

- Dockerfile directory
- Dockerfile name
- Image name : Auto generated to gcr.io

### Buildpacks

- Build directory
- Image name : Auto generated to gcr.io
- Builder image

----------------------------------------------------------------

## Advanced

- Substitution variables
  - Add your environment variables.
  - Substitution variables must begin with an underscore (_) and use only uppercase letters and numbers, or be one of the following.

- Select service account **[Required ✅]**.
