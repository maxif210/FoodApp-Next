
import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Nosotros.module.css"

const Nosotros = () => {
  return (
    <Layout
        pagina="Nosotros"
    >
        <main className="contenedor">
          <h2 className="heading">Nosotros</h2>
          <div className={styles.contenido}>
            <Image layout="responsive" width={600} height={450} src="/img/nosotros1.jpg" alt="imagen sobre nosotros" />
            <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, provident? Expedita ab soluta, totam enim autem natus distinctio corrupti quia mollitia praesentium sit sint vero commodi nam cum architecto dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum iusto minima aliquid facere cupiditate quis sapiente odio. Suscipit, aspernatur temporibus repudiandae nam esse dolor id laborum. Tempora quos iste exercitationem. </p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, provident? Expedita ab soluta, totam enim autem natus distinctio corrupti quia mollitia praesentium sit sint vero commodi nam cum architecto dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum iusto minima aliquid facere cupiditate quis sapiente odio. Suscipit, aspernatur temporibus repudiandae nam esse dolor id laborum. Tempora quos iste exercitationem. </p>
            </div>
          </div>

        </main>
    </Layout>
  );
};

export default Nosotros;
