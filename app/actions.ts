"use server";

import { prisma } from "./../lib/prisma";
import { requiredUser } from "./utils/hooks";
import { parseWithZod } from "@conform-to/zod";
import { onBoardingSchema } from "./utils/schemas/zod";
import { redirect } from "next/navigation";

export async function onboardUser(prevState: any, formData: FormData) {
  const session = await requiredUser();
  const submission = parseWithZod(formData, {
    schema: onBoardingSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const data = await prisma.user.update({
    where: {
      id: session.user?.id,
    },
    data: {
      firstName: submission.value.firstname,
      lastName: submission.value.lastname,
      address: submission.value.address,
    },
  });

  return redirect("/dashboard");
}
