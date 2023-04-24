import { useEffect, useState } from "react";

export const useInfiniteScrolling = () => {
  const [visibleItemCount, setVisibleItemCount] = useState(10);

  const handleScroll = () => {
    const scrollPosition = window.innerHeight + window.scrollY;
    const contentHeight = document.body.offsetHeight;
    const buffer = 400;

    if (scrollPosition >= contentHeight - buffer) {
      setVisibleItemCount((prevCount) => prevCount + 10);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { visibleItemCount };
};
