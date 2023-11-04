//ローディングから画面遷移
const loadingAreaGrey = document.querySelector('#loading');
const loadingAreaGreen = document.querySelector('#loading_screen');

window.addEventListener('load', () => {
    loadingAreaGrey.animate(
        {
            opacity: [1, 0],
            visibility: 'hidden',
        },
        {
            duration: 2000,
            delay: 1000,
            easing: 'ease',
            fill: 'forwards',
        },
    );
    //ローディング中(緑色スクリーン)
    loadingAreaGreen.animate(
        {
            translate: ['0 100vh', '0 0', '0 -100vh'],
        },
        {
            duration: 2000,
            delay: 800,
            easing: 'ease',
            fill: 'forwards',
        },
    );
});

//loadingアイコン
// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

var bar = new ProgressBar.Circle(container, {
    color: '#aaa',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 4,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#aaa', width: 1 },
    to: { color: '#333', width: 4 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
  
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }
  
    }
  });
  bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  bar.text.style.fontSize = '2rem';
  
  bar.animate(1.0);  // Number from 0.0 to 1.0

//topスライドショー 
var picArray = [
    { src: './images/朝日.jpg' },
    { src: './images/昼.jpg' },
    { src: './images/夕焼け.jpg' },
    { src: './images/ポセイドン.jpg' }
];
var counter = 0;
var changePic = function () {
    if (counter < picArray.length) {
        document.getElementById('pics').src = picArray[counter].src;
        counter++;
    }
    else {
        document.getElementById('pics').src = picArray[0].src;
        counter = 1;
    }
};
var playId = 0;
var slideShow = function () {
    if (playId === 0) {
        document.getElementById('play').innerHTML = 'STOP';
        playId = setInterval(changePic, 2000);
    }
    else {
        document.getElementById('play').innerHTML = 'START';
        clearInterval(playId);
        playId = 0;
    }
};

//タイトル
const title = document.querySelector('#top_title p');

window.addEventListener('load', () => {
    title.animate(
        {
            opacity: [0, 1],
            rotate: ['x 90deg', 'y 0deg'],
        },
        {
            duration: 2000,
            easing: 'ease',
            fill: 'forwards',
        },);
});

//タイトルにカーソルが重なったら
const heading = document.querySelector('.animation_js');

heading.addEventListener('mouseover', () => {
    heading.animate({
        rotate: ['x 360deg', 'y 0deg'],
    },
    {
        duration: 2000,
    });
});

//scroll擬似要素
//監視対象が範囲内に現れたら実行する処理
const animateScroll = (entries, obs) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.animate(
                {
                    translate: [0, '100%'],
                },
                {
                    duration: 2000,
                    pseudoElement: '::before',
                    easing: 'ease',
                    fill: 'forwards',
                },
            );
            //一度実行されたら止める
            obs.unobserve(entry.target);
        }
    });
};

//監視設定
const scrollObserver = new IntersectionObserver(animateScroll);

//監視の指示
const scrollElements = document.querySelectorAll('.scroll');

scrollElements.forEach((scrollElement) => {
    scrollObserver.observe(scrollElement);
});

//ダークモード
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  
  // もしボタンのテキストが「ダークモードにする」になっているなら
  if(btn.textContent === 'ダークモードにする'){
    // クリックされた時に「ライトモードにする」に変更
    btn.textContent = 'ライトモードにする';
  
  // そうでないなら（「ライトモードにする」と表示されているなら）
  } else {
    // クリックされた時に「ダークモードにする」に戻す
    btn.textContent = 'ダークモードにする';
  }
});

//aboutImg
const aboutImg = document.querySelector('.about-img');
const classTexts = document.querySelectorAll('.fadein');

aboutImg.addEventListener('click', () => {
    aboutImg.animate(
        {
            rotate: ['x 90deg', 'y 0deg'],
        },
        {
            duration: 2000,
            easing: 'ease',
            fill: 'forwards',
        },
    );
});

// aboutのテキストを浮かび上がらせる
//監視対象が範囲内に現れたら実行する処理
const showText = (entries) => {
   entries.forEach((entry) => {
    if (entry.isIntersecting) {
        entry.target.animate(
                {
                    opacity: [0, 1],
                    filter: ['blur(.4rem)', 'blur(0)'],
                    translate: ['0 4rem', 0],
                },
                {
                    duration: 2000,
                    easing: 'ease',
                    fill: 'forwards',
                },
            );

        }
   });
};

//監視ロボットの設定
const textOfserver = new IntersectionObserver(showText);

//textのp要素を監視するように指示
classTexts.forEach((classText) => {
    textOfserver.observe(classText);
});

//item画像
const items = document.querySelectorAll('.item-img');

//監視対象が範囲内に入ったら実行する
const showItem = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.animate(
                {
                    rotate: ['x 90deg', 'y 0deg'],
                },
                {
                    duration: 2000,
                    easing: 'ease',
                    fill: 'forwards',
                },
            );
            scrollObserver.unobserve(entry.target);
        }
    });
};

//監視ロボットの設定
const itemOgserver = new IntersectionObserver(showItem);

//.item-imgを監視するように指示
items.forEach((item, index) => {
    itemOgserver.observe(item);
})

//準備完了
console.log('-STANDBY-')