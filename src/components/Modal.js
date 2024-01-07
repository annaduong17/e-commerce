import { useContext } from 'react';
import ShoesContext from '../context/shoes';
import ProductImages from './ProductImages';

function Modal({ id, imgUrls, name }) {
  const { handleModal, handleNext } = useContext(ShoesContext);

  return(
    <div className="modal">
      <button onClick={() => handleModal(id)}>X</button>
      <button onClick={handleNext}>Next</button>
      <ProductImages id={id} imgUrls={imgUrls} name={name}/>
    </div>
    )

}

export default Modal;