import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

const PLANS = [
  {
    id: "free_user",
    name: "Basic",
    price: "$0",
    period: "",
    credits: "2 credits on signup",
    description: "Perfect for trying out the platform",
    features: [
      "Video consultations",
      "Verified doctors",
      "Secure medical records",
    ],
  },
  {
    id: "standard",
    name: "Standard",
    price: "$19",
    period: "/month",
    credits: "10 credits monthly",
    description: "Ideal for regular healthcare needs",
    features: ["Everything in Basic", "Priority booking", "Email support"],
  },
  {
    id: "premium",
    name: "Premium",
    price: "$39",
    period: "/month",
    credits: "24 credits monthly",
    description: "For families and frequent visits",
    features: ["Everything in Standard", "Family sharing", "Premium support"],
  },
];

export function PricingFallback() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {PLANS.map((plan) => (
        <Card
          key={plan.id}
          className="flex flex-col border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md"
        >
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-semibold text-foreground">
              {plan.name}
            </CardTitle>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-4xl font-bold text-foreground">
                {plan.price}
              </span>
              {plan.period && (
                <span className="text-muted-foreground">{plan.period}</span>
              )}
            </div>
            <CardDescription className="pt-2">{plan.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-1 flex-col space-y-5">
            <p className="text-sm font-medium text-emerald-600">{plan.credits}</p>
            <ul className="flex-1 space-y-2">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <Check className="h-4 w-4 shrink-0 text-emerald-600" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button asChild className="btn-teal w-full">
              <Link href="/sign-up">Select Plan</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
