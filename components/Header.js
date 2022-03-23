import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Header.module.css"

const Header = () => {
  return (
    <header className={styles.header}>
        <div className={`contenedor ${styles.flex}`}>
            <Link href="/">
              <a>
                <Image width={200} height={200} src="/img/logo.png" alt="Imagen logo" />
              </a>
            </Link>

            <nav className={styles.navegacion}>
                <Link href="/">Inicio</Link>
                <Link href="/nosotros">Nosotros</Link>
                <Link href="/blog">Carta</Link>
               
            </nav>

        </div>

        <button className={`animate__animated animate__bounce animate__infinite	infinite animate__slow ${styles.button}` }>
        <Image width={200} height={200} src="/img/arrow.png" alt="Imagen logo" />
        </button>

        {/* <div className={styles.containerButton}>
       
        </div> */}
    </header>
  )
}

export default Header