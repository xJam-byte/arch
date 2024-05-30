import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function AdminPanel() {
  const {t} = useTranslation();
  const [requests, setRequests] = useState([
    {
      id: 1,
      userId: 101,
      name: "Иван Иванов",
      phone: "+7 900 123 45 67",
      message: "Хотел бы узнать больше о вашем продукте.",
    },
    {
      id: 2,
      userId: 102,
      name: "Анна Смирнова",
      phone: "+7 900 234 56 78",
      message: "У меня возникли проблемы с заказом.",
    },
    {
      id: 3,
      userId: 103,
      name: "Петр Петров",
      phone: "+7 900 345 67 89",
      message: "Можно ли изменить адрес доставки?",
    },
    {
      id: 4,
      userId: 104,
      name: "Екатерина Соколова",
      phone: "+7 900 456 78 90",
      message: "Сколько времени занимает доставка?",
    },
    {
      id: 5,
      userId: 105,
      name: "Алексей Кузнецов",
      phone: "+7 900 567 89 01",
      message: "Как можно вернуть товар?",
    },
    {
      id: 6,
      userId: 106,
      name: "Мария Попова",
      phone: "+7 900 678 90 12",
      message: "Есть ли скидки для постоянных клиентов?",
    },
    {
      id: 7,
      userId: 107,
      name: "Дмитрий Смирнов",
      phone: "+7 900 789 01 23",
      message: "Когда поступит в продажу новый товар?",
    },
    {
      id: 8,
      userId: 108,
      name: "Светлана Орлова",
      phone: "+7 900 890 12 34",
      message: "Где можно ознакомиться с вашими условиями?",
    },
  ]);

  // useEffect(() => {
  //   // Замените URL на ваш API для получения заявок
  //   fetch('https://api.example.com/requests')
  //     .then(response => response.json())
  //     .then(data => setRequests(data))
  //     .catch(error => console.error('Error fetching requests:', error));
  // }, []);

  return (
    <div className="requests-container">
      {requests.map((request) => (
        <div key={request.id} className="request-card">
          <div className="avatar">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"
              alt={request.name}
            />
          </div>
          <div className="request-info">
            <h3>{request.name}</h3>
            <p>
              <strong>{t("admin-phone")}:</strong> {request.phone}
            </p>
            <p>
              <strong>{t("admin-message")}:</strong> {request.message}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default AdminPanel;
