import { InputField } from "./InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import {validationSchema} from "./validationSchema";
import {UserFormInputs} from "./userFormEventType";


export const FormLayout = () => {
  const { control,reset, handleSubmit, formState: { errors } } = useForm<UserFormInputs>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const onSubmit: SubmitHandler<UserFormInputs> = (data) => {
    const formData = {
      userEmail: data.email,
      userPassword: data.password,
      userConfirmPassword: data.confirmPassword
    }
    console.log(formData);
    reset();
  };
  return (
    <div className="flex items-center justify-center p-12 shadow-sm max-w-screen-md m-auto relative top-10 bg-neutral-300 rounded-md">
      <div className="mx-auto w-full max-w-[550px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5">
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <InputField
                  {...field}  // Pass field props to InputField
                  inputType="email"
                  label="Email"
                  placeHolder="email..."
                />
              )}
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>
          <div className="mb-5">
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <InputField
                  {...field}  // Pass field props to InputField
                  inputType="password"
                  label="Password"
                  placeHolder="password..."
                />
              )}
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          </div>
          <div className="mb-5">
            <Controller
              name="confirmPassword"
              control={control}
              render={({ field }) => (
                <InputField
                  {...field}  // Pass field props to InputField
                  inputType="password"
                  label="Confirm Password"
                  placeHolder="Confirm password..."
                />
              )}
            />
            {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
          </div>
          <div>
            <button
              type="submit"
              className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
