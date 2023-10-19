import Header from "@/components/header";
import "./globals.css";

export const metadata = {
  title: "CalorieCompass",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col items-center bg-cc_background text-cc_text font-pixelify">
        <Header />
        <div className="mt-[36px] lg:mt-[44px]">{children}</div>
      </body>
    </html>
  );
}
