import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  title: 'Viral Caption Generator',
  description: 'Transform your normal text into viral captions with just one click',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
