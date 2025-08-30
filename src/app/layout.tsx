import "./globals.css";
import Link from "next/link";
import type { Metadata } from "next";
import { buttonVariants } from "../components/ui/Button";
import { ThemeToggle } from "../components/ui/theme-toggle";
import { ScrollProgress } from "../components/ui/scroll-progress";

export const metadata: Metadata = {
  title: "포트폴리오 | 홈",
  description: "개발자 포트폴리오 메인 페이지",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className="min-h-dvh bg-background text-foreground">
        <ScrollProgress />
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
        >
          본문으로 바로가기
        </a>
        <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur dark:bg-black/40">
          <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
            <Link href="/" className="font-semibold tracking-tight">
              dev.portfolio
            </Link>
            <nav className="hidden items-center gap-1 md:flex">
              <Link href="/about" className={buttonVariants({ variant: "ghost", size: "sm" })}>About</Link>
              <Link href="/projects" className={buttonVariants({ variant: "ghost", size: "sm" })}>Projects</Link>
              <Link href="/blog" className={buttonVariants({ variant: "ghost", size: "sm" })}>Blog</Link>
              <Link href="/contact" className={buttonVariants({ variant: "ghost", size: "sm" })}>Contact</Link>
              <span className="mx-2 text-muted-foreground">|</span>
              <Link href="/dashboard" className={buttonVariants({ variant: "outline", size: "sm" })}>Dashboard</Link>
              <Link href="/login" className={buttonVariants({ size: "sm" })}>Login</Link>
              <ThemeToggle />
            </nav>
          </div>
          <div className="h-px w-full bg-[length:200%_100%] bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-[borderMove_4s_linear_infinite]" />
        </header>
        <main id="content" className="mx-auto max-w-6xl px-4 py-8">
          {children}
        </main>
        <footer className="border-t py-6">
          <div className="mx-auto max-w-6xl px-4 text-sm text-muted-foreground">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
