import { FaHome } from 'react-icons/fa';
import { FaBolt } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import Link from 'next/link';

const Header = () => {
  return (
    <div className='bg-white'>
      <div className='container mx-auto flex items-center py-4 max-width:960px'>
        <nav className='w-2/5 flex space-x-4'>
          <div className='group'>
            <Link href='#'>
              <a className='flex space-x-2 items-center  group-hover:text-twitter '>
                <FaHome />
                <p>Home</p>
              </a>
            </Link>
          </div>
          <div className='group'>
            <Link href='#'>
              <a className='flex space-x-2 items-center group-hover:text-twitter'>
                <FaBolt />
                <p>Moments</p>
              </a>
            </Link>
          </div>
          <div className='group'>
            <Link href='#'>
              <a className='flex space-x-2 items-center group-hover:text-twitter'>
                <FaBell />
                <p>Notifications</p>
              </a>
            </Link>
          </div>
          <div className='group'>
            <Link href='#'>
              <a className='flex space-x-2 items-center group-hover:text-twitter'>
                <FaEnvelope />
                <p>Messages</p>
              </a>
            </Link>
          </div>
        </nav>
        <div className='w-1/5 group hover:text-twitter flex justify-center'>
          <FaTwitter />
        </div>
        <div className='w-2/5 flex space-x-2 justify-end'>
          <div className='flex relative'>
            <input
              type='text'
              placeholder='Search Twitter'
              className='outline-none border-2 border-twitter px-6 rounded-full'
            />
            <FaSearch className='absolute right-0 mt-4 mr-4 text-twitter' />
          </div>
          <div className='h-12 w-12 bg-twitter rounded-full flex items-center justify-center text-white'>
            <h1>A</h1>
          </div>
          <button className='bg-twitter hover:bg-blue-400 text-white py-2 px-6 rounded-full'>
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
