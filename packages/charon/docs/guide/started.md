# Getting Started

## Prerequisites

- [Nodejs](https://nodejs.org/en/)

## Installation

```sh
npm install @produck/charon
```

## Quick Start

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