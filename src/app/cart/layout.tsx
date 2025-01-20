'use client';

import { Provider } from 'react-redux';
import { store } from '../lib/store'; 
import { CartProvider } from 'use-shopping-cart';
import Navbar from '../../components/Header';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <Provider store={store}> 
        <CartProvider
          mode="payment"
          cartMode="client-only"
          stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!}
          successUrl="http://localhost:3000/success"
          cancelUrl="http://localhost:3000/cancel"
          currency="USD"
          allowedCountries={['US', 'GB', 'CA']}
          billingAddressCollection={true}
          shouldPersist={true}
        >
          <body className={inter.className}>
            <Navbar />
            <main className="container mx-auto px-4 py-8">{children}</main>
          </body>
        </CartProvider>
      </Provider>
  );
}
