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
    <footer>{children}</footer>
  );
};

export default Index;
