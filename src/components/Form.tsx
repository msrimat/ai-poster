import React, { useRef } from "react";
import { FormEvent } from "react";
import { useForm } from "react-hook-form";
import "./index.css";

const Form = () => {
  const { register } = useForm();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.target as HTMLFormElement);
    const poster = data.get("poster");
    console.log(poster);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Poster
        </label>
        <input
          {...register("poster")}
          id="name"
          type="text"
          className="form-control pad"
          autoComplete="off"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
