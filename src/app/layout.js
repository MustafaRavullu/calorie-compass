import Header from "@/components/header";
import "./globals.css";

export const metadata = {
  title: "CalorieCompass",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="min-h-screen flex flex-col items-center 
      bg-gradient-to-b bg-cc_background  from-cc_secondary text-cc_text
       font-pixelify"
      >
        <Header />
        <div
          id="general-wrapper"
          className="mt-[var(--top-margin)] w-full flex flex-col 
          items-center justify-start px-3 sm:w-[var(--sm-content-width)] sm:px-0 
          lg:mt-[var(--lg-top-margin)]"
        >
          {children}
        </div>
      </body>
    </html>
  );
}
