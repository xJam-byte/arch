import React, { useState } from 'react'
import Slider from "../components/Slider"
import Causes from '../components/Causes'
import LeaveInfo from '../components/LeaveInfo'
import ProductInfo from '../components/ProductInfo'
import { useTranslation } from 'react-i18next'
function Vitrges() {
  const {t} = useTranslation();
  const [isPressed, setIsPressed] = useState('');
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Классический Витраж",
      description: "Традиционные витражи с классическими узорами и цветами.",
      price: "от 70000 тг",
      image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
    },
    {
      id: 2,
      name: "Классический Витраж",
      description: "Современные витражи с абстрактными и минималистичными дизайнами.",
      price: "от 75000 тг",
      image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
    },
    {
      id: 3,
      name: "Классический Витраж",
      description: "Витражи с геометрическими узорами и яркими цветами.",
      price: "от 80000 тг",
      image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
    },
    {
      id: 4,
      name: "Абстрактный Витраж",
      description: "Витражи с цветочными узорами и естественными мотивами.",
      price: "от 78000 тг",
      image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
    },
    {
      id: 5,
      name: "Абстрактный Витраж",
      description: "Абстрактные витражи с уникальными и яркими дизайнами.",
      price: "от 82000 тг",
      image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
    }
  ]);

  const onClick = (searchValue) => {
    if (searchValue === "Классический"){
      setIsPressed("Классический");
    }else if(searchValue === "Абстрактный"){
      setIsPressed("Абстрактный");
    }
  }

  const renderItems = () => {
    const filteredItems = products.filter((item) =>
      item.name.includes(isPressed))
    return (
      <ProductInfo products={filteredItems}/>
    )
  }

//   useEffect(() => {
//     axios.get('https://api.example.com/products')
//       .then(response => {
//         setProducts(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching the products:', error);
//       });
//   }, []);

  return (
    <div>
      <Slider/>
      <Causes />
      <LeaveInfo />
      <div className="containerу">
        {isPressed === 'Классический' ? 
        <button onClick={()=> onClick("Классический")} className='activebtn'>{t("vitrage-classic")}</button> : 
        <button onClick={()=> onClick("Классический")} className='showbtn'>{t("vitrage-classic")}</button>}
        {isPressed === 'Абстрактный' ? 
        <button onClick={()=> onClick("Абстрактный")} className='activebtn'>{t("vitrage-abstract")}</button> : 
        <button onClick={()=> onClick("Абстрактный")} className='showbtn'>{t("vitrage-abstract")}</button>}
        <button className='clear' onClick={() => setIsPressed("")}>{t("clear")}</button>
      </div>
      {renderItems()}
    </div>
  )
}

export default Vitrges