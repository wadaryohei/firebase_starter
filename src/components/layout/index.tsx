import Head from 'next/head';
import { ReactNode } from 'react';
import Header from 'components/header';
import Main from 'components/main';
import Footer from 'components/footer';

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
    <>
      <Head>
        <title>Firebase Starter</title>
      </Head>

      <Header>
        Header
      </Header>

      <Main>{children}</Main>

      <Footer>
        Footer
      </Footer>
    </>
  );
};

export default Index;
