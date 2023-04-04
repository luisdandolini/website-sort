import { useState } from 'react';
import Image from 'next/image';
import styles from '../src/styles/Carousel.module.css';

interface OpportunittiesProps {
  title: string;
}

export default function Opportunities(props: OpportunittiesProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const properties = [
    {
      title: 'Apartamento Infinity Coast',
      size: '300m',
      rooms: '4Suítes',
      price: 'R$ 14.500.000,00',
      location: 'Balneário Camboriú'
    },
    {
      title: 'Apartamento na Beira-Mar',
      size: '250m',
      rooms: '3 Suítes',
      price: 'R$ 10.800.000,00',
      location: 'Florianópolis'
    },
    {
      title: 'Casa de luxo no Jurerê Internacional',
      size: '600m',
      rooms: '5 Suítes',
      price: 'R$ 22.000.000,00',
      location: 'Florianópolis'
    },
    {
      title: 'Apartamento no centro da cidade',
      size: '120m',
      rooms: '2 Quartos',
      price: 'R$ 2.500.000,00',
      location: 'São Paulo'
    }
  ];

  const handlePrevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? properties.length - 3 : currentSlide - 1);
  }

  const handleNextSlide = () => {
    setCurrentSlide(currentSlide === properties.length - 3 ? 0 : currentSlide + 1);
  }

  return (
    <section>
      <h2 className={styles.title}>{props.title}</h2>

      <div className={styles.container}>
        <Image 
          src={'/previous.svg'}
          alt={'Botão de oferta anterior'}
          width={32}
          height={32}
          onClick={handlePrevSlide}
        /> 

        {properties.slice(currentSlide, currentSlide + 3).map((property, index) => (
          <div key={index} className={styles.container_immobile}>
            <p className={styles.sell}>VENDA</p>

            <div className={styles.immobile}>
              <p>{property.title}</p>
              <span>{property.size}</span> <span>{property.rooms}</span>
            </div>

            <div className={styles.price}>
              <span>{property.price}</span>
            </div>

            <div className={styles.container_footer}>
              <span>{property.location}</span>
              <span className={styles.view_immobile}>Ver imóvel</span>
            </div>
          </div>
        ))}
        
        <Image 
          src={'/next.svg'}
          alt={'Botão de próxima oferta'}
          width={32}
          height={32}
          onClick={handleNextSlide}
        /> 
      </div>

    </section>
  );
}
