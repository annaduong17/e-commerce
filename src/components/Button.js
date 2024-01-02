function Button({ children, className, ...rest }) {
  console.log(rest.img)
  
  return(
      <button className={className}>
        {rest.img && <img className="cart-icon" src={rest.img} alt="cart icon" />}
        {children}
      </button>
  )
}

export default Button;