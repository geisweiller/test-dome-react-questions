import React, { useState} from 'react';
import { createRoot } from 'react-dom/client';

const ImageGallery = ({ links }) => {
  const [linksState, setLinksState] = useState(links);

  const handleRemoveLink = (link) => {
    setLinksState(prev => prev.filter((p) => p !== link))
  }
  
  return <div>
    {linksState.map((link) => (
      <div  key={link }className="image">
       <img src={link} />
       <button className='remove' onClick={() => handleRemoveLink(link)}>X</button>
     </div>
    ))}
  </div>
}

document.body.innerHTML = "<div id='root'> </div>";
  
const rootElement = document.getElementById("root");
const links = ["https://bit.ly/3lmYVna", "https://bit.ly/3flyaMj"];
const root = createRoot(rootElement);
root.render(<ImageGallery links={ links } />);

setTimeout(() => {
  document.querySelectorAll('.remove')[0]?.click();
  setTimeout(() => {
    console.log(rootElement?.innerHTML);
  });
});