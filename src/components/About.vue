<template>
  <div>
    <p v-if="page === 'top'">このPortfolioはVue/Firebaseで開発しました。</p>
    <dl v-if="page === 'detail'" class="m-list-01">
      <dt>Vue開発</dt>
      <dd>VueCLIで開発環境構築</dd>
      <dd>VueRouterでRouting処理</dd>
      <dd>Vuexで状態管理</dd>
      <dd>Work/Skillの追加/更新/削除</dd>
      <dd>削除の確認で「vue-js-modal」モーダル実装</dd>
      <dd>formの各項目/ボタンをcomponent化/valueをstoreで管理</dd>
      <dd>formの未入力バリデーションチェック</dd>
      <dd>fakerでstubデータ作成</dd>
      <dd>ページネーション実装</dd>
      <dt>Firebase開発</dt>
      <dd>Firestoreでデータ登録/取得/更新/削除</dd>
      <dd>Hosting</dd>
      <dd>画像をStorageで管理</dd>
      <dd>Authenticationでログイン/ログアウト</dd>
    </dl>
  </div>
</template>

<script>
export default {
  props: {
    page: String,
  },
};
</script>
