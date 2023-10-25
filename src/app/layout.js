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
       font-montserrat"
      >
        <Header />
        <div
          id="general-wrapper"
          className="mt-[var(--top-margin)]  flex flex-col 
          items-center justify-start  w-[95%]  max-w-[1200px]  
          lg:mt-[var(--lg-top-margin)]"
        >
          {children}
        </div>
      </body>
    </html>
  );
}
