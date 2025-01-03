# Web Components Renderer Sample

このプロジェクトでは、Web Componentsの再利用性を高める方法を示しています。具体的には、`slot`とカスタムイベントを使って、柔軟で拡張可能なコンポーネント設計を実現します。
元々のユースケースに対して、カードスタイルやチームのTodoなど、さまざまなバリエーションを簡単に切り替えることができます。

こちらのリポジトリはQiitaに投稿した記事の内容を実装したものです

[再利用性を高めたWeb Components](https://qiita.com/maaaashi/items/3376cdd0b6ee75c634eb)

## 目次

- [Web Components Renderer Sample](#web-components-renderer-sample)
  - [目次](#目次)
  - [プロジェクト概要](#プロジェクト概要)
  - [インストール方法](#インストール方法)
  - [使い方](#使い方)
    - [基本的な使い方](#基本的な使い方)
    - [レンダラーの変更](#レンダラーの変更)
    - [Todoの種類を変更](#todoの種類を変更)
  - [コンポーネントの説明](#コンポーネントの説明)
    - [`my-todos`](#my-todos)
    - [`team-todos`](#team-todos)
    - [`list-renderer`](#list-renderer)
    - [`card-renderer`](#card-renderer)

## プロジェクト概要

このプロジェクトでは、以下のコンポーネントを提供します：

1. **my-todos**: 自分のTodoリストを取得し、表示するコンポーネント
2. **team-todos**: チームのTodoリストを取得し、表示するコンポーネント（`my-todos`の代わりに使用）
3. **list-renderer**: Todoリストをリストスタイルで描画するコンポーネント
4. **card-renderer**: Todoリストをカードスタイルで描画するコンポーネント（`list-renderer`の代わりに使用）

`my-todos`コンポーネントは、Todoリストを取得し、`todo-fetched`イベントで親コンポーネントにTodoのID一覧を渡します。親コンポーネントは、そのID一覧を使って`list-renderer`や`card-renderer`コンポーネントに渡し、適切なスタイルでTodoリストを表示します。

## インストール方法

このプロジェクトは、`Lit`を使って実装されています。以下の手順でセットアップできます。

1. プロジェクトをクローンします

   ```bash
   git clone https://github.com/maaaashi/webcomponent-renderer-sample.git
   ```

2. 必要な依存関係をインストールします

   ```bash
   cd webcomponent-renderer-sample
   npm install
   ```

## 使い方

### 基本的な使い方

以下のコードは、`my-todos`コンポーネントを使ってTodoリストを表示する方法です。

```html
<my-todos @todo-fetched="${this.handleTodoFetched}">
  <list-renderer .ids="${this.todoIds}"></list-renderer>
</my-todos>
```

- `my-todos`（または`team-todos`）は、TodoのID一覧を親に渡します。
- `list-renderer`（または`card-renderer`）がそのIDを受け取ってリストを表示します。

### レンダラーの変更

`list-renderer`を`card-renderer`に置き換えることで、カードスタイルの表示に変更できます。

```html
<my-todos @todo-fetched="${this.handleTodoFetched}">
  <card-renderer .ids="${this.todoIds}"></card-renderer>
</my-todos>
```

### Todoの種類を変更

`my-todos`コンポーネントを`team-todos`に変更することで、個人のTodoではなくチームのTodoを表示できます。

```html
<team-todos @todo-fetched="${this.handleTodoFetched}">
  <list-renderer .ids="${this.todoIds}"></list-renderer>
</team-todos>
```

## コンポーネントの説明

### `my-todos`

my-todosコンポーネントは、Todoの一覧を取得し、そのID一覧を親コンポーネントに渡します。

### `team-todos`

team-todosは、my-todosの代わりに使用でき、チームのTodoリストを取得します。

### `list-renderer`

list-rendererは、my-todosから渡されたTodoのID一覧を使って、リストスタイルでTodoを描画します。

### `card-renderer`

card-rendererは、list-rendererの代わりに使用でき、Todoリストをカードスタイルで表示します。
