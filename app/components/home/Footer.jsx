import React from 'react'
import { ArrowRight, Play } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'


const Footer = () => {
    return (
        <div className='relative px-12 md:px-12 lg:px-64 overflow-hidden bg-[#0a0a0a]'>
            <div className='w-full bg-primary/5 z-10 justify-center items-center flex flex-col gap-3 py-10 mx-auto border border-white/20 rounded-2xl'>
                <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                    Ready to Take the Next Step?
                </p>
                <h1 className="text-white font-heading text-4xl md:text-6xl lg:text-3xl font-bold leading-[0.95] tracking-tight">
                    Your Fitness Journey <span className="text-primary">Begins Today</span>
                </h1>
                <p className="text-muted-foreground mt-6 text-base md:text-lg max-w-md leading-relaxed text-center">
                    Join thousands of members who have already transformed their lives with our programs.
                </p>
                <div className="flex flex-wrap gap-3 mt-8">
                    <Button asChild size="lg" className="text-black rounded-full px-9 font-heading font-semibold bg-primary hover:bg-primary/90">
                        <Link href="https://www.youtube.com/@LUNIOStudios" target="_blank">
                            Start Today
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </Button>
                </div>
            </div>
            <div>
                <p className='text-center text-sm text-muted-foreground mt-6 mb-4'>© {new Date().getFullYear()} FitLUNIO. All rights reserved. Except images they are AI generated and from Unsplash.com</p>
                <p className='text-center text-sm text-muted-foreground mb-4'>
                    Made with ❤️ by <a href="https://www.luniostudios.com/" target='blank' className='underline hover:text-primary'>LUNIO Studios</a>
                </p>
            </div>
        </div>
    )
}

export default Footer