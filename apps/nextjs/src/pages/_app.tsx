import "../styles/globals.css";
// include styles from the ui package
import "@aksar/ui/styles.css";
import type { AppType } from "next/app";
import { Inter as FontSans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import { Toaster, cn } from "@aksar/ui";

import { api } from "~/utils/api";
import { SiteHeader } from "~/components/site-header";
import { StyleSwitcher } from "~/components/style-switcher";
import { TailwindIndicator } from "~/components/tailwind-indicator";
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
          },
        }}
        {...pageProps}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main
            className={cn(
              "min-h-screen bg-background font-sans antialiased",
              fontSans.variable,
            )}
          >
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <div className="flex-1">
                <Component {...pageProps} />
              </div>
              {/*<SiteFooter />*/}
            </div>{" "}
            <TailwindIndicator />
          </main>
        </ThemeProvider>
        <StyleSwitcher />
        {/*<Analytics />*/}
        <Toaster />
      </ClerkProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
