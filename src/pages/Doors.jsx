import React, { useState } from 'react'
import Slider from "../components/Slider"
import Causes from '../components/Causes'
import LeaveInfo from '../components/LeaveInfo'
import ProductInfo from '../components/ProductInfo'
import { useTranslation } from 'react-i18next'

function Doors() {
  const [isPressed, setIsPressed] = useState('');
  const {t} = useTranslation();
  const [products, setProducts] = useState(
    [
      {
        id: 1,
        name: "Входная Дверь Стальная",
        description: "Прочная стальная дверь с многоточечным замком для максимальной безопасности.",
        price: "от 120000 тг",
        image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
      },
      {
        id: 2,
        name: "Входная Дверь Деревянная",
        description: "Классическая деревянная входная дверь с декоративными элементами.",
        price: "от 150000 тг",
        image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
      },
      {
        id: 3,
        name: "Межкомнатная Дверь ПВХ",
        description: "Современная межкомнатная дверь из ПВХ с гладкой поверхностью.",
        price: "от 70000 тг",
        image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
      },
      {
        id: 4,
        name: "Входная Дверь Стальная",
        description: "Стеклянная межкомнатная дверь с матовой или прозрачной поверхностью.",
        price: "от 85000 тг",
        image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
      },
      {
        id: 5,
        name: "Межкомнатная Дверь ПВХ",
        description: "Легкая и стильная алюминиевая дверь для современного интерьера.",
        price: "от 100000 тг",
        image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
      }
    
  ]);

  const onClick = (searchValue) => {
    if (searchValue === "Сталь"){
      setIsPressed("Сталь");
    }else if(searchValue === "ПВХ"){
      setIsPressed("ПВХ");
    }else{
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
        {isPressed === 'Сталь' ? 
        <button onClick={()=> onClick("Сталь")} className='activebtn'>{t("doors-fullmetal")}</button> : 
        <button onClick={()=> onClick("Сталь")} className='showbtn'>{t("doors-fullmetal")}</button>}
        {isPressed === 'ПВХ' ? 
        <button onClick={()=> onClick("ПВХ")} className='activebtn'>{t("doors-pvh")}</button> : 
        <button onClick={()=> onClick("ПВХ")} className='showbtn'>{t("doors-pvh")}</button>}
        {isPressed === 'Деревянн' ? 
        <button onClick={()=> onClick("Деревянн")} className='activebtn'>{t("doors-wood")}</button> : 
        <button onClick={()=> onClick("Деревянн")} className='showbtn'>{t("doors-wood")}</button>}
        <button className='clear' onClick={() => setIsPressed("")}>{t("clear")}</button>
      </div>
      {renderItems()}
    </div>
  )
}

export default Doors