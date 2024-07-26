export type contentType = {
    text?: string;
    onComplete?: () => void;
    onRemove?: () => void;
    index?: number;
    isComplete?: boolean;
}
export type todosForm = {
    text?: string;
    isComplete?: boolean;
  };