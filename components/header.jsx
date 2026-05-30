"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Calendar,
  CreditCard,
  Search,
  ShieldCheck,
  Stethoscope,
  User,
} from "lucide-react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useAuth,
} from "@clerk/nextjs";
import { getHeaderUser } from "@/actions/header";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export default function Header() {
  const { isLoaded, isSignedIn } = useAuth();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!isLoaded) return;
    if (!isSignedIn) {
      setUser(null);
      return;
    }
    getHeaderUser()
      .then(setUser)
      .catch(() => setUser(null));
  }, [isLoaded, isSignedIn]);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-md">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-single.png"
            alt="Medivo"
            width={160}
            height={48}
            className="h-9 w-auto object-contain"
            priority
          />
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <SignedOut>
            <Link href="/doctors" className="hidden sm:block">
              <Button
                variant="ghost"
                size="sm"
                className="gap-2 text-gray-600 hover:text-emerald-700"
              >
                <Search className="h-4 w-4" />
                Find a Doctor
              </Button>
            </Link>
            <SignInButton>
              <Button size="sm" className="btn-teal px-5">
                Log In / Register
              </Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            {user?.role === "ADMIN" && (
              <Link href="/admin">
                <Button variant="outline" size="sm" className="hidden md:inline-flex gap-2">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  Admin
                </Button>
              </Link>
            )}
            {user?.role === "DOCTOR" && (
              <Link href="/doctor">
                <Button variant="outline" size="sm" className="hidden md:inline-flex gap-2">
                  <Stethoscope className="h-4 w-4 text-emerald-600" />
                  Dashboard
                </Button>
              </Link>
            )}
            {user?.role === "PATIENT" && (
              <Link href="/appointments">
                <Button variant="outline" size="sm" className="hidden md:inline-flex gap-2">
                  <Calendar className="h-4 w-4 text-emerald-600" />
                  Appointments
                </Button>
              </Link>
            )}
            {user?.role === "UNASSIGNED" && (
              <Link href="/onboarding">
                <Button size="sm" className="btn-teal">
                  Complete Profile
                </Button>
              </Link>
            )}

            {(!user || user?.role !== "ADMIN") && (
              <Link href={user?.role === "PATIENT" ? "/pricing" : "/doctor"}>
                <Badge
                  variant="outline"
                  className="h-9 gap-1.5 border-emerald-200 bg-emerald-50 px-3 text-emerald-700"
                >
                  <CreditCard className="h-3.5 w-3.5" />
                  {user && user.role !== "ADMIN" ? (
                    <>
                      {user.credits}
                      <span className="hidden md:inline">
                        {user?.role === "PATIENT" ? " credits" : " earned"}
                      </span>
                    </>
                  ) : (
                    "Pricing"
                  )}
                </Badge>
              </Link>
            )}

            <UserButton
              appearance={{
                elements: {
                  avatarBox: "h-9 w-9 ring-2 ring-emerald-100",
                },
              }}
              afterSignOutUrl="/"
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
}
