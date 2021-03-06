const featureList = [
  {
    id: 31,
    feature:
      [
        {
          name: '料金アラートを設定/IAMユーザー作成/CloudTrail設定',
          role: '初期設定',
        },
        {
          name: 'VPCネットワーク/パブリックサブネット/プライベートサブネット/ルーティング/EC2インスタンス/キーペアの作成/ApacheでWebサーバー構築/ファイアウォールの設定/Route53でDNS設定/RDSでDBサーバー構築',
          role: '構築',
        },
      ],
  },
  {
    id: 30,
    feature:
      [
        {
          name: 'React Hooks/Redux/BootstrapでView側を開発',
          role: '開発作業',
        },
        {
          name: 'React Hooks/ReduxにTypeScriptを導入',
          role: '開発作業',
        },
        {
          name: 'hostingは「Firebase」で構築',
          role: '構築作業',
        },
      ],
  },
  {
    id: 29,
    feature:
      [
        {
          name: 'WordPressのCMSで投稿したdataをAPI(GraphQL)で受け取る。ViewはReactで構築',
          role: '開発作業',
        },
        {
          name: 'WordPressのCMS機能「投稿」「カスタムタイプ投稿」「固定ページ」「Advanced Custom Fields」「Menu」',
          role: '開発作業',
        },
        {
          name: 'styleはMaterial-UIとStyled-Componentsで構成',
          role: '開発作業',
        },
        {
          name: 'hostingとcontact「Netlify」で構築',
          role: '構築作業',
        },
      ],
  },
  {
    id: 28,
    feature:
      [
        {
          name: 'Nativeアプリの管理画面構築',
          role: '開発作業',
        },
        {
          name: '記事一覧画面/新規登録画面/記事編集画面作成、Firebaseからdataを取得後、providerで管理する処理を開発、事業者ごとのFiltering機能、各入力項目の作成、記事の表示順制御機能、記事複製機能、他resourceのreference機能、providerからdata取得、connect関数でdata取得、dispatch、記事のプレビュー機能開発、記事の公開日時/表示日時の日時設定機能、検索機能、TypeScript導入、Jest導入、修正作業',
          role: '開発作業',
        },
      ],
  },
  {
    id: 27,
    feature:
      [
        {
          name: 'React Hooks/Redux/BootstrapでView側を開発',
          role: '開発作業',
        },
        {
          name: 'hostingは「Firebase」で構築',
          role: '構築作業',
        },
      ],
  },
  {
    id: 26,
    feature:
      [
        {
          name: '管理画面のアンケート設定画面をVue.js/Vuexで開発(モーダル機能/表示並び替え機能/フォームバリデーション機能/ComponentをAtomic Designの概念で設計)',
          role: '開発作業/開発要件定義/開発工数出し/進捗管理',
        },
        {
          name: '右カラム􏰆「アカウントをお持ちでない場合」',
          role: 'ログイン有無をAPIで取得して表示切り替え機能を実装。Reactで制作したCMSで機能実装',
        },
        {
          name: 'メインカラムの「開催中のキャンペーン」',
          role: '開発要件定義/開発工数出し/進捗管理',
        },
      ],
  },
  {
    id: 25,
    feature:
      [
        {
          name: 'Web接客ツール「KARTE」でユーザーの選択している店舗や商品購入データをJavascriptで取得してデータ構築。それを元にセグメント化',
          role: '開発作業',
        },
        {
          name: 'KARTEのセミナーに登壇してKARTEを使った施策について説明',
          role: 'セミナー登壇',
        },
      ],
  },
  {
    id: 24,
    feature:
      [
        {
          name: 'React/Redux/Material-UIでView側を開発',
          role: '開発作業',
        },
        {
          name: 'サーバーサイドは「Firebase」で開発',
          role: '開発作業',
        },
      ],
  },
  {
    id: 23,
    feature:
      [
        {
          name: '「イオンのお得なお買い物情報」「おすすめキャンペーン」「周囲の店舗のお得な情報」「今日は何の日?」',
          role: '開発要件定義/開発設計/開発工数出し/進捗管理',
        },
        {
          name: 'ビジュアルの「ローテバナー」',
          role: 'Reactで制作したCMSで機能実装(画像登録/表示日時/保存データをAPIで投げ処理)',
        },
        {
          name: '「お気に入り店舗」',
          role: '都道府県店舗のAPIデータをパラメーターで市区町村ごとに振り分ける開発設計',
        },
        {
          name: '保存できない不具合を処理',
          role: 'Reactで制作したCMSで保存してAPIにRequestする処理かできない不具合を解決',
        },
      ],
  },
  {
    id: 22,
    feature:
      [
        {
          name: '「https://paso-tokyo.com/」「https://jewelry.paso-tokyo.com/」の全画面',
          role: 'Pug/Sass/Javascript/WordPressで開発',
        },
        {
          name: '「News」「Collection」「Exhibition」の投稿機能',
          role: 'WordPressのカスタム投稿タイプ、カスタムフィールドで開発',
        },
        {
          name: '「Contact」のお問い合わせ機能',
          role: 'WordPressのプラグインで開発',
        },
      ],
  },
  {
    id: 19,
    feature:
      [
        {
          name: '全てのアニメーション作業',
          role: 'CSS3とjQueryで開発',
        },
      ],
  },
  {
    id: 18,
    feature:
      [
        {
          name: 'Meteorでクライアント/サーバーの構築',
          role: '投稿機能/ログインログアウト処理/スレッド編集削除機能/ユーザー管理画面構築/Routing処理/サーバー処理/いいね機能/返信機能/ユーザーと動画同時再生機能',
        },
        {
          name: 'DBはMongoDBを使用',
          role: 'MeteorからサーバーにRequest/Response',
        },
        {
          name: 'Herokuでインフラ構築',
          role: '構築作業',
        },
        {
          name: 'YouTubeのAPIを使って動画選択/再生機能',
          role: '開発作業とリアルタイム投稿機能',
        },
        {
          name: 'TwitterのAPIを使って関連ツイートを取得',
          role: '開発作業とCron構築',
        },
        {
          name: '全画面のデザイン',
          role: 'デザイン業務',
        },
      ],
  },
  {
    id: 17,
    feature:
      [
        {
          name: '全てのアニメーション作業',
          role: 'CSS3とjQueryで開発',
        },
      ],
  },
  {
    id: 16,
    feature:
      [
        {
          name: '「採用情報」を除く全画面',
          role: 'HTML/CSS/Javascript/WordPressで開発',
        },
        {
          name: '「ニュース」の投稿機能',
          role: 'WordPressのカスタムフィールドで開発',
        },
        {
          name: '「お問い合わせ」のお問い合わせ機能',
          role: 'WordPressのプラグインで開発',
        },
      ],
  },
  {
    id: 15,
    feature:
      [
        {
          name: '全画面開発作業',
          role: 'HTML/CSS/Javascript/WordPressで開発',
        },
        {
          name: '「お知らせ」「ブログ」の投稿機能',
          role: 'WordPressのカスタム投稿タイプとカスタムフィールドで開発',
        },
        {
          name: '「お問い合わせ」のお問い合わせ機能',
          role: 'WordPressのプラグインで開発',
        },
      ],
  },
  {
    id: 14,
    feature:
      [
        {
          name: '全てのアニメーション作業',
          role: 'CSS3とjQueryで開発',
        },
      ],
  },
  {
    id: 13,
    feature:
      [
        {
          name: '全てのアニメーション作業',
          role: 'CSS3とjQueryで開発',
        },
        {
          name: 'エイプリルフールネタとしてギミック考察',
          role: '企画から参加',
        },
      ],
  },
  {
    id: 12,
    feature:
      [
        {
          name: 'TOPページ/下層テンプレートページ開発',
          role: 'HTML/CSS/jQueryで開発作業',
        },
      ],
  },
  {
    id: 11,
    feature:
      [
        {
          name: 'TOPページ/下層テンプレートページ開発',
          role: 'HTML/CSS/jQueryで開発作業',
        },
      ],
  },
  {
    id: 10,
    feature:
      [
        {
          name: '全てのアニメーション作業',
          role: 'CSS3とjQueryで開発',
        },
        {
          name: 'エイプリルフールネタとしてギミック考察',
          role: '企画から参加',
        },
      ],
  },
  {
    id: 9,
    feature:
      [
        {
          name: '全画面の開発作業',
          role: 'HTML/CSS/Javascript/WordPressで開発',
        },
        {
          name: 'csvで記事一括投稿',
          role: 'WordPressのプラグインで開発',
        },
        {
          name: 'キャプチャ画面を自動ダウンロード',
          role: '「casperjs」「phantomjs」で開発',
        },
        {
          name: '全画面のデザイン',
          role: 'デザイン業務',
        },
      ],
  },
  {
    id: 8,
    feature:
      [
        {
          name: 'TOPページ/下層テンプレートページ開発',
          role: 'HTML/CSS/jQueryで開発作業',
        },
      ],
  },
  {
    id: 7,
    feature:
      [
        {
          name: '全てのアニメーション作業',
          role: 'CSS3とjQueryで開発',
        },
      ],
  },
  {
    id: 6,
    feature:
      [
        {
          name: '全画面の開発',
          role: 'WordPressで開発作業',
        },
        {
          name: '「ミスチルFansチャンネル」の投稿をajaxで取得してTOPページに表示',
          role: '開発作業',
        },
        {
          name: '全画面のデザイン',
          role: 'デザイン業務',
        },
      ],
  },
  {
    id: 5,
    feature:
      [
        {
          name: 'TOPページ/下層テンプレートページ開発',
          role: 'HTML/CSS/jQueryで開発作業',
        },
      ],
  },
  {
    id: 4,
    feature:
      [
        {
          name: '全てのアニメーション作業',
          role: 'CSS3とjQueryで開発',
        },
      ],
  },
  {
    id: 3,
    feature:
      [
        {
          name: '全画面の開発',
          role: 'HTML/CSS/jQueryで開発作業',
        },
        {
          name: '流し込み用のテンプレートページ開発',
          role: 'HTML/CSS/jQueryで開発作業',
        },
      ],
  },
  {
    id: 2,
    feature:
      [
        {
          name: 'アイテムの登録と詳細表示/おすすめアイテムの表示/各ショップの登録と詳細表示/Blogの投稿と詳細表示/Stylingの投稿と詳細表示/Newsの投稿と詳細表示をMovableTypeで実装',
          role: '開発作業',
        },
        {
          name: '全画面の開発作業',
          role: 'HTML/CSS/jQueryで開発作業',
        },
      ],
  },
];

export default featureList;
