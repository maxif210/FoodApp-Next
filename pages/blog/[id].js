import Image from "next/image"
import Layout from "../../components/Layout"
import { formatearFecha } from "../../helpers"
import styles from "../../styles/Entrada.module.css"



const EntradaBlog = ({entrada}) => {
const {titulo, precio, contenido, imagen, published_at, id} = entrada
  return (
      <Layout>
    <main className="contenedor">
        <h1 className="heading">{titulo}</h1>
        <article className={styles.entrada}>
            <Image priority="true" layout="responsive" width={800} height={600} src={imagen.url} alt={`imagen blog ${titulo}`} />
            <div className={styles.contenido}>
            <p className={styles.fecha}>{formatearFecha(published_at)}</p>
            <p className={styles.texto}>{contenido}</p>
            <p className={styles.precio}>$ {precio}</p>
            </div>
        </article>

    </main>
    </Layout>
  )
}
export async function getStaticPaths() {
    const url = `${process.env.API_URL}/blogs`;
    const respuesta = await fetch(url) 
    const entradas = await respuesta.json();
    const paths = entradas.map(entrada=> ({
        params: {id:entrada.id.toString()}
    }

    ) )
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params : {id}}) {
    const url = `${process.env.API_URL}/blogs/${id}`;
    const respuesta = await fetch(url);
    const entrada = await respuesta.json();
    
   
    return {
        props:{
            entrada
            
        }
    }
}

export default EntradaBlog