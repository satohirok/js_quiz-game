const quiz = [
  {
    question: 'ゲーム史上、最も売れたゲーム機は次のうちどれ?',
    answers: [
      'スーパーファミコン',
      'プレイステーション2',
      'ニンテンドースイッチ',
      'ニンテンドーDS'
    ],
    correct: 'ニンテンドーDS'
  },
  {
    question: '次の中で、読売ジャイアンツの永久欠番になっていない番号はどれ',
    answers: [
      '1番',
      '3番',
      '14番',
      '17番'
    ],
    correct: '17番'
  },
  {
    question: '日本人メジャーリーガーで初のホームランを打ったのは次のうち誰？',
    answers: [
      'イチロー',
      '松井秀喜',
      '野茂英雄',
      '新庄剛志'
    ],
    correct: '野茂英雄'
  },
];
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;



// 定数の文字列はHTMLに反映させる

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

// クイズの問題文、選択肢を定義する
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}

setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解!');
    score++;
  } else {
    window.alert('不正解!');
  }

  quizIndex++;

  if(quizIndex < quizLength){
    // 問題数がまだあればこちらを実行
    setupQuiz();
  } else {
    // 問題数がもう無ければこちらを実行
    window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
  }
};



// ボタンをクリックしたら正誤判定

let handlerIndex = 0;

while(handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}
