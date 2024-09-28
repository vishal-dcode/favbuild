import Header from './components/Header';
import Footer from './components/Footer.jsx';
import SideBar from './components/SideBar.jsx';
import Canvas from './components/Canvas.jsx';

import { StoreContext } from './context/storeContext.jsx';
import { useRef, useState } from 'react';

function App() {
  const [updateStorage, setUpdateStorage] = useState({});
  const exportRef = useRef();

  return (
    <StoreContext.Provider value={{ updateStorage, setUpdateStorage }}>
      <div className="relative h-screen max-md:h-full flex flex-col justify-between">
        <Header />
        <main className="flex-auto h-full w-full">
          <section className="h-full flex max-md:flex-col relative overflow-hidden">
            <div className="max-md:order-2 flex-1 w-full">
              <SideBar exportRef={exportRef} />
            </div>
            <div className="relative w-full flex-[3] m-3 max-md:m-0 max-md:border-none max-md:rounded-none border border-gray-400 overflow-hidden rounded-lg">
              <span className="polka-dots absolute w-full h-full bg-[#ffffff] opacity-80 bg-[radial-gradient(#000000_0.75px,_#ffffff_0.75px)] [background-size:15px_15px] pointer-events-none"></span>
              <Canvas exportRef={exportRef} />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </StoreContext.Provider>
  );
}

export default App;

