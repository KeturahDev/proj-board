"use client";
import { useState } from "react";
import Link from "next/link";
import signup from "./action";
import { useRouter } from "next/navigation";

function SignUp() {
  const router = useRouter();
  const [username, setUserName] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [emailVisible, setEmailVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordConfirm, setpasswordConfirm] = useState("");

  const handleSubmit = () => {
    signup({
      username,
      fullName,
      email,
      password,
      passwordConfirm,
      emailVisibility: emailVisible,
    });
    // TODO: form validation with zod
    //

    // Reset form fields
    setUserName("");
    setFullName("");
    setEmail("");
    setPassword("");
    setpasswordConfirm("");
    setEmailVisible(false);

    //if validation good
    router.push("/");
  };

  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0 text-black">
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample image"
        />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <form action={handleSubmit}>
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
            type="text"
            placeholder="User Name"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="password"
            placeholder="Password Confirm"
            value={passwordConfirm}
            onChange={(e) => setpasswordConfirm(e.target.value)}
          />
          <div className="mt-4 flex justify-between font-semibold text-sm">
            <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
              <input
                className="mr-1"
                type="checkbox"
                checked={emailVisible}
                onChange={(e) => setEmailVisible(e.target.checked)}
              />
              <span>Email Visible</span>
            </label>
          </div>
          <div className="text-center md:text-left">
            <button
              className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
              type="submit"
            >
              Sign Up
            </button>
          </div>
          <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className="text-red-600 hover:underline hover:underline-offset-4"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SignUp;
