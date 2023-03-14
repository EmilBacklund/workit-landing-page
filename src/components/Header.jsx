function Header() {
  return (
    <header className="text-white pt-8 relative">
      <nav className="flex justify-between mb-16">
        <img src="/images/logo-light.svg" />
        <button className="border-b-[3px] font-bold border-workitEucaplyptus">
          Apply for access
        </button>
      </nav>
      <h1 className="text-[50px] text-center leading-[50px] mb-10">
        Data{' '}
        <span className="decoration-workitEucaplyptus underline underline-offset-[6px]">
          tailored
        </span>{' '}
        to your needs.
      </h1>
      <div className="flex justify-center">
        <button className="bg-workitEucaplyptus mb-[156.71px] leading-8 -tracking-[0.16px] font-bold spacing text-workitDarkPurple w-[133px] h-[55px]">
          Learn More
        </button>
      </div>
      <div className="absolute w-[85.33%] bottom-0 left-[55%] -translate-x-1/2 translate-y-1/2 ">
        <img className="" src="/images/image-hero.webp" alt="" />
      </div>
    </header>
  );
}

export default Header;
