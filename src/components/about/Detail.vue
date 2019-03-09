<style lang="scss" scoped>
  .about {
    margin: 5% 0 2.5%;
  }
</style>

<template lang="pug">
  div
    dl.m-list-01
      dt Vue.js
      dd VueCLIで開発環境構築
      dd VueRouterでRouting処理
      dd Vuexで状態管理
      dd Work/Skillの追加/更新/削除
      dd 削除の確認で「vue-js-modal」モーダル実装
      dd formの各項目/ボタンをcomponent化/valueをstoreで管理
      dd formの未入力バリデーションチェック
      dd fakerでstubデータ作成
      dd ページネーション実装
      dt Firebase
      dd Firestoreでデータ登録/取得/更新/削除
      dd Hosting
      dd 画像をStorageで管理
      dd Authenticationでログイン/ログアウト処理
      dt Other
      dd レスポンシブ対応
      dd PugでHTMLコーディング
      dd Webpack/babelのversionを上げてスプレット演算子対応
    div
      p.about
        | このサイトはGitHubで管理しています。
        br
        | そのリポジトリはこちらになります。
      link-button(linkTo="https://github.com/macotok/portfolio", :targetBlank="true")
        | To GitHub
</template>

<script>
import LinkButton from '@/components/button/Link';

export default {
  components: {
    LinkButton,
  },
};
</script>
