import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './pages/public/Home/Home.js';
import MonParcours from './pages/public/MonParcours/MonParcours.js';
import PsychoCorporelle from './pages/public/PsychoCorporelle/PsychoCorporelle.js';
import Therapiesystemique from './pages/public/TherapieSystemique/Therapiesystemique.js';

import { ServicesProvider } from './context/ServicesContext.js';
import { TestimoniesProvider } from './context/TestimoniesContext.js';
import { DiplomesProvider } from './context/DiplomesContext.js';

function App() {
  return (
    <div className="App">
      <ServicesProvider>
        <TestimoniesProvider>
          <DiplomesProvider>
            <BrowserRouter>
              <Routes>
                <Route index element={<Home />} />
                <Route path="/accueil" element={<Home />} />
                <Route path="/mon-parcours" element={<MonParcours />} />
                <Route path="/therapie-systemique" element={<Therapiesystemique />} />
                <Route path="/psychocorporelle" element={<PsychoCorporelle />} />
              </Routes>
            </BrowserRouter>
          </DiplomesProvider>
        </TestimoniesProvider>
      </ServicesProvider>
    </div>
  );
}

export default App;
