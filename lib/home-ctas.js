export function getHomeCtas(user) {
  if (!user) {
    return {
      hero: {
        primary: { href: "/doctors", label: "Find a Doctor" },
        secondary: { href: "#how-it-works", label: "How it Works" },
      },
      bottom: {
        primary: { href: "/sign-up", label: "Get Started" },
        secondary: { href: "#pricing", label: "View Pricing" },
      },
    };
  }

  switch (user.role) {
    case "PATIENT":
      return {
        hero: {
          primary: { href: "/doctors", label: "Find a Doctor" },
          secondary: { href: "/appointments", label: "My Appointments" },
        },
        bottom: {
          primary: { href: "/doctors", label: "Book an Appointment" },
          secondary: { href: "/appointments", label: "My Appointments" },
        },
      };
    case "DOCTOR":
      if (user.verificationStatus === "VERIFIED") {
        return {
          hero: {
            primary: { href: "/doctor", label: "Doctor Dashboard" },
            secondary: { href: "/doctor", label: "Manage Schedule" },
          },
          bottom: {
            primary: { href: "/doctor", label: "Go to Dashboard" },
            secondary: { href: "/doctor", label: "Manage Schedule" },
          },
        };
      }
      return {
        hero: {
          primary: { href: "/doctor/verification", label: "Verification Status" },
          secondary: { href: "/", label: "Back to Home" },
        },
        bottom: {
          primary: { href: "/doctor/verification", label: "Check Verification" },
          secondary: { href: "/", label: "Back to Home" },
        },
      };
    case "ADMIN":
      return {
        hero: {
          primary: { href: "/admin", label: "Admin Dashboard" },
          secondary: { href: "/doctors", label: "Browse Doctors" },
        },
        bottom: {
          primary: { href: "/admin", label: "Admin Dashboard" },
          secondary: { href: "/doctors", label: "Browse Doctors" },
        },
      };
    default:
      return {
        hero: {
          primary: { href: "/onboarding", label: "Complete Profile" },
          secondary: { href: "#pricing", label: "View Pricing" },
        },
        bottom: {
          primary: { href: "/onboarding", label: "Complete Profile" },
          secondary: { href: "#pricing", label: "View Pricing" },
        },
      };
  }
}
