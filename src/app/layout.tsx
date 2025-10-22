import "@/style/style.scss"
import Provider from "@/store/provider";
import type { Metadata } from "next";
import { Archivo } from "next/font/google";

const archivo = Archivo({
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Frontpage.dev",
  description: "Frontpage testing website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={archivo.className}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
