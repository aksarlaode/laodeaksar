import "../styles/globals.css";
// include styles from the ui package
import "@aksar/ui/styles.css";
import type { AppType } from "next/app";
import { Inter as FontSans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import { cn } from "@aksar/ui";

import { api } from "~/utils/api";
import { SiteHeader } from "~/components/site-header";
import { ThemeProvider } from "~/components/theme-provider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${fontSans.style.fontFamily};
        }
      `}</style>
      <ClerkProvider
        appearance={{
          variables: {
            fontFamily: fontSans.style.fontFamily,
            colorBackground: "bg-white dark:bg-slate-900",
          },
        }}
        {...pageProps}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main
            className={cn(
              "min-h-screen bg-white font-sans text-slate-900 antialiased dark:bg-slate-900 dark:text-slate-50",
              fontSans.variable,
            )}
          >
            <div className="flex min-h-screen flex-col">
              <SiteHeader />
              <div className="container flex-1">
                <Component {...pageProps} />
              </div>
              {/*<SiteFooter />*/}
            </div>
          </main>
        </ThemeProvider>

        {/*<Analytics />
          <Toaster />*/}
      </ClerkProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
