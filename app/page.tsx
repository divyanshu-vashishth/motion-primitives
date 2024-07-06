import Link from "next/link";
import React from "react";
import Dialog from "@/components/core/dialog";
import XIcon from "@/components/website/icons/x";
import GitHubIcon from "@/components/website/icons/github";
import Popover from "@/components/core/popover";
import ToolbarExpandable from "@/components/core/toolbar-expandable";
import ToolbarDynamic from "@/components/core/toolbar-dynamic";

function Button({
  children,
  variant = "primary",
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const buttonVariants = {
    primary: "bg-zinc-600 text-white hover:bg-zinc-700",
    secondary: "bg-zinc-900 text-white hover:bg-zinc-700",
  };

  return (
    <button
      className={`rounded-md px-2.5 py-1.5 text-sm ${buttonVariants[variant]}`}
    >
      {children}
    </button>
  );
}

function Header() {
  return (
    <header className="relative top-0 z-10 bg-white px-6 py-5  dark:border-white/10 dark:bg-neutral-900 lg:z-10 lg:flex lg:h-16 lg:items-center lg:px-8 lg:py-0">
      <div className="mx-auto flex w-full items-center justify-between md:max-w-7xl">
        <a href="/" className="relative flex items-center">
          <div className="text-neutral-950 dark:text-white">
            motion-primitives
          </div>
          <span className="mb-4 ml-2 select-none rounded-full bg-neutral-800 px-2 py-0.5 text-xs text-neutral-50">
            beta
          </span>
        </a>
        <nav className="flex items-center gap-2">
          <a
            href="https://twitter.com/Ibelick"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center"
          >
            <XIcon className="h-4 w-4 fill-neutral-950 dark:fill-white" />
          </a>
          <a
            href="https://github.com/ibelick/motion-primitives"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center"
          >
            <GitHubIcon className="h-4 w-4 fill-neutral-950 dark:fill-white" />
          </a>
        </nav>
      </div>
    </header>
  );
}

function CardExample({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative -mx-6 sm:mx-0">
      <div className="pointer-events-none absolute left-0 top-[-100px] z-[-1] h-full w-full bg-[radial-gradient(100%_100%_at_50%_50%,hsl(0deg_0%_100%/8%)_0,hsl(0deg_0%_100%/2%)_50%)] blur-2xl md:left-[-100px] md:h-[calc(100%+200px)] md:w-[calc(100%+200px)]" />
      <div className="relative w-full overflow-hidden rounded-xl bg-zinc-50 p-4 shadow-[0px_0px_0px_1px_theme(colors.zinc.100),0px_2px_2px_0px_theme(colors.zinc.50)] dark:border dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-none">
        <div className="flex h-[350px] items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function Motion() {
  return (
    <>
      <Header />
      <div className="px-6 py-4 pb-20">
        <section className="flex h-full flex-col items-center justify-center pt-20">
          <div className="flex w-full max-w-lg flex-col items-center justify-center text-center">
            <h1 className="relative mb-4 text-4xl font-medium text-zinc-950 dark:text-zinc-50">
              Build beautiful animated components
            </h1>
            <p className="text-center text-zinc-600 dark:text-zinc-200">
              Beautifully designed motions components. Easy copy-paste.
              Customizable. Open Source. Built for engineers and designers.
            </p>
          </div>
          <div className="flex items-center space-x-4 py-6">
            <Link href="/docs">
              <Button>Get Started</Button>
            </Link>
            <a href="github.com">
              <Button variant="secondary">GitHub</Button>
            </a>
          </div>
          <span className="mt-2 text-center text-sm text-zinc-400 dark:text-zinc-400">
            Free updates and new components released regularly.
          </span>
        </section>
        <section className="mx-auto max-w-3xl py-32">
          <CardExample>
            <Dialog />
          </CardExample>
        </section>
        <section className="mx-auto max-w-3xl py-32">
          <CardExample>
            <Popover />
          </CardExample>
        </section>
        <section className="mx-auto max-w-3xl py-32">
          <CardExample>
            <ToolbarExpandable />
          </CardExample>
        </section>
        <section className="mx-auto max-w-3xl py-32">
          <CardExample>
            <ToolbarDynamic />
          </CardExample>
        </section>
      </div>
    </>
  );
}
