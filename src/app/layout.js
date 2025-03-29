import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import "../styles/globals.css";

export const metadata = {
  title: "Tech Support",
  description: "Soluciones tecnológicas innovadoras",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${GeistSans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
