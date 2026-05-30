import { auth, currentUser } from "@clerk/nextjs/server";
import { db } from "./prisma";

export const checkUser = async () => {
  try {
    const { userId } = await auth();
    if (!userId) {
      return null;
    }

    const user = await currentUser();
    if (!user) {
      return null;
    }

    const loggedInUser = await db.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
      include: {
        transactions: {
          where: {
            type: "CREDIT_PURCHASE",
            createdAt: {
              gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
            },
          },
          orderBy: {
            createdAt: "desc",
          },
          take: 1,
        },
      },
    });

    if (loggedInUser) {
      return loggedInUser;
    }

    const name = `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim() || "User";

    const newUser = await db.user.create({
      data: {
        clerkUserId: user.id,
        name,
        imageUrl: user.imageUrl,
        email: user.emailAddresses[0]?.emailAddress ?? "",
        transactions: {
          create: {
            type: "CREDIT_PURCHASE",
            packageId: "free_user",
            amount: 0,
          },
        },
      },
    });

    return newUser;
  } catch (error) {
    // Layout/CSS compilation can run without middleware context in dev
    if (process.env.NODE_ENV === "development") {
      console.warn("[checkUser]", error?.message ?? error);
    }
    return null;
  }
};
