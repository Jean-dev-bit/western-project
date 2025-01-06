import { Poppins } from "next/font/google";
import "./ui/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

export const metadata= {
  title: {
    template: "%s | Finance",
    default: "Finance",
  },
  description: "Application de la gestion financière",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
