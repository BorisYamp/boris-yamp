import type { Metadata } from 'next';
import '../styles/global.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://boris-yamp.vercel.app'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
