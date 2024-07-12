import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";

export const UserLayout = () => {
  let user = true;

  if (!user) {
    return <Navigate to="/" />;
  }
  return (
    <div className="flex ">
      <div className="bg-red-600 flex-col flex gap-4 h-screen p-5">
        <Link className="text-white  hover:text-red-400" to={"/profile"}>
          Profile
        </Link>
        <Link
          className="text-white  hover:text-red-400"
          to={"/profile/order-list"}
        >
          Order List
        </Link>
        <Link
          className="text-white hover:text-red-400"
          to={"/profile/change-account"}
        >
          Change Account
        </Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
