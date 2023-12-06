"use client";
import React, { useState } from "react";
import Login from "../components/login";
import { useAppSelector } from "../redux/store";
import { useRouter } from "next/navigation";
import SignupModal from "../components/signupModal";

const LoginPage = () => {
  const user = useAppSelector((state) => state.user);
  const [isSignupModalVisible, setIsSignupModalVisible] =
    useState<boolean>(false);

  const router = useRouter();

  const openSignupModal = () => {
    setIsSignupModalVisible(true);
  };

  const closeSignupModal = () => {
    setIsSignupModalVisible(false);
  };

  if (user.isLoggedIn) {
    router.push("/dashboard");
  }

  return (
    <main className="flex min-h-2/3 flex-col items-center justify-between md:px-24">
      <Login />
      <p className="text-center text-sm text-thistle-800 dark:text-jetstream-100 mt-2">
          Not a member?{" "}
          <a
            href="#"
            onClick = {openSignupModal}
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Start a 14 day free trial
          </a>
        </p>
      <SignupModal
        isVisible={isSignupModalVisible}
        onClose={closeSignupModal}
      />
    </main>
  );
};

export default LoginPage;
