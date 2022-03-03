import {
  List,
} from "@mui/material";
import { Product } from "../../app/model/products";
import { ProductCard } from "./ProductCard";
interface Props{
    products:Product[];
}
export const ProductList = ({products}:Props) => {
  return (
    <>
      <List>
        {products.map((product: any) => (
            <ProductCard key={product.id} product={product}/>
        ))}
      </List>
    </>
  );
};
