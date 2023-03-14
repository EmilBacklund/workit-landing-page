const Footer = () => {
  return (
    <footer className='h-60 flex flex-col justify-center items-center'>
      <div className='flex flex-col gap-[57.62px] items-center'>
        <div>
          <img src='/images/logo-dark.svg' alt='workit logo' />
        </div>
        <div className='flex gap-7 items-center'>
          <div className='relative'>
            <svg
              id='mask'
              className='mask'
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 20 20'
            >
              <path
                fill='#584D62'
                d='M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0Z'
              />
            </svg>
            <div className='absolute top-0 left-0 w-full h-full maskBackground bg-workitDarkPurple z-10'></div>
          </div>
          <div className='relative'>
            <img className='mask' src='/images/icon-twitter.svg' alt='' />
            <div className='absolute top-0 left-0 w-full h-full maskBackground'></div>
          </div>
          <div className='relative'>
            <img className='mask' src='/images/icon-instagram.svg' alt='' />
            <div className='absolute top-0 left-0 w-full h-full maskBackground bg-workitDarkPurple'></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
