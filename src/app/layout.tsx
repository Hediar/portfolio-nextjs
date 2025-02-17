
import "./globals.css";

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
        <h1>대충 레이아웃 Footer</h1>
      </body>
    </html>
  );
}
