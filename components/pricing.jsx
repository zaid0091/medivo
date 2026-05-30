"use client";

import { PricingTable } from "@clerk/nextjs";
import { PricingFallback } from "./pricing-fallback";

const billingEnabled =
  process.env.NEXT_PUBLIC_CLERK_BILLING_ENABLED === "true";

const Pricing = () => {
  if (billingEnabled) {
    return (
      <div className="rounded-2xl bg-white p-4 md:p-6">
        <PricingTable
          checkoutProps={{
            appearance: {
              elements: {
                drawerRoot: { zIndex: 2000 },
              },
            },
          }}
        />
      </div>
    );
  }

  return <PricingFallback />;
};

export default Pricing;
