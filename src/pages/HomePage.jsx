import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="container text-center mt-5 py-5 border rounded shadow-sm bg-light">
      <h1 className="display-4 fw-bold text-primary">Хімчистка CleanPro</h1>
      <p className="lead mt-3">
        Ваші речі заслуговують на професійний догляд. <br />
        Ми використовуємо екологічні засоби та сучасне обладнання.
      </p>
      <hr className="my-4 mx-auto w-25" />
      <div className="d-flex justify-content-center gap-3">
        <Link to="/catalog" className="btn btn-primary btn-lg px-4">Переглянути каталог</Link>
        <button className="btn btn-outline-secondary btn-lg px-4">Про нас</button>
      </div>
    </div>
  );
}

export default HomePage;