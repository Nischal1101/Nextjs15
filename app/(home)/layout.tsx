import React from "react";
const homeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>header</h1>
      {children}
      <h1>footer</h1>
    </div>
  );
};

export default homeLayout;
