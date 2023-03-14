const Article = () => {
  return (
    <article className='relative text-white mx-4'>
      <div className='w-[281px] absolute top-[100.29px] -z-10 left-1/2 -translate-x-1/2'>
        <img src='/images/image-founder.webp' />
      </div>
      <div className='pt-[328.29px]'></div>
      <div className='py-8 px-[31px] bg-workitDarkPurple text-center'>
        <h2 className='text-[32px] leading-[48px] mb-4'>Be the first to test</h2>
        <p className='leading-7 text-base mb-6'>
          Hi, I'm Louis Graham, the founder of the company. Book a demo call with me to become a
          beta tester for our app and kickstart your company. Apply for access below and I'll be in
          touch to schedule a call.
        </p>
        <button className='bg-workitEucaplyptus leading-8 -tracking-[0.16px] font-bold spacing text-workitDarkPurple px-[23.5px] h-[55px]'>
          Apply for access
        </button>
      </div>
    </article>
  );
};

export default Article;
