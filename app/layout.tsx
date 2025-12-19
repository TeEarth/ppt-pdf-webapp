export const metadata = {
  title: "PPT & PDF Web App",
  description: "สร้าง PPT และแปลง PDF เป็นรูป",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body style={{ margin: 0, fontFamily: "sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
