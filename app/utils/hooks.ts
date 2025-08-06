import { redirect } from "next/navigation";
import { auth } from "../utils/auth";

export async function requiredUser() {
  const session = await auth();

  if (!session?.user) {
    redirect("/");
  }

  return session;
}
