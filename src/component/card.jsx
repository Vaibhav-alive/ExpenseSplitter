import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Labels from "./labels";

function Card() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // delay each child by 0.2s
      },
    },
  };
  const [people, setPeople] = useState([]);
  const [trans, setTrans] = useState([])
  const handleInputChange = (index, field, value) => {
    setPeople(prev => {
      const next = [...prev];
      next[index] = { ...next[index], [field]: value };
      return next;
    });
  };
  function fairhandler() {
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
      if(creditor.paid === 0) j++

    }
    setTrans(results)
  }

  console.log(trans)
  const price = useRef();
  function fields() {
    const num = price.current.value
    const arr = Array.from({ length: num }, () => ({ name: '', paid: 0 }))
    setPeople(arr)
  }
  console.log(people)
  return (
    <div className="card glass text-light p-4 shadow-lg text-center bg-transparent br-6">
      <h2 className="cyber-text">Not sure how to split costs?</h2>
      <p style={{ color: "var(--moon-glow)", marginBottom: "1.5rem" }}>
        Track expenses, categorize them, and split costs with friends—all.
      </p>
      <div className="d-flex justify-content-center gap-2">
        <div className="form-floating w-60">
          <input type="text" ref={price} className="form-control i-glass w-100 " placeholder="Category e.g. Food" />
          <label>Enter the no. of people</label>
        </div>


        <button className="btn glass br-none" onClick={fields}>Generate Labels</button>
      </div>
      <motion.section
        className="d-flex flex-wrap gap-2 justify-content-center p-2"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {
          people.map((i, index) => (
            <Labels key={index} data={i} index={index} onChange={handleInputChange} />
          ))
        }
      </motion.section>

      <button className="btn glass mt-3" onClick={fairhandler} >Make it Fair ✨</button>

      {
        trans.map((i)=>(
          <div className="text-center fw-light fs-2 mt-2 br-6 border w-100 p-1">
            {i}
          </div>
        ))
      }
    </div>
  );
}
export default Card;
