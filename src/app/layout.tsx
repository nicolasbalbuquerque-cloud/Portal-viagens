import React from 'react';
import Layout from '../components/Layout';
import '../styles/globals.css';

export const metadata = {
  title: 'Portal de Viagens Next.js',
  description: 'Descubra seu próximo destino turístico',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}