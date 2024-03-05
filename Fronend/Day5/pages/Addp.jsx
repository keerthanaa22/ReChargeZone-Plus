import React, { useState } from "react";

const AddP = ({ onPlanAdded }) => {
  const [planName, setPlanName] = useState("");
  const [planDescription, setPlanDescription] = useState("");
  const [planPrice, setPlanPrice] = useState(0);

  const addPlan = () => {
    const newPlan = {
      name: planName,
      description: planDescription,
      price: planPrice,
    };

    onPlanAdded(newPlan);

    // Clear the form fields after adding the plan
    setPlanName("");
    setPlanDescription("");
    setPlanPrice(0);
  };

  return (
    <div>
      <h1>Add Plan</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="planName">Plan Name:</label>
        <input
          value={planName}
          onChange={(e) => setPlanName(e.target.value)}
          id="planName"
          required
        />

        <label htmlFor="planDescription">Plan Description:</label>
        <textarea
          value={planDescription}
          onChange={(e) => setPlanDescription(e.target.value)}
          id="planDescription"
          required
        ></textarea>

        <label htmlFor="planPrice">Plan Price:</label>
        <input
          value={planPrice}
          onChange={(e) => setPlanPrice(e.target.value)}
          id="planPrice"
          type="number"
          required
        />

        <button onClick={addPlan} type="button">
          Add Plan
        </button>
      </form>
    </div>
  );
};

export default AddP;
