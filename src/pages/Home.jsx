import React, { useState } from 'react'
import ImgBlock from '../components/ImgBlock'
import Causes from '../components/Causes'
import LeaveInfo from '../components/LeaveInfo'
import ProductInfo from '../components/ProductInfo'

function Home() {
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
    }
  ]);
  return (
    <div>
      <ImgBlock />
      <Causes />
      <LeaveInfo />
      <ProductInfo products={products}/>
    </div>
  )
}

export default Home