import "./globals.css";




export const metadata = {
  title: "visitan app",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html dir="rtl">
      <body>
        {children}
      </body>
    </html>
  );
}
