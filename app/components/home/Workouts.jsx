'use client'

import { ArrowRight, Clock, Flame, Play } from 'lucide-react'
import Link from 'next/link'

const Workouts = () => {
    return (
        <div>
            <section className="relative px-12 md:px-12 lg:px-64 overflow-hidden bg-[#0a0a0a] p-8">
                <div className="flex items-end justify-between mb-6">
                    <div>
                        <h1 className="text-white font-heading text-2xl md:text-3xl font-bold tracking-tight">Featured Workouts</h1>
                        <h2 className="text-muted-foreground text-sm mt-1">Handpicked by our trainers</h2>
                    </div>
                    <div>
                        <Link href="/categories" className="flex items-center text-sm font-medium text-primary hover:text-primary/80">
                            View All
                            <ArrowRight className="w-5 h-5 text-primary" />
                        </Link>
                    </div>
                </div>
                <div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                        <div className="w-100 h-90 flex flex-col rounded-2xl overflow-hidden group hover:shadow-2xl transition-shadow duration-300 bg-[#0a0a0a] border border-white/20">
                            <div className='relative h-50'>
                                <img
                                    src='https://media.base44.com/images/public/69cd1f7dd2494a522c3c32dd/04a6dd4a5_generated_163761ae.png'
                                    alt="Category 1"
                                    className="w-full h-50 object-fill transition-transform duration-700"
                                />
                                <div className="absolute h-50 inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />
                                <div className="absolute flex flex-row items-center justify-between bottom-0 left-0 right-0 p-3 ">
                                    <h3 className="font-heading text-xs font-bold text-[#fbbf24] bg-black/50 tracking-tight py-1 px-3 border border-[#fbbf24] rounded-full ">intermediate</h3>
                                    <h3 className="font-heading text-lg font-bold text-white tracking-tight">STRENGTH</h3>
                                </div>
                            </div>
                            <div className='relative h-45 px-5 gap-3 flex flex-col justify-start'>
                                <h1 className='text-white font-heading text-lg font-bold tracking-tight'>Full Body Blast</h1>
                                <h2 className='text-muted-foreground text-sm mt-1'>An intense full-body workout combining compound movements to build strength and power. Perfect for maximizing muscle engagement in a single session.</h2>
                                <div className='flex flex-row justify-between absolute bottom-5 left-5 right-5'>
                                    <div className='flex flex-row items-center gap-1'>
                                        <Clock className='w-4 h-4 inline-block mr-1 text-muted-foreground' />
                                        <span className='text-muted-foreground text-sm'>45 min</span>
                                    </div>
                                    <div className='flex flex-row items-center gap-1'>
                                        <Flame className='w-4 h-4 inline-block mr-1 text-muted-foreground' />
                                        <span className='text-muted-foreground text-sm'>450 cal</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Workouts