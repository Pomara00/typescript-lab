interface Mountain {
  name: string;
  height: number;
}
let mountain: Mountain[] = [
  { name: "Kilimanjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 }
];

let findNameOfTallestMountain = (arrayOfMountains: Mountain[]): string => {
  let tallestMountainHeight: number = 0;
  let nameOfTallestMountain: string = "";
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

//////////
interface Product {
  name: string;
  price: number;
}
let product: Product[] = [
  { name: "clothes", price: 20 },
  { name: "toothpaste", price: 5 },
  { name: "phone", price: 1000 }
];
let calcAverageProductPrice = (arrayOfProducts: Product[]): number => {
  let totalPrice = 0;
  arrayOfProducts.forEach(product => {
    totalPrice += product.price;
  });
  return totalPrice / arrayOfProducts.length;
};
console.log(calcAverageProductPrice(product));

/////
interface InventoryItem {
  product: Product; //name price
  quantity: number; //in the grid
}
let inventory: InventoryItem[] = [
  { product: { name: "motor", price: 10.0 }, quantity: 10 },
  { product: { name: "sensor", price: 12.5 }, quantity: 4 },
  { product: { name: "LED", price: 1.0 }, quantity: 20 }
];

let calcInventoryValues = (inventoryList: InventoryItem[]): number => {
  let totalPrice = 0;
  inventoryList.forEach(item => {
    totalPrice += item.product.price * item.quantity;
  });
  return totalPrice;
};
console.log(calcInventoryValues(inventory));
