import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";


const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Medivo",
  description: "Connect with doctors anytime, anywhere",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en" suppressHydrationWarning
    >
      <body className={`${inter.className}`}>
        {/* header */}

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen">{children}</main>
          {/* footer */}
          <footer className="bg-muted/50 py-12">
            <div className="container mx-auto px-4 text-center text-gray-200">
              <p>Made with ❤️ by Zaid</p>
            </div>
          </footer>
        </ThemeProvider>

      </body>
    </html>
  );
}
