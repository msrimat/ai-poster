import React, { FormEvent } from "react";
import { useForm } from "react-hook-form";
import "./FormContent.css"; // Import your custom CSS styles for the component

const FormContent: React.FC = () => {
  const { register } = useForm();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.target as HTMLFormElement);
    const poster = data.get("poster");
    console.log(poster);
  };

  return (
    <form onSubmit={handleSubmit} className="main-content-container">
      <h1 className="main-content-title">Generate a Poster</h1>
      <div className="input-container">
        <input
          {...register("poster")}
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
    </form>
  );
};

export default FormContent;
