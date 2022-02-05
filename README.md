# Initialize
■1.rootにて`yarn install`を実施 ■2.src/functionsに移動して`yarn install`を実施。


# Env
Firebaseプロジェクトの情報を入力する。


# Emulator
```yarn emulate```

FirebaseAuth / Firestore / CloudFunctionsをEmulateできる。
コマンドで起動後に`localhost:4000`にアクセスするとFirebase系サービスのローカル開発環境一覧UIに飛べる。


# Deploy
## Deploy on Cloud Functions
```yarn deploy:functions```

src/functions/src以下がsrc/functions/src/lib/*.jsにビルドされてデプロイされる。

## Deploy on Firestore Rules
```yarn deploy:rules```

`firestore.rules`ファイルがrootにある場合、本デプロイコマンドでFirestoreのRulesを設定できる。

## Deploy on Vercel
Vercelからgitリポジトリー連携を行う。


# Lint
```yarn lint:all```

eslintとpretieerによるフォーマットを行う。

# Style

[Tailwind CSS v3.0](https://tailwindcss.com/blog/tailwindcss-v3)を使用。
