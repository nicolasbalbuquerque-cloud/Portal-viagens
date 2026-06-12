import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function HomePage() {
  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>Explore Destinos Inesquecíveis</h1>
      <p className={styles.subtitle}>
        Encontre inspiração para as suas próximas férias. O portal perfeito para planejar sua jornada pelo Brasil.
      </p>
      <Link href="/destinos" className={styles.btn}>
        Ver Destinos Disponíveis
      </Link>
    </div>
  );
}