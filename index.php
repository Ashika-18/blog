<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- google font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant&family=Gloock&display=swap" rel="stylesheet">
    <!---->
    <link rel="icon" href="./images/favicon.ico">
    <link href="https://fonts.googleapis.com/earlyaccess/hannari.css" rel="stylesheet">
    <link rel="stylesheet" href="./css/reset.css">
    <link rel="stylesheet" href="./css/style.css">
    <title>MyBlog</title>
    <script src="main.js" defer></script>
</head>
<body>
    <header id="header">
        <div class="inner wrapper">
            <h1 class="logo">
                <a href="index.php"><img src="./images/ashika_logo.png" alt="logo"></a>
            </h1>
            <nav>
                <ul>
                    <li><a href="#news">News</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#business">Business</a></li>
                    <button id="btn">ダークモードにする</button>
                </ul>
            </nav>
        </div>
        <a href="contact.php" class="contact">お問い合わせ</a>
    </header>
    
    <main>
        <div id="mainvisual">
            <img id="pics" class="img" src="./images/朝日.jpg" alt="">
            <h2 id="top_title">
                <p>Ashika Work</p>
            </h2>
            <div class="play">
                <button id="play" onclick="slideShow();">PLAY</button>
            </div>
        </div>

        <section id="news" class="wrapper">
            <h2 class="section_title">
                <span class="en scroll">NEWS</span>
                <span class="ja">ニュース</span>
            </h2>

            <ul class="list">
                <li>
                    <div class="date_area">
                        <time datetime="2023-1-2">2022.12.04</time>
                        <span>Press</span>
                    </div>
                    <p><a href="https://github.com/Ashika-18">GitHubアカウントです!</a></p>
                </li>
                <li>
                    <div class="date_area">
                        <time datetime="2022-12-30">2022.12.01</time>
                        <span>Press</span>
                    </div>
                    <p><a href="https://coconala.com/services/2550383">ココならアカウントです!</a></p>
                </li>
                <li>
                    <div class="date_area">
                        <time datetime="2022-10-15">2022.10.15</time>
                        <span>News</span>
                    </div>
                    <p><a href="https://crowdworks.jp/public/employees/5055973">CWアカウントです!</a></p>
                </li>
            </ul>
        </section>

        <section id="about" class="wrapper">
            <div class="img">
                <img class="about-img" src="./images/PC.jpg" alt="about画像">
            </div>
            <div class="text">
                <h2 class="section_title">
                    <span class="en scroll">ABOUT</span>
                    <span class="ja">私について</span>
                </h2>
                <p>
                    現在は本業の傍らエンジニアをやっております。<br>
                    稼働時間<br>平日(月〜土) 1〜3時間程度<br>
                    日祝は4〜6時間程度                  
                </p>
                <p>
                    HTML&CSS<br>PHP<br>Swift<br>JavaScript<br>
                    HP作成　LP作成等
                </p>
                <p>
                    何でもお気軽にお問い合わせください！
                    <br>
                    1979-1-8<br>
                    44歳<br>
                    兵庫県在住<br>
                </p>
            </div>
        </section>

        <section id="business" class="wrapper">
            <div class="section_title">
                <h2>
                    <span class="en scroll">BUSINESS</span>
                    <span class="ja">事業内容</span>
                </h2>
            </div>
            <div class="flex">
                <div class="left">
                    <div class="item">
                        <p class="title">HTML&CSS</p>
                        <img src="images/HTML CSS.jpg" alt="html">
                    </div>
                    <div class="item">
                        <p class="title">JavaScript</p>
                        <img src="images/javascript.jpg" alt="javascript">
                    </div>
                </div>
                <div class="right">
                    <div class="item">
                        <p class="title">PHP</p>
                        <img src="./images/php.jpg" alt="PHP">
                    </div>
                    <div class="item">
                        <p class="title">Swift</p>
                        <img src="./images/swift.webp" alt="swift">
                    </div>
                </div>
            </div>
        </section>
    </main>
    <footer id="footer">
        <div class="logo">
            <a href="index.php"><img src="./images/ashika_logo.png" alt="logo"></a>
        </div>
        <div class="footer">
            <p class="copyright">&copy; web Ashika work</p>
        </div>
    </footer>
</body>
</html>