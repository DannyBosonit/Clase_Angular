import { Product, taxCalculation, tax } from "./06-function-destructuring";

const shoppingCart: Product[] = [
  {
    description: "Nokia",
    price: 150,
  },
  {
    description: "Ipad",
    price: 150,
  },
];

const [total, calculatedTax] = taxCalculation({
  products: shoppingCart,
  tax,
});

console.log("Total: ", total);
console.log("Tax: ", calculatedTax);
