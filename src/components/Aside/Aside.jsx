import './Aside.css';

function Aside() {
  return(
    <aside>
      <h3 className="newTitle">New</h3>
      <article className="asideCard">
        <h4 className="newSubtitle">Hydrogen VS Electric Cars</h4>
        <p className='newParagraph'>Will hydrogen-fueled cars ever catch up to EVs?</p>
      </article>

      <article className="asideCard">
        <h4 className="newSubtitle">The Downsides of AI Artistry</h4>
        <p className='newParagraph'>What are the possible adverse effects of on-demand AI image generation?</p>
      </article>

      <article className="asideCard">
        <h4 className="newSubtitle">Hydrogen VS Electric Cars</h4>
        <p className='newParagraph'>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
      </article>
    </aside>
  );
}

export { Aside };