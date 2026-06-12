import React from 'react';
import Link from 'next/link';
import styles from '../styles/Layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          ✈️ Portal Viagens
        </Link>
        <nav className={styles.nav}>
          <Link href="/">Início</Link>
          <Link href="/destinos">Destinos</Link>
        </nav>
      </header>
      
      <main className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
        © 2026 Portal Viagens - Desenvolvido com Next.js & TypeScript
      </footer>
    </div>
  );
}