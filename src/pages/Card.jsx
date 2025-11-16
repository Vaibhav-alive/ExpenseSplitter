import React, { useRef, useEffect, useState } from "react";

import Labels from "./labels";

function createfair(people) {
  const total = people.reduce((sum, p) => sum + Number(p.paid || 0), 0)
  const fair = total / people.length
  const balance = people.map(p => ({
    name: p.name || "Unnamed",
    paid: (p.paid || 0) - fair
  }))
  const debtors = balance.filter(p => p.paid < 0)
  const payors = balance.filter(p => p.paid > 0)
  let results = []

  let i = 0; let j = 0
  while (i < debtors.length && j < payors.length) {
    let debtor = debtors[i]
    let creditor = payors[j]
    let amount = Math.min(-debtor.paid, creditor.paid)
    if (amount > 0) {
      results.push(`${debtor.name} pays ${creditor.name} amount Rs. ${amount.toFixed(1)} `)
      debtor.paid += amount
      creditor.paid -= amount
    }
    if (debtor.paid === 0) i++;
    if (creditor.paid === 0) j++
  }
  return results
}

function cretaearray(people, index, field, value) {
  const next = [...people]
  next[index] = { ...next[index], [field]: value }
  return next;
}
function Card() {
  const [people, setPeople] = useState([]);
  const [trans, setTrans] = useState([])
  const handleInputChange = (index, field, value) => {
    setPeople(prev => cretaearray(prev, index, field, value));
  };
  function fairhandler() {
    setTrans(createfair(people))
  }
  const [btxt, setBtxt] = useState("Generate")
  const [cbtxt, setR] = useState("Add")
  const [price, setPrice] = useState("");

  function fields() {
    const num = price
    if (btxt == "Generate") {
      const arr = Array.from({ length: num }, () => ({ name: '', paid: 0 }))
      setPeople(arr)
      setPrice("")
      setBtxt("Clear All")
    }
    else {
      setPeople([])
      setPrice("")
      setTrans([])
      setBtxt("Generate")
    }
  }
  const add = () => {
    const num = price
    const arr = Array.from({ length: num }, () => ({ name: '', paid: 0 }))
    setPeople(prev=> [...prev, arr])
    show()
  }
  function show(){
    console.log(people)
  }

  return (
    <>
      <div className="head">
        <h2>Not sure how to split cost??</h2>
        <p className="desc">
          This is a simple and efficient tool designed to help groups manage shared expenses without confusion.
        </p>
      </div>


      <div className="card ">
        <div className="starter">
          <div className="form-floating w-60">
            <input type="text" className={btxt == "Generate" ? '' : 'd-none'} placeholder="Enter the no. of people" value={price} onChange={(e) => { setPrice(e.target.value) }} />
          </div>

          <button className="btn" onClick={fields}>
            {btxt}
          </button>

          <div className={btxt == "Clear All" ? 'add' : 'd-none'}>
            <input type="text" placeholder="Enter the no. of people" value={price} onChange={(e) => { setPrice(e.target.value) }} />

            <button className="btn" onClick={add}>
              {cbtxt}
            </button>

          </div>
        </div>
        <div className="labels">
          {
           
              people.map((i, index) => (
                <Labels key={index} data={i} index={index} onChange={handleInputChange} />
              ))
           

          }
        </div>
        <button className="btn a-c" onClick={fairhandler} >Make it Fair ✨</button>
        {
          trans.map((i) => (
            <div className="res">
              <h1>{i}</h1>
            </div>
          ))
        }
      </div>
    </>
  );
}
export default Card;