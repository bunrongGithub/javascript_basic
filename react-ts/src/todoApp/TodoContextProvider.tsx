import { createContext,ReactNode, useState } from "react";

export const Context = createContext<any | undefined>(undefined);

type ContextProviderProps = {
  children: ReactNode;
};

export const TodoContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const [isToggle, setIsToggle] = useState<boolean>(false);
  return (
    <Context.Provider value={[isToggle, setIsToggle]}>
      {children}
    </Context.Provider>
  );
};
