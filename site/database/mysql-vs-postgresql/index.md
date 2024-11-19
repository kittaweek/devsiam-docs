# Mysql vs PostgreSQL

Compare MySQL vs PostgreSQL benchmark.

## References 1

- Record at : 16 Oct 2024
- Reference : [Link](https://www.youtube.com/watch?v=17BqoNEQKTM)
- Source code : [Github](https://github.com/antonputra/tutorials/tree/216/lessons/216)

### Round 1

| Title                   | MySQL | PostgreSQL |
| ----------------------- | ----- | ---------- |
| Insert Latency          | ❌    | ✅         |
| Update Latency          | ❌    | ✅         |
| Delete Latency          | ❌    | ✅         |
| Queries per second(QPS) | ❌    | ✅         |
| Disk write (Ops)        | ❌    | ✅         |
| CPU Usage               | ❌    | ✅         |
| Disk Usage              | ❌    | ✅         |
| Memory Usage            | ❌    | ✅         |

### Round 2

| Title                   | MySQL | PostgreSQL |
| ----------------------- | ----- | ---------- |
| Select Latency          | ❌    | ✅         |
| Queries per second(QPS) | ❌    | ✅         |
| Connection pool size    | ❌    | ✅         |
| CPU Usage               | ❌    | ✅         |
| Memory Usage            | ❌    | ✅         |

### Summary References 1

Winner : PostgreSQL 🏅

## References 2

- Record at : 26 Feb 2023
- [Link](https://www.youtube.com/watch?v=-PbP1TcD94Q)
- Source code : -

### PostgreSQL

Content size : 206

| Title  | Round 1 | Round 2 | Round 3 | Avg    |
| ------ | ------- | ------- | ------- | ------ |
| Write  | 2389.7  | 1993.01 | 2455.04 | 2279.25 |
| Read   | 27.02   | 32.29   | 35.63   | 31.65  |
| Update | 26.48   | 27.54   | 24.76   | 26.26 |

### MySql

Content size : 206

| Title  | Round 1 | Round 2 | Round 3 | Avg     |
| ------ | ------- | ------- | ------- | ------- |
| Write  | 3136.18 | 3705.02 | 3661.96 | 3501.05 |
| Read   | 66.06   | 42.78   | 41.13   | 49.99   |
| Update | 46.88   | 99.31   | 41.16   | 62.45   |

### Summary References 2

| Title      | Write | Read | Update |
| ---------- | ----- | ---- | ------ |
| PostgreSQL | 🏅   | 🏅  | 🏅    |
| MySQL      | ❌    | ❌   | ❌     |

## References 3

Reference : [Link](https://www.stratascratch.com/blog/postgres-vs-mysql-which-is-better-for-analytics/)

### Details

| Title                        | MySQL                         | PostgreSQL                   |
| ---------------------------- | ----------------------------- | ---------------------------- |
| Popularity (at January 2022) | 1206.05                       | 606.56                       |
| Data types                   | Supports fewer                | Supports more                |
| Case Sensitivity             | ❌                            | ✅                           |
| UTF-8                        | Conversion required           | Conversion not required      |
| Conditional Statement        | IF() & NULLIF()               | CASE WHEN                    |
| DROP CASCADE                 | ❌                            | ✅                           |
| DROP TEMPORARY TABLE         | ✅                            | ❌                           |
| TRUNCATE                     | ✅ , ONLY TRUNCATE            | ✅, with enhancing options   |
| FULL OUTER JOIN              | ❌                            | ✅                           |
| INTERSECT & EXCEPT           | ❌                            | ✅                           |
| Window Functions             | ✅ , some aggregate functions | ✅ , all aggregate functions |

### Summary References 3

| Title                                          | MySQL | PostgreSQL |
| ---------------------------------------------- | ----- | ---------- |
| Popularity                                     | 🏅   | ❌         |
| Data Types                                     | ❌    | 🏅        |
| Case Sensitivity                               | 🏅   | ❌         |
| Converting Character Sets and Strings to UTF-8 | ❌    | 🏅        |
| Conditional Statement                          | ❌    | 🏅        |
| Deleting Data and Tables                       | ❌    | 🏅        |
| Joining Tables and Combining Data              | ❌    | 🏅        |
| Window Functions                               | ❌    | 🏅        |

## Conclusion

PostgreSQL