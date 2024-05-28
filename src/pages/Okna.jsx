import React, { useState } from 'react'
import Slider from "../components/Slider"
import Causes from '../components/Causes'
import LeaveInfo from '../components/LeaveInfo'
import ProductInfo from '../components/ProductInfo'

function Okna() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "ПВХ Окно Классическое",
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
      name: "Энергоэффективное Окно",
      description: "Окна с тройным остеклением для максимальной энергоэффективности.",
      price: "от 90000 тг",
      image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
    }
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

export default Okna