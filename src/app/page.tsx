import Header from './components/Header';
import { useEffect, useState } from 'react';
import { MovieRow } from './components/MovieRow';
import { Banner } from './components/Banner';

export default function Home() {
  return (
    <div className='relative h-screen overflow-hidden bg-gradient-to-b from-black lg:h-[140vh]'>
      <Header

      />
      <main className='relative pb-24 pl-4 lg:pl-16 '>
        <Banner />
        <MovieRow sectionTitle='Trending Now' />
        <MovieRow sectionTitle='Most Popular' />
        <MovieRow sectionTitle='Everything tou want' />

      </main>
    </div>
  );
}
