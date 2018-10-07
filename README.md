# portfolio

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## vue.jsでポートフォリオ

実装したいこと

- firebaseでログイン機能
- DBはfirestore
- hostsはfirebase
- 画像管理はfirebaseのcloud storage
- googleアナリティクスでどこまでスクロールしたかを取得。firebaseに連携
- deploy機能　github -> gcp source repository -> cloud build -> firebase hostingへのdeploy
- jsのエラー通知はslackで受け取る
