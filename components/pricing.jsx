"use client";

import { Card, CardContent } from "./ui/card";
import { PricingTable } from "@clerk/nextjs";
import { PricingFallback } from "./pricing-fallback";

const billingEnabled =
  process.env.NEXT_PUBLIC_CLERK_BILLING_ENABLED === "true";

const Pricing = () => {
  return (
    <Card className="border-emerald-900/30 shadow-lg bg-gradient-to-b from-emerald-950/30 to-transparent">
      <CardContent className="p-6 md:p-8">
        {billingEnabled ? (
          <PricingTable
            checkoutProps={{
              appearance: {
                elements: {
                  drawerRoot: {
                    zIndex: 2000,
                  },
                },
              },
            }}
          />
        ) : (
          <PricingFallback />
        )}
      </CardContent>
    </Card>
  );
};

export default Pricing;
