import React from 'react';
const questions = [
  {
    title: 'Кто разработал устав для союза спасения?',
    variants: ['С. П. Трубецкой', 'Ф. Н. Глинка ', 'П. И. Пестелем'],
    correct: 2,
  },
  {
    title: 'В какое время существовали декабристские организации в России?',
    variants: [
      'Первая половина 19 века',
      'Вторая половина 19 века',
      'Первая половина 20 века',
      'Вторая половина 20 века',
    ],
    correct: 0,
  },
  {
    title: 'Что послужило толчком к развитию общественных движений начала 19 века ?',
    variants: ['Отечественная война 1812 года', 'Отмена крепостного права', 'Выход iPhone 3'],
    correct: 0,
  },
  {
    title: 'Сколько было этапов развития либерального движения в России 20 века ?',
    variants: ['6', '3', '2'],
    correct: 1,
  },
  {
    title: 'Какими двумя основными течениями представлено движение  Социал-демократов?',
    variants: [
      'Легальными марксистами и Революционными марксистами',
      'Либеральные народники и анархисты',
      'Славянофилами и западниками',
      'Онанисты и заговорщики',
    ],
    correct: 0,
  },
];
const Result = ({ correct }) => {
  return (
    <div className="game">
      <div className="game-content">
        <h1>Ваш результат:</h1>
        <p>
          вы ответили правильно на {correct} из {questions.length} вопросов
        </p>
        <button class="shine-button" onClick={() => document.location.reload()}>
          начать заново
        </button>
      </div>
    </div>
  );
};
const Game = ({ question, onClick }) => {
  return (
    <div className="game">
      <div className="game-content">
        <h1>{question.title}</h1>
        <ul>
          {question.variants.map((variant, index) => (
            <li onClick={() => onClick(index)} key={index}>
              {variant}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
function Text() {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const question = questions[step];

  const handleStepChange = (index) => {
    setStep(step + 1);
    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };
  console.log(correct);
  return (
    <>
      <div className="test">
        <div className="test-content">
          {step !== questions.length ? (
            <Game question={question} onClick={handleStepChange} />
          ) : (
            <Result correct={correct} />
          )}
        </div>
        <div className="test-overlay"></div>
        <div className="test-background"></div>
      </div>
    </>
  );
}
export default Text;
