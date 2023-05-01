import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import { TypeAnimation } from "react-type-animation";
import { useSearchBar } from "./useSearchBar";
import styles from "./styles.module.css";

export const SearchBar = ({ onChange }: { onChange?(value: string): void }) => {
  const { isPlaceholderVisible, onBlur, onChangeText, onFocus } =
    useSearchBar(onChange);

  return (
    <Paper
      component="form"
      className={styles.container}
      sx={{
        borderRadius: "2rem",
        boxShadow: "rgba(244, 162, 97, 0.2) 0px 8px 24px",
      }}
    >
      {/** Animated text */}
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
      {isPlaceholderVisible && (
        <TypeAnimation
          sequence={[
            "Nasi Goreng Pattaya",
            1000,
            "Nasi Goreng Belacan Ala Thai",
            1000,
            "Salted Egg Chicken",
            1000,
            "Ayam Gepuk",
            1000,
          ]}
          speed={50}
          style={{ fontSize: "1rem", color: "GrayText" }}
          repeat={Infinity}
        />
      )}

      <InputBase
        onChange={onChangeText}
        onFocus={onFocus}
        onBlur={onBlur}
        sx={{ ml: 1, flex: 1 }}
      />
    </Paper>
  );
};
