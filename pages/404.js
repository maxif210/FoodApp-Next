
import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/NoEncontrado.module.css";

const NoEncontrado = () => {
  return (
    <Layout>
   <div className={styles.no_encontrado}>
   <h1 className="heading">Pagina no encontrada</h1>
    <Link href='/'>Volver al inicio</Link>
   </div>
    </Layout>
  )
}

export default NoEncontrado