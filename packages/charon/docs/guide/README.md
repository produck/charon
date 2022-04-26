# Introduction

## Overview

Charon is to optimize the bundle file by translating common statements to function identifier with module bundler to shake useless codes.

## How It Works

By defining common statements as function identifiers, Common statements during use will be replaced by function identifiers next time.

Charon should be used with module bundler becase of the bundler implement tree shaking function, by this way it will shake useless code.

## Features

- **More Smaller**

The more the same statements are used, the smaller the final packaged file is.

- **More Ugly**

Convert common statements into function identifiers and you will see many identifiers instead of statements in the final output.

- **By Tree Shaking**

Based on the ESM module, you can use the tree shaking function of the module bundler to reduce useless code.