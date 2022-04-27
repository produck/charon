# 快速上手

## 前提条件

- [Nodejs](https://nodejs.org/en/)

## 安装

```sh
npm install @produck/charon
```

## 使用

```js
import { Type, Lang } from '@produck/charon';

function sum(x, y) {
	if(Type.Not.Number(x)) {
		Lang.Throw.Error('x must be a number');
	}

	if(Type.Not.Number(y)) {
		Lang.Throw.Error('y must be a number');
	}

	return x + y;
}

```

::: warning
如果和lerna一起使用，请确保所有依赖了charon的包的版本必须一致，防止造成最终打包结果中输出了重复的charon内容
:::