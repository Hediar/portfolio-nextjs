
import "./globals.css";
import Footer from '@components/layout/Footer';
import Header from "@components/layout/Header";
import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >        
          <Header/>
            {children}
          <Footer githubUrl="https://github.com/Hediar/portfolio-nextjs" />
        </ThemeProvider>
      </body>
    </html>
  );
}
