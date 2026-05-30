"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { getHeaderUser } from "@/actions/header";
import { getHomeCtas } from "@/lib/home-ctas";
import { Button } from "@/components/ui/button";

export function HomeHeroCtas() {
  const { isLoaded, isSignedIn } = useAuth();
  const [ctas, setCtas] = useState(() => getHomeCtas(null));

  useEffect(() => {
    if (!isLoaded) return;
    if (!isSignedIn) {
      setCtas(getHomeCtas(null));
      return;
    }
    getHeaderUser()
      .then((user) => setCtas(getHomeCtas(user)))
      .catch(() => setCtas(getHomeCtas(null)));
  }, [isLoaded, isSignedIn]);

  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <Button asChild size="lg" className="btn-teal h-12 px-8">
        <Link href={ctas.hero.primary.href}>{ctas.hero.primary.label}</Link>
      </Button>
      <Button asChild size="lg" variant="outline" className="btn-teal-outline h-12 px-8">
        <Link href={ctas.hero.secondary.href}>{ctas.hero.secondary.label}</Link>
      </Button>
    </div>
  );
}

export function HomeBottomCtas() {
  const { isLoaded, isSignedIn } = useAuth();
  const [ctas, setCtas] = useState(() => getHomeCtas(null));
  const isCtaBanner = !isSignedIn;

  useEffect(() => {
    if (!isLoaded) return;
    if (!isSignedIn) {
      setCtas(getHomeCtas(null));
      return;
    }
    getHeaderUser()
      .then((user) => setCtas(getHomeCtas(user)))
      .catch(() => setCtas(getHomeCtas(null)));
  }, [isLoaded, isSignedIn]);

  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <Button
        asChild
        size="lg"
        className={
          isCtaBanner
            ? "h-12 bg-white px-8 font-semibold text-emerald-700 hover:bg-emerald-50"
            : "btn-teal h-12 px-8"
        }
      >
        <Link href={ctas.bottom.primary.href}>{ctas.bottom.primary.label}</Link>
      </Button>
      <Button
        asChild
        size="lg"
        variant="outline"
        className={
          isCtaBanner
            ? "h-12 border-white/40 bg-transparent px-8 font-semibold text-white hover:bg-white/10"
            : "btn-teal-outline h-12 px-8"
        }
      >
        <Link href={ctas.bottom.secondary.href}>
          {ctas.bottom.secondary.label}
        </Link>
      </Button>
    </div>
  );
}
