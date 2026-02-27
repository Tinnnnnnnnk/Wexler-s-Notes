---
tags:
  - 算法/基础概念
  - 递归
  - DFS
  - 回溯法
  - 核心模板
aliases:
  - Depth-First Search
date: 2026-02-26
---

# 🌳 深度优先搜索基础与万能模板 (DFS & Backtracking)

> [!abstract] 核心思想
> DFS 的核心策略是 **“一路走到底”**。
> 想象你在走迷宫：顺着一条路一直走，直到遇到死胡同（Base Case），然后退回上一个岔路口（Backtrack），尝试另一条路。
> 
> 

---

## 🟢 场景一：二叉树的标准 DFS (最基础)

二叉树的天然结构不存在“环路”，所以不需要记录“是否访问过”。前序、中序、后序遍历仅仅是**“处理当前节点”**的代码放的位置不同而已。

```java
public void dfsTree(TreeNode root) {
    // 1. 撞到南墙：走到空节点，直接返回 (Base Case)
    if (root == null) {
        return;
    }

    // 🌟 前序遍历位置 (在这里处理：根 -> 左 -> 右)
    // System.out.println(root.val);

    // 2. 盲目信任：派分身去走左边的路
    dfsTree(root.left);

    // 🌟 中序遍历位置 (在这里处理：左 -> 根 -> 右)

    // 3. 盲目信任：派分身去走右边的路
    dfsTree(root.right);

    // 🌟 后序遍历位置 (在这里处理：左 -> 右 -> 根)
}
```

---

## 🔵 场景二：二维网格矩阵的 DFS (岛屿/迷宫类问题)

这是 LeetCode 上极高频的题型（如：岛屿数量、单词搜索）。网格中的 DFS 必须处理**“越界”**和**“重复访问（走回头路）”**两个致命问题。



```java
// 从网格的 (r, c) 坐标开始 DFS
public void dfsGrid(char[][] grid, int r, int c) {
    // 1. 拦截非法状态 (Base Case 极度重要)
    // 越界拦截：不能跑出矩阵的上下左右边界
    if (r < 0 || c < 0 || r >= grid.length || c >= grid[0].length) {
        return;
    }
    // 南墙拦截：如果是水(0)，或者是已经访问过的陆地，直接回头
    if (grid[r][c] == '0' /* 或 grid[r][c] == '已访问标志' */) {
        return;
    }

    // 2. 留下脚印 (处理当前层)
    // ⚠️ 把当前陆地标记为水（或做特殊标记），防止陷入死循环 (Stack Overflow)
    grid[r][c] = '0'; 

    // 3. 释放分身：向 上、下、左、右 四个方向探索
    dfsGrid(grid, r - 1, c); // 上
    dfsGrid(grid, r + 1, c); // 下
    dfsGrid(grid, r, c - 1); // 左
    dfsGrid(grid, r, c + 1); // 右
}
```

---

## 🔴 场景三：回溯法 DFS (组合/排列/子集问题)

当题目要求我们**“找出所有可能的方案”**时，这就是回溯法（Backtracking）。你需要一个路径容器 `path` 来记录走过的路，并且在退回上一个岔路口时，必须**“擦除脚印”**！

```java
// 全局/引用变量，用来收集所有成功的路线
List<List<Integer>> result = new ArrayList<>();

public void backtrack(int[] nums, int startIndex, List<Integer> path) {
    // 1. 满足条件，记录成果 (Base Case)
    // 注意：必须创建一个新的 ArrayList 复制 path 的当前快照！
    // 否则后面 path 擦除脚印时，result 里的数据也会被清空
    if (/* 满足特定条件，例如 path.size() == target */) {
        result.add(new ArrayList<>(path));
        return; // 根据题目决定是否需要 return 终止继续深入
    }

    // 2. 站在岔路口，遍历所有可能的选择
    for (int i = startIndex; i < nums.length; i++) {
        
        // 剪枝逻辑 (可选)：如果不符合条件，直接 continue 跳过这条路
        
        // ① 做出选择：把当前岔路加入路径
        path.add(nums[i]);

        // ② 带着这个选择，继续深入 DFS
        // 注意：如果是排列问题，通常传 i+1；如果是可以重复选的组合，通常传 i
        backtrack(nums, i + 1, path);

        // ③ 撤销选择 (核心灵魂：回溯！)
        // 从深层退回来后，必须把刚才加进去的选择拿出来，才能去尝试 for 循环里的下一条路
        path.remove(path.size() - 1);
    }
}
```

---

> [!tip] Kasumi's Memo (避坑指南)
> 1. **死循环警告**：在图或者网格里做 DFS，**千万千万要记录 `visited` 状态**！不留脚印的话，程序会在两个相邻格子之间疯狂反复横跳，直到爆栈。
> 2. **回溯的引用陷阱**：把 `path` 丢进 `result` 收集时，必须写 `new ArrayList<>(path)`！因为 Java 传的是引用，不深拷贝的话，最后 `result` 里全是一堆空的 `path`。
> 3. **分治 vs DFS**：分治（Divide and Conquer）往往是后序遍历思维，利用底层的返回值组装答案；而普通 DFS / 回溯往往是前序遍历思维，带着一个参数箱子（如 `path`）一路往底走，见机行事。