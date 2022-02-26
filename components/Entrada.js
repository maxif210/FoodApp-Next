import Link from "next/link"
import Image from "next/image"
import { formatearFecha } from "../helpers"
import styles from '../styles/Entrada.module.css'


const Entrada = ({entrada}) => {
  const {titulo, precio, contenido, imagen, published_at, id} = entrada

  return (
    <article>
      <Image priority="true" width={800} height={600} layout="responsive" src={imagen.url} alt={`imagen blog ${titulo}`} />

      <div className={styles.contenido}>
      <h3>{titulo}</h3>
      <p className={styles.fecha}>{formatearFecha(published_at)}</p>
      <p className={styles.descripcion}>{contenido}</p>
      <p className={styles.precio}>$ {precio}</p>
      <Link href={`/blog/${id}`}>
        <a className={styles.enlace}>
        Agregar al Carrito
        </a>
        
      </Link>


      </div>
    </article>
  )
}

export default Entrada