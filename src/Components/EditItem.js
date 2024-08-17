import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditItem = () => {
  const { itemid } = useParams();

  useEffect(() => {
    fetch("http://localhost:3004/items/" + itemid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setId(resp.id);
        setName(resp.name);
        setDescription(resp.description);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [itemid]);

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    const itemdata = { id, name, description };

    fetch("http://localhost:3004/items/" + itemid, {
      method: "PUT",
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
          <div className="card">
            <div className="card-header">
              <h2 className="card-title mb-0">Edit Item</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handlesubmit}>
                <div className="mb-3">
                  <label className="form-label">ID</label>
                  <input value={id} disabled className="form-control"></input>
                </div>

                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                  ></input>
                </div>

                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="form-control"
                    rows="3"
                  ></textarea>
                </div>

                <div className="mb-3 d-flex justify-content-end">
                  <button className="btn btn-success me-2" type="submit">
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

export default EditItem;
