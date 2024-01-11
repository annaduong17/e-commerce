import { useState } from 'react';

function Slider({ imgUrls, name}) {
  const [ index, setIndex ] = useState(0);
  const handlePrevious = () => {
    setIndex(prev => {
      return prev === 0 ? imgUrls.length - 1 : prev - 1;
    });
  }

  const handleNext = () => {
    setIndex(prev => {
      return prev === imgUrls.length - 1 ? 0 : prev + 1;
    });
  }

  const renderedItems = imgUrls.map((url) => {
    return <img 
              key={url} 
              src={`/images/products/${url}`} 
              alt={name} 
              style={{ translate: `${-100 * index}%` }}/>
  })

  return(
    <div className="slider-container">
      <button onClick={handlePrevious} className="previous">
        <img src="/images/icons/icon-previous.svg" alt="previous-icon" />
      </button>
      <button onClick={handleNext} className="next">
        <img src="/images/icons/icon-next.svg" alt="next-icon" />
      </button>
      <div className="slider">
        {renderedItems}
      </div>
    </div>
  )
}

export default Slider; 