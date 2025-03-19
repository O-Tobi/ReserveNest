import SessionProviderWrapper from "@/components/SessionProviderWrapper";
import Header from "@/components/ui/Header/Header";
import Footer from "@/components/ui/Footer/Footer";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SessionProviderWrapper>
          <Header />
          {children}
          <Footer />
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
