
import Layout from "../components/Layout";
import Testimonial from "../components/Testimonial";
import styles from "../styles/Promo.module.css";




export default function Home({promos, testimonial}) {
  
  const {Titulo, contenido, imagen}= promos
  
  return (
    <Layout 
      pagina="Inicio"
    >

      <Testimonial
        testimonial={testimonial}
      />

      
      <section className='seccionPromo'>
      <div className={styles.grid}>
      <div className={styles.contenido}>
      <h1 className="heading">{Titulo}</h1>
      <h3 className={styles.texto}>{contenido}</h3>
      <a href='' className={styles.enlace}>Pedi ahora!</a>
      </div>
      </div>

      <style jsx>{`
      .seccionPromo {
              
              padding: 10rem 0;
              margin-top: 10rem;
              background-image: linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)) , url(${imagen.url});
              background-position:50%;
              background-size: cover;
              height: 55rem
              
}
`}
      </style>
      </section>
    </Layout>
  );
}



export async function getServerSideProps() {
  const urlPromos = `${process.env.API_URL}/Promos`;
  const respuestaPromos = await fetch(urlPromos);
  const promos = await respuestaPromos.json();

  const urlTestimonial = `${process.env.API_URL}/Testimonial`;
  const respuestaTestimonial = await fetch(urlTestimonial);
  const testimonial = await respuestaTestimonial.json();
  return {
    props: {
      promos,
      testimonial
    }
  }
}
