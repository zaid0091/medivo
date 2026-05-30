import Image from "next/image";
import { Check, Stethoscope } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Pricing from "@/components/pricing";
import { HomeBottomCtas, HomeHeroCtas } from "@/components/home-ctas";
import { creditBenefits, features, testimonials } from "@/lib/data";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="overflow-hidden py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-8">
              <span className="teal-badge">Healthcare for everyone</span>

              <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                Connect with doctors{" "}
                <span className="gradient-title block">anytime, anywhere</span>
              </h1>

              <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
                Book appointments, consult via video, and manage your healthcare
                journey all in one secure platform.
              </p>

              <HomeHeroCtas />
            </div>

            <div className="relative mx-auto h-[360px] w-full max-w-lg lg:h-[480px] lg:max-w-none">
              <Image
                src="/banner2.png"
                alt="Healthcare professionals"
                fill
                priority
                className="object-contain object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="section-light py-20">
        <div className="container mx-auto px-4">
          <div className="mb-14 text-center">
            <h2 className="mb-3 text-3xl font-bold text-emerald-700 md:text-4xl">
              How It Works
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Our platform makes healthcare accessible with just a few clicks
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <span className="teal-badge mb-4">Flexible Pricing</span>
            <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">
              Choose the plan that suits your needs
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Transparent consultation packages with no hidden fees
            </p>
          </div>

          <div className="pricing-shell">
            <Pricing />
          </div>

          <Card className="mt-8 border-gray-100 bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center text-xl font-semibold text-foreground">
                <Stethoscope className="mr-2 h-5 w-5 text-emerald-600" />
                How Our Credit System Works
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-4 sm:grid-cols-2">
                {creditBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-full bg-emerald-50 p-1">
                      <Check className="h-4 w-4 text-emerald-600" />
                    </div>
                    <p
                      className="text-sm text-muted-foreground"
                      dangerouslySetInnerHTML={{ __html: benefit }}
                    />
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-light py-20">
        <div className="container mx-auto px-4">
          <div className="mb-14 text-center">
            <span className="teal-badge mb-4">Success Stories</span>
            <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">
              What our clients say
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Hear from patients and doctors who use our platform
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <CardContent className="pt-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-50 text-sm font-bold text-emerald-700">
                      {testimonial.initials}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 px-8 py-14 md:px-14 md:py-16">
            <div className="relative z-10 max-w-2xl">
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                Ready to take control of your healthcare?
              </h2>
              <p className="mb-8 text-lg text-emerald-50">
                Join thousands of users who have simplified their healthcare
                journey. Get started today and experience healthcare the way
                it should be.
              </p>
              <HomeBottomCtas />
            </div>
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-teal-400/20 blur-3xl" />
          </div>
        </div>
      </section>
    </div>
  );
}
