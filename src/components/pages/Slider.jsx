import React from 'react';

function Slider({ contentArray1, contentArray2, changeBackground }) {
  const [step, setStep] = React.useState(0);
  const content = contentArray1[step];
  const content2 = contentArray2[step];

  const handleChangeContent = () => {
    setStep(step + 1);
  };
  const handleChangeContentMinus = () => {
    setStep(step - 1);
  };
  return (
    <>
      {changeBackground ? (
        <div className="container">
          <div className="portret">
            <img className="portret-img" src={content2.image} alt="person" />
            <p>{content2.name}</p>
            {step >= contentArray2.length - 1 ? (
              ''
            ) : (
              <button onClick={handleChangeContent} className="floating-button">
                Вперед
              </button>
            )}
            {step >= (contentArray2.length > 1) ? (
              <button onClick={handleChangeContentMinus} className="floating-button">
                Назад
              </button>
            ) : (
              ''
            )}
          </div>
          <div className="content">
            <h1>{content2.title}</h1>
            <p>{content2.text0}</p>
            <p className="text">{content2.text}</p>
            <p className="text">{content2.text1}</p>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="portret">
            <img className="portret-img" src={content.image} alt="person" />
            <p>{content.name}</p>
            {step >= contentArray1.length - 1 ? (
              ''
            ) : (
              <button onClick={handleChangeContent} className="floating-button">
                Вперед
              </button>
            )}
            {step >= (contentArray1.length >= 1) ? (
              <button onClick={handleChangeContentMinus} className="floating-button">
                Назад
              </button>
            ) : (
              ''
            )}
          </div>
          <div className="content">
            <h1>{content.title}</h1>
            <p>{content.text}</p>
          </div>
          <div className="content-background"></div>
          <div className="content-overlay"></div>
        </div>
      )}
    </>
  );
}
export default Slider;
