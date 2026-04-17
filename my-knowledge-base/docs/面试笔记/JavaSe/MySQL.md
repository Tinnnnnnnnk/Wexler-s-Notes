### MySQL基础
- MySQL 是一个关系型数据库
#### 基础操作
##### 创建/删除一张表
- 使用 `DROP TABLE` 和 `CREATE TABLE`
##### 写一个升序/降序的SQL语句
-  在SQL中，使用`order by`来实现，模式是升序的，在后面加一个`desc`可以实现降序
##### 两张表如何连接
- 通过内连接 `inner join` ,外连接`outer join`,交叉连接`cross join`
###### 内连接
- 现在有两张表，用户表和订单表，想查询有订单的用户， 可以使用内连接`users inner join orders`,按照用户ID去搜索，只有两个表都存在 `user_id`的记录才会出现在查询结果中
- ```sql
  SELECT users.name, orders.order_id
  FROM users
  INNER JOIN orders ON users.id = orders.user_id;
  ```
###### 外连接
- 又分为左外连接和右外连接 `left j`