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
      <div className="min-h-screen flex flex-col justify-between">
        <Header />
        <main className="h-full w-full py-10 px-10">
          <section className="grid md:grid-cols-12 relative border border-black rounded-2xl overflow-hidden">
            <span className="polka-dots absolute w-full h-full bg-[#ffffff] opacity-70 bg-[radial-gradient(#000000_0.75px,_#ffffff_0.75px)] [background-size:15px_15px] pointer-events-none"></span>
            <div className="p-1.5 pr-0  min-w-[333px] md:col-span-3">
              <SideBar />
            </div>
            <div className="md:col-span-9">
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

