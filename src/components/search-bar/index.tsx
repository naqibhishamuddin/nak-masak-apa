import { TypeAnimation } from "react-type-animation";
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import { useSearchBar } from "./useSearchBar";
import styles from "./SearchBar.module.css";

export const SearchBar = ({ onChange }: { onChange?(value: string): void }) => {
  const { isPlaceholderVisible, onBlur, onChangeText, onFocus } =
    useSearchBar(onChange);

  return (
    <Paper component="form" className={styles.container}>
      {/** Animated text */}
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
      {isPlaceholderVisible && (
        <TypeAnimation
          sequence={[
            "Nasi Goreng Pattaya",
            1000,
            "Nasi Goreng Butter Chicken",
            1000,
            "Ketam Masak Lemak Cili Api",
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
