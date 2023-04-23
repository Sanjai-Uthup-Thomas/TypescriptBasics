// interface Product {
//     id: number;
//     name: string;
//     price: number;
//   }
// enum Currency {
//     USD = "USD",
//     EUR = "EUR",
//     GBP = "GBP",
//   }

// type ShoppingCartItem<T> = {
//     product: T;
//     quantity: number;
//     totalPrice: number;
//   };
// function addToCart<T extends Product>(
//     productId: number,
//     quantity: number,
//     currency: Currency = Currency.USD
//   ): ShoppingCartItem<T> {
//     const product =  {
//         id: 1,
//         name: "T-shirt",
//         price: 20,
//       }
//     const totalPrice = product.price * quantity;
//     const currencySymbol = currency === Currency.USD ? "$" : currency === Currency.EUR ? "€" : "£";
  
//     return {
//       product,
//       quantity,
//       totalPrice: Number(totalPrice.toFixed(2)),
//       currencySymbol,
//     };
//   }

//   const products: Product = {
//     id: 1,
//     name: "T-shirt",
//     price: 20,
//   };
  
//   const cartItem = addToCart<Product>(products.id, 3);
//   console.log(cartItem);
//   // Output: { product: { id: 1, name: 'T-shirt', price: 20 }, quantity: 3, totalPrice: 60, currencySymbol: '$' }

  