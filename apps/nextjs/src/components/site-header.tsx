// import Link from "next/link";

// import { siteConfig } from "../config/site";

import { UserButton, useClerk, useUser } from "@clerk/nextjs";

import { Button, Icons /*, buttonVariants */ } from "@aksar/ui";

import { CommandMenu } from "./command-menu";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import { ModeToggle } from "./mode-toggle";

export function SiteHeader() {
  const { openSignIn } = useClerk();

  const { user } = useUser();

  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 shadow-sm backdrop-blur">
      <div className="container flex h-14 items-center">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-2 sm:space-x-4 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <CommandMenu />
          </div>
          <nav className="flex items-center space-x-1">
            {/*<Link
              href="{siteConfig.links.github}"
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                  className: "text-slate-700 dark:text-slate-400",
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href="{siteConfig.links.twitter}"
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                  className: "text-slate-700 dark:text-slate-400",
                })}
              >
                <Icons.twitter className="h-5 w-5 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>*/}
            <ModeToggle />
            {user && <UserButton />}
            {!user && (
              <Button size="sm" variant="ghost" onClick={() => openSignIn()}>
                <Icons.user className="h-5 w-5 fill-current" />
                <span className="sr-only">LogIn</span>
              </Button>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
