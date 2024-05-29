const Loading = () => (
  <div className='min-w-screen flex flex-1 items-center justify-center bg-gray-100 p-5'>
    <div className='flex space-x-2'>
      <div className='h-5 w-5 animate-bounce rounded-full bg-white [animation-delay:-0.3s]'></div>
      <div className='h-5 w-5 animate-bounce rounded-full bg-white [animation-delay:-0.15s]'></div>
      <div className='h-5 w-5 animate-bounce rounded-full bg-white'></div>
    </div>
  </div>
);

export default Loading;
