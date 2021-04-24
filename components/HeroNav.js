const HeroNav = () => {
  return (
    <div className='bg-white shadow'>
      <div className='container mx-auto flex items-center'>
        <div className='w-1/4 relative'>
          <h1 className='bg-twitter w-16 h-16 rounded-full m-2  flex items-center justify-center text-white text-xs'>
            ANDREY
          </h1>
        </div>
        <div className='w-1/2'>
          <ul className='flex space-x-4'>
            <li className='flex flex-col items-center'>
              <span className='font-bold'>Tweets</span>
              <span className='text-md font-bold text-twitter'>60</span>
            </li>
            <li className='flex flex-col items-center'>
              <span className='font-bold'>Following</span>
              <span className='text-md font-bold text-twitter'>12</span>
            </li>
            <li className='flex flex-col items-center'>
              <span className='font-bold'>Followers</span>
              <span className='text-md font-bold text-twitter'>600</span>
            </li>
            <li className='flex flex-col items-center'>
              <span className='font-bold'>Likes</span>
              <span className='text-md font-bold text-twitter'> 555</span>
            </li>
            <li className='flex flex-col items-center'>
              <span className='font-bold'>Moments</span>
              <span className='text-md font-bold text-twitter'>1</span>
            </li>
          </ul>
        </div>
        <div className='w-1/4 flex justify-end'>
          <button className='bg-twitter text-white font-medium rounded-full px-4 py-2'>
            Following
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroNav;
