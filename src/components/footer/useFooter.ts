export const useFooter = () => {
  const onClickContact = (type: string) => {
    switch (type) {
      case "Email":
        window.open("mailto:hello@naqibhishamuddin.com", "Email", "noopener");
        break;
      case "Github":
        window.open(
          "https://github.com/naqibhishamuddin",
          "Github",
          "noopener"
        );
        break;
      case "Website":
        window.open("https://naqibhishamuddin.com", "Website", "noopener");
        break;
      default:
        break;
    }
  };

  return { onClickContact };
};
