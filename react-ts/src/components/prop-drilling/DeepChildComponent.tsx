// DeepChildComponent.tsx
import React from 'react';
interface DeepChildComponentProps {
  data: string;
}

const DeepChildComponent: React.FC<DeepChildComponentProps> = ({ data }) => {
  return <div>{data}</div>;
};

export default DeepChildComponent;
