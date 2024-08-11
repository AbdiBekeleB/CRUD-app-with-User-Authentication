import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("ethiopia");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("female");

  const navigate = useNavigate();

  const isValidate = () => {
    let isProceed = true;
    let errorMessage = "Please enter the value in ";

    if (!id) {
      isProceed = false;
      errorMessage += "Username ";
    }
    if (!name) {
      isProceed = false;
      errorMessage += "Fullname ";
    }
    if (!password) {
      isProceed = false;
      errorMessage += "Password ";
    }
    if (!email) {
      isProceed = false;
      errorMessage += "Email ";
    }

    if (!isProceed) {
      toast.warning(errorMessage);
    } else {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Z]{2,}$/i;
      if (!emailPattern.test(email)) {
        isProceed = false;
        toast.warning("Please enter a valid email");
      }
    }
    return isProceed;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const regObj = { id, name, password, email, phone, country, address, gender };
    if (isValidate()) {
      fetch("http://localhost:3004/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(regObj),
      })
        .then((res) => {
          toast.success("Registered successfully.");
          navigate("/login");
        })
        .catch((err) => {
          toast.error("Failed: " + err.message);
        });
    }
  };

  return (
    <div>
      <div className="offset-lg-3 col-lg-6 mt-5">
        <form className="container" onSubmit={handleSubmit}>
          <div className="card">
            <div className="card-header">
              <h1>User Registration</h1>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="username">
                      User Name <span className="errmsg">*</span>
                    </label>
                    <input
                      id="username"
                      value={id}
                      onChange={(e) => setId(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="password">
                      Password <span className="errmsg">*</span>
                    </label>
                    <input
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="fullname">
                      Full Name <span className="errmsg">*</span>
                    </label>
                    <input
                      id="fullname"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="email">
                      Email <span className="errmsg">*</span>
                    </label>
                    <input
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="country">
                      Country <span className="errmsg">*</span>
                    </label>
                    <select
                      id="country"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="form-control"
                    >
                      <option value="ethiopia">Ethiopia</option>
                      <option value="usa">USA</option>
                      <option value="england">England</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <textarea
                      id="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Gender</label>
                    <br />
                    <input
                      type="radio"
                      checked={gender === "male"}
                      onChange={(e) => setGender(e.target.value)}
                      name="gender"
                      value="male"
                      className="app-check"
                    />
                    <label htmlFor="male">Male</label>
                    <input
                      type="radio"
                      checked={gender === "female"}
                      onChange={(e) => setGender(e.target.value)}
                      name="gender"
                      value="female"
                      className="app-check"
                    />
                    <label htmlFor="female">Female</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-primary">
                Register
              </button>{" "}
              |
              <Link to={"/login"} className="btn btn-danger">
                Close
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
