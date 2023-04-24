export const useRecipeCard = () => {
  const onClickRecipe = (url: string) => {
    window.open(url);
  };

  return { onClickRecipe };
};
