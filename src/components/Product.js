import { useContext } from 'react';
import ProductImages from './ProductImages';
import ProductDetails from './ProductDetails';
import Modal from './Modal';
import ShoesContext from '../context/shoes';

function Product({ id, name, price, description, gender, discount, imgUrls, handleAddProduct, className }) {

  const { showModals } = useContext(ShoesContext);
  console.log(showModals);

  return(
    <div className={className}>
     {showModals[id] && <Modal id={id} imgUrls={imgUrls} name={name}/>}
      <ProductImages id={id} imgUrls={imgUrls} name={name} />
      <ProductDetails id={id} handleAddProduct={handleAddProduct} name={name} price={price} description={description} discount={discount} gender={gender} imgUrls={imgUrls} />
    </div>
  )
}

export default Product;