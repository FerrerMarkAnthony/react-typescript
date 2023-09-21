import React from "react";

type OscarProps = {
  children: React.ReactNode;
};

const Oscar = (props: OscarProps) => {
  return <h5>{props.children}</h5>;
};

export default Oscar;
