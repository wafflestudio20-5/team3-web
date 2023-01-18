import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import EntryRoute from './routes';

import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <EntryRoute />
      <ToastContainer />
    </>
  );
};

export default App;
