<template>
  <div>
    <title-block title="Profile"></title-block>
    <div>
      <dl>
        <dt>今まででしてきたこと</dt>
        <dd>外注先とのディレクション業務</dd>
        <dd>チームリーダー</dd>
        <dd>開発の要件定義/工数見積もり/設計/進行管理/検証</dd>
        <dd>MeteorでWebアプリケーション開発</dd>
        <dd>jQueryでフロント開発</dd>
        <dd>ReactでCMS開発</dd>
        <dd>Vue.jsでPortfolio制作</dd>
        <dt>これからしてきたいこと</dt>
        <dd>React/Vue.jsでのフロント開発</dd>
        <dd>RubyOnRailsでのサーバー開発</dd>
        <dd>Firebase/GCPでアプリケーション開発</dd>
        <dd>Github/Qiitaの更新</dd>
        <dd>WebマーケティングでWeb開発</dd>
        <dt>10年後に何をしていたいか</dt>
        <dd>
          正直10年後に何をしているか想像ができない。<br>
          これからしていきたいことを着実に遂行することで見えてくると思ってます。
        </dd>
      </dl>
    </div>
    <div>
      <img src="../assets/images/profile.jpg" width="200">
    </div>
  </div>
</template>

<script>
import TitleBlock from '../components/TitleBlock';

export default {
  components: {
    TitleBlock,
  },
};
</script>
