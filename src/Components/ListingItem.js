import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";

const ListingItem = () => {
  const [itemdata, setItemData] = useState(null);
  const navigate = useNavigate();

  const LoadEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const Removefunction = (id) => {
    if (window.confirm("Do you want to remove this items?")) {
      fetch(`http://localhost:3004/items/${id}`, {
        method: "DELETE",
      })
        .then(() => {
          alert("Item removed successfully.");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  useEffect(() => {
    fetch("http://localhost:3004/items")
      .then((res) => res.json())
      .then((resp) => setItemData(resp))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <>
      <div className="container my-5">
        <div className="card">
          <div className="card-header">
            <h2 className="card-title mb-0">Listing Item</h2>
          </div>
          <div className="card-body">
            <div className="d-flex justify-content-end mb-3">
              <Link to="/create" className="btn btn-success">
                Add New Item (+)
              </Link>
            </div>
            <table className="table table-bordered table-hover">
              <thead className="table-dark">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {itemdata &&
                  itemdata.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.description}</td>
                      <td>
                        <div className="d-flex justify-content-end">
                          <a
                            onClick={() => LoadEdit(item.id)}
                            className="btn btn-success me-2"
                          >
                            Edit
                          </a>
                          <a
                            onClick={() => Removefunction(item.id)}
                            className="btn btn-danger me-2"
                          >
                            Remove
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListingItem;
