import { ChangeEvent, useState } from "react";

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

  const onChangeText = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return { isPlaceholderVisible, onFocus, onBlur, onChangeText };
};
