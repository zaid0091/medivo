import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

export function PageHeader({
  icon,
  title,
  backLink = "/",
  backLabel = "Back to Home",
}) {
  return (
    <div className="mb-10 flex flex-col gap-6">
      <Link href={backLink}>
        <Button
          variant="ghost"
          size="sm"
          className="w-fit rounded-full border border-white/10 bg-white/5 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {backLabel}
        </Button>
      </Link>
      <div className="flex items-end gap-4">
        {icon && (
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/15 text-brand ring-1 ring-brand/25">
            {React.cloneElement(icon, { className: "h-7 w-7" })}
          </div>
        )}
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
          <span className="gradient-title">{title}</span>
        </h1>
      </div>
    </div>
  );
}
