function ProductQuantity() {
  return(
    <div className="quantity-container">
      <button className="minus-btn">
        <img src="/images/icons/icon-minus.svg" alt="minus icon" />
      </button>
      <span>0</span>
      <button className="plus-btn">
        <img src="/images/icons/icon-plus.svg" alt="plus icon" />
      </button>
    </div>
  )
}

export default ProductQuantity;