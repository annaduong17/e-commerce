import { useState } from 'react';

function ProductImages({ imgUrls, name }) {
  const [ selectedIndex, setSelectedIndex ] = useState(0);

  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  const renderedThumbnails = imgUrls.map((url, index) => {
    return(
      <img key={index} onClick={() => handleClick(index)} className='thumbnail' src={`/images/products/${url}`} alt={name}/>
    );
  })


  return(
    <div className="images">
      <div className="main-img-container">
        {renderedThumbnails[selectedIndex]}
      </div>
      <div className="thumbnail-container">
        {renderedThumbnails}
      </div>
    </div>
  )
}

export default ProductImages;


