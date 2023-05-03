import { useState } from "react";

export const useSearchBar = (onChange?: (value: string) => void) => {
  const [isPlaceholderVisible, setIsPlaceholderVisible] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  const onFocus = () => {
    setIsPlaceholderVisible(false);
  };

  const onBlur = () => {
    if (!searchValue) {
      setIsPlaceholderVisible(true);
    }
  };

  const onChangeText = (value: string) => {
    setSearchValue(value);
    if (onChange) {
      onChange(value);
    }
  };

  return { isPlaceholderVisible, onFocus, onBlur, onChangeText };
};
