const NewFruit = (props) => {
  let formFields = {}
  return(
    <div>
      <input className="form-control" ref={input => formFields.name = input} placeholder='Ingresa el nombre de una fruta'/>
      <input className="form-control" ref={input => formFields.description = input} placeholder='Ingresa la descripción' />
      <button className="btn btn-sm btn-success" onClick={ ()=> props.handleFormSubmit(formFields.name.value
      , formFields.description.value)}>Submit</button>
    </div>
  )
}