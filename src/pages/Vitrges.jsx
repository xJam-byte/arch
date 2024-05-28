import React, { useState } from 'react'
import Slider from "../components/Slider"
import Causes from '../components/Causes'
import LeaveInfo from '../components/LeaveInfo'
import ProductInfo from '../components/ProductInfo'
function Vitrges() {
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
      name: "Современный Витраж",
      description: "Современные витражи с абстрактными и минималистичными дизайнами.",
      price: "от 75000 тг",
      image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
    },
    {
      id: 3,
      name: "Витраж с Геометрией",
      description: "Витражи с геометрическими узорами и яркими цветами.",
      price: "от 80000 тг",
      image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
    },
    {
      id: 4,
      name: "Флоральный Витраж",
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
  return (
    <div>
      <Slider/>
      <Causes />
      <LeaveInfo />
      <ProductInfo products={products}/>
    </div>
  )
}

export default Vitrges