import React, { useEffect } from "react";
import Login from "../Components/Myaccount/Account";
import Breadcrump from "../breadcrump/Breadcrump";
import { useLocation } from "react-router-dom";

const Myaccount = () => {
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    onTop();
  }, [routePath]);
  return (
    <div>
      <Breadcrump subname="My Account" />
      <Login />
    </div>
  );
};

export default Myaccount;
