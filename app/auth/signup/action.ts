"use server";
import { pb } from "@/app/utils/pocketbase";
import { cookies } from "next/headers";

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

  console.log("pb", pb);
  const record = await pb.collection("users").create(data);
  console.log("pb.collection(users)", pb.collection("users"));
  const authData = await pb
    .collection("users")
    .authWithPassword(email, password);

  cookies().set("token", pb.authStore.token ?? "", {
    secure: true,
  });
  cookies().set("user", JSON.stringify(pb.authStore.model), {
    secure: true,
  });

  return { record, authData };
}
