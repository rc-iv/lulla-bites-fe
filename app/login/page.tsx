"use client";
import React from "react";
import Login from "../components/login";
import { useAppSelector } from "../redux/store";

const LoginPage = () => {
  const user = useAppSelector((state) => state.user);
  const isLoggedIn = user.isLoggedIn;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:px-24">
      <Login />
    </main>
  );
};

export default LoginPage;
