import { josefin_Sans } from './ui/fonts';
import './ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${josefin_Sans.className}`}>
        {children}
      </body>
    </html>
  );
}
