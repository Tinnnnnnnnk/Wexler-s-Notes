# 02-Java 后端核心与 SpringBoot 实战手册

> [!abstract] 版本说明
> 本文档是 Java 后端开发的**全量无删减版本**。详细记录了 Maven 依赖管理、Spring IOC/AOP 核心原理、SpringBoot 自动配置、Web 开发细节、文件上传、JWT 令牌系统以及各类常用注解。
> **核心来源**：`Maven.docx`, `Junit.docx`, `IOC&DI三层架构.docx`, `Spring——AOP.docx`, `SpringBoot.docx`, `SpringBoot原理部分.docx`, `文件上传.docx`, `令牌系统.docx`, `注解.docx`, `日志.docx`, `各类操作.docx`

---

## 1. Maven 项目管理

### 1.1 坐标与依赖
* **坐标组成**：
    * `groupId`：组织名称（一般是域名反写，如 com.itheima）。
    * `artifactId`：模块名称。
    * `version`：版本号。

* **排除依赖**：
    当引入的依赖中包含不需要的传递性依赖时，使用 `<exclusions>` 标签进行排除。
    ```xml
    <dependency>
        <groupId>...</groupId>
        <artifactId>...</artifactId>
        <exclusions>
            <exclusion>
                <groupId>org.slf4j</groupId>
                <artifactId>slf4j-log4j12</artifactId>
            </exclusion>
        </exclusions>
    </dependency>
    ```

* **依赖范围 (`scope`)**：
    在引入依赖的时候使用 `scope` 去设置作用范围。
    * `compile`：默认值，参与编译、测试、运行。
    * `test`：只参与测试（如 junit）。
    * `provided`：参与编译、测试，不参与运行（如 servlet-api）。
    * `runtime`：参与测试、运行，不参与编译（如 jdbc 驱动）。

**【示例图片】** 
> ![](/images/Pasted%20image%2020260209170103.png)
> ![](/images/Pasted%20image%2020260209170106.png)

### 1.2 分模块设计
* **概念**：将需要分离的模块（如 POJO, Utils）新建于当前项目中，相关的类需要定义于同名文件夹中。
* **步骤**：
    1.  在分离的模块中引入需要的依赖。
    2.  将被分离的模块作为依赖引入到主项目中。
* **注意事项**：
    * 如果引入依赖后，文件变成“根源外文件”（灰色），可能是没有规定版本号或未刷新 Maven。
    * 一部分依赖可以只出现在被分离的模块中，而不需要出现在主项目的 pom 文件中。

### 1.3 继承与聚合
* **继承**：
    * 创建一个父工程模块，打包方式设置为 `pom` (`<packaging>pom</packaging>`).
    * **子工程配置**：
        ```xml
        <parent>
            <groupId>...</groupId>
            <artifactId>Tlias-parent</artifactId>
            <version>1.0-SNAPSHOT</version>
            <relativePath>../Tlias-parent/pom.xml</relativePath>
        </parent>
        ```
    * 配置了继承关系后，子工程坐标中的 `groupId` 可以省略，会自动继承父工程的。
    * **版本锁定**：在父工程中使用 `<dependencyManagement>` 标签管理依赖版本。子工程引入这些依赖时无需指定版本。
    * **自定义属性**：在 `<properties>` 中自定义标签（如 `<lombok.version>1.18.34</lombok.version>`），引用时使用 `${lombok.version}`。

* **聚合**：
    * 需要一个聚合工程，一般与父工程是同一个工程。
    * 添加 `<modules>` 标签，实现一键构建所有模块。
        ```xml
        <modules>
            <module>../Tlias-pojo</module>
            <module>../Tlias-utils</module>
        </modules>
        ```
    * 内部的模块顺序会自动构建。

**【示例图片】** 
> ![](/images/Pasted%20image%2020260209170122.png)
> ![](/images/Pasted%20image%2020260209170125.png)
> ![](/images/Pasted%20image%2020260209170130.png)

---

## 2. JUnit 单元测试

### 2.1 基本规范
* **命名**：类最好命名为 `XxxTest`；方法必须命名为 `public void xxx(){...}`。
* **注解**：
    * `@Test`：说明这是一个测试方法。
    * `@Before` (JUnit4) / `@BeforeEach` (JUnit5)：在每个测试方法前执行。
    * `@After` (JUnit4) / `@AfterEach` (JUnit5)：在每个测试方法后执行。
    * `@BeforeClass` (JUnit4) / `@BeforeAll` (JUnit5)：在所有测试方法前执行一次（需静态）。

### 2.2 断言 (Assertions)
给出一堆期望数据和运行前置数据，根据期望数据和运行前置数据运行后得到数据来判断，从而返回一条 message。
* 可以设定一个状态或者检查是否抛出某个异常。
* 错误信息是可选的，可有可无；message 是错误后的提示词，例如：`年龄计算错误...`。

**【示例图片】** 
> ![](/images/Pasted%20image%2020260209170143.png)
> ![](/images/Pasted%20image%2020260209170148.png)

---

## 3. Spring 核心 (IOC & DI)

### 3.1 三层架构
* **Controller (控制层)**：专注于同前端的交互，接受前端的请求。
* **Service (业务逻辑层)**：具体业务的逻辑处理。
* **Dao (数据访问层)**：访问数据，对数据进行增删改查。
* **流程**：Controller -> Service -> Dao -> DB -> Dao -> Service -> Controller。
* **注意事项**：每个层都要先在外面定义一个接口，并再创建一个 impl 文件夹去实现这个接口。

**【示例图片】** 
> ![](/images/Pasted%20image%2020260209170205.png)

### 3.2 IOC (控制反转) & DI (依赖注入)
* **IOC**：将一个类交给 IOC 容器管理。
    * 在这个实现类上加一个注解 `@Component` (或 `@Controller`, `@Service`, `@Repository`)。
* **DI**：在 IOC 容器中找到该类的 bean 完成依赖注入。
    * 加入 `@Autowired` 注解。
* **为什么这么做？**
    * 解耦。让 IOC 容器作为中转站，如果实现类改名，无需在调用方（Controller/Service）修改代码。

**【示例图片】**  
> ![](/images/Pasted%20image%2020260209170226.png)
> ![](/images/Pasted%20image%2020260209170230.png)
> ![](/images/Pasted%20image%2020260209170234.png)

### 3.3 依赖注入详解
* **属性注入**：直接在成员变量上加 `@Autowired`。
* **构造器注入**：
    * 如果当前类中只有一个构造方法，那么可以省略 `@Autowired`。
* **Setter 注入**：在 set 方法上加 `@Autowired` (使用 Alt+Ins 生成)。
* **同类型 Bean 冲突**：
    * 如果有多个同类型 bean，`@Autowired` 会报错。
    * **解决方法**：
        1.  `@Primary`：在一个 bean 的类定义上添加，表示优先使用这个。
        2.  `@Qualifier("beanName")`：在 `@Autowired` 下面添加，指定 bean 的名字（默认首字母小写）。
        3.  `@Resource(name="beanName")`：JDK 原生注解，直接注明 bean 名字，不需要 `@Autowired`。

**【示例图片】** 
> ![](/images/Pasted%20image%2020260209170241.png)
> ![](/images/Pasted%20image%2020260209170246.png)
---

## 4. Spring AOP (面向切面编程)

### 4.1 核心概念
* **连接点 (JoinPoint)**：可以被切入的方法。
* **切入点 (Pointcut)**：实际被切入的方法（匹配规则）。
* **通知 (Advice)**：额外去处理的流程（如计算运行时间）。
* **切面 (Aspect)**：通知 + 切入点。
* **目标对象 (Target)**：被切入的方法的类的对象。

### 4.2 基础程序
* **依赖**：`spring-boot-starter-aop`。
* **注解**：
    * `@Aspect`：标记当前类为切面类。
    * `@Around` / `@Before` 等：定义通知类型。

**【示例图片】** 
> ![](/images/Pasted%20image%2020260209170400.png)
> ![](/images/Pasted%20image%2020260209170406.png)

### 4.3 通知类型
* **`@Around`**：环绕通知。在目标方法前、后都被执行。
    * **特殊点**：必须在方法参数中接收 `ProceedingJoinPoint`，并手动调用 `pjp.proceed()` 来运行原始方法。
* **`@Before`**：在目标方法前执行。
* **`@After`**：在目标方法后执行（无论是否发生异常）。
* **`@AfterReturning`**：在目标方法成功返回后执行。
* **`@AfterThrowing`**：在抛出异常时执行。

### 4.4 切入点表达式
* **语法**：`execution( [返回值类型] [包名.类名].[方法名]([参数列表]) )`
* **通配符**：
    * `*`：单个独立的任意符号。可以通配任意返回值、包名一层、类名、方法名、任意一个参数。
    * `..`：多个连续的任意符号。可以通配任意级包、任意类型任意个数参数。
* **示例**：`execution(* com.itheima.service.*.*(..))`
* **`@annotation`**：匹配带有特定注解的方法。
    * 自定义注解：`@Target(ElementType.METHOD)`, `@Retention(RetentionPolicy.RUNTIME)`。
    * 使用：`@annotation(com.example.MyLog)`。

### 4.5 顺序与重用
* **顺序**：
    * 多个切面时，默认按类名排序。
    * 使用 `@Order(数字)` 注解控制：
        * **目标方法前**：数字越小先执行。
        * **目标方法后**：数字越大先执行。
* **重用 (`@Pointcut`)**：
    * 将公共的切入点表达式抽取出来。
    * `private`：仅当前类可用；`public`：外部类也可用。

**【示例图片】**
> ![](/images/Pasted%20image%2020260209170416.png)
> ![](/images/Pasted%20image%2020260209170424.png)

---

## 5. SpringBoot Web 开发

### 5.1 HTTP 请求
* **入口**：在类上加 `@RestController`。
* **路径**：`@RequestMapping("/request")`。
* **参数接收**：
    * 简单参数：直接写形参，名一致即可。
    * **`@RequestParam`**：用于 Query 参数（`?name=bob`），可设置默认值。
    * **`@PathVariable`**：用于路径参数（`/users/{id}`）。
        * `public Result getById(@PathVariable("id") Integer id)`。
    * **`@RequestBody`**：用于接收 JSON 格式的请求体（必须是 POST/PUT）。
        * 需保证传入的键名和实体类的属性名保持一致。

**【示例图片】** 
> ![](/images/Pasted%20image%2020260209170605.png)
> ![](/images/Pasted%20image%2020260209170613.png)
> ![](/images/Pasted%20image%2020260209170622.png)
> ![](/images/Pasted%20image%2020260209170627.png)
> ![](/images/Pasted%20image%2020260209170631.png)

### 5.2 全局异常处理器
需要两个注解：
1.  `@RestControllerAdvice`：等同于 `@ControllerAdvice` + `@ResponseBody`。
2.  `@ExceptionHandler`：在方法上，指定捕获的异常类型。

### 5.3 常用配置
* **YML 配置文件**：替代 properties，结构更清晰。
* **REST 风格**：`GET` (查), `POST` (增), `PUT` (改), `DELETE` (删)。
* **MyBatis 配置**：
    * 开启驼峰命名：`mybatis.configuration.map-underscore-to-camel-case=true`。
    * 日志输出：`mybatis.configuration.log-impl=org.apache.ibatis.logging.stdout.StdOutImpl`。

---

## 6. SpringBoot 原理

### 6.1 配置优先级
1.  **命令行参数** (`--server.port=10010`) - **最高**。
2.  **VM Option** (`-Dserver.port=9000`)。
3.  **properties/yml 文件**。
    * `properties` 优先级高于 `yml` 高于 `yaml`。

**【示例图片】** 
> ![](/images/Pasted%20image%2020260209170743.png)
> ![](/images/Pasted%20image%2020260209170748.png)

### 6.2 Bean 管理
* **作用域 (`@Scope`)**：
    * `singleton` (默认)：单例，启动时创建。
    * `prototype`：多例，每次使用时创建（适用于有状态 Bean）。
* **延迟加载 (`@Lazy`)**：Bean 在被调用时才创建。
* **第三方 Bean**：
    * 无法加 `@Component`，需在配置类（`@Configuration`）中使用 `@Bean` 方法定义。
    * 方法名即为 Bean 名字。

**【示例图片】** 
> ![](/images/Pasted%20image%2020260209170805.png)
> ![](/images/Pasted%20image%2020260209170808.png)

### 6.3 自动配置原理
* **`@SpringBootApplication`** 包含：
    1.  `@SpringBootConfiguration`
    2.  `@ComponentScan`
    3.  **`@EnableAutoConfiguration`**
* **原理**：
    * `@EnableAutoConfiguration` 通过 `@Import` 导入了 `AutoConfigurationImportSelector` 类。
    * 该类会加载 `META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports` 文件中配置的所有全类名。
    * **`@Conditional`**：这些 Bean 并非全部加载，而是根据条件加载。
        * `@ConditionalOnClass`：环境中有字节码文件时。
        * `@ConditionalOnMissingBean`：容器中没有对应 Bean 时。
        * `@ConditionalOnProperty`：配置文件中有指定属性时。

**【示例图片】**  
> ![](/images/Pasted%20image%2020260209170816.png)


---

## 7. 文件上传

* **前端**：`form` 标签必须有 `enctype="multipart/form-data"`，`method="post"`。
* **后端**：
    * 使用 `MultipartFile file` 接收。
    * `file.transferTo(new File(...))` 转存。
* **细节**：
    * 获取后缀：`originalFilename.substring(originalFilename.lastIndexOf("."))`。
    * 使用 `UUID.randomUUID()` 防止文件名重复。
* **配置大小限制**：
    * `spring.servlet.multipart.max-file-size=10MB`
    * `spring.servlet.multipart.max-request-size=100MB`

---

## 8. 安全与令牌系统 (JWT)

### 8.1 JWT 语法
* **生成**：
  ```java
  Jwts.builder()
      .signWith(SignatureAlgorithm.HS256, "密钥")
      .setClaims(map) // 载荷
      .setExpiration(new Date(System.currentTimeMillis() + time))
      .compact();
  ```
* **解析**：
  ```java
  Jwts.parser()
      .setSigningKey("密钥")
      .parseClaimsJws(token)
      .getBody();
  ```

### 8.2 Filter vs Interceptor
* **Filter (过滤器)**：
    * 属于 Servlet 规范。
    * 注解 `@WebFilter(urlPatterns="/*")` + 启动类 `@ServletComponentScan`。
    * 拦截所有资源。
* **Interceptor (拦截器)**：
    * 属于 Spring 框架。
    * 实现 `HandlerInterceptor` 接口。
    * 注册：实现 `WebMvcConfigurer` 接口，重写 `addInterceptors` 方法。
    * 只拦截 Spring 管理的请求。
* **执行顺序**：Filter -> Interceptor -> Controller。

**【示例图片】** 📸 需补充图片
> ![](/images/Pasted%20image%2020260209170937.png)
> ![](/images/Pasted%20image%2020260209170943.png)
> ![](/images/Pasted%20image%2020260209170948.png)
> ![](/images/Pasted%20image%2020260209170952.png)

---

## 9. 常用注解速查

> **来源**：`注解.docx`

* **Lombok**：
    * `@Data`: Getter, Setter, toString, equals, hashCode。
    * `@AllArgsConstructor`: 全参构造。
    * `@NoArgsConstructor`: 无参构造。
* **Web 开发**：
    * `@RequestParam`: 设置参数默认值。
    * `@DateTimeFormat(pattern = "yyyy-MM-dd")`: 日期格式化。
* **配置**：
    * `@Value`: 注入 `${key}`。
    * `@ConfigurationProperties`: 批量注入配置到类。
* **JSON**：
    * `@JsonInclude(JsonInclude.Include.NON_NULL)`: 属性为 null 时不生成到 JSON 中。
* **事务**：
    * `@Transactional`: 开启事务。
        * `rollbackFor`: 指定回滚异常。
        * `propagation`: 传播行为（如 `REQUIRES_NEW` 开启新事务）。
* **日志**：
    * `@Slf4j`: 自动生成 `log` 对象（`log.info`, `log.debug`）。

**【示例图片】** 📸 需补充图片
> ![](/images/Pasted%20image%2020260209171035.png)
> ![](/images/Pasted%20image%2020260209171043.png)
> ![](/images/Pasted%20image%2020260209171049.png)
> ![](/images/Pasted%20image%2020260209171102.png)
> ![](/images/Pasted%20image%2020260209171110.png)
> ![](/images/Pasted%20image%2020260209171114.png)
> ![](/images/Pasted%20image%2020260209171119.png)
> ![](/images/Pasted%20image%2020260209171142.png)
> ![](/images/Pasted%20image%2020260209171145.png)
> ![](/images/Pasted%20image%2020260209171148.png)