# YATSUGATAKE BASE ウェブサイト

長野県・八ヶ岳発のアウトドアライフスタイルブランド「YATSUGATAKE BASE」のブログ形式ホームページです。
HTML/CSSのみで構成された静的サイトなので、Cloudflare Pagesで無料公開できます。

## ファイル構成

```
yatsugatake-base/
├── index.html              … トップページ
├── css/style.css           … 全ページ共通スタイル
└── blog/
    ├── index.html           … ブログ記事一覧
    ├── post-yatsugatake-dog-trail.html   … 記事サンプル1(犬×登山)
    ├── post-touring-spots.html           … 記事サンプル2(バイク)
    └── post-local-voice.html             … 記事サンプル3(地域)
```

## Cloudflare Pagesで公開する手順(無料)

### 1. GitHubにアップロードする
1. https://github.com で無料アカウントを作成(すでにお持ちなら不要)
2. 新しいリポジトリを作成(例: `yatsugatake-base-site`)
3. このフォルダの中身をすべてアップロード
   - GitHubのウェブ画面から「Add file → Upload files」でドラッグ&ドロップでもOKです

### 2. Cloudflareでサイトを接続する
1. https://dash.cloudflare.com で無料アカウントを作成
2. 左メニューの「Workers & Pages」→「Create」→「Pages」→「Connect to Git」
3. 先ほどのGitHubリポジトリを選択
4. ビルド設定は以下のままでOK(静的HTMLなのでビルド不要)
   - Build command: 空欄のまま
   - Build output directory: `/`(ルートのまま)
5. 「Save and Deploy」をクリックすると、数十秒〜数分で公開されます
6. `〇〇.pages.dev` という無料URLが発行されます

### 3. 独自ドメインをつなぐ(任意・年間1,000〜2,000円程度)
- お名前.com やCloudflare自体でドメインを取得し(例: yatsugatakebase.com)、
  Pagesの「Custom domains」から接続すると独自ドメインで公開できます

## 記事を追加する方法

1. `blog/post-yatsugatake-dog-trail.html` をコピーして新しいファイル名にする
   (例: `post-summer-camping.html`)
2. タイトル・本文・日付・カテゴリを書き換える
3. `blog/index.html` と `index.html` の記事一覧(`.post-card`)にも
   同じ内容のカードを1つ追加してリンクを貼る
4. GitHubにアップロード(またはGitでpush)すると、Cloudflare Pagesが自動で
   再デプロイし、数十秒で本番サイトに反映されます

慣れてきたら、Claudeに「この内容で新しい記事を1本追加して」と頼んでいただければ、
HTMLファイルの作成からアップロード用の差分作成まで一緒に進められます。

## 次のステップの提案

- 実際の商品写真・店舗写真への差し替え(現在はSVGの仮グラフィックです)
- お問い合わせフォームの追加(Cloudflare Pages + 簡易フォーム送信サービスで無料対応可能)
- Googleアナリティクス/Search Consoleの設置(地域SEO・アクセス解析用)
- BASEストアの商品をトップページに自動連携する仕組み(API連携、要相談)
