import React from 'react'

function Res() {
  return (
    <>
      <section className=" text-light p-4 shadow-lg text-center bg-transparent tl-br-m tr-br-m wh-glass d-flex flex-column gap-2">
        <div className="header glass">Records!!</div>
        <div className="categories d-flex gap-3">
          <span className="food p-2 glass ta-br-m text-center d-flex align-items-start">food</span>
          <span className="travel glass p-2 ta-br-m text-center" >travel</span>
          <span className="party p-2 glass ta-br-m d-flex align-items-start">parties</span>
        </div>
      </section>
    </>
  )
}

export default Res