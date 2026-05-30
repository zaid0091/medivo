"use server";

import { checkAndAllocateCredits } from "@/actions/credits";
import { checkUser } from "@/lib/checkUser";

export async function getHeaderUser() {
  const user = await checkUser();
  if (!user) {
    return null;
  }

  if (user.role === "PATIENT") {
    await checkAndAllocateCredits(user);
  }

  return {
    role: user.role,
    credits: user.credits,
    verificationStatus: user.verificationStatus,
  };
}
