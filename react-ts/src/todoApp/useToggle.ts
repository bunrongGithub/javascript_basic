// useToggle.ts
import {useContext } from 'react';
import { Context} from './TodoContextProvider';
export const useToggle = (): any => {
  const context = useContext<any>(Context);
  if (context === undefined) {
    throw new Error('');
  }
  return context;
};
