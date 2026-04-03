import { Home, IceCreamBowl, List, LucideCloudLightning, Play } from 'lucide-react'
import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <div className="fixed top-0 left-0 right-0 bg-[#0a0a0aa6] py-2 px-8 z-20">
            <div className='flex flex-row items-center justify-between max-w-7xl mx-auto'>
                <ul className=' text-white inline-flex font-body gap-8 font-medium justify-center w-full'>
                    <li className='flex items-center gap-1'>
                        <Home className='w-5 h-5 inline-block mr-1' />
                        <a className="hover:text-gray-200" href="/">Home</a></li>
                    <li className='flex items-center gap-1'>
                        <LucideCloudLightning className='w-5 h-5 inline-block mr-1' />
                        <a className="hover:text-gray-200" href="/about">Workouts</a></li>
                    <li className='flex items-center gap-1'>
                        <IceCreamBowl className='w-5 h-5 inline-block mr-1' />
                        <a className="hover:text-gray-200" href="/contact">Diet Plans</a></li>
                    <li className='flex items-center gap-1'>
                        <Play className='w-5 h-5 inline-block mr-1' />
                        <a className="hover:text-gray-200" href="/contact">Videos</a></li>
                    <li className='flex items-center gap-1'>
                        <List className='w-5 h-5 inline-block mr-1' />
                        <a className="hover:text-gray-200" href="/contact">Forum</a></li>

                </ul>
                <div>
                    <Link href="/login" className=" text-white hover:text-gray-200 font-medium flex items-center gap-1 border border-primary rounded-lg px-4 py-1">
                        Account
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header