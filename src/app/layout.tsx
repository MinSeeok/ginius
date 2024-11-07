import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`w-screen max-w-screen min-h-screen flex flex-col justify-start items-center`}
      >
        {children}
      </body>
    </html>
  );
}

