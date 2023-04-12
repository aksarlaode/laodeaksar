import "../styles/globals.css";
// include styles from the ui package
import "@aksar/ui/styles.css";
import type { AppType } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";

import { api } from "~/utils/api";
import { SiteHeader } from "~/components/site-header";
import { ThemeProvider } from "~/components/theme-provider";

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <ClerkProvider {...pageProps}>
          <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <div className="container flex-1">
              <Component {...pageProps} />
            </div>
            {/*<SiteFooter />*/}
          </div>
        </ClerkProvider>
      </ThemeProvider>
      {/*<Analytics />
          <Toaster />*/}
    </>
  );
};

export default api.withTRPC(MyApp);
