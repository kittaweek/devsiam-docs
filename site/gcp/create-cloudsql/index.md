# Create Cloud SQL

### Database engine types

- MySQL
- PostgreSQL
- SQL Server

----------------------------------------------------------------

### SQL edition

| Enterprise Plus                                 | Enterprise                                        |
| ----------------------------------------------- | ------------------------------------------------- |
| 99.99% availability SLA                         | 99.95% availability SLA                           |
| Sub-second planned maintenance downtime         | Less than 60 seconds planned maintenance downtime |
| Near-zero downtime instance scale-up            | General purpose machines                          |
| Performance-optimised machines                  | Up to 7 days point-in-time recovery window        |
| Up to 35 days point-in-time recovery window     |                                                   |
| Up to 3x higher read throughput with data cache |                                                   |

----------------------------------------------------------------

### Edition Preset

| Preset      | Enterprise Plus | Enterprise |
| ----------- | --------------- | ---------- |
| Production  | ✅              | ✅         |
| Development | ✅              | ✅         |
| Sandbox     | ❌              | ✅         |

----------------------------------------------------------------

### Region and zonal

- Single or multiple zones

----------------------------------------------------------------

### Customise your instance

#### Machine configuration

- select your machine

----------------------------------------------------------------

#### Storage

##### Type

- SSD : Most popular choice. Lower latency than HDD with higher QPS and data throughput. **[SELECT ✅]**
- HDD : Lower performance than SSD with lower storage rates.
- You must choose **SSD** because price difference is minimal.

##### Storage capacity

- You must choose minimum capacity(10GB), because you  <b style="color:red">can't decreased later.!!!</b>
- Enable automatic storage increases : Check or Uncheck

----------------------------------------------------------------

#### Connections

- Private ip
  - Assigns an internal, Google-hosted VPC IP address. Requires additional APIs and permissions. Can't be disabled once enabled.
  - You must select Network.
- Public ip
  - Assigns an external, Internet-accessible IP address. Requires using an authorised network or the Cloud SQL Proxy to connect to this instance.
  - You Must add a network

----------------------------------------------------------------

#### Data Protection

- Automate daily backups & Enable point-in-time recovery
  - Daily backups are taken in the window of time selected. The operation may continue outside the window until complete.

- Enable deletion protection
  - If enabled, <b style="color:red">this instance won't be able to be deleted</b> until this feature has been disabled.
