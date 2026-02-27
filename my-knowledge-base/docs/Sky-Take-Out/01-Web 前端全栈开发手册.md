# 01-Web 前端全栈开发手册 (全量典藏版)

> [!abstract] 版本说明
> 本文档是前端基础的**全量无删减版本**。详细记录了 HTML 标签属性、CSS 样式细节、JS 语法特性以及 Vue 框架的完整用法。
> **核心来源**：`HTML-CSS-se.docx`, `HTML总结.docx`, `Js.docx`, `DOM.docx`, `Axios.docx`, `Vue.docx`, `事件.docx`, `事件监听.docx`

---

## 1. HTML 基础与进阶

### 1.1 HTML 简介与骨架
* **特点**：
    * 标签不区分大小写。
    * 属性值单双引号均可。
    * 语法结构松散（例如没有尾标签有时也能解析）。
* **标准骨架**：
    ```html
    <html>
      <head>
        <title>标题</title>
      </head>
      <body>
        </body>
    </html>
    ```

**【示例图片】** 
> ![](/images/Pasted%20image%2020260209163709.png)

### 1.2 文本与排版标签
* **标题 (`h1`-`h6`)**：字体逐渐变小，自带换行和加粗。
* **段落 (`p`)**：自带换行，段落之间有垂直间隙。
* **换行 (`br`)**：单标签，强制换行。
* **水平线 (`hr`)**：单标签，显示一条分割线。
* **加粗**：`<b>` (仅加粗) 或 `<strong>` (强调语义)。

### 1.3 多媒体标签
* **图片 (`img`)**：
    * `src`: 图片路径 (本地或网络)。
    * `alt`: 图片加载失败时显示的文字。
    * `width` / `height`: 宽高设置 (设置一个，另一个会等比例缩放)。
* **音频 (`audio`)**：
    * `src`: 音频路径。
    * `controls`: 显示播放控件。
* **视频 (`video`)**：
    * `src`: 视频路径。
    * `controls`: 显示控件。

**【示例图片】** 
> ![](/images/Pasted%20image%2020260209163802.png)
> ![](/images/Pasted%20image%2020260209163813.png)
### 1.4 超链接 (`a`)
* **属性**：
    * `href`: 跳转目标的 URL。
    * `target`: 打开方式。
        * `_self`: 在当前窗口打开 (默认)。
        * `_blank`: 在新窗口打开。

### 1.5 列表与表格 (Table)
**表格结构**：
* `<table>`: 定义表格。
    * `border`: 边框宽度。
    * `width`: 表格宽度。
    * `cellspacing`: 单元格之间的间距 (通常设为0)。
* `<tr>` (Table Row): 行。
* `<th>` (Table Header): 表头单元格 (默认加粗、居中)。
* `<td>` (Table Data): 普通单元格。

**语义化分区**：
* `<thead>`: 表头区域。
* `<tbody>`: 主体区域。
* `<tfoot>`: 页脚区域。

**【示例图片】** 
> ![](/images/Pasted%20image%2020260209163846.png)

### 1.6 表单 (Form)
用于收集用户数据并提交给服务器。

**核心属性**：
* `action`: 提交的 URL 地址。
* `method`: 提交方式。
    * **GET**: 参数拼接到 URL 后 (Url?name=abc)，长度有限，不安全 (默认)。
    * **POST**: 参数在请求体 (Body) 中，不可见，无长度限制，安全。

**【示例图片】** 
> ![](/images/Pasted%20image%2020260209163904.png)
> ![](/images/Pasted%20image%2020260209163910.png)
> ![](/images/Pasted%20image%2020260209163915.png)
> ![](/images/Pasted%20image%2020260209163919.png)

**表单项 (`input`)**：
> **注意**：表单项必须设置 `name` 属性，否则不会被提交。

| type 属性值 | 说明 |
| :--- | :--- |
| `text` | 单行文本框 |
| `password` | 密码框 (显示为星号) |
| `radio` | 单选框 (需设置相同的 `name` 属性以实现互斥；`value` 为提交的值) |
| `checkbox` | 复选框 (多选) |
| `date` | 日期选择器 |
| `time` | 时间选择器 |
| `datetime-local` | 日期时间选择器 |
| `file` | 文件上传 |
| `hidden` | 隐藏域 (不显示但会提交) |
| `submit` | 提交按钮 |
| `reset` | 重置按钮 |
| `button` | 普通按钮 |

**其他表单元素**：
* `<select>` + `<option>`: 下拉列表。
* `<textarea>`: 多行文本域 (`cols` 列数, `rows` 行数)。
* `<label>`: 点击文字即可选中关联的表单项 (需 `for` 属性对应 `id`)。

---

## 2. CSS 样式基础

### 2.1 引入方式
1.  **行内样式**: `<div style="color: red;">` (优先级最高，不推荐)。
2.  **内部样式**: `<style> ... </style>` (写在 head 中)。
3.  **外部样式**: `<link rel="stylesheet" href="xxx.css">` (推荐，复用性强)。

**【示例图片】**
> ![](/images/Pasted%20image%2020260209163932.png)
> ![](/images/Pasted%20image%2020260209163937.png)
> ![](/images/Pasted%20image%2020260209163941.png)
> ![](/images/Pasted%20image%2020260209163946.png)
> ![](/images/Pasted%20image%2020260209163951.png)
> ![](/images/Pasted%20image%2020260209163955.png)
### 2.2 选择器
1.  **元素选择器**: `span { ... }` (选中所有 span)。
2.  **类选择器**: `.class_name { ... }` (选中 class="class_name" 的元素)。
3.  **ID 选择器**: `#id_name { ... }` (选中 id="id_name" 的元素，ID 唯一)。

**优先级**: ID 选择器 > 类选择器 > 元素选择器。

**【示例图片】** 
> ![](/images/Pasted%20image%2020260209164130.png)

### 2.3 常用样式
* `color`: 字体颜色 (red, #ff0000, rgb(255,0,0))。
* `font-size`: 字体大小 (px)。
* `text-decoration`: 文本修饰 (none 去下划线, underline 下划线)。
* `text-align`: 文本对齐 (left, center, right)。
* `line-height`: 行高 (可垂直居中)。

---

## 3. JavaScript 核心

### 3.1 引入方式
1.  **内部脚本**: `<script> ... </script>` (通常放在 `</body>` 之前，防止阻塞 DOM 渲染)。
2.  **外部脚本**: `<script src="xxx.js"></script>`。
    * **注意**：如果外部 JS 使用了 `import`，需注明 `type="module"`。

**【示例图片】** 
> ![](/images/Pasted%20image%2020260209164208.png)

### 3.2 变量与常量
* `var`: 全局作用域，可重复声明 (旧标准，不推荐)。
* `let`: 块级作用域，不可重复声明 (ES6，推荐)。
* `const`: 常量，声明时必须初始化，且值不可修改。

**【示例图片】** 
> ![](/images/Pasted%20image%2020260209164217.png)
> ![](/images/Pasted%20image%2020260209164222.png)

### 3.3 数据类型
* **原始类型**:
    * `number`: 数字 (整数、小数、NaN)。
    * `string`: 字符串 (单双引号皆可)。
    * `boolean`: 布尔值。
    * `null`: 对象为空。
    * `undefined`: 声明了但未赋值。
* **检测类型**: `typeof 变量名`。
* **类型转换**:
    * `parseInt()`: 转整数。
    * `parseFloat()`: 转小数。
    * `if(变量)`: 0, null, undefined, "", NaN 视为 false。

**【示例图片】** 
> ![](/images/Pasted%20image%2020260209164233.png)

### 3.4 字符串模板
使用反引号 ( ` ) 包裹，支持换行和变量插入。
```javascript
let name = "Tom";
let str = `Hello, 
${name}`; 
```

**【示例图片】**
> ![](/images/Pasted%20image%2020260209164239.png)

### 3.5 函数 (Function)
* **标准定义**:
  ```javascript
  function add(a, b) {
      return a + b;
  }
  ```
* **匿名函数**: `var add = function(a, b) { ... }`
* **箭头函数 (ES6)**: `(a, b) => { ... }` (简化写法)。

**【示例图片】**  
> ![](/images/Pasted%20image%2020260209164246.png)
> ![](/images/Pasted%20image%2020260209164250.png)
> ![](/images/Pasted%20image%2020260209164255.png)

### 3.6 对象与 JSON
* **自定义对象**:
  ```javascript
  let user = {
      name: "Tom",
      age: 18,
      eat: function() { console.log("eating"); }
  };
  ```
    * **注意**：在对象方法中使用 `this` 时，避免使用箭头函数，否则 `this` 指向会错误。

* **JSON 转换**:
    * `JSON.stringify(obj)`: 对象 -> JSON 字符串。
    * `JSON.parse(str)`: JSON 字符串 -> 对象。

**【示例图片】**
> ![](/images/Pasted%20image%2020260209164305.png)
> ![](/images/Pasted%20image%2020260209164309.png)
> ![](/images/Pasted%20image%2020260209164314.png)
> ![](/images/Pasted%20image%2020260209164318.png)

---

## 4. DOM 操作与事件

### 4.1 DOM 树概念
Document Object Model，将 HTML 文档视为树形结构，每个标签都是一个对象。

**【示例图片】**  
> ![](/images/Pasted%20image%2020260209164344.png)

### 4.2 获取元素
* `document.getElementById('id')`: 根据 ID 获取 (返回一个)。
* `document.getElementsByTagName('div')`: 根据标签名 (返回数组)。
* `document.getElementsByName('name')`: 根据 name 属性 (返回数组)。
* **`document.querySelector('.cls')`**: 根据 CSS 选择器获取第一个 (推荐)。
* **`document.querySelectorAll('.cls')`**: 根据 CSS 选择器获取所有 (返回数组)。

**【示例图片】** 
> ![](/images/Pasted%20image%2020260209164357.png)
> ![](/images/Pasted%20image%2020260209164400.png)

### 4.3 修改元素
* `el.innerHTML = "..."`: 修改内容 (解析 HTML 标签)。
* `el.innerText = "..."`: 修改文本 (不解析标签)。
* `el.style.color = "red"`: 修改样式。
* `el.value`: 获取或设置表单项的值。

### 4.4 事件监听
* **常见事件**:
    * `onclick` / `click`: 鼠标点击。
    * `onfocus` / `focus`: 获得焦点。
    * `onblur` / `blur`: 失去焦点。
    * `onmouseenter`: 鼠标移入。
    * `onmouseleave`: 鼠标移出。
    * `onkeydown`: 键盘按下。
    * `onsubmit`: 表单提交。
    * `input`: 用户输入时触发。

* **绑定方式 (推荐 `addEventListener`)**:
  ```javascript
  let btn = document.querySelector('#btn');
  btn.addEventListener('click', function() {
      console.log("被点击了");
  });
  ```
    * 优势：可以为同一个元素绑定多个事件处理函数。

**【示例图片】**
> ![](/images/Pasted%20image%2020260209165501.png)

---

## 5. Axios 异步请求

基于 Promise 的 HTTP 客户端。

### 5.1 基本用法
需先引入 `axios.js` 文件。

```javascript
// GET 请求
axios.get('url?id=1')
  .then(resp => {
      console.log(resp.data);
  })
  .catch(err => {
      console.log(err);
  });

// POST 请求
axios.post('url', { name: 'Tom', age: 18 })
  .then(resp => { ... });
```

### 5.2 别名方法
* `axios.get(url, config)`
* `axios.post(url, data, config)`
* `axios.put(url, data, config)`
* `axios.delete(url, config)`

### 5.3 Async / Await (语法糖)
```javascript
async function getData() {
    let result = await axios.get('url');
    console.log(result.data);
}
```

**【示例图片】** 
> ![](/images/Pasted%20image%2020260209165525.png)
> ![](/images/Pasted%20image%2020260209165530.png)
> ![](/images/Pasted%20image%2020260209165534.png)
> ![](/images/Pasted%20image%2020260209165539.png)
> ![](/images/Pasted%20image%2020260209165544.png)

---

## 6. Vue 3 框架

### 6.1 快速入门
1.  引入 `vue.js`。
2.  **创建实例**:
    ```javascript
    const app = Vue.createApp({
        data() {
            return { msg: "Hello" }
        },
        methods: {
            doWork() { ... }
        }
    });
    ```
3.  **挂载**: `app.mount('#app')` (控制 id="app" 的区域)。

**【示例图片】** 
> ![](/images/Pasted%20image%2020260209165703.png)
> ![](/images/Pasted%20image%2020260209165710.png)
> ![](/images/Pasted%20image%2020260209165716.png)
> ![](/images/Pasted%20image%2020260209165724.png)
> ![](/images/Pasted%20image%2020260209165833.png)
> ![](/images/Pasted%20image%2020260209165732.png)

### 6.2 常用指令
* **`v-bind`**: 单向绑定属性 (简写 `:`)。例如 `<a :href="url">`。
* **`v-model`**: 双向数据绑定 (表单)。`<input v-model="name">`。
* **`v-on`**: 绑定事件 (简写 `@`)。例如 `<button @click="doWork">`。
* **`v-if`**: 条件判断 (如果不满足，DOM 元素会被移除)。
* **`v-else-if` / `v-else`**: 配合 v-if 使用。
* **`v-show`**: 条件显示 (通过 CSS `display: none` 控制，DOM 还在，适合频繁切换)。
* **`v-for`**: 循环遍历。
    * 遍历数组: `<div v-for="(item, index) in list" :key="item.id">`。

**【示例图片】** 📸 需补充图片
> ![](/images/Pasted%20image%2020260209165853.png)
> ![](/images/Pasted%20image%2020260209165858.png)
> ![](/images/Pasted%20image%2020260209165902.png)
> ![](/images/Pasted%20image%2020260209165906.png)
> ![](/images/Pasted%20image%2020260209165911.png)
> ![](/images/Pasted%20image%2020260209165915.png)
> ![](/images/Pasted%20image%2020260209165919.png)

### 6.3 生命周期
* `beforeCreate` / `created`
* `beforeMount` / `mounted`: 挂载完成，通常在此发送 Ajax 请求初始化数据。
* `beforeUpdate` / `updated`
* `beforeUnmount` / `unmounted`

### 6.4 组合式 API (Composition API)
* `setup()`: 入口函数，没有 `this`。
* `ref()`: 定义响应式变量 (`let count = ref(0)`，JS 中用 `count.value` 访问)。
* `onMounted()`: 钩子函数。

**【示例图片】** 📸 需补充图片
> ![](/images/Pasted%20image%2020260209165948.png)

### 6.5 Vue Router
* `createRouter()`: 创建路由对象。
* `routes`: 定义路由规则数组 `[{ path: '/home', component: Home }]`。
* `<router-link to="/home">`: 相当于 a 标签，切换路由。
* `<router-view>`: 路由出口，组件显示的位置。

**【示例图片】** 
> ![](/images/Pasted%20image%2020260209170018.png)
> ![](/images/Pasted%20image%2020260209170022.png)
> ![](/images/Pasted%20image%2020260209170027.png)

### 6.6 Element Plus
基于 Vue 3 的组件库。
* **布局**: `el-container`, `el-header`, `el-aside`, `el-main`。
* **栅格**: `el-row`, `el-col` (span 属性控制宽度，总和 24)。
* **常用组件**: `el-button`, `el-table`, `el-pagination`, `el-dialog`, `el-form`。

**【示例图片】** 📸 需补充图片
> ![](/images/Pasted%20image%2020260209165957.png)
> ![](/images/Pasted%20image%2020260209170001.png)
> ![](/images/Pasted%20image%2020260209170006.png)
> ![](/images/Pasted%20image%2020260209170010.png)