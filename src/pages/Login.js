import Form from "../components/shared/form/Form";
import Input from "../components/shared/form/Input";
import InputWrapper from "../components/shared/form/InputWrapper";
import Label from "../components/shared/form/Label";
import SubmitButton from "../components/shared/form/SubmitButton";
import { loginUser } from "../lib/firebase";
import { useForm } from "react-hook-form";
import Error from "../components/shared/form/Error";
import { useMutation } from "react-query";
import toast from "react-hot-toast";

export default function Login({ history }) {

  const { register, formState: { errors }, handleSubmit } = useForm({ mode: "onBlur" });
  const mutation = useMutation(loginUser, {
    onSuccess: () => { 
      history.replace('/');
      toast.success('Login successful!');
    },
    onError: (error) => {
      console.dir(error);
      let message = error?.code;
      switch(message) {
        case "auth/wrong-password":
          message = "Fix your username and password";
          break;
        case "auth/user-not-found":
          message = "User not found";
          break;
        default:
          message = "There is something wrong";
          break;
      }
      toast.error(message);
    },
  })

  const onSubmit = (data) => {
    const { email, password } = data;
    // console.log(errors === true);
    if (errors.length > 1) return;
    mutation.mutate({
      email: email, 
      password: password
    });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputWrapper>
        <Label>email</Label>
        <Input {...register("email", {
          required: "Email is required",
          maxLength: {
            value: 30,
            message: "Must be less than 30 characters"
          }
        })} type="email" />
        <Error>
          {errors.email?.message}
        </Error>
      </InputWrapper>
      <InputWrapper>
        <Label>password</Label>
        <Input {...register("password", {
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Must be at least 5 characters"
          },
          maxLength: {
            value: 30,
            message: "Must be less than 20 characters"
          },
        })} type="password" />
        <Error>
          {errors.password?.message}
        </Error>
      </InputWrapper>
      <SubmitButton type="submit">log in</SubmitButton>
  </Form>
  );
}
