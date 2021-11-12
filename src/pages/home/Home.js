import Carousel from '../../components/carousel/carousel'
import Propuesta from '../../components/propuesta/propuesta'
import Recomendados from '../../components/recomendados/recomendados'
import Evento from '../../components/organizamos_evento/evento'
import Testimonio from '../../components/testimonios/testimonio'
import "normalize.css"

export default function Home() {
  return (
    <>
      <Carousel/>
      <Propuesta />
      <Recomendados />
      <Evento />
      <Testimonio />
    </>    
  );
}