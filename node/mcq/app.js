const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const main = $('#app');
const selectLevel = $('#select_level');
const quiz_index = $('#quiz__index');
const progress = $('#quiz__progress .progress');
const quiz_questions = $('#quiz__questions');
const result_correct = $('#result__correct');
const startBtn = $('#play');
const reset = $('#reset');

const app = {
  currentIndex: 0,
  MAX_QUESTION: 9,
  point: 0,
  handelEvent: function () {
    const answers = $$('.answers button');
    answers.forEach((answer) => answer.addEventListener('click', app.render));
    reset.onclick = () => app.reset();
  },
  render: function () {
    if (app.currentIndex > app.MAX_QUESTION) {
      // if answered all question
      main.className = 'result';
      result_correct.innerHTML = app.point;
    } else {
      const chose = this.value; // get answer
      const correctAnswer = app.questions[
        app.currentIndex
      ].correct_answer.toLowerCase(); // get correct answer
      if (chose == correctAnswer) {
        app.point++;
      }

      main.className = 'quiz';
      const question = app.questions[app.currentIndex]; // get current question

      quiz_questions.innerHTML = `<h2 class="question">${question.question}</h2>
                                  <div class="answers">
                                    <button class="btn" value="true">True</button>
                                    <button class="btn" value="false">False</button>
                                  </div>`;
      quiz_index.innerHTML = app.currentIndex + 1;
      progress.style.width = quiz_index.innerText * 10 + '%';

      app.currentIndex++;
      app.handelEvent();
    }
  },
  getQuestion: function () {
    main.className = 'loading';
    const level = selectLevel.value;
    const url = `https://opentdb.com/api.php?amount=10&difficulty=${level}&type=boolean`; // api from https://opentdb.com
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        app.questions = json.results;
        console.log(this.questions);
        this.render();
      });
  },
  reset: function () {
    main.className = 'start';
    app.point = 0;
    app.currentIndex = 0;
  },
  start: function () {
    this.getQuestion();
    this.handelEvent();
  },
};

startBtn.onclick = () => app.start();
