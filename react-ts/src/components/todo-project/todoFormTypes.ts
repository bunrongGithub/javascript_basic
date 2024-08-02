export type contentType = {
    text?: string;
    onComplete?: () => void;
    onRemove?: () => void;
    index?: number;
    isComplete?: boolean;
    onEdite?:() => void;
    onHandleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export type todosForm = {
    id:number
    title?: string;
    isComplete?: boolean;
  };