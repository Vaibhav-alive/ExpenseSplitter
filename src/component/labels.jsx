import React from "react";
import { motion } from "framer-motion";

function Labels({data, onChange, index}) {
  return (
    <motion.section
      className="d-flex gap-3 justify-content-center p-1 h-fit-content br-6 align-items-center"
      initial={{ opacity: 0, y: -20 }}   // start hidden & slightly above
      animate={{ opacity: 1, y: 0 }}     // fade in & slide down
      transition={{ duration: 0.5, ease: "easeOut" }} // smooth timing
    >
      <div className="form-floating flex-grow-1 shadow-lg">
        <input
          type="text"
          className="form-control i-glass w-100"
          id="floatingInput"
          value={data.name}
            onChange={(e) => onChange(index, "name", e.target.value)}
          placeholder="name@example.com"
        />
        <label htmlFor="floatingInput">Name</label>
      </div>

      <div className="form-floating flex-grow-1 shadow-lg">
        <input
          type="text"
          className="form-control i-glass w-100"
          id="floatingPassword"
          placeholder="Password"
            onChange={(e) => onChange(index, "paid", e.target.value)}
          value={data.price}
        />
        <label htmlFor="floatingPassword">Paid: </label>
      </div>
    </motion.section>
  );
}

export default Labels;
