export type UserFormInputs = {
    email: string;
    password: string;
    confirmPassword: string;
  };
  
export type InputFieldProps = {
    label?: string;
    inputType?: string;
    inputNames?: string;
    placeHolder?: string;
    value?: string;
    error?:boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };

  