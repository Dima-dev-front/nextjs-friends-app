import Link from 'next/link';

const HomePage = () => (
  <div
    className='flex h-screen flex-col items-center justify-center
        bg-gradient-to-r from-slate-900 to-slate-700 p-3'
  >
    <div
      className='animate-slideDown mb-4 flex flex-col
        items-center gap-2 opacity-0 lg:flex-row'
    >
      <div className='max-w-fit text-wrap bg-gradient-to-r from-fuchsia-100 to-cyan-300 bg-clip-text text-center text-3xl font-semibold text-transparent lg:text-6xl'>
        Welcome to the Next.js demo app
        <span className='h-fit text-4xl text-[initial] lg:text-6xl'>👋</span>
      </div>
    </div>
    <Link
      href='/friends'
      className='animate-[slideDown_0.5s_ease-out_forwards_0.8s] bg-gradient-to-r
        from-fuchsia-200 to-cyan-400 bg-clip-text text-2xl font-semibold text-transparent
        underline decoration-1 opacity-0'
    >
      Go to Friends page
    </Link>
  </div>
);

export default HomePage;
