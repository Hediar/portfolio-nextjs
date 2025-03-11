
import "./globals.css";
import Footer from '@components/layout/Footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <h1>대충 레이아웃 Header</h1>
        {children}
        <Footer githubUrl="https://github.com/Hediar/portfolio-nextjs" />
      </body>
    </html>
  );
}
