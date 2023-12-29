import { on } from "events";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface SignupModalProps {
  isVisible: boolean;
  onClose: () => void;
}
const SignupModal: React.FC<SignupModalProps> = ({ isVisible, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [singupError, setSignupError] = useState({
    isError: false,
    message: "",
  });

  const router = useRouter();

  const createUserUrl =
    "https://ml5d6fgpi8.execute-api.us-east-1.amazonaws.com/dev/createUser";

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    const response = await fetch(createUserUrl, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    console.log(`response: ${response.status}`);
    const data = await response.json();
    console.log(`data: ${JSON.stringify(data)}`);
    if (response.status === 200) {
        router.push("/signedUp");
    }

    if (response.status === 400) {
      setSignupError({ isError: true, message: data.message });
    }

    if (response.status === 500) {
      setSignupError({ isError: true, message: data.message });
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center text-black">
      <div className="bg-white w-full md:w-1/3 p-8 lg:p-20 rounded-md">
        <h2 className="text-lg font-bold mb-4">Sign Up</h2>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email Address
            </label>
            {singupError.isError && (
              <p className="text-red-500 text-xs italic">User already exists</p>
            )}
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Sign Up
          </button>
          <button
            type="button"
            onClick={onClose}
            className="ml-2 bg-gray-500 text-white p-2 rounded"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupModal;
