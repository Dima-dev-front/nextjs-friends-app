const HomePage = () => (
  <div
    className='flex h-screen items-center justify-center
        bg-gradient-to-r from-slate-900 to-slate-700 p-3'
  >
    <div className='animate-slideDown flex flex-col items-center gap-2 opacity-0 lg:flex-row'>
      <div
        className='max-w-fit text-wrap bg-gradient-to-r from-cyan-500
          to-fuchsia-600 bg-clip-text text-center text-3xl font-semibold text-transparent lg:text-6xl'
      >
        Welcome to the Next.js demo app
        <span className='h-fit text-4xl text-[initial] lg:text-6xl'>👋</span>
      </div>
    </div>
  </div>
);

export default HomePage;
