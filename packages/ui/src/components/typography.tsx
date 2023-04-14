import * as React from "react";

import { cn } from "../lib/utils";

export function H1({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className,
      )}
      {...props}
    />
  );
}

export function H2({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        "mt-10 scroll-m-20 border-b border-b-slate-200 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 dark:border-b-slate-700",
        className,
      )}
      {...props}
    />
  );
}

export function H3({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  );
}

export function H4({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h4
      className={cn(
        "mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  );
}

export function P({
  className,
  ...props
}: React.HTMLAttributes<HTMLOutputElement>) {
  return (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    />
  );
}

export function Blockquote({
  className,
  ...props
}: React.QuoteHTMLAttributes<HTMLQuoteElement>) {
  return (
    <blockquote
      className={cn(
        "mt-6 border-l-2 border-slate-300 pl-6 italic text-slate-800 dark:border-slate-600 dark:text-slate-200",
        className,
      )}
      {...props}
    />
  );
}

export function InlineCode({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <code
      className={cn(
        "relative rounded bg-slate-100 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-400",
        className,
      )}
      {...props}
    />
  );
}
