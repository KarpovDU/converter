'use client'

import { Providers } from '@/lib/providers'
import { useEffect, useState } from 'react'
import "./globals.css"




export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>){
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <></>;
  }
  return (
    <html lang="en">
      <body>
        <Providers>
            {children}
        </Providers>
      </body>
    </html>
  );
}
