### String StringBuilder StringBuffer
#### 区别
- String类的对象是不可变的，一旦一个String类的对象被创建，那么其所包含的字符串内容就无法被改变。因此假使对于一个字符串进行修改操作，都会生成一个新的String对象，而不是修改原有对象。
- StringBuilder提供了一系列方法来对字符串进行增删改查，这些操作都是直接作用于当前字符串对象的底层数组上的，不会生成新的String对象
- StringBuilder不是线程安全的，意味着在没有外部同步的情况下，不适合多线程环境
- StringBuffer与前两者类似，但是StringBuffer是线程安全的，方法前面加了synchronized 关键字

#### 适用场景
- **String**：适用于字符串内容不会改变的场景，比如说作为 HashMap 的 key。
- **StringBuilder**：适用于单线程环境下需要频繁修改字符串内容的场景，比如在循环中拼接或修改字符串
- **StringBuffer**：现在已经不怎么用了