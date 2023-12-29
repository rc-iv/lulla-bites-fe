"use client";
import React, { useState } from "react";
import Login from "../components/auth/login";
import { useAppSelector } from "../redux/store";
import { useRouter } from "next/navigation";
import SignupModal from "../components/auth/signupModal";

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
    <main className="flex min-h-2/3 w-full flex-col items-center justify-between md:px-24">
      <Login />
      <div
        className="rounded-lg p-4 hover:cursor-pointer bg-thistle-800 text-jetstream-300 hover:bg-jetstream-300 hover:text-thistle-900 dark:bg-jetstream-800 dark:text-thistle-300 mt-4  dark:hover:bg-thistle-300 dark:hover:text-jetstream-900"
        onClick={openSignupModal}
      >
        <p className="text-center text-sm">
          Not a member?{" "}
          <span className="font-semibold leading-6 hover:text-indigo-500">
            Start a 14 day free trial
          </span>
        </p>
      </div>
      <SignupModal
        isVisible={isSignupModalVisible}
        onClose={closeSignupModal}
      />
    </main>
  );
};

export default LoginPage;
