const btn = document.getElementById("btn"); // ボタンを取得
const textElement = document.getElementById("text"); // h2要素を取得

btn.addEventListener("click", function() {
    if (textElement.textContent === "ボタンをクリックしてください") {
        textElement.textContent = "ボタンをクリックしました"; // テキスト変更
    } else {
        textElement.textContent = "ボタンをクリックしてください"; // 元に戻す
    }
});
