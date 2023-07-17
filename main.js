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
            rotate: ['x 90deg', 0],
        },
        {
            duration: 2000,
            easing: 'ease',
            fill: 'forwards',
        },
        );
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

aboutImg.addEventListener('click', () => {
    aboutImg.animate(
        {
            rotate: ['x 90deg', '0'],
        },
        {
            duration: 2000,
            easing: 'ease',
            fill: 'forwards',
        },
    );
});

//item画像
const items = document.querySelectorAll('.item-img');

items.forEach((item, index) => {
    item.animate(
    {
        opacity: [0, 1],
        rotate: ['y 90deg', 0],
    },
    {
        duration: 2000,
        delay: [index] * 300,
        fill: 'forwards',
    },
    );
});


//準備完了
console.log('-STANDBY-')