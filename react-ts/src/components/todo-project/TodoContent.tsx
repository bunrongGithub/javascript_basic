import { useRef, useState } from "react";
import { contentType } from "./todoFormTypes";
import {
  FaTrash,
  FaCheck,
  FaWindowClose,
  FaEdit,
  FaCheckCircle
} from "react-icons/fa";

export const TodoContent: React.FC<contentType> = ({text,onComplete,onRemove,onEdite,isComplete,onHandleChange}) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [texts, setText] = useState<any>(text);
  const onFocus = useRef<HTMLInputElement>(null);

  const handleEditClick = () => {
    setIsEdit(true);
    onFocus.current?.focus();
  };
  const handleCancelClick = () => {
    setIsEdit(false);
    setText(text); // Revert to the original text if canceling
  };
  return (
    <div className="flex mb-4 items-center">
      {isEdit ? (
        <input
          ref={onFocus}
          className={`border border-blue-700 rounded w-full py-2 px-3 mr-4 text-grey-darker ${
            isComplete ? "text-blue-800 line-through" : "text-grey-darkest"
          }`}
          value={texts}
          onChange={onHandleChange}
        />
      ) : (
        <p
          className={`w-full ${
            isComplete ? "text-blue-800 line-through" : "text-grey-darkest"
          }`}
        >
          {text}
        </p>
      )}

      {isEdit ? (
        <>
          <button
            onClick={onEdite}
            className="flex-no-shrink p-2 ml-2 border-2 rounded text-blue border-blue hover:text-white hover:bg-blue"
          >
            <FaCheckCircle className="text-blue-800" />
          </button>
          <button
            onClick={handleCancelClick}
            className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red"
          >
            <FaWindowClose className="text-red-500" />
          </button>
        </>
      ) : (
        <>
          <button
            onClick={handleEditClick}
            className="flex-no-shrink p-2 ml-2 border-2 rounded text-blue border-blue hover:text-white hover:bg-blue"
          >
            <FaEdit className="text-blue-800" />
          </button>
          <button
            onClick={onComplete}
            className={`flex-no-shrink p-2 ml-4 mr-2 border-2 rounded ${
              isComplete ? "text-grey border-grey hover:bg-grey" : "text-green border-green hover:bg-green"
            }`}
          >
            {isComplete ? (
              <FaWindowClose className="text-yellow-400" />
            ) : (
              <FaCheck className="text-green-600" />
            )}
          </button>
          <button
            onClick={onRemove}
            className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red"
          >
            <FaTrash className="text-red-500" />
          </button>
        </>
      )}
    </div>
  );
};
