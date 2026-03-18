### Java有哪些数据类型  
#### a.基本数据类型
- 字符型
	- char
- 数值型
	- 整型
		- long
		- int
		- short
	- 浮点型
		- float
		- double
	- 字节型
		- byte
- 布尔型
	- boolean

| 数据类型    | 默认值      | 大小      |
| ------- | -------- | ------- |
| boolean | false    | 1字节或4字节 |
| char    | '\u0000' | 2字节     |
| byte    | 0        | 1字节     |
| short   | 0        | 2字节     |
| int     | 0        | 4字节     |
| long    | 0L       | 8字节     |
| float   | 0.0f     | 4字节     |
| double  | 0.0      | 8字节     |

#### b.引用数据类型
- 接口 (interface)
- 类 (class)
- 数组

### 自动装箱/拆箱

- 装箱和拆箱是数据在基本数据类型和其包装类之间的转换的过程
- 由于自动装箱会严重影响性能，因此在我们编程时，需要注意到这一点，正确地声明变量类型，避免因为自动装箱引起的性能问题。
$$
\begin{array}{ccc}
\text{基本数据类型} & & \text{引用数据类型} \\
\hline
\text{byte} & \longleftrightarrow & \text{Byte} \\
\text{char} & \longleftrightarrow & \text{Character} \\
\text{short} & \longleftrightarrow & \text{Short} \\
\text{long} & \longleftrightarrow & \text{Long} \\
\text{int} & \longleftrightarrow & \text{Integer} \\
\text{float} & \longleftrightarrow & \text{Float} \\
\text{double} & \longleftrightarrow & \text{Double} \\
\text{boolean} & \longleftrightarrow & \text{Boolean} \\
\end{array}
$$




