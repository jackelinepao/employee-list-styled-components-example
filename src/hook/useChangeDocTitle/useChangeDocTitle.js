import React from "react";

const useChangeDocTitle = () => {
  const [documentTitle, setdocumentTitle] = React.useState("My App");

  const onTitleChange = (newTitle) => {
    setdocumentTitle(`My cool app: ${newTitle}`);
  };

  React.useEffect(() => {
    document.title = documentTitle;
  }, [documentTitle]);
  return { setdocumentTitle: onTitleChange };
};

export { useChangeDocTitle };
