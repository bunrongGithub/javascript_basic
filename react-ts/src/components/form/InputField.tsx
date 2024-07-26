import{ forwardRef } from "react";

import { InputFieldProps } from "./userFormEventType";

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(({label,inputType = "text",inputNames,placeHolder,value,onChange , error},ref) => {
  return (
    <div>
      {label && (
        <label
          htmlFor={inputNames}
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          {label}
        </label>
      )}
      
      <input
        id={inputNames}
        type={inputType}
        name={inputNames}
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
        ref={ref} // Forward the ref
        className={` ${ error ?  " border-red-300 " : ""} w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
      />
    </div>
  );
});

InputField.displayName = 'InputField'; // This is useful for debugging

export { InputField };
