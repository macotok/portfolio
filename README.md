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

## Vue開発

- VueCLIで開発環境構築
- VueRouterでRouting処理
- Vuexで状態管理
- Work/Skillの追加/更新/削除
- 削除の確認で「vue-js-modal」モーダル実装
- formの各項目/ボタンをcomponent化/valueをstoreで管理
- formの未入力バリデーションチェック
- fakerでstubデータ作成
- ページネーション実装

## Firebase開発

- Firestoreでデータ登録/取得/更新/削除
- Hosting

## 未開発

- firebaseでログイン機能
- 画像管理はfirebaseのcloud storage
- googleアナリティクスでどこまでスクロールしたかを取得。firebaseに連携
- deploy機能　github -> gcp source repository -> cloud build -> firebase hostingへのdeploy
- jsのエラー通知はslackで受け取る
