export const useFooter = () => {
  const onClickContact = (type: "Email" | "Github" | "Website") => {
    switch (type) {
      case "Email":
        window.open("mailto:hello@naqibhishamuddin.com");
        break;
      case "Github":
        window.open("https://github.com/naqibhishamuddin");
        break;
      case "Website":
        window.open("https://naqibhishamuddin.com");
        break;
      default:
        break;
    }
  };

  return { onClickContact };
};
