
import { useState, useEffect } from "react";
import { Product } from "../../app/layout/models/Product";
import ProductList from "./ProductList";


export default function Catalog() { 
  const [products, setProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    fetch("https://localhost:5000/api/Products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

//   function addProduct() {
//     // setProducts([...products, {name: 'Premiere Pro', price: '$299.99'}])
//     setProducts((prevState) => [
//       ...prevState,
//       {
//         id: prevState.length + 101,
//         name: "product" + (prevState.length + 1),
//         price: prevState.length * 100 + 100,
//         brand: "some brand",
//         description: "some description",
//         pictureUrl: "http://picsum.photos/200/300",
//         type: "some type",
//       },
//     ]);
//   }
    return (
    <>
      <ProductList   products={products} />
      {/* <Button variant="contained" onClick={addProduct}>Add Product</Button> */}
    </>
    )
 }
