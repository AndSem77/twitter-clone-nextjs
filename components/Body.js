const Body = () => {
  return (
    <div className='container mx-auto flex justify-between mt-3'>
      <div className='w-1/4 pr-6 mt-8 font-bold'>
        <h2>Andrey Semeyko</h2>
        <h2 className='text-xs'>@andrey_semeyko</h2>
        <h2 className='text-xs mt-3'>
          MBA, petroleum engineer, software developer
        </h2>
        <button className='bg-twitter px-8 py-2 rounded-full mt-2 text-white'>
          Tweet to Andrey
        </button>
      </div>
      <div className='w-1/2 bg-white mb-4'>
        <div className='flex space-x-4'>
          <h1 className='text-md'>Tweets</h1>
          <h1 className='text-md'>Replies</h1>
          <h1 className='text-md'>Media</h1>
        </div>

        <div className='flex h-96 items-center justify-center'>
          <h1 className='text-2xl'>TWEETS</h1>
        </div>
      </div>
      <div className='w-1/4 bg-white h-96 ml-5'>
        <h1 className='text-2xl mt-4 text-center'>Trends for you</h1>
      </div>
    </div>
  );
};

export default Body;
