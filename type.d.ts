type Product = {
    id: string;
    images: string[];
    name: string;
    price: number,
    diliveryPrice: number;
    diliveryTime: string;
    category: string;
    type: string;
    vehicle: string;
    description: string;
    isFeatured: boolean
    isArchived: boolean
  }

type categoryType = {
  id: string
   name: string;
   description: string;
}

type CartItem = {
  id: string
  amount: number
}

type PriceState = {
  values: number[]; // Change the type accordingly if your values are of a different type
  addValue: (newValue: number) => void; // Change the type accordingly if your values are of a different type
}

type CartProduct = {
  id: string,
  price:number,
  title: string,
  description: string,
  diliveryFee: number,
  diliveryPeriod: string,
  images:string[]
}