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
    <main>{children}</main>
  );
};

export default Index;
