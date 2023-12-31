function ProductImages({ imgUrl, name }) {

  return(
    <div>
      <img className="main-img" src={imgUrl} alt={name} />
      <img className="thumbnail" src={imgUrl} alt={name} />
      <img className="thumbnail" src={imgUrl} alt={name} />
      <img className="thumbnail" src={imgUrl} alt={name} />
      <img className="thumbnail" src={imgUrl} alt={name} />
    </div>
  )
}

export default ProductImages;


