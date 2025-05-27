# Next.js Todo アプリケーション

モダンな UI と UX を備えた Todo 管理アプリケーションです。

## 機能

- Todo の一覧表示
- Todo の新規作成
- レスポンシブデザイン
- モダンな UI/UX

## 技術スタック

- Next.js 14
- TypeScript
- Tailwind CSS
- Java (バックエンド)

## 開発環境のセットアップ

1. リポジトリのクローン

```bash
git clone https://github.com/kaji5963/nextjs-todo-app.git
cd nextjs-todo-app
```

2. 依存関係のインストール

```bash
npm install
```

3. 開発サーバーの起動

```bash
npm run dev
```

4. ブラウザで確認

```
http://localhost:3000
```

## プロジェクト構造

```
src/
├── app/                    # アプリケーションのルーティングとページ
│   ├── layout.tsx
│   └── page.tsx
├── components/            # 共通コンポーネント
│   ├── ui/               # 基本的なUIコンポーネント
│   ├── layout/           # レイアウト関連のコンポーネント
│   └── features/         # 機能ごとのコンポーネント
└── lib/                  # ユーティリティ関数やカスタムフック
```

## ライセンス

MIT
