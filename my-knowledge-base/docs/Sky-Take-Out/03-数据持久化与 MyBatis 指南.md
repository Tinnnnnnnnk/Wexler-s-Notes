# 03-数据持久化与 MyBatis 指南
> [!abstract] 版本说明
> 本文档是数据持久化层的**全量无删减版本**。详细记录了 MySQL 基础 (DDL, DML, DQL)、JDBC 连接全流程、MyBatis 增删改查实战、动态 SQL 以及多表关系设计。
> **核心来源**：`Mysql&JDBC&MyBatis.docx`, `多表关系.docx`, `各类操作.docx`

---

## 1. MySQL 基础

### 1.1 连接与分类
* **连接命令**：`mysql -u用户名 -p密码 [-h数据库服务器IP地址 -P端口号]`
* **SQL 分类**：
    * **DDL** (Data Definition Language): 数据定义语言，定义数据库对象 (数据库，表，字段)。
    * **DML** (Data Manipulation Language): 数据操作语言，对数据库表中的数据进行增删改。
    * **DQL** (Data Query Language): 数据查询语言，查询数据库中表的记录。
    * **DCL** (Data Control Language): 数据控制语言，创建数据库用户、控制数据库的访问权限。

**【示例图片】** 
> ![](/images/Pasted%20image%2020260209171245.png)
> ![](/images/Pasted%20image%2020260209171250.png)

### 1.2 DDL (数据定义)
* **数据库操作**：
    * `show databases;`
    * `create database [if not exists] db_name;`
    * `use db_name;`
    * `select database();`
    * `drop database [if exists] db_name;`
* **表操作**：
    * `show tables;`
    * `create table table_name (字段1 字段1类型 [comment 注释], ...);`
    * `desc table_name;` (查询表结构)
    * `show create table table_name;` (查询建表语句)
    * `alter table table_name add/modify/change/drop/rename ...`
    * `drop table [if exists] table_name;`

### 1.3 DML (数据操作)
* **添加 (INSERT)**：
    * 指定字段：`INSERT INTO 表名 (字段名1, 字段名2) VALUES (值1, 值2);`
    * 全部字段：`INSERT INTO 表名 VALUES (值1, 值2, ...);`
    * 批量添加：`INSERT INTO 表名 VALUES (值1, ...), (值1, ...);`
* **修改 (UPDATE)**：
    * `UPDATE 表名 SET 字段名1=值1, 字段名2=值2 [WHERE 条件];`
* **删除 (DELETE)**：
    * `DELETE FROM 表名 [WHERE 条件];`

**【示例图片】** 
> ![](/images/Pasted%20image%2020260209171303.png)
> ![](/images/Pasted%20image%2020260209171307.png)
> ![](/images/Pasted%20image%2020260209171311.png)
> ![](/images/Pasted%20image%2020260209171315.png)

### 1.4 DQL (数据查询)
**语法顺序**：
`SELECT` -> `FROM` -> `WHERE` -> `GROUP BY` -> `HAVING` -> `ORDER BY` -> `LIMIT`

* **基本查询**：
    * `SELECT * FROM 表名;` (不推荐)
    * `SELECT 字段1, 字段2 FROM 表名;` (推荐)
    * `SELECT DISTINCT 字段 FROM 表名;` (去重)
    * `AS` 起别名 (可省略)。

* **条件查询 (WHERE)**：
    * 比较：`>`, `<`, `>=`, `<=`, `=`, `<>` / `!=`
    * 范围：`BETWEEN ... AND ...` (闭区间), `IN (...)`
    * 模糊：`LIKE '占位符'` (`_` 单个字符, `%` 任意个字符)
    * 空值：`IS NULL` (不能用 `= NULL`)
    * 逻辑：`AND` (`&&`), `OR` (`||`), `NOT` (`!`)

* **聚合函数** (将一列数据作为一个整体，进行纵向计算)：
    * `count()`: 统计数量 (一般用 `count(*)`)。
    * `max()`: 最大值。
    * `min()`: 最小值。
    * `sum()`: 求和。
    * `avg()`: 平均值。
    * **注意**：null 值不参与所有聚合函数运算。

* **分组查询 (GROUP BY)**：
    * `SELECT 字段列表 FROM 表名 [WHERE 条件] GROUP BY 分组字段名 [HAVING 分组后过滤条件];`
    * **执行顺序**：`WHERE > 聚合函数 > HAVING`。
    * **注意**：分组之后，查询的字段一般为聚合函数和分组字段，查询其他字段无意义。

* **排序查询 (ORDER BY)**：
    * `ASC`: 升序 (默认)。
    * `DESC`: 降序。
    * 多字段排序：`ORDER BY 字段1 方式1, 字段2 方式2;`

* **分页查询 (LIMIT)**：
    * `SELECT 字段列表 FROM 表名 LIMIT 起始索引, 查询记录数;`
    * **起始索引** = (查询页码 - 1) * 每页显示记录数。
    * 不同数据库分页方言不同 (MySQL 是 LIMIT)。

**【示例图片】** 📸 需补充图片
> ![](/images/Pasted%20image%2020260209171325.png)
> ![](/images/Pasted%20image%2020260209171342.png)
> ![](/images/Pasted%20image%2020260209171347.png)
> ![](/images/Pasted%20image%2020260209171352.png)
> ![](/images/Pasted%20image%2020260209171356.png)
> ![](/images/Pasted%20image%2020260209171402.png)
> ![](/images/Pasted%20image%2020260209171406.png)
> ![](/images/Pasted%20image%2020260209171409.png)
> ![](/images/Pasted%20image%2020260209171414.png)
> ![](/images/Pasted%20image%2020260209171419.png)
> ![](/images/Pasted%20image%2020260209171423.png)
> ![](/images/Pasted%20image%2020260209171439.png)

---

## 2. JDBC (Java Database Connectivity)

### 2.1 概念与本质
* Java 语言操作关系型数据库的一套 API。
* 本质是官方定义的一套接口，各个数据库厂商实现这套接口（驱动）。
* 程序员面向接口编程。

### 2.2 快速入门
1.  **注册驱动**：`Class.forName("com.mysql.cj.jdbc.Driver");`
2.  **获取连接**：
    ```java
    Connection conn = DriverManager.getConnection(
        "jdbc:mysql://localhost:3306/db_name", "root", "password"
    );
    ```
3.  **获取执行 SQL 的对象**：`Statement stmt = conn.createStatement();`
4.  **执行 SQL**：
    * `int count = stmt.executeUpdate(sql);` (增删改，返回影响行数)
    * `ResultSet rs = stmt.executeQuery(sql);` (查询，返回结果集)
5.  **处理结果**：
    * `rs.next()`: 游标向下移动一行，返回 boolean 表示是否有数据。
    * `rs.getInt("id")`, `rs.getString("name")`: 获取数据。
6.  **释放资源**：`rs.close(); stmt.close(); conn.close();`

---

## 3. MyBatis 实战

### 3.1 概述与配置
* 持久层框架，用于简化 JDBC 开发。
* **MyBatis 配置** (SpringBoot 中写在 application.properties):
    * `spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver`
    * `spring.datasource.url=jdbc:mysql://localhost:3306/db_name`
    * `spring.datasource.username=root`
    * `spring.datasource.password=1234`
    * `mybatis.configuration.log-impl=org.apache.ibatis.logging.stdout.StdOutImpl` (输出 SQL 日志)
    * `mybatis.configuration.map-underscore-to-camel-case=true` (开启驼峰映射)

### 3.2 基础 CRUD (注解开发)
使用 `@Mapper` 接口。

* **删除 (`@Delete`)**:
  ```java
  @Delete("delete from user where id = #{id}")
  public void delete(Integer id);
  ```
  * `#{id}`: 预编译占位符，防止 SQL 注入 (推荐)。
  * `${id}`: 拼接 SQL，存在注入风险 (不推荐)。

* **新增 (`@Insert`)**:
  ```java
  @Insert("insert into user(name, age) values(#{name}, #{age})")
  public void insert(User user);
  ```
  * **主键返回 (`@Options`)**:
    ```java
    @Options(useGeneratedKeys = true, keyProperty = "id")
    public void insert(User user);
    ```
    插入后，自动将生成的主键值赋值给 user 对象的 id 属性。

* **更新 (`@Update`)**:
  ```java
  @Update("update user set name = #{name} where id = #{id}")
  public void update(User user);
  ```

* **查询 (`@Select`)**:
  ```java
  @Select("select * from user where id = #{id}")
  public User getById(Integer id);
  ```
  * **结果映射**:
    如果数据库字段 (`create_time`) 与实体属性 (`createTime`) 不一致：
    1.  起别名: `select create_time as createTime ...`
    2.  `@Results` / `@Result` 手动映射。
    3.  开启驼峰映射配置 (推荐)。

**【示例图片】**  
> ![](/images/Pasted%20image%2020260209171630.png)
> ![](/images/Pasted%20image%2020260209171633.png)
> ![](/images/Pasted%20image%2020260209171637.png)
> ![](/images/Pasted%20image%2020260209171641.png)
> ![](/images/Pasted%20image%2020260209171644.png)

### 3.3 动态 SQL (XML 开发)
当 SQL 语句复杂或需要动态拼接条件时，使用 XML 映射文件。

* **规则**:
    * XML 文件名与 Mapper 接口名一致。
    * XML 放在 `src/main/resources` 下的同包名目录中。
    * `namespace` 属性必须是 Mapper 接口的全限定名。
    * `id` 属性必须是 Mapper 接口的方法名。

* **`<if>` 标签**:
  ```xml
  <select id="list" resultType="com.itheima.pojo.Emp">
      select * from emp
      <where>
          <if test="name != null"> name like concat('%', #{name}, '%') </if>
          <if test="gender != null"> and gender = #{gender} </if>
      </where>
  </select>
  ```
  * `<where>`: 自动去除多余的 `and` 或 `or`。

* **`<foreach>` 标签 (批量删除)**:
  ```xml
  <delete id="deleteByIds">
      delete from emp where id in
      <foreach collection="ids" item="id" separator="," open="(" close=")">
          #{id}
      </foreach>
  </delete>
  ```

### 3.4 进阶技巧 (各类操作)
* **连接池切换**: 引入 Druid 依赖，配置 `spring.datasource.type=com.alibaba.druid.pool.DruidDataSource`。
* **参数接收**:
    * `List<Integer> ids`: MyBatis 会封装为 Map，key 默认为 "list" 或 "collection" (建议使用 `@Param("ids")` 指定)。
    * JSON 参数: `@RequestBody`。
    * 路径参数: `@PathVariable`。
* **模糊查询**: 推荐使用 `concat('%', #{name}, '%')`。

---

## 4. 多表关系与设计

### 4.1 表关系类型
* **一对多 (One-to-Many)**:
    * **场景**: 部门与员工。
    * **实现**: 在“多”的一方建立外键，指向“一”的一方的主键。
    * **外键约束**: `alter table emp add constraint fk_dept_id foreign key (dept_id) references dept(id);`

* **多对多 (Many-to-Many)**:
    * **场景**: 学生与课程。
    * **实现**: 建立第三张中间表，中间表至少包含两个外键，分别关联两张主表的主键。

* **一对一 (One-to-One)**:
    * **场景**: 用户与用户详情。
    * **实现**: 在任意一方加入外键，关联另一方的主键，并且设置外键为唯一的 (`UNIQUE`)。

**【示例图片】**  
> ![](/images/Pasted%20image%2020260209171805.png)

### 4.2 多表查询
* **笛卡尔积**: 两个表记录的乘积 (需通过 WHERE 消除无效数据)。
* **连接查询**:
    * **内连接**: `select * from A, B where A.id = B.aid` (隐式) 或 `select * from A inner join B on ...` (显式)。查询两表交集。
    * **外连接**:
        * **左外连接**: `left join` (查询左表所有数据 + 交集)。
        * **右外连接**: `right join` (查询右表所有数据 + 交集)。
* **子查询**:
    * 标量子查询 (结果是单值): `select * from emp where dept_id = (select id from dept where name = '教研部')`。
    * 列子查询 (结果是一列): `where id in (select ...)`。
    * 表子查询 (结果是多行多列): `select * from (select ...) as t ...`。

---