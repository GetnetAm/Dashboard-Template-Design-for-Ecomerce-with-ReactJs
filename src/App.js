import './App.css';
import BackToTop from './components/backToTop/BackToTop';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <>
     <Header />
     <Sidebar />
     <Main />
     <Footer />
    <BackToTop />
    </>
  );
}

export default App;
