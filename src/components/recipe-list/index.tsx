import { useCallback, useMemo } from "react";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { RecipeCard } from "components";
import { useInfiniteScrolling } from "hooks";
import { recipes } from "./recipes";

const EmptyResult = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        mt: 5,
      }}
    >
      <Image width={150} height={150} src="/empty.png" alt="No recipe found" />
      <Typography mt={2.5} fontWeight={200} variant="caption" color="GrayText">
        Tiada Resepi Ditemui
      </Typography>
    </Container>
  );
};

export const RecipeList = ({ searchValue }: { searchValue: string }) => {
  const { visibleItemCount } = useInfiniteScrolling();
  const getRecipes = useCallback(
    (list: typeof recipes) => {
      if (searchValue) {
        return list.filter((item) =>
          item.title
            .toLocaleLowerCase()
            .includes(searchValue.toLocaleLowerCase())
        );
      } else {
        return list;
      }
    },
    [searchValue]
  );

  const visibleRecipes = useMemo(() => getRecipes(recipes), [getRecipes]).slice(
    0,
    visibleItemCount
  );

  return (
    <Container>
      <Grid container spacing={{ xs: 2, md: 4 }}>
        {visibleRecipes.length === 0 ? (
          <EmptyResult />
        ) : (
          visibleRecipes.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.title}>
              <RecipeCard {...item} />
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
};
