const Hero = () => {
  return (
    <div className='h-96 bg-twitter flex items-center justify-center'>
      <h1 className='text-2xl text-white'>
        <svg
          width='286'
          height='260'
          viewBox='0 0 286 260'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clip-path='url(#clip0)'>
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M73.2595 241.32H210.804L218.778 259.829H65.038L73.2595 241.32ZM155.475 0H172.525L285.5 259.81H267.386L155.475 0ZM191.589 196.716H93.0823L134.361 103.848L110.475 49.5346L18.462 259.81H0.5L110.152 7.6426L191.608 196.716H191.589ZM142.753 122.357L167.133 178.264L118.563 178.34L142.753 122.357V122.357Z'
              fill='#fff'
            />
          </g>
          <defs>
            <clipPath id='clip0'>
              <rect
                width='285'
                height='260'
                fill='white'
                transform='translate(0.5)'
              />
            </clipPath>
          </defs>
        </svg>
      </h1>
    </div>
  );
};

export default Hero;
