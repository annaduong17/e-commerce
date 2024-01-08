import { useContext } from 'react';
import ShoesContext from '../context/shoes';
import ProductImages from './ProductImages';

function Modal({ id, imgUrls, name }) {
  const { handleModal, handleNext, handlePrevious } = useContext(ShoesContext);

  return(
    <div className="modal">
      <button className='close' onClick={() => handleModal(id)}>
        <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#f0f0f0" fill-rule="evenodd"/></svg>
      </button>
      <button className='arrow previous' onClick={handlePrevious}>
        <img src="/images/icons/icon-previous.svg" alt="previous icon" width={10} height={14} />
      </button>
      <button className='arrow next' onClick={handleNext}>
        <img src="/images/icons/icon-next.svg" alt="next-icon" width={10} height={16} />
      </button>
      <ProductImages id={id} imgUrls={imgUrls} name={name}/>
    </div>
    )

}

export default Modal;