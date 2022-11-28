import React from 'react';

function XIX({ contentArray1, contentArray2, plus, minus, step, changeBackground }) {
  const content = contentArray1[step];
  const content2 = contentArray2[step];

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
              <button onClick={plus} className="floating-button">
                Вперед
              </button>
            )}
            {step >= (contentArray2.length > 1) ? (
              <button onClick={minus} className="floating-button">
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
              <button onClick={plus} className="floating-button">
                Вперед
              </button>
            )}
            {step >= (contentArray1.length > 1) ? (
              <button onClick={minus} className="floating-button">
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
export default XIX;
