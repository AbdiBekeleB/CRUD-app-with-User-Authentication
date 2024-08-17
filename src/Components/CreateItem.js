import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CreateItem = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [validation, setValidation] = useState(false);

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "") {
      setValidation(true);
      return;
    }
    const itemdata = { name, description };

    fetch("http://localhost:3004/items", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(itemdata),
    })
      .then((res) => {
        alert("Saved successfully.");
        navigate("/listing");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="container my-5 pt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card shadow-sm rounded">
            <div className="card-header text-black">
              <h2 className="card-title mb-0">Create Item</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handlesubmit}>
                <div className="form-group mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    id="name"
                    required
                    value={name}
                    onMouseDown={(e) => setValidation(true)}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                  />
                  {validation && name.trim() === "" && (
                    <div className="text-danger">Name is required</div>
                  )}
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="form-control"
                    rows="3"
                  ></textarea>
                </div>

                <div className="d-flex justify-content-end">
                  <button className="btn btn-primary me-2" type="submit">
                    Save
                  </button>
                  <Link to="/listing" className="btn btn-danger">
                    Back
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateItem;
