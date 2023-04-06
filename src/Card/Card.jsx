import { Paragraph } from '../components/Paragraph/Paragraph';
import './Card.css';

function Card({ cardImg, cardNumber, cardTitle, cardParagraph }) {
  return (
    <article className='card'>
      <img src={cardImg} alt="Imagen de los productos" className='cardImg' />
      <div className='containerCard'>
        <p className='cardNumber'>
          { cardNumber }
        </p>
        <a href="./" className='cardLink'>
          { cardTitle }
        </a>
        <Paragraph text={cardParagraph} />
      </div>
    </article>
  );
}

export { Card };