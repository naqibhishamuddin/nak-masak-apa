import Image from "next/image";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { RecipeCardProps } from "./types";
import { useRecipeCard } from "./useRecipeCard";

dayjs.extend(relativeTime);

export const RecipeCard = (props: RecipeCardProps) => {
  const { onClickRecipe } = useRecipeCard();
  const { title, url, thumbnail, createdAt } = props;

  return (
    <Paper onClick={() => onClickRecipe(url)} elevation={0}>
      <div
        style={{
          width: "100%",
          height: 281,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Image
          style={{ borderRadius: "0.5rem", objectFit: "cover" }}
          fill
          src={thumbnail}
          alt={title}
          sizes="100%"
          priority
          placeholder="blur"
        />
      </div>
      <div style={{ paddingBlock: "0.5rem", paddingInline: "0.2rem" }}>
        <Typography
          sx={{ color: "#333333", textTransform: "capitalize" }}
          variant="body1"
        >
          {title}
        </Typography>
        <Typography color="GrayText" variant="body2">
          {dayjs(createdAt).fromNow()}
        </Typography>
      </div>
    </Paper>
  );
};
