# 介绍

## 概览

charon将常用语句放到函数中，使用打包工具时将重复语句使用函数标识符进行代替，并利用Tree Shaking功能将无用代码去掉，最终达到优化输出文件大小的目的。

## 它是如何工作的

通过将常用语句定义到函数中，这些语句重复出现的时候就会被函数标识符代替。
charon应该跟打包工具配合使用，利用打包工具的Tree Shaking功能去掉无用代码。

## 特点

- **更小**

常用语句使用的越多，打包输出后的文件越小。

- **更丑**

将常用语句放到函数中，打包后的代码中使用到的常用语句就会被函数标识符代替，所以看起来更不容易理解觉得更丑。

- **基于Tree Shaking**

使用ESM模块可以借助打包工具的Tree Shaking功能去掉多余的代码。