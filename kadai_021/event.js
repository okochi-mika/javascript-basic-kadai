const btn = document.getElementById('btn'); // ボタンのIDを取得
const text = document.getElementById('text'); // h2のIDを取得

btn.addEventListener('click', () => { // クリックイベントを設定
  setTimeout(() => {
    text.textContent = "ボタンがクリックしました"; // 2秒後に文章変更
  }, 2000);
});
