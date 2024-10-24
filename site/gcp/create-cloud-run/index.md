# Create Cloud Run

### Deploy container type

| Featrure         | Services                                   | Job                                             |
| ---------------- | ------------------------------------------ | ----------------------------------------------- |
| Use case         | **Stateless applications (APIs,web apps)** | **Batch processing, scheduled tasks**           |
| Invocation       | Triggered by HTTP requests                 | Triggered by job execution requests             |
| Execution Model  | Long-running, persistent                   | Short-lived,on job concurrency                  |
| Scaling          | Scales automatically base on traffic       | Scales based on job concurrency                 |
| Concurrency      | Supports multiple requests concurrently    | Typically single instance execytion             |
| State Management | Stateless, designed for transient state    | Can manage temporary state during job execution |
| Timeout          | Up to 60 minutes                           | Up to 60 minutes                                |
| Networking       | Can receive external HTTP traffic          | Typically runs in private network               |
| Billing          | Charged base on requests and compute       | Charged base on job duration and resources used |

----------------------------------------------------------------

### Deploy by

- Artifact Registry,Docker Hub : Deploy one revision from an existing container image **[SELECT ✅]**
  - Select container image url
- Github : Continuously deploy from a repository (source or function)
- Functions : Use an inline editor to create a function

----------------------------------------------------------------

### Configure

- Service name : Add service name
- Region : select region
- Authentication
  - Allow unauthenticated invocations : Tick this if you are creating a public API or website. **[SELECT ✅]**
  - Require authentication : Manage authorised users with Cloud IAM.

----------------------------------------------------------------

### Service auto-scaling

- Minimum number of instances : add 0

----------------------------------------------------------------

### Container(s)

#### Settings

- Resources : Select memory & cpu
- Health checks : optionals

#### Variables & Secrets

- Add your enviroment variables
- **If you used Cloud SQL you can use hostname with `/cloudsql/$CLOUDSQL_CONNECTION_NAME`**

----------------------------------------------------------------

### Networking

<b style="color:red">Setting your network configuration if you use external services !!!</b>

- Connect to a VPC for outbound traffic **[SELECT ✅]**

  - select Network & Subnet

----------------------------------------------------------------

### Requests

- Request timeout : 300 seconds (default)
- Maximum concurrent requests per instance : 80 (default)

----------------------------------------------------------------

### Revision auto-scaling

- Minimum number of instances : 0 (default)
- Maximum number of instances : 100 (default)

### Cloud SQL connections

- Add cloud sql instance

----------------------------------------------------------------
