import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import ScrollToTop from "./components/ScrollToTop";
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n';
import ToggleLanguage from "./providers/toggleLanguageProvider";

const App = () => {
  return (
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <ToggleLanguage>
          <div className="relative z-0 bg-primary">
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
              <Navbar />
              <Hero />
            </div>
            <About />
            <Experience />
            <Tech />
            <Works />
            <div className="relative z-0">
              <Contact />
              <StarsCanvas />
            </div>
            <ScrollToTop />
          </div>
        </ToggleLanguage>
      </I18nextProvider>
    </BrowserRouter>
  );
};

export default App;
