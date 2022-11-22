import './FormInput.scss'

export default function FormInput({label, ...otherProps}) {
  
  return(
  <div className="group">
    <input {...otherProps} className="form-input"></input>
    {label &&
    <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
    }
    
  </div>
  )
}