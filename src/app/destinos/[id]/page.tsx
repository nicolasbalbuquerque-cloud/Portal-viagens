import React from 'react';
import Link from 'next/link';
import { destinosMock } from '../../../mocks/destinosMock';
import styles from '../../../styles/Destinos.module.css';

interface DetailPageProps {
  params: {
    id: string;
  };
}

export default function DestinoDetailPage({ params }: DetailPageProps) {
  const destino = destinosMock.find((d) => d.id === params.id);

  if (!destino) {
    return (
      <div style={{ textAlign: 'center', padding: '40px' }}>
        <h2>Destino não encontrado!</h2>
        <Link href="/destinos" style={{ color: '#38bdf8' }}>Voltar para a listagem</Link>
      </div>
    );
  }

  return (
    <div className={styles.detailContainer}>
      <img src={destino.imagem} alt={destino.nome} className={styles.detailImage} />
      
      <div className={styles.infoSection}>
        <h1 className={styles.detailTitle}>{destino.nome}</h1>
        <p className={styles.fullDescription}>{destino.descricaoCompleta}</p>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className={styles.priceBadge}>
            Investimento Médio: {destino.precoMedio}
          </div>
          <Link href="/destinos" style={{ color: '#38bdf8', textDecoration: 'none', fontWeight: 'bold' }}>
            ← Voltar para todos os destinos
          </Link>
        </div>
      </div>
    </div>
  );
}