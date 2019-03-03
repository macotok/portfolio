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

- VueCLIで開発環境構築
- VueRouterでRouting処理
- Vuexで状態管理
- Work/Skillの追加/更新/削除
- 削除の確認で「vue-js-modal」モーダル実装
- formの各項目/ボタンをcomponent化/valueをstoreで管理
- formの未入力バリデーションチェック
- fakerでstubデータ作成
- ページネーション実装

## Firebase

- Firestoreでデータ登録/取得/更新/削除
- Hosting
- 画像をStorageで管理
- Authenticationでログイン/ログアウト処理

## Other

 - レスポンシブ対応
 - PugでHTMLコーディング
 
## 未開発

- googleアナリティクスでどこまでスクロールしたかを取得。firebaseに連携
- deploy機能　github -> gcp source repository -> cloud build -> firebase hostingへのdeploy
- jsのエラー通知はslackで受け取る
