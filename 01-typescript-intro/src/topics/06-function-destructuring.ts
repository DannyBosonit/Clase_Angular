export interface Product {
  description: string;
  price: number;
}

const phone: Product = {
  description: "Nokia A1",
  price: 150.0,
};

const tablet: Product = {
  description: "ipad Air",
  price: 250.0,
};

interface TaxCalculationOptions {
  tax: number;
  products: Product[];
}

export function taxCalculation(
  options: TaxCalculationOptions
): [number, number] {
  let total = 0;
  const { products, tax } = options;

  products.forEach(({ price }) => {
    total += price;
  });

  return [total, total * tax];
}

// const shoppingCart = [phone, tablet];
export const tax = 0.15;

// const [total, calculatedTax] = taxCalculation({
//   products: shoppingCart,
//   tax,
// });

// console.log("Total: ", total);
// console.log("Tax: ", calculatedTax);
