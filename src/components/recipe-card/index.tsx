import Image from "next/image";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { RecipeCardProps } from "./types";
import { useRecipeCard } from "./useRecipeCard";
import styles from "./styles.module.css";

export const RecipeCard = (props: RecipeCardProps) => {
  const { onClickRecipe } = useRecipeCard();
  const { title, url } = props;

  return (
    <Paper
      className={styles.paper}
      onClick={() => onClickRecipe(url)}
      elevation={0}
    >
      <div
        style={{
          width: "100%",
          height: 200,
          position: "relative",
        }}
      >
        <Image
          style={{ borderRadius: "0.5rem" }}
          fill
          src="/food.jpeg"
          alt={title}
          sizes="100%"
          priority
        />
      </div>
      <div style={{ paddingBlock: "0.5rem", paddingInline: "0.2rem" }}>
        <Typography sx-={{ color: "#333333" }} variant="body1">
          {title}
        </Typography>
      </div>
    </Paper>
  );
};
