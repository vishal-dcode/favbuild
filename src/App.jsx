import Header from './components/Header';
import Footer from './components/Footer.jsx';
import SideBar from './components/SideBar.jsx';
import Canvas from './components/Canvas.jsx';

import { StoreContext } from './context/storeContext.jsx';
import { useState } from 'react';

function App() {
  const [updateStorage, setUpdateStorage] = useState({});

  return (
    <StoreContext.Provider value={{ updateStorage, setUpdateStorage }}>
      <div className="relative min-h-screen flex flex-col justify-between">
        <Header />
        <main className="h-full w-full">
          <section className="grid md:grid-cols-10 relative overflow-hidden">
            <span className="polka-dots absolute w-full h-full bg-[#ffffff] opacity-70 bg-[radial-gradient(#000000_0.75px,_#ffffff_0.75px)] [background-size:15px_15px] pointer-events-none"></span>
            <div className="max-md:order-2 lg:col-span-3 md:col-span-4 sm:col-span-5 p-4 pt-0 md:pr-0 md:p-10 w-full sm:min-w-[370px]">
              <SideBar />
            </div>
            <div className="lg:col-span-7 md:col-span-6 sm:col-span-5">
              <Canvas />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </StoreContext.Provider>
  );
}

export default App;

