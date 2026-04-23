import { useState } from 'react';

function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.email.includes('@')) tempErrors.email = "Email має містити '@'";
    if (formData.message.length < 10) tempErrors.message = "Повідомлення має бути довшим за 10 символів";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Дякуємо! Ваше повідомлення надіслано.");
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    }
  };

  return (
    <div className="container mt-5 py-5">
      <h2 className="text-center mb-5">Зв'яжіться з нами</h2>
      
      <div className="row">
        {}
        <div className="col-md-6 mb-4">
          <h3>Як нас знайти?</h3>
          <p className="text-muted">Маєте запитання щодо наших послуг? Ми завжди раді допомогти!</p>
          <ul className="list-unstyled mt-4">
            <li className="mb-3">📍 <strong>Адреса:</strong> м. Київ, вул. Чиста, 10</li>
            <li className="mb-3">📞 <strong>Телефон:</strong> +38 (099) 060-07-00</li>
            <li className="mb-3">✉️ <strong>Email:</strong> support@cleanpro.com.ua</li>
          </ul>
        </div>

        {}
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow-sm">
            <div className="mb-3">
              <label className="form-label">Ім'я:</label>
              <input name="name" className="form-control" value={formData.name} onChange={handleChange} />
            </div>

            <div className="mb-3">
              <label className="form-label">Email:</label>
              <input name="email" className="form-control" value={formData.email} onChange={handleChange} />
              {errors.email && <div className="text-danger small">{errors.email}</div>}
            </div>

            <div className="mb-3">
              <label className="form-label">Повідомлення:</label>
              <textarea name="message" className="form-control" rows="4" value={formData.message} onChange={handleChange} />
              {errors.message && <div className="text-danger small">{errors.message}</div>}
            </div>

            <button type="submit" className="btn btn-primary w-100">Надіслати</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;