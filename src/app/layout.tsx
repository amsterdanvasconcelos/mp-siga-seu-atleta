import type { Metadata } from 'next';
import { Darker_Grotesque } from 'next/font/google';
import '@/css/globals.css';

const darkerGrotesque = Darker_Grotesque({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Siga Seu Atleta',
  description: 'Lista de atletas olímpicos e paralímpicos do Brasil!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${darkerGrotesque.className} font-semibold`}>
        {children}
      </body>
    </html>
  );
}
