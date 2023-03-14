const MainContainer = ({ children }) => {
  return (
    <main id='archShape' className='bg-workitGhostWhite relative -z-10 text-center'>
      {children}
    </main>
  );
};

export default MainContainer;
