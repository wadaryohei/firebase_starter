import { ReactNode } from 'react';

//----------------------------------------
// props
//----------------------------------------
type Props = {
  children?: ReactNode;
};

//----------------------------------------
// component
//----------------------------------------
const Index = ({ children }: Props) => {
  return (
    <header>{children}</header>
  );
};

export default Index;
