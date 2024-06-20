"use server";

interface signupProps {
  username: string;
  fullName: string;
  email: string;
  password: string;
  passwordConfirm: string;
  emailVisibility: boolean;
}

export default async function signup({
  username,
  email,
  emailVisibility,
  password,
  passwordConfirm,
  fullName,
}: signupProps) {
  const data = {
    username,
    email,
    emailVisibility,
    password,
    passwordConfirm,
    name: fullName,
  };
}
