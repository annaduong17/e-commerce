function ProductImages({ imgUrl, name }) {

  return(
    <div className="images">
      <div className="main-img-container">
        <img className="main-img" src={imgUrl} alt={name} />
      </div>
      <div className="thumbnail-container">
        <img className="thumbnail" src={imgUrl} alt={name} />
        <img className="thumbnail" src={imgUrl} alt={name} />
        <img className="thumbnail" src={imgUrl} alt={name} />
        <img className="thumbnail" src={imgUrl} alt={name} />
      </div>
    </div>
  )
}

export default ProductImages;


