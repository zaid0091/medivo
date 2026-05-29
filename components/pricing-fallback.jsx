import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PLANS = [
  {
    id: "free_user",
    name: "Basic",
    price: "Free",
    credits: "2 credits on signup",
    description: "Get started with essential consultations",
    featured: false,
  },
  {
    id: "standard",
    name: "Standard",
    price: "$19/mo",
    credits: "10 credits / month",
    description: "Best for regular healthcare needs",
    featured: true,
  },
  {
    id: "premium",
    name: "Premium",
    price: "$39/mo",
    credits: "24 credits / month",
    description: "For families and frequent consultations",
    featured: false,
  },
];

export function PricingFallback() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {PLANS.map((plan) => (
        <Card
          key={plan.id}
          className={`border-emerald-900/30 ${
            plan.featured ? "ring-2 ring-emerald-600/50" : ""
          }`}
        >
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-white">{plan.name}</CardTitle>
              {plan.featured && (
                <Badge className="bg-emerald-600 text-white">Popular</Badge>
              )}
            </div>
            <p className="text-2xl font-bold text-emerald-400">{plan.price}</p>
            <CardDescription>{plan.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">{plan.credits}</p>
            <Button
              asChild
              className={`w-full ${
                plan.featured ? "bg-emerald-600 hover:bg-emerald-700" : ""
              }`}
              variant={plan.featured ? "default" : "outline"}
            >
              <Link href="/sign-up">Get Started</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
