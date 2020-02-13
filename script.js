"use strict";
let mountain = [
    { name: "Kilimanjaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 }
];
let findNameOfTallestMountain = (arrayOfMountains) => {
    let tallestMountainHeight = 0;
    let nameOfTallestMountain = "";
    arrayOfMountains.forEach(mountain => {
        if (mountain.height > tallestMountainHeight) {
            tallestMountainHeight = mountain.height;
            nameOfTallestMountain = mountain.name;
        }
    });
    return nameOfTallestMountain;
};
let result = findNameOfTallestMountain(mountain);
console.log(result);
let product = [
    { name: "clothes", price: 20 },
    { name: "toothpaste", price: 5 },
    { name: "phone", price: 1000 }
];
let calcAverageProductPrice = (arrayOfProducts) => {
    let totalPrice = 0;
    arrayOfProducts.forEach(product => {
        totalPrice += product.price;
    });
    return totalPrice / arrayOfProducts.length;
};
console.log(calcAverageProductPrice(product));
let inventory = [
    { product: { name: "motor", price: 10.0 }, quantity: 10 },
    { product: { name: "sensor", price: 12.5 }, quantity: 4 },
    { product: { name: "LED", price: 1.0 }, quantity: 20 }
];
let calcInventoryValues = (inventoryList) => {
    let totalPrice = 0;
    inventoryList.forEach(item => {
        totalPrice += item.product.price * item.quantity;
    });
    return totalPrice;
};
console.log(calcInventoryValues(inventory));
