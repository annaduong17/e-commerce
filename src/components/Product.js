import { useContext, useState, useEffect } from 'react';
import ProductImages from './ProductImages';
import ProductDetails from './ProductDetails';
import Modal from './Modal';
import ShoesContext from '../context/shoes';
import Slider from './Slider';

function Product({ id, name, price, description, gender, discount, imgUrls, handleAddProduct, className }) {
  
  const { isMobile, showModals, handleModal } = useContext(ShoesContext);

  return(
    <div className={className}>
     
      {showModals[id] && <div onClick={() => handleModal(id)} className='modal-container'><Modal className="modal" id={id} imgUrls={imgUrls} name={name}/></div>}
     
      {isMobile ? <Slider id={id} imgUrls={imgUrls} name={name} /> : <ProductImages id={id} imgUrls={imgUrls} name={name} />}
      <ProductDetails id={id} handleAddProduct={handleAddProduct} name={name} price={price} description={description} discount={discount} gender={gender} imgUrls={imgUrls} />
    </div>
  )
}

export default Product;