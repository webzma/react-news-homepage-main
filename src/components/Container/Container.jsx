import './Container.css';
import { Card } from '../../Card/Card';
import { Button } from '../Button/Button';
import { Paragraph } from '../Paragraph/Paragraph';
import { Aside } from '../Aside/Aside';

import img1 from "../../assets/images/image-retro-pcs.jpg";
import img2 from "../../assets/images/image-top-laptops.jpg";
import img3 from "../../assets/images/image-gaming-growth.jpg";

function Container({ children }) {
  const cards = [
    {
      urlImg: img1,
      number: "01",
      title: "Reviving Retro PCs",
      paragraph: "What happens when old PCs are given modern upgrade?"
    },
    {
      urlImg: img2,
      number: "02",
      title: "Top 10 Laptops of 2022",
      paragraph: "Our best pick for various needs and budgets.",
    },
    {
      urlImg: img3,
      number: "03",
      title: "The Growth of Gaming",
      paragraph: "How the pandemic has sparked fresh opportunities."
    },
  ];

  return(
    <main className="container">
      <div className='mainImage'></div>
      <div className='containerTitle'>
        <h1 className='title'>
          The Bright Future of Web 30.0?
        </h1>
      </div>
      <div className='containerButton'>
        <Paragraph text="We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?" />
        <Button />
      </div>
      <Aside />
      { cards.map(card => (
        <Card cardImg={card.urlImg} cardNumber={card.number} cardTitle={card.title} cardParagraph={card.paragraph} />
      )) }
    </main>
  );
}

export { Container };