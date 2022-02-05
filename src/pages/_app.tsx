import 'styles/globals.css';
import 'styles/tailwind.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

//----------------------------------------
// component
//----------------------------------------
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
};
export default MyApp;
