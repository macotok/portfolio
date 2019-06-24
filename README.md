# portfolio

Vue/Firebaseで開発

## Build Setup

``` bash
# install dependencies
yarn

# serve with hot reload at localhost:8080
yarn dev

# build for production with minification
yarn build

# build for production and view the bundle analyzer report
yarn build --report
```

## deploy to firebase

```
$ yarn build
$ firebase deploy
```

## Vue.js

 - Vuexで状態管理
 - VueRouterでRouting処理
 - Work/Skillの追加/更新/削除
 - 削除の確認で「vue-js-modal」モーダル実装
 - Atomic Designの概念でUI構築
 - 「vee-validate」でWork/Skillの追加/更新バリデーション実装
 - fakerでstubデータ作成
 - ページネーション実装
    
## Firebase

- Firestoreでデータ登録/取得/更新/削除
- Hosting
- 画像をStorageで管理
- Authenticationでログイン/ログアウト処理

## Other
 
 - Webpackでゼロから環境構築
 - Jestと@vue/test-utilsでテストコード記述
 - レスポンシブ対応
 - PugでTemplateコーディング
