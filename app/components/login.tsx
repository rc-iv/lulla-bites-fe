"use client";
import React, { use, useState, useEffect } from "react";
import Image from "next/image";
import { login } from "../redux/features/userSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useAppSelector } from "../redux/store";


const Login = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const user = useAppSelector((state) => state.user);

  useEffect(() => {
    console.log(user.isLoggedIn)
    if (user.isLoggedIn) {
      router.push("/dashboard");
    }
  }, [user, router]);

  const onClickLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(login(email));
  };

  return (
    <div className="flex flex-1 flex-col justify-center px-6 mt-12 lg:px-8">
      <div className="mx-auto w-full max-w-sm">
        <Image
          alt="lullabites logo"
          src="/images/logo.png"
          width={100}
          height={100}
          className="rounded-full mx-auto"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-thistle-800 dark:text-jetstream-100">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-thistle-800 dark:text-jetstream-100"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-thistle-400 dark:focus:ring-jetstream-700 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-thistle-800 dark:text-jetstream-100"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-thistle-400 dark:focus:ring-jetstream-700 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              onClick={onClickLogin}
              className="flex w-full justify-center rounded-md bg-jetstream-700 dark:bg-jetstream-500 px-3 py-1.5 text-sm font-semibold leading-6 text-jetstream-100 dark:text-thistle-900 shadow-sm hover:bg-jetstream-800 dark:hover:bg-thistle-800 dark:hover:text-jetstream-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Sign in
            </button>
          </div>
        </form>

        <div className="text-sm mt-4 mx-auto text-center">
          <a
            href="#"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Forgot password?
          </a>
        </div>
        
      </div>
    </div>
  );
};

export default Login;
