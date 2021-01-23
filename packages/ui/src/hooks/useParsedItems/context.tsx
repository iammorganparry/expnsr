import { ExpenseItem } from '@/../../services/ImageParser';
import { createContext, FC, useState } from 'react';

type ParsedItemsContextType = [
  ExpenseItem[],
  React.Dispatch<React.SetStateAction<ExpenseItem[]>>,
];

const initState: ExpenseItem[] = [];

export const ParsedItemsContext = createContext([
  initState,
  () => {},
] as ParsedItemsContextType);

export const ParsedItemsContextProvider: FC = ({ children }) => {
  const state = useState<ExpenseItem[]>(initState);
  return (
    <ParsedItemsContext.Provider value={state}>
      {children}
    </ParsedItemsContext.Provider>
  );
};
