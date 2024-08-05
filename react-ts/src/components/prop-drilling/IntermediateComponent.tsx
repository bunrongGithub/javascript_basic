// IntermediateComponent.tsx
import React from 'react';
import DeepChildComponent from './DeepChildComponent';

// Define the type for props
interface IntermediateComponentProps {
  data: string;
}

// Define the IntermediateComponent
const IntermediateComponent: React.FC<IntermediateComponentProps> = ({ data }) => {
  return <DeepChildComponent data={data} />;
};

export default IntermediateComponent;
