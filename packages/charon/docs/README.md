---
home: true
homeImage: /logo_zi.png
homeText: Charon
actionText: Get Started
actionLink: /guide/started
features:
- title: More Smaller
  details: The more the same statements are used, the smaller the final packaged file is.
- title: More Ugly
  details: Convert common statements into function identifiers and you will see many identifiers instead of statements in the final output.
- title: By Tree Shaking
  details: Based on the ESM module, you can use the tree shaking function of the module bundler to reduce useless code.
---

## Example

The multiply function is to translate one tuple to another tuple. this function accepts four arguments which need to check the type and return the new tuple.

<div class="layout-column">

<<< @/../examples/src/example2.js
<<< @/../examples/src/example3.js

</div>

The above codes are bundled by rollup with terser plugin and the results are as follows :

<div class="layout-column layout-column-min">

<<< @/../examples/dist/example/example2.min.js
<<< @/../examples/dist/example/example3.min.js

</div>

<div class="layout-column">
	<p class="bundle-size bundle-left">263b</p>
	<p class="bundle-size bundle-right">301b</p>
</div>

Based on charon package we can see that it will convert common statements into function identifiers. After the same statements appear they will be replaced by identifiers. more statements reused, the final output file will be more smaller.

::: slot footer
MIT License | Copyright (c) 2021 Produck Shop
:::