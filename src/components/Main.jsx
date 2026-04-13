import ServiceCard from "./ServiceCard";
import PromoBanner from "./PromoBanner";

function Main({ addToCart }) { 
  const services = [
    {
      id: 1,
      title: "Хімчистка одягу",
      description: "Професійне очищення одягу",
      price: 200,
      image: "https://silver-shop.com.ua/wp-content/uploads/2023/07/suhaya-chistka-odezhdy.jpg"
    },
    {
      id: 2,
      title: "Чистка килимів",
      description: "Глибока чистка килимів",
      price: 350,
      image: "https://profclean.com.ua/wp-content/uploads/2016/11/8-%D0%BA%D0%BE%D0%B2%D0%B5%D1%80-1024x768.jpg"
    },
    {
      id: 3,
      title: "Прання білизни",
      description: "Швидке та якісне прання",
      price: 150,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShSmGZBeCbCjBN91bs8-PljSdM3XMCqOF0Zw&s"
    }
  ];

  return (
    <main className="main py-4">
      <div className="container">
        
        <h1 className="text-center">Ласкаво просимо до нашої хімчистки!</h1>
        <p className="text-center mb-4">
          Ми пропонуємо якісні послуги очищення одягу та текстилю.
        </p>

        {}
        <PromoBanner />

        <h2 className="mt-5 mb-4">Наші послуги</h2>

        <div className="row">
          {services.map((service) => (
            <div className="col-md-4 mb-4" key={service.id}>
              <ServiceCard
                id={service.id}
                title={service.title}
                description={service.description}
                price={service.price}
                image={service.image}
                addToCart={addToCart} 
              />
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}

export default Main;