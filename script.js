// DOM要素の取得
const num1Element = document.getElementById('num1');
const num2Element = document.getElementById('num2');
const answerElement = document.getElementById('answer');
const checkBtn = document.getElementById('checkBtn');
const nextBtn = document.getElementById('nextBtn');
const resultElement = document.getElementById('result');

let correctAnswer;

// 新しい問題を生成する関数
function generateQuestion() {
    // 1から100までのランダムな整数を生成
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;

    // 正解を計算
    correctAnswer = num1 + num2;

    // 問題をHTMLに表示
    num1Element.textContent = num1;
    num2Element.textContent = num2;

    // 前回の結果と入力値をクリア
    resultElement.textContent = '';
    resultElement.className = '';
    answerElement.value = '';
    answerElement.focus();
}

// 答えをチェックする関数
function checkAnswer() {
    const userAnswer = parseInt(answerElement.value, 10);

    if (isNaN(userAnswer)) {
        resultElement.textContent = '数字を入力してください。';
        resultElement.className = 'incorrect';
        return;
    }

    if (userAnswer === correctAnswer) {
        resultElement.textContent = '正解！ 🎉';
        resultElement.className = 'correct';
        confetti(); // 派手なアニメーションを追加
    } else {
        resultElement.textContent = `不正解！ 正解は ${correctAnswer} です。`;
        resultElement.className = 'incorrect';
    }
}

// イベントリスナーの設定
checkBtn.addEventListener('click', checkAnswer);
nextBtn.addEventListener('click', generateQuestion);

// Enterキーでも答え合わせができるようにする
answerElement.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkAnswer();
    }
});

// 最初の問題を生成
generateQuestion();
