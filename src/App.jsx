import Header from './components/Header';
import HeaderContainer from './layout/HeaderContainer';
import Main from './components/Main';
import MainContainer from './layout/MainContainer';
import Article from './components/Article';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <MainContainer>
        <Main />
      </MainContainer>
      <Article />
      <Footer />
    </>
  );
}

export default App;
