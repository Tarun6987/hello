import React from 'react';
import Card from './Product';
function ProductData() {
  const products = [
    {
      id: 1,
      image: "https://picsum.photos/seed/earbuds/200/200",
      title: "Wireless Earbuds",
      actualPrice: 79.99,
      discountedPrice: 49.99
    },
    {
      id: 2,
      image: "https://picsum.photos/seed/smartwatch/200/200",
      title: "Smartwatch Pro",
      actualPrice: 199.99,
      discountedPrice: 149.99
    },
    {
      id: 3,
      image: "https://picsum.photos/seed/speaker/200/200",
      title: "Bluetooth Speaker",
      actualPrice: 59.99,
      discountedPrice: 39.99
    },
    {
      id: 4,
      image: "https://picsum.photos/seed/mouse/200/200",
      title: "Gaming Mouse",
      actualPrice: 49.99,
      discountedPrice: 29.99
    },
    {
      id: 5,
      image: "https://picsum.photos/seed/monitor/200/200",
      title: "4K Monitor",
      actualPrice: 399.99,
      discountedPrice: 349.99
    },
    {
      id: 6,
      image: "https://picsum.photos/seed/charger/200/200",
      title: "Portable Charger",
      actualPrice: 29.99,
      discountedPrice: 19.99
    },
    {
      id: 7,
      image: "https://picsum.photos/seed/backpack/200/200",
      title: "Laptop Backpack",
      actualPrice: 69.99,
      discountedPrice: 49.99
    },
    {
      id: 8,
      image: "https://picsum.photos/seed/headphones/200/200",
      title: "Noise-Canceling Headphones",
      actualPrice: 299.99,
      discountedPrice: 199.99
    },
    {
      id: 9,
      image: "https://picsum.photos/seed/stand/200/200",
      title: "Smartphone Stand",
      actualPrice: 19.99,
      discountedPrice: 9.99
    },
    {
      id: 10,
      image: "https://picsum.photos/seed/keyboard/200/200",
      title: "Mechanical Keyboard",
      actualPrice: 129.99,
      discountedPrice: 99.99
    },
    {
      id: 11,
      image: "https://picsum.photos/seed/vr/200/200",
      title: "VR Headset",
      actualPrice: 499.99,
      discountedPrice: 449.99
    },
    {
      id: 12,
      image: "https://picsum.photos/seed/tracker/200/200",
      title: "Fitness Tracker",
      actualPrice: 59.99,
      discountedPrice: 44.99
    },
    {
      id: 13,
      image: "https://picsum.photos/seed/case/200/200",
      title: "Smartphone Case",
      actualPrice: 14.99,
      discountedPrice: 9.99
    },
    {
      id: 14,
      image: "https://picsum.photos/seed/charger2/200/200",
      title: "Wireless Charger",
      actualPrice: 39.99,
      discountedPrice: 24.99
    },
    {
      id: 15,
      image: "https://picsum.photos/seed/camera/200/200",
      title: "Action Camera",
      actualPrice: 249.99,
      discountedPrice: 199.99
    }
  ];

  return (
    <div>
      <Card data={products} />
    </div>
  );
}

export default ProductData;
