import React from 'react';
import Link from 'next/link';
import { Destino } from '../mocks/destinosMock';
import styles from '../styles/Card.module.css';

interface CardDestinoProps {
  destino: Destino;
}

export default function CardDestino({ destino }: CardDestinoProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={destino.imagem} alt={destino.nome} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{destino.nome}</h3>
        <p className={styles.description}>{destino.descricaoCurta}</p>
        <Link href={`/destinos/${destino.id}`} className={styles.link}>
          Ver Detalhes
        </Link>
      </div>
    </div>
  );
}