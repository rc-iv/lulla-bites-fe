"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAppSelector } from "../redux/store";
import { useDispatch } from "react-redux";
import { login } from "../redux/features/userSlice";

const verifyPage = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState({
    isError: false,
    message: "",
  });

  // get url params
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const code = searchParams.get("code");

  const user = useAppSelector((state) => state.user);
  const dispatch = useDispatch();

  console.log(`email: ${email}, code: ${code}`);
  useEffect(() => {
    if (!email || !code) {
      setErrorMessage({ isError: true, message: "Invalid URL" });
      return;
    } else {
      verifyUser();
    }
  }, [router, email, code]);

  const verifyUser = async () => {
    const verifyUrl =
      "https://ml5d6fgpi8.execute-api.us-east-1.amazonaws.com/dev/verifyEmail";
    const response = await fetch(verifyUrl, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        code: code,
      }),
    });
    const data = await response.json();
    console.log(`data: ${JSON.stringify(data)}`);
    if (response.status === 200) {
      if (email) {
        dispatch(login(email));
      }
      router.push("/dashboard");
    } else {
      setErrorMessage({ isError: true, message: data.message });
    }
  };

  return (
    <div>
      <h1 className="text-center p-4 min-h-screen">
        {errorMessage.isError ? errorMessage.message : "Verifying..."}
      </h1>
    </div>
  );
};

export default verifyPage;
