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
