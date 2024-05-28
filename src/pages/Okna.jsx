import React, { useState } from 'react'
import Slider from "../components/Slider"
import Causes from '../components/Causes'
import LeaveInfo from '../components/LeaveInfo'
import ProductInfo from '../components/ProductInfo'
import { useTranslation } from 'react-i18next'

function Okna() {
  const [isPressed, setIsPressed] = useState('');
  const {t} = useTranslation();
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "ПВХ Окно Алюминиевое",
      description: "Классические ПВХ окна с двойным остеклением для лучшей теплоизоляции.",
      price: "от 50000 тг",
      image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
    },
    {
      id: 2,
      name: "ПВХ Окно Современное",
      description: "Современные ПВХ окна с улучшенными характеристиками шумопоглощения.",
      price: "от 60000 тг",
      image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
    },
    {
      id: 3,
      name: "Алюминиевое Окно",
      description: "Легкие и прочные алюминиевые окна с высоким уровнем герметичности.",
      price: "от 70000 тг",
      image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
    },
    {
      id: 4,
      name: "Деревянное Окно",
      description: "Элегантные деревянные окна с натуральной отделкой и защитным покрытием.",
      price: "от 80000 тг",
      image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
    },
    {
      id: 5,
      name: "Алюминиевое Окно",
      description: "Окна с тройным остеклением для максимальной энергоэффективности.",
      price: "от 90000 тг",
      image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
    }
  ]);

  const onClick = (searchValue) => {
    if (searchValue === "Алюмин"){
      setIsPressed("Алюмин");
    }else if(searchValue === "ПВХ"){
      setIsPressed("ПВХ");
    }else if (searchValue === "Деревянн"){
      setIsPressed("Деревянн");
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
        {isPressed === 'Алюмин' ? 
        <button onClick={()=> onClick("Алюмин")} className='activebtn'>{t("windows-aluminium")}</button> : 
        <button onClick={()=> onClick("Алюмин")} className='showbtn'>{t("windows-aluminium")}</button>}
        {isPressed === 'ПВХ' ? 
        <button onClick={()=> onClick("ПВХ")} className='activebtn'>{t("windows-pvh")}</button> : 
        <button onClick={()=> onClick("ПВХ")} className='showbtn'>{t("windows-pvh")}</button>}
        {isPressed === 'Деревянн' ? 
        <button onClick={()=> onClick("Деревянн")} className='activebtn'>{t("windows-wood")}</button> : 
        <button onClick={()=> onClick("Деревянн")} className='showbtn'>{t("windows-wood")}</button>}
        <button className='clear' onClick={() => setIsPressed("")}>{t("clear")}</button>
      </div>
      {renderItems()}
    </div>
  )
}

export default Okna