import React from "react";
import "./anonymous.scss";

const AnonymousLayout = ({ children }: any) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [children]);

  return <div>{children}</div>;
};

export default AnonymousLayout;
