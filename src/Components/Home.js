import React from "react";

const Home = () => {
  return (
    <>
      <div className="container my-5 pt-5">
        <div className="jumbotron">
          <h1 className="display-3">Manage Your Items with Ease</h1>
          <p className="lead my-5">
            Our CRUD (Create, Read, Update, Delete) interface empowers you to
            effortlessly manage your Item catalog.
          </p>
          <hr className="my-4" />
          <p className="my-4">
            Quickly add new items, view and edit existing ones, and remove items
            that are no longer needed.
          </p>
          <a href="/listing" className="btn btn-primary btn-md">
            Explore Items
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
