'use client'

import { ArrowRight, Play } from 'lucide-react'
import Link from 'next/link'

const Categories = () => {
    return (
        <div>
            <section className="relative px-12 md:px-12 lg:px-64 overflow-hidden bg-[#0a0a0a] p-8">
                <div className="flex items-end justify-between mb-6">
                    <div>
                        <h1 className="text-white font-heading text-2xl md:text-3xl font-bold tracking-tight">Explore Categories</h1>
                        <h2 className="text-muted-foreground text-sm mt-1">Find the perfect workout for your goals</h2>
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
                        <div className="relative aspect-3/4 rounded-2xl overflow-hidden group block">
                            <img
                                src='https://media.base44.com/images/public/69cd1f7dd2494a522c3c32dd/31829b114_generated_a9781179.png'
                                alt="Category 1"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-5">
                                <h3 className="font-heading text-lg font-bold text-white tracking-tight">Category 1</h3>
                                <div className="w-8 h-0.5 bg-primary mt-2 group-hover:w-12 transition-all duration-300" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Categories