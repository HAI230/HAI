// links
import Link from "next/link";

// icons
import {
  RiYoutubeLine , 
  RiInstagramLine, 
  RiFacebookLine, 
  RiPinterestLine
} from 'react-icons/ri'

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href={'https://www.youtube.com/channel/UCINd3Og3tpbyPrkZS-nAAkw'} className='hover:text-accent transition-all duration-300'>
        <RiYoutubeLine />
      </Link>
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiFacebookLine />
      </Link>
      <Link href={'https://www.instagram.com/davin_jong72/'} className='hover:text-accent transition-all duration-300'>
        <RiInstagramLine />
      </Link>
      <Link href={'https://id.pinterest.com/davinjong01/'} className='hover:text-accent transition-all duration-300'>
        <RiPinterestLine />
      </Link>
    </div>
  );
};

export default Socials;
