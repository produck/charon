---
home: true
homeImage: /logo_zi.png
homeText: Charon
actionText: Get Started
actionLink: /charon/
features:
- title: More Short
  details: The more the same statements are used, the smaller the final packaged file is.
- title: More Ugly
  details: Convert common statements into function identifiers and you will see many identifiers instead of statements in the final output.
- title: By Tree Shaking
  details: Based on the ESM module, you can use the tree shaking function of the module bundler to reduce useless code.
---

<!-- next 排版，高度，换行（white-space: normal）, 计算出字节数 -->

## example

example.js :
<div class="layout-column">

<<< @/../examples/src/example2.js
<<< @/../examples/src/example3.js

</div>

bundle.min.js :
<div class="layout-column layout-column-min">

<<< @/../examples/dist/example/example2.min.js
<<< @/../examples/dist/example/example3.min.js

</div>

Based on charon package we can see that it will convert common statements into function identifiers. After the same statements appear they will be replaced by identifiers. If the more statements appear the smaller the final output file will be.
