import React, { useState } from "react";


function Labels({ data, onChange, index }) {
  const [status, setStatus] = useState(true)
  const remove = (()=>{
    setStatus(false)
  })
  return (
    <div className={` ${status? 'label' : 'd-none'}`}>
      <div className="form-floating flex-grow-1 shadow-lg">
        <input
          type="text"
          className="form-control i-glass w-100"
          id="floatingInput"
          value={data.name}
          onChange={(e) => onChange(index, "name", e.target.value)}
          placeholder="Name"
        />

      </div>

      <div className="form-floating flex-grow-1 shadow-lg">
        <input
          type="number"
          className="form-control i-glass w-100"
          id="floatingPassword"
          placeholder="Amount Paid?"
          onChange={(e) => onChange(index, "paid", e.target.value)}
          value={data.price}
        />

      </div>
      <div className="remove" onClick={remove}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
        </svg>
      </div>
    </div>
  );
}

export default Labels;