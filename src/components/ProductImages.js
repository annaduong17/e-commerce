import { useState } from 'react';

function ProductImages({ imgUrls, name }) {
  const [ selectedIndex, setSelectedIndex ] = useState(-1);

  const handleClick = (index) => {
    if (selectedIndex === index) {
      setSelectedIndex(-1);
    } else {
      setSelectedIndex(index);
    }
  };

  const renderedThumbnails = imgUrls.map((url, index) => {
    return(
      <img key={index} onClick={() => handleClick(index)} className='thumbnail' src={`/images/products/${url}`} alt={name}/>
    );
  })


  return(
    <div className="images">
      <div className="main-img-container">
        {renderedThumbnails[0]}
      </div>
      <div className="thumbnail-container">
        {renderedThumbnails}
      </div>
    </div>
  )
}

export default ProductImages;


