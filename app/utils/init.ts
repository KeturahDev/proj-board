import { cookies } from "next/headers";
import { pb } from "./pocketbase"; //I dont make a new client of this, right? Seen others do so

export async function initPocketBase() {
  const cookieStore = cookies();
  const auth = cookieStore.get("pb_auth");

  pb.authStore.loadFromCookie(`pb_auth=${auth?.value as any}`);
  if (pb.authStore.isValid) {
    return pb;
  } else {
    return null;
  }
}
