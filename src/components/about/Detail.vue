<style lang="scss" scoped>
  .about {
    margin: 5% 0 2.5%;
  }
</style>

<template>
  <div>
    <dl class="m-list-01">
      <dt>Vue</dt>
      <dd>VueCLIで開発環境構築</dd>
      <dd>VueRouterでRouting処理</dd>
      <dd>Vuexで状態管理</dd>
      <dd>Work/Skillの追加/更新/削除</dd>
      <dd>削除の確認で「vue-js-modal」モーダル実装</dd>
      <dd>formの各項目/ボタンをcomponent化/valueをstoreで管理</dd>
      <dd>formの未入力バリデーションチェック</dd>
      <dd>fakerでstubデータ作成</dd>
      <dd>ページネーション実装</dd>
      <dt>Firebase</dt>
      <dd>Firestoreでデータ登録/取得/更新/削除</dd>
      <dd>Hosting</dd>
      <dd>画像をStorageで管理</dd>
      <dd>Authenticationでログイン/ログアウト処理</dd>
      <dt>Other</dt>
      <dd>レスポンシブ対応</dd>
    </dl>
    <div>
      <p class="about">
        このサイトはGitHubで管理しています。<br>
        そのリポジトリはこちらになります。
      </p>
      <link-button
        linkTo="https://github.com/macotok/portfolio"
      >
        To GitHub
      </link-button>
    </div>
  </div>
</template>

<script>
import LinkButton from '@/components/button/Link';

export default {
  components: {
    LinkButton,
  },
};
</script>
