---
home: true
homeImage: /logo_zi.png
homeText: Charon
actionText: 快速上手
actionLink: /zh/guide/started
features:
- title: 更小
  details: 常用语句使用的越多，打包输出后的文件越小。
- title: 更丑
  details: 将常用语句放到函数中，打包后的代码中使用到的常用语句就会被函数标识符代替，所以看起来更不容易理解觉得更丑。
- title: 基于Tree Shaking
  details: 使用ESM模块可以借助打包工具的Tree Shaking功能去掉多余的代码。
---

## 示例

下列示例中的函数是将一个空间点转换为另一个点，接收四个参数，并对参数类型进行校验，类型错误后会抛出异常，最终返回一个新的点。

<div class="layout-column">

<<< @/docs/.vuepress/sample/sample-charon.js
<<< @/docs/.vuepress/sample/sample.js

</div>

以上代码会使用rollup进行打包并使用terser插件进行压缩

<div class="layout-column layout-column-min">

<<< @/docs/.vuepress/sample/output/sample-charon.min.js
<<< @/docs/.vuepress/sample/output/sample.min.js

</div>

<div class="layout-column">
	<p class="bundle-size bundle-left">281b</p>
	<p class="bundle-size bundle-right">317b</p>
</div>

我们可以看到使用了charon的代码在最后打包输出的代码中讲常用的语句转换为了函数，并在有重复代码的地方使用了函数标识符进行了替代，缩短了输出代码的长度，而且重复语句使用越多，打包之后文件就会越小。

::: slot footer
MIT License | Copyright (c) 2021 Produck Shop
:::