<style scoped lang="scss">
  @import "../../assets/sass/styles";
  .profileBlock {
    display: flex;
    .photo {
      img {
        display: block;
        border-radius: $border-radius;
      }
    }
    .name {
      padding: .5em 0;
      font-weight: bold;
      font-size: 110%;
    }
    .profileIcon {
      display: flex;
      li {
        padding-right: .5em;
      }
    }
    .profileList {
      margin-left: 50px;
    }
  }
</style>

<template>
  <div>
    <div class="profileBlock">
      <div class="profile">
        <div class="photo">
          <img src="../../assets/images/profile.jpg" width="200">
        </div>
        <p class="name">@macotok</p>
        <ul class="profileIcon">
          <li><a href="https://github.com/macotok" target="_blank"><img src="../../assets/images/github.svg" width="20" alt="Github"></a></li>
          <li><a href="https://qiita.com/macotok" target="_blank"><img src="../../assets/images/qiita.svg" width="20" alt="qiita"></a></li>
        </ul>
      </div>
      <div class="profileList">
        <dl class="m-list-01">
          <dt>今までしてきたこと</dt>
          <dd>外注先とのディレクション業務</dd>
          <dd>チームリーダー</dd>
          <dd>開発の要件定義/工数見積もり/設計/進行管理/検証</dd>
          <dd>MeteorでWebアプリケーション開発</dd>
          <dd>HTML5/CSS3/Javascriptでフロント開発</dd>
          <dd>WordPressでコーポレートサイト制作</dd>
          <dd>ReactでCMS開発</dd>
          <dd>KARTE(Web販促ツール)でサービス開発</dd>
          <dd>Vue.jsでPortfolio制作</dd>
          <dd>Vue.jsでCMS開発</dd>
          <dt>これからしたいこと</dt>
          <dd>React/Vue.jsでフロント開発</dd>
          <dd>RubyOnRails/Firebaseでサーバー開発</dd>
          <dd>Google Cloud Platformでアプリケーション開発</dd>
          <dd>Github/Qiitaの更新</dd>
          <dd>Webマーケティングの学習</dd>
        </dl>
      </div>
    </div>
  </div>
</template>
