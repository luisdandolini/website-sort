import Hamburguer from "./Hamburguer";
import styles from '../src/styles/Header.module.css';
import Image from "next/image";
import { use, useState } from "react";

export default function Header() {

  const [active, setActive] = useState('Comprar')

  const handleClickButtonBuy = () => {
    setActive('Comprar')
  }

  const handleClickButtonToHire = () => {
    setActive('Alugar')
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
  }

  return(
    <header className={styles.container_header}>
      <div className={styles.container_hamburguer}>
        <Hamburguer />
      </div>

      <div className={styles.container_form}>
        <h1>Imóvel não se compra, se invete.</h1>
        <h2>Chamamos isso de consultoria Sort.</h2>

        <form className={styles.form} onSubmit={handleSubmit}>
          <Image 
            src={'/lupa.png'}
            alt={'Busque por empreendimento'}
            width={16}
            height={16}
            className={styles.image_lupa}
          /> 
          <input type="text" placeholder="Busque por empreendimento"/>

          <div className={styles.container_buttons}>
            <button 
            className={`${styles.button_buy} ${active === 'Comprar' ? styles.active : ''}`}
            onClick={handleClickButtonBuy}
            >Comprar</button>
            <button 
            className={`${styles.button_to_hire} ${active === 'Alugar' ? styles.active : ''}`}
            onClick={handleClickButtonToHire}
            >Alugar</button>
          </div>

          <div className={styles.container_select}>
            <select>
              <option disabled selected>Tipo do imóvel</option>
              <option>Apartamento</option>
              <option>Casa</option>
            </select>

            <select>
              <option disabled selected>Cidade</option>
              <option>Itapema</option>
              <option>Balneário</option>
            </select>
          </div>

          <div className={styles.container_button_search}>
            <button>Buscar</button>
          </div>
        </form>
      </div>
    </header>
  )
}