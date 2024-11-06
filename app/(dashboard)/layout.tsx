import React from "react";

const dashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>HI this is dashboard layout</div>
      <div>{children}</div>
    </>
  );
};

export default dashboardLayout;
