import React from 'react';
import OfficeListsComponent from './component/officeLists';
import Footer from './component/footer';
import AppDownloadSection from './component/appDownloadSection';
import Header from './component/header';
import CoverSection from './component/CoverSection';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <CoverSection />
        {/* <AmnititesSection /> */}
        <OfficeListsComponent />
        <AppDownloadSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
