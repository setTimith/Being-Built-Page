import "./globals.css";
import { Roboto } from "next/font/google";

const font = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "LES ARCHITECTES WORKSHOP",
  description: "LES ARCHITECTES WORKSHOP WIP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
