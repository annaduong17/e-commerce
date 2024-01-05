import { useState, useContext } from 'react';
import ShoesContext from '../context/shoes';

function ProductImages({ id, imgUrls, name }) {
  const [ selectedIndex, setSelectedIndex ] = useState(0);
  const { handleModal } = useContext(ShoesContext);

  const handleClick = (event, index) => {
    event.stopPropagation();
    setSelectedIndex(index);
  };

  const renderedThumbnails = imgUrls.map((url, index) => {
    return(
      <img key={index} onClick={(event) => handleClick(event, index)} src={`/images/products/${url}`} alt={name}/>
    );
  })


  return(
    <div className="images">
      <div onClick={() => handleModal(id)} className="main-img-container">
        {renderedThumbnails[selectedIndex]}
      </div>
      <div className="thumbnail-container">
        {renderedThumbnails}
      </div>
    </div>
  )
}

export default ProductImages;


