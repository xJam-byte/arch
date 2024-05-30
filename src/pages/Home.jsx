import React, { useState } from 'react'
import ImgBlock from '../components/ImgBlock'
import Causes from '../components/Causes'
import LeaveInfo from '../components/LeaveInfo'
import ProductInfo from '../components/ProductInfo'
import { useTranslation } from 'react-i18next'
import OurWorks from '../components/OurWorks'
import Reviews from '../components/Reviews'

function Home() {
  const [isPressed, setIsPressed] = useState('');
  const {t} = useTranslation();
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "ПВХ Окно",
      description: "Энергоэффективные ПВХ окна с повышенной шумоизоляцией.",
      price: "от 20000 тг",
      image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
    },
    {
      id: 2,
      name: "Алюминиевое Окно",
      description: "Прочные и долговечные алюминиевые окна для вашего дома.",
      price: "от 30000 тг",
      image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
    },
    {
      id: 3,
      name: "Деревянное Окно",
      description: "Экологически чистые деревянные окна из натурального материала.",
      price: "от 35000 тг",
      image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
    },
    {
      id: 4,
      name: "Окно с двойным стеклопакетом",
      description: "Окна с двойным стеклопакетом для максимальной теплоизоляции.",
      price: "от 25000 тг",
      image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
    },
    {
      id: 5,
      name: "Балконный блок",
      description: "Комплексное решение для остекления балконов и лоджий.",
      price: "от 45000 тг",
      image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
    },
    {
      id: 6,
      name: "Входная Дверь Стальная",
      description: "Прочная стальная дверь с многоточечным замком для максимальной безопасности.",
      price: "от 120000 тг",
      image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
    },
    {
      id: 7,
      name: "Входная Дверь Деревянная",
      description: "Классическая деревянная входная дверь с декоративными элементами.",
      price: "от 150000 тг",
      image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
    },
    {
      id: 8,
      name: "Межкомнатная Дверь ПВХ",
      description: "Современная межкомнатная дверь из ПВХ с гладкой поверхностью.",
      price: "от 70000 тг",
      image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
    },
    {
      id: 9,
      name: "Входная Дверь Стальная",
      description: "Стеклянная межкомнатная дверь с матовой или прозрачной поверхностью.",
      price: "от 85000 тг",
      image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
    },
    {
      id: 10,
      name: "Межкомнатная Дверь ПВХ",
      description: "Легкая и стильная алюминиевая дверь для современного интерьера.",
      price: "от 100000 тг",
      image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
    },
    {
      id: 11,
      name: "Классический Витраж",
      description: "Традиционные витражи с классическими узорами и цветами.",
      price: "от 70000 тг",
      image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
    },
    {
      id: 12,
      name: "Современный Витраж",
      description: "Современные витражи с абстрактными и минималистичными дизайнами.",
      price: "от 75000 тг",
      image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
    },
    {
      id: 13,
      name: "Витраж с Геометрией",
      description: "Витражи с геометрическими узорами и яркими цветами.",
      price: "от 80000 тг",
      image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
    },
    {
      id: 14,
      name: "Флоральный Витраж",
      description: "Витражи с цветочными узорами и естественными мотивами.",
      price: "от 78000 тг",
      image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
    },
    {
      id: 15,
      name: "Абстрактный Витраж",
      description: "Абстрактные витражи с уникальными и яркими дизайнами.",
      price: "от 82000 тг",
      image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
    }
  ]);

//   useEffect(() => {
//     axios.get('https://api.example.com/products')
//       .then(response => {
//         setProducts(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching the products:', error);
//       });
//   }, []);

const onClick = (searchValue) => {
  if (searchValue === "Окн"){
    setIsPressed("Окн");
  }else if(searchValue === "Двер"){
    setIsPressed("Двер");
  }else{
    setIsPressed("Витраж");
  }
}

const renderItems = () => {
  const filteredItems = products.filter((item) =>
    item.name.includes(isPressed))
  return (
    <ProductInfo products={filteredItems}/>
  )
}


  return (
    <div>
      <ImgBlock />
      <Causes />
      <LeaveInfo />
      <hr />
      <div style={{marginTop: 50}} className="containerу">
        {isPressed === 'Окн' ? 
        <button onClick={()=> onClick("Окн")} className='activebtn'>{t("home-windows")}</button> : 
        <button onClick={()=> onClick("Окн")} className='showbtn'>{t("home-windows")}</button>}
        {isPressed === 'Двер' ? 
        <button onClick={()=> onClick("Двер")} className='activebtn'>{t("home-doors")}</button> : 
        <button onClick={()=> onClick("Двер")} className='showbtn'>{t("home-doors")}</button>}
        {isPressed === 'Витраж' ? 
        <button onClick={()=> onClick("Витраж")} className='activebtn'>{t("home-vitrages")}</button> : 
        <button onClick={()=> onClick("Витраж")} className='showbtn'>{t("home-vitrages")}</button>}
        <button className='clear' onClick={() => setIsPressed("")}>{t("clear")}</button>
      </div>
      {renderItems()}
      <OurWorks />
      <Reviews />
    </div>
  )
}

export default Home