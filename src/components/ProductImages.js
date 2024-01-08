import { useContext } from 'react';
import ShoesContext from '../context/shoes';

function ProductImages({ id, imgUrls, name }) {
  
  const { handleModal, handleMainImgClick, selectedIndex } = useContext(ShoesContext);

  const renderedThumbnails = imgUrls.map((url, index) => {
    const isSelected = index === selectedIndex;

    return(
      <img 
        key={index} 
        onClick={(event) => handleMainImgClick(event, index)} 
        src={`/images/products/${url}`} 
        alt={name}
        className={isSelected ? "orange-border" : ""}
      />
        
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


