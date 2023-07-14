<!DOCTYPE html>
<!-- page-contact.php -->
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- google font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant&display=swap" rel="stylesheet">
    <!---->
    <link rel="icon" href="./images/favicon.ico">
    <link href="https://fonts.googleapis.com/earlyaccess/hannari.css" rel="stylesheet">
    <link rel="stylesheet" href="./css/reset.css">
    <link rel="stylesheet" href="./css/style.css">
    <title>MyBlog</title>
    <script src="https://sdk.form.run/js/v2/formrun.js"></script>
    <?php header('X-FRAME-OPTIONS:DENY'); ?>
</head>
<!-- class, action, methodを変更しないでください -->
<form class="formrun" action="https://form.run/api/v1/r/5ibt7xg3rctht4wvaegl6a6t" method="post">
  <!-- ↓自由に要素を追加・編集することができます -->
    <div class="form">
      <h1 id="title"><span>お問い合わせはこちら</span></h1>
      <div class="name table">
        <label id="label" for="name">名　前</label>
        <input placeholder="名前" class="input" id="name" name="名前" type="text" data-formrun-required>
        <div data-formrun-show-if-error="名前">お名前を入力してください</div>
      </div>

      <div class="email table">
        <label id="label" for="email">メール</label>
        <input placeholder="メールアドレス" class="input" id="email" name="メールアドレス" type="text" data-formrun-type="email" data-formrun-required>
        <div data-formrun-show-if-error="メールアドレス">メールアドレスを正しく入力してください</div>
      </div>

      <div class="content table">
        <label id="label" for="content">本　文</label>
        <textarea placeholder="お問い合わせ内容" id="content" name="お問い合わせ"  data-formrun-required></textarea>
        <div data-formrun-show-if-error="お問い合わせ">お問い合わせ内容を入力してください</div>
      </div>

      <div class="check">
        <label for="check">個人情報利用同意 [必須]</label>
        <input id="check" type="checkbox" name="個人情報利用同意" data-formrun-required>
        <div data-formrun-show-if-error="個人情報利用同意">同意してください</div>
      </div>

      <!-- ボット投稿をブロックするためのタグ -->
      <div class="_formrun_gotcha">
        <style media="screen">._formrun_gotcha {position:absolute!important;height:1px;width:1px;overflow:hidden;}</style>
        <label for="_formrun_gotcha">If you are a human, ignore this field</label>
        <input type="text" name="_formrun_gotcha" id="_formrun_gotcha" tabindex="-1">
      </div>
    </div>
    <div id="button">
      <button class="button" type="submit" data-formrun-error-text="未入力の項目があります" data-formrun-submitting-text="送信中...">送信</button>
    </div>
    <div class="home">
      <a href="index.php">HOMEへ戻る</a>
    </div>
</form>
