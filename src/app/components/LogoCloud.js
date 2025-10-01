// components/LogoCloud.js
import Image from 'next/image';
import styles from './LogoCloud.module.css';
import { getImagePath } from '../utils/getImagePath';

// I dati dei loghi rimangono qui per comodità
const logos = [
  { src: getImagePath('/images/logo-a-bandiera-carisbo.png'), alt: 'Fondazione Cassa di Risparmio in Bologna' },
  { src: getImagePath('/images/logo-unibo.png'), alt: 'Alma Mater Studiorum Università di Bologna' },
  { src: getImagePath('/images/dharc-logo.svg'), alt: 'Digital Humanities Advanced Research Centre' },
  { src: getImagePath('/images/dhlab_logo.png'), alt: 'DH Lab' },
];

const LogoCloud = () => {
  return (
    // Restituiamo direttamente la griglia, senza contenitori esterni o titoli
    <div className={styles.logoGrid}>
      {logos.map((logo, index) => (
        <div key={index} className={styles.logoWrapper}>
          <Image
            src={logo.src}
            alt={logo.alt}
            layout="fill"
            objectFit="contain"
          />
        </div>
      ))}
    </div>
  );
};

export default LogoCloud;