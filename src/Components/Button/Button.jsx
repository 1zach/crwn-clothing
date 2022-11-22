import './Button.scss'

export default function Button({children, buttonType, ...otherProps}) {

  //three buttons

  //default
  //inverted
  //google
  
  const BUTTON_TYPE_CLASSES = {
    google: "google-sign-in",
    inverted: "inverted"

  }

  return (
    <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>
      {children}
    </button>
  )
}