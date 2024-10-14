"use client"

import Image from 'next/image'

import heroImage from '@/assets/images/hero.png';
import iconHomeGlobe from "@/components/icons/homeglobe.svg";

import { Button, Card, Input } from "@/components/ui";

export default function Home() {
  return (
    <main className='bg-lavender relative h-screen'>
      <div className='h-full sm:flex sm:items-center sm:justify-center sm:overflow-hidden'>
        <div className='pt-12 sm:pt-0'>
          <Card className='relative z-20 mx-auto px-4 py-6 sm:mx-0 sm:w-[438px] sm:h-[562px] sm:p-8'>
            <Image src={iconHomeGlobe}
              width={177.44}
              height={28}
              alt="Homeglobe" />
            <span className='text-rich-black text-xl font-bold block my-4 sm:text-2xl'>Find places to stay anywhere</span>
            <p className='text-slate-gray'>Discover entire homes and rooms perfect for any trip or special occasion.</p>
            <form className='mt-6 sm:mt-4 flex flex-col gap-6'>
              <Input type="text" label="Location" placeholder="Anywhere" />
              <div className='flex gap-4'>
                <Input type="text" label="From" placeholder="Add date" />
                <Input type="text" label="To" placeholder="Add date" />
              </div>
              <div className='flex gap-4'>
                <Input type="text" label="Adults" placeholder="" />
                <Input type="text" label="Children" placeholder="" />
              </div>
              <Button>Search</Button>
            </form>
          </Card>
        </div>
        <div className='absolute bottom-0 z-10 sm:relative sm:bottom-auto sm:flex-none sm:right-0 sm:-ml-[18.5rem] xl2:-ml-[13.5rem]'>
          <Image src={heroImage}
            className='h-[63vh] object-cover sm:h-[680px] sm:w-[438px] sm:rounded-3xl lg:w-[632px] xl2:w-[909px]'
            alt="Hero image" />
        </div>
      </div>
    </main>
  );
}
