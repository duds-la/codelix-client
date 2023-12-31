import Image from 'next/image';
import { PlayIcon } from '@heroicons/react/24/solid';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

export const Banner = () => (
  <div className='mb-10 '>
    <div className='flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12 '>
      <div className='flex flex-col absolute left-0 top-0 -z-10 h-[95vh] w-screen'>
        <Image
          src='/banner.jpg'
          alt='Cenário the Witcher'
          fill={true}
          className='h-[65vh] object-cover object-top lg:h-[95vh]' />
      </div>



      <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>
        The Witcher
      </h1>

      <p className='text-shadow-md max-w-xs text-xs md:maz-w-lg md:text-lg lg:max-w-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima explicabo delectus rerum sed omnis consequuntur in alias dolorem eos numquam ut, pariatur quas perspiciatis repellendus recusandae. Perferendis a fuga atque!</p>
    </div>

    <div className='flex space-x-3'>
      <button className='md:text-xl; flex cursor-pointer items-center gap-x-2 rounded bg-white px-5 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:px-8 md:py-2.5'>
        <PlayIcon className='h-6' />
        Play
      </button>
      <button className='md:text-xl; flex cursor-pointer items-center gap-x-2 rounded bg-gray-600 px-5 py-1.5 text-sm font-semibold text-white transition hover:opacity-75 md:px-8 md:py-2.5'>
        <InformationCircleIcon className='h-6' />
        More Info
      </button>
    </div>
  </div>
);
