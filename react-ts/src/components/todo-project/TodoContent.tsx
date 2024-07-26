import { contentType } from "./todoFormTypes"

export const TodoContent: React.FC<contentType> = ({ text,onComplete, onRemove, isComplete }) => {
    return (
    <div className="flex mb-4 items-center">
        <p className={`w-full ${isComplete ? 'line-through text-green' : 'text-grey-darkest'} `}>
            {text}
        </p>
        <button
            onClick={ onComplete}
            className={`flex-no-shrink p-2 ml-4 mr-2 border-2 rounded ${isComplete ? 'text-grey border-grey hover:bg-grey' : 'text-green border-green hover:bg-green'}`}
        >
            {isComplete ? 'Not Done' : 'Done'}
        </button>
        <button
            onClick={onRemove}
            className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red"
        >
            Remove
        </button>
    </div>)
}