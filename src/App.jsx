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
      <div className="h-screen flex flex-col justify-between">
        <Header />
        <main className="h-full py-10 px-4 ">
          <section className="border border-black rounded-lg h-full overflow-hidden">
            <SideBar />
            <Canvas />
          </section>
        </main>
        <Footer />
      </div>
    </StoreContext.Provider>
  );
}

export default App;

