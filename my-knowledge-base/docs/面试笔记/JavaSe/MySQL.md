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
- 不仅返回两个表中匹配的行，同时还返回没有匹配的行，使用null填充
- 又分为左外连接和右外连接 `left join  &&  right join`
- `left join` 会保留左表中符合要求的记录，右表中如果存在没有匹配的记录就返回null
- 也就是左边的内容一定会被保留，匹配到了右边的内容，就会合成一行，否则就会接上null
###### 交叉连接
- 返回两张表的笛卡尔积，也就是左表每一行和右表每一行进行组合
#### 内连接、左连接、右连接
- 主要分为内连接和外连接，而外连接又分为左连接和右连接
- 内连接相当于是找两个数据集的交集
- 而外连接就相当于除了交集还保留哪个数据集，如果是左连接，就保留左边的数据集，右连接同理
#### 数据库的三大范式
- 第一范式：确保每一列都是不可分割的基本数据单元
- 第二范式：确保每一列都和主键直接相关
- 第三范式：非主键列应该只依赖主键列
- 建表的时候需要考虑三大范式，确保字段不可再分、消除非主键依赖，确保字段仅依赖于主键。
#### 怎么存储 emoji😀
- emoji 是4个字节的UTF-8字符，所以就需要使用utf8mb4字符集

#### drop、delete、truncate的区别
- drop是物理删除，删除整个表，删了就没了
- delete支持行级删除，可以带where条件，可以回滚
- truncate是清空表中数据，会表里表结构
#### union 与 union all
- union 会自动去除合并后结果集中的重复行
- union all不会去重
#### `count(1) 、count(*) 、count (列名)` 的区别
- 如果表有索引，`count(*)`就直接用索引统计，而`count(1)`会被优化成`count(*)`
- `count(列名)` 只统计列名不为null的行数
#### MYSQL的第3-10条记录怎么查
- 使用 `limit`语句
- `select * from table limit 2,8`
-  `limit`有偏移量，下标从0开始，因此是2
- 后面的8是行号，代表找8个
#### SQL的隐式数据类型转换
- 整数+浮点数 会转换成浮点数
- 字符串+整数 会转换成整数
#### 一条查询语句的执行流程
- 第一步：客户端发送SQL查询语句到 MYSQL服务器
- 第二步：连接器开始处理请求，进行身份验证和权限获取
- 第三步：分析器来检查语句是否符合SQL语法规则
- 第四步：优化器确定SQL语句的执行计划，包括使用哪些索引，决定表之间的连接顺序
- 第五步：执行器调用API来进行数据读写
- 第六步：存储引擎查询数据，将执行结构返回客户端

#### MYSQL中的数据引擎
- 常见的有 MyISAM、InnoDB、MEMORY
#### 怎么切换MYSQL的数据引擎
- 通过`alter table`语句来切换
- `alter table table_name ENGINE = InnoDB`
#### 怎么选择存储引擎
- 大多数情况下使用 InnoDB，可以提供事务、行级锁、外键等能力
- MyISAM 适合读多写少的场景
- MEMORY适合临时表、数据量小的场景
#### MYSQL的日志文件
- 错误日志：问题诊断
- 慢查询日志：SQL性能分析
- general log：记录所有的SQL语句
- binlog：主从复制和数据恢复
- redo log：保证事务的持久性
- undo log：事务回滚和MVCC
##### binlog 是什么
- binlog是一种二进制日志，会在磁盘上记录数据库的所有修改操作
- 如果误删了数据，可以使用binlog去回退状态
- 如果要搭建主从复制，可以让从库定时读取主库的binlog
##### 为什么有了binlog还要 undolog redolog
- binlogshu'yu