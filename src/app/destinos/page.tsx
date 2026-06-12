import React from 'react';
import { destinosMock } from '../../mocks/destinosMock';
import CardDestino from '../../components/CardDestino';
import styles from '../../styles/Destinos.module.css';

export default function DestinosPage() {
  return (
    <div>
      <h2 className={styles.title}>Destinos em Destaque</h2>
      <div className={styles.grid}>
        {destinosMock && destinosMock.map((destino) => (
          <CardDestino key={destino.id} destino={destino} />
        ))}
      </div>
    </div>
  );
}