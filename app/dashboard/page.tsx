"use client";
import React from "react";
import { useAppSelector } from "../redux/store";

const Dashboard = () => {
  const user = useAppSelector((state) => state.user);
  return (
    <div className="flex min-h-screen flex-col items-center justify-between md:px-24">
      {user.isLoggedIn && (
        <div>
          <h1>Dashboard</h1>
          <p>{user.userInfo.name}</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
