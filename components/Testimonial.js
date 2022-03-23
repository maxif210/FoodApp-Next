import Image from "next/image";
import React from "react";
import styles from "../styles/Testimonial.module.css";

const Testimonial = ({ testimonial }) => {
  console.log(testimonial);
  const { titulo, subtitulo, imagen, frase } = testimonial;

  return (
    <div className={styles.container}>
      <div className="contenedor">
        <div >
          <h2>Testimonials</h2>
          <hr/>
          <div className={styles.circulo}></div>
          <div className={styles.testimonialCard}>
            <div className={styles.imagenPerfil}>
              <Image
                layout="responsive"
                width={100}
                height={100}
                src={imagen.formats.thumbnail.url}
                alt=""
              ></Image>
            </div>
            <p>{titulo}</p>
            <p>{subtitulo}</p>
            <p>{frase}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
