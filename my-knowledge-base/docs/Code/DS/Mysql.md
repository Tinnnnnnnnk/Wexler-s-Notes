### 去重
```mysql
-- 找出所有买过票的、不重复的手机号
SELECT DISTINCT phone FROM fans;
```

`DISTINCT` 必须放在 `SELECT` 的紧后面！
### null相关
```mysql
不可以
id = null
要写
id is null
```
### 计算长度
 ```mysql
 select tweet_id  from Tweets where char_length(content)>15
 ```
 使用函数`char_length( )`即可，括号内的内容就是需要的字段