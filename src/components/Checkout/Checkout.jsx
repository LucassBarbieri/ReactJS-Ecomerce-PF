import React from 'react'

const Checkout = () => {
  return (
    <>
      <form action="">
        <div className="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Nombre y apelllido:</label>
          <input type="email" className="form-control" placeholder="Lucas Barbieri"/>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" class="form-label">N° de contacto:</label>
          <input type="email" className="form-control" placeholder="1122664022"/>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" class="form-label">E-Mail:</label>
          <input type="email" className="form-control" placeholder="email@gmail.com"/>
        </div>
        <div className="mb-3">
          <button>Encargar</button>
        </div>
      </form>
    </>
  )
}

export default Checkout;