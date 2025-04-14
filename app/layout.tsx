import SessionProviderWrapper from "@/components/SessionProviderWrapper";
import Header from "@/components/ui/Header/Header";
import Footer from "@/components/ui/Footer/Footer";
import "./globals.css";
import { SearchProvider } from "./contexts/useSearchContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SessionProviderWrapper>
          <SearchProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </SearchProvider>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
