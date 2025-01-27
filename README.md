# frontend

This template should help get you started developing with Vue 3 in Vite.

## 标签命名规则

* 以`el-`开头的标签是Element Plus的组件。
* 以`ax-`开头的标签是本项目封装的组件。
* 以`css-`开头的标签是在`styles/styles.css`里面有CSS选择器的标签。
* 如果一个标签没有上述前缀，也不是标准HTML标签，那就是语义化作用的标签，视为`<div>`即可。

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
