# MySQL 基础

> MySQL 是一个关系型数据库。

## 基础操作

- **创建 / 删除表**：使用 `DROP TABLE` 和 `CREATE TABLE`
- **排序查询 (升序 / 降序)**：在 SQL 中，使用 `ORDER BY` 来实现。默认是升序的，在后面加一个 `DESC` 可以实现降序。

## 表的连接 (JOIN)

两张表可以通过内连接 `INNER JOIN`、外连接 `OUTER JOIN`、交叉连接 `CROSS JOIN` 来实现连接。

> [!info] 内连接 (INNER JOIN)
> 只有两个表都存在匹配记录的行，才会出现在查询结果中。
> 
> **场景**：现在有两张表（用户表和订单表），想查询有订单的用户，可以使用 `users inner join orders`，按照用户ID去搜索。
> ```sql
> SELECT users.name, orders.order_id
> FROM users
> INNER JOIN orders ON users.id = orders.user_id;
> ```

> [!note] 外连接 (OUTER JOIN)
> 不仅返回两个表中匹配的行，同时还返回没有匹配的行，缺失的部分使用 `NULL` 填充。
> 
> - **左外连接 (`LEFT JOIN`)**：会保留左表中所有的记录。也就是左边的内容一定会被保留，匹配到了右边的内容，就会合成一行，否则就会接上 `NULL`。
> - **右外连接 (`RIGHT JOIN`)**：保留右表中所有的记录，左表无匹配则接 `NULL`。

> [!abstract] 交叉连接 (CROSS JOIN)
> 返回两张表的**笛卡尔积**，也就是左表每一行和右表每一行进行组合。