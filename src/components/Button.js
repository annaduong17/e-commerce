function Button({ children, className, ...rest }) {
  
  return(
      <button {...rest} className={className}>
        {rest.img && <img className="cart-icon" src={rest.img} alt="cart icon" />}
        {children}
      </button>
  )
}

export default Button;