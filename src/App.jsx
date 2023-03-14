import Header from './components/Header';
import HeaderContainer from './layout/HeaderContainer';
import Main from './components/Main';
import MainContainer from './layout/MainContainer';

function App() {
  return (
    <>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <MainContainer>
        <Main />
      </MainContainer>
    </>
  );
}

export default App;
