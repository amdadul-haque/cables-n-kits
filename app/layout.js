import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "CablesAndKits Services",
  description: "Empowering Network and Eleveting Connectivity",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={openSans.className}
      >{children}</body>
    </html>
  );
}
