import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { ProductCard } from "components";
import { data } from "./data";

export const ProductList = () => {
  return (
    <Container>
      <Grid container spacing={{ xs: 2, md: 6 }}>
        {data.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <ProductCard {...item}>xs=2</ProductCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
