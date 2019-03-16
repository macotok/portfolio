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

<template lang="pug">
  div
    div.profileBlock
      div.profile
        div.photo
          img(src="../../assets/images/profile.jpg", width="200")
        p.name @macotok
        ul.profileIcon
          li
            a(href="https://github.com/macotok", target="_blank")
              img(src="../../assets/images/github.svg", width="20", alt="Github")
          li
            a(href="https://qiita.com/macotok", target="_blank")
              img(src="../../assets/images/qiita.svg", width="20", alt="qiita")
      div.profileList
        dl.m-list-01
          dt 今までしてきたこと
          dd 外注先とのディレクション業務
          dd チームリーダー
          dd 開発の要件定義/工数見積もり/設計/進行管理/検証
          dd MeteorでWebアプリケーション開発
          dd HTML5/CSS3/Javascriptでフロント開発
          dd WordPressでコーポレートサイト制作
          dd ReactでCMS開発
          dd KARTE(Web販促ツール)でサービス開発
          dd Vue.jsでPortfolio制作
          dd Vue.jsでCMS開発
          dd Firebaseでサーバー開発
          dt これからしたいこと
          dd React/Vue.jsでフロント開発
          dd RubyOnRails/Firebaseでサーバー開発
          dd Google Cloud Platformでアプリケーション開発
          dd Github/Qiitaの更新
          dd Webマーケティングの学習
          dt 続けていること
          dd アプリケーション制作
          dd 英会話
          dd スポーツジムで身体を動かす
          dt 好きなもの
          dd UKバンドRadiohead
          dd ダウンタウンのお笑い
          dd 犬
</template>
