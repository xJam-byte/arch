import React, { useState } from 'react'
import Slider from "../components/Slider"
import Causes from '../components/Causes'
import LeaveInfo from '../components/LeaveInfo'
import ProductInfo from '../components/ProductInfo'
function Doors() {
  const [products, setProducts] = useState([
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
        name: "Межкомнатная Дверь Стеклянная",
        description: "Стеклянная межкомнатная дверь с матовой или прозрачной поверхностью.",
        price: "от 85000 тг",
        image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
      },
      {
        id: 5,
        name: "Алюминиевая Дверь",
        description: "Легкая и стильная алюминиевая дверь для современного интерьера.",
        price: "от 100000 тг",
        image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
      }
    ]
  ]);
  return (
    <div>
      <Slider/>
      <Causes />
      <LeaveInfo />
      <ProductInfo products={products}/>
    </div>
  )
}

export default Doors