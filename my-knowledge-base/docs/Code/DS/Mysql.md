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
