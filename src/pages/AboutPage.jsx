import React from 'react';

function AboutPage() {
  return (
    <div className="container mt-5 py-5">
      {}
      <div className="row justify-content-center mb-5">
        <div className="col-md-8 text-center">
          <h1 className="display-4 fw-bold text-primary mb-3">Про CleanPro</h1>
          <p className="lead text-secondary">
            Ми перетворюємо турботу про чистоту на мистецтво, щоб ви могли насолоджуватися вільним часом.
          </p>
        </div>
      </div>

   {}
<div className="row justify-content-center mb-5"> {}
  <div className="col-md-8 text-center"> {}
    <h2 className="fw-bold mb-4">Наш шлях до ідеальної чистоти</h2>
    <p className="text-secondary" style={{ lineHeight: '1.8' }}>
      Компанія CleanPro була створена з простою метою — надати професійні послуги хімчистки, які відповідають найвищим світовим стандартам. 
      Ми використовуємо лише перевірені, екологічно безпечні засоби, які дбайливо ставляться як до вашого одягу, так і до довкілля.
    </p>
    <p className="text-secondary" style={{ lineHeight: '1.8' }}>
      Наша команда — це експерти з багаторічним досвідом, які знають, як впоратися навіть із найскладнішими плямами на делікатних тканинах.
    </p>
  </div>
</div>

      {}
      <div className="row text-center mt-5">
        <div className="col-md-4 mb-4">
          <div className="card h-100 border-0 shadow-sm p-4">
            <h5 className="text-primary mb-3">Екологічність</h5>
            <p className="text-muted">Безпечні засоби, що не викликають алергії та підходять для дитячого одягу.</p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 border-0 shadow-sm p-4">
            <h5 className="text-primary mb-3">Швидкість</h5>
            <p className="text-muted">Ми цінуємо ваш час, тому виконуємо замовлення максимально оперативно.</p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 border-0 shadow-sm p-4">
            <h5 className="text-primary mb-3">Професіоналізм</h5>
            <p className="text-muted">Сучасне обладнання та індивідуальний підхід до кожного виробу.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;