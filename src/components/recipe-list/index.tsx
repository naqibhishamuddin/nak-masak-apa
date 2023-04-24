import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { RecipeCard } from "components";
import { useInfiniteScrolling } from "hooks";
import { recipes } from "./recipes";

export const RecipeList = () => {
  const { visibleItemCount } = useInfiniteScrolling();
  const visibleRecipes = recipes.slice(0, visibleItemCount);

  return (
    <Container>
      <Grid container spacing={{ xs: 2, md: 6 }}>
        {visibleRecipes.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.title}>
            <RecipeCard {...item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
