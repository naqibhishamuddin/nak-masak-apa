import Image from "next/image";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { ProductCardProps } from "./types";

export const ProductCard = (props: ProductCardProps) => {
  const { image, title, author } = props;
  return (
    <Paper elevation={0}>
      <Image
        style={{ width: "100%", borderRadius: "0.5rem" }}
        width={200}
        height={200}
        src={image}
        alt={title}
      />
      <div style={{ padding: "0.5rem" }}>
        <Typography variant="body1">{title}</Typography>
        <Typography variant="body2" color="GrayText">
          {author}
        </Typography>
      </div>
    </Paper>
  );
};
