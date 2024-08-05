// ParentComponent.tsx
import DataContext from './DataProvider';
import { useContext } from 'react';

const ParentComponent: React.FC = () => {
  const data = useContext(DataContext)
  return <div>{data}</div>
};

export default ParentComponent;
