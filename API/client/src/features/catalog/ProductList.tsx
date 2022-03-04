import { Grid } from "@mui/material";
import { Product } from "../../app/model/products";
import { ProductCard } from "./ProductCard";
interface Props{
    products:Product[];
}
export const ProductList = ({products}:Props) => {
  return (
    <>
      <Grid container spacing={4}>
        {products.map((product: any) => (
          <Grid  key={product.id} item xs={3}>
            <ProductCard  product={product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
