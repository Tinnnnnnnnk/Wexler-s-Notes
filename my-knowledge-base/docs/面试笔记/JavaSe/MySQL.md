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
- binlog属于 Server层，与存储引擎无关，无法之间操作物理数据页；而undo log 和redo log是InnoDB存储引擎实现ACID的关键
- binlog会记录整个 SQL或 行变化
- undo log 是为了撤销未提交的事务
- redo log是恢复 已提交但未刷盘的数据
##### binlog 和 redo log 有什么区别
- binlog 记录的是逻辑日志 ，是追加写入的，一个文件写满了就会新建文件继续写入，不会覆盖历史日志
- redo log 记录的是物理日志，是循环写入的，空间是固定的，写满后会覆盖就的日志
- 为了保证两种日志的一致性，InnoDB采用了两阶段提交策略，redo log在事务执行过程中持续写入，并在事务提交前进入prepare状态；binlog 在事务提交的最后阶段写入，只会redo log会被标记成 commit状态
#### 为什么要两阶段提交
- 保证 redo log和binlog 的一致性
- ![[Pasted image 20260419161217.png]]
- HOW？
	- 如果MYSQL在预写 redo log后，写入 binlog前崩溃，MYSQL重启后，InnoDB会回滚事务，因为redo log没有提交，并且binlog没有写入，所以 从库 中不会有该事务
	- 如果MYSQL在写入binlog后，redo log提交前崩溃，那么MYSQL重启后InnoDB会提交该事务，redo log是完整的 prerare状态，而且binlog写入了，所以 从库 也会同步该事务的数据
#### redo log 的写入过程
- InnoDB 先将 redo log 写入内存中的 redo log buffer，然后再以一定的频率刷入磁盘的 redo log File中
- 当redo log buffer 的空间不足、事务提交、触发checkpoint时，会触发刷盘动作
- 也就是先写入缓冲区，再以一定的速率写入磁盘中
- redo log buffer 是顺序写，Mysql启动后会申请一块连续的内存空间作为 redo log buffer，分为若干个redo log block，redo log buffer采用顺序写入的方式，会往前面的redo log block写入，写满了才往后面去写

#### 什么是慢 SQL
- MYSQL 中有一个叫 `long_query_time`的参数，原则上执行时间超过这个参数的SQL就算慢SQL，会被记录到慢查询日志中
- 一般通过启用慢查询日志，去记录那些超过执行执行时间的SQL查询，当然也可以使用`show processlist`去查看当前正在执行的SQL语句，人工找出执行时间长的SQL
- 慢查询日志可以通过编辑配置文件去修改即可
#### 如何优化SQL
- 本质就算 尽可能减少扫描，尽快返回结果
##### 覆盖索引
- 核心就是 ”查询所需的字段都在同一个索引中“，这样MYSQL就可以直接从索引中返回结果

#### explain 的使用
- explain是MYSQL 提供的 一个用于查看SQL执行计划的工具，可以用来分析查询语句的性能问题
- 一般关注 explain 输出结果中的 type、key、rows 和 Extra
- 根据上面的字段可以判断 SQL有没有走索引、是否全盘扫描、是否触发了filesort货临时表。一旦发现问题，比如type =ALL 或 Extra = Using filesort，我会考虑建索引、改写SQL来优化
##### type的执行效率等级
- 从高到低有 system、const、eq_ref、ref、range、index 和 ALL。
- 一般达到 const、eq_ref、ref就表明查询使用了索引
- 如果是范围查询，range也可以接受
- ALL表示全表扫描，性能很差，一般不可接受

### 索引
#### 索引为什么能提高查询效率
- 索引类似于操作系统中的页表，是B+树结构，查询效率是O(log n )
- 最常见的是通过 `create index` 建立索引
- `create index idx_name on student(name)`
#### 索引的分类
- 功能上分：主键索引、唯一索引、普通索引、全文索引
- 数据结构上分类：B+树索引、哈希索引
- 存储位置分类：聚簇索引、非聚簇索引
##### 主键索引
- 用于唯一标识表中的记录，列值必须唯一且非空
- 每个表只能由一个主键索引，通常是表中的 自增 id 字段
##### 唯一索引 和 主键索引 有什么区别
- 主键索引=唯一索引+非空
- 一个表只能有一个主键索引，但是可以有多个唯一索引
- 主键索引不允许NULL，插入NULL，就会报错，但是唯一索引可以插入多个NULL
##### 唯一键 和 唯一索引 有什么区别
- 创建唯一键时，MYSQL会自动创建一个唯一索引，反之，创建唯一索引也会隐式添加唯一性约束
##### 普通索引 和 唯一索引 有什么区别
- 普通索引仅仅用于加速查询，不限制字段的唯一性；适用于高频写入、范围查询的字段
- 唯一索引强制字段值的唯一性，插入或更新时触发唯一性检查；适用于业务唯一性约束的字段、防止数据重复插入的字段
- 两种查询性能几乎无区别，但是普通索引的更新、插入性能强于唯一索引
##### 全文检索
- 是MySQL一种优化文本数据检索的特殊类型索引，使用与 CHAR、VARCHAR和TEXT等字段
#### 创建索引的注意点
- 第一
	- 选择频繁在 `where、join、order by、group by`中出现的字段
	- 考虑区分度高的字段，例如用户ID、手机号，而不是性别、状态
- 第二
	- 考虑索引的数量，避免过度索引