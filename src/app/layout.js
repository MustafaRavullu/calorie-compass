import Header from "@/components/header";
import "./globals.css";

export const metadata = {
  title: "CalorieCompass",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col items-center">
        <Header />
        {children}
      </body>
    </html>
  );
}
