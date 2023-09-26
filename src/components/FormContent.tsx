import React, { FormEvent, useEffect, useState } from "react";
import "./FormContent.css"; // Import your custom CSS styles for the component
import "../db/db.ts";
import { collection, onSnapshot } from "firebase/firestore";
import db from "../db/db.ts";
import { FormEventHandler } from "react";

const FormContent: React.FC = () => {
  const [posterName, setPosterName] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    setPosterName((event.currentTarget[0] as HTMLInputElement).value);
    console.log(posterName);
  };

  useEffect(() => {
    onSnapshot(collection(db, "imgs"), (snapshot) => {
      snapshot.forEach((doc) => {
        console.log(doc.data());
      });
    });
  }, []);

  return (
    <form onSubmit={handleSubmit} className="main-content-container">
      <h1 className="main-content-title">Generate a Poster</h1>
      <div className="input-container">
        <input
          id="name"
          type="text"
          className="form-control"
          autoComplete="off"
          placeholder="Enter text here"
        />
      </div>
      <div className="button-container">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
      <div>
        <h1 className="text-3xl pt-8">These are your posters!</h1>
        <div className="row">
          <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img
              src="https://cdn.britannica.com/85/235885-050-C8CC6D8B/Samoyed-dog-standing-snow.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
            />
          </div>
          <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img
              src="https://cdn.britannica.com/85/235885-050-C8CC6D8B/Samoyed-dog-standing-snow.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
            />
          </div>
          <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img
              src="https://cdn.britannica.com/85/235885-050-C8CC6D8B/Samoyed-dog-standing-snow.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default FormContent;
