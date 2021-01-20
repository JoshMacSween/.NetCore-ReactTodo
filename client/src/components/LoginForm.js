import React from "react";
import { useForm } from "react-hook-form";

export default function LoginForm() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>User Name</label>
      <br />
      <input
        name="userName"
        defaultValue="test"
        ref={register({ required: true, minLength: 3 })}
      />
      {errors.userName && <div style={{color: "red", fontWeight: "bold"}}><i>This field is required</i></div>}
      <br />
      <label>Password</label><br />
      <input
        name="password"
        ref={register({ required: true, minLength: 3 })}
      /><br />
      {errors.password && <div>This field is required</div>}

      <input type="submit" />
    </form>
  );
}
