'use client'

import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"


const Hero = () => {

    return (
        <div>
            <section className="relative h-[70vh] md:h-[90vh] px-12 md:px-12 lg:px-64 overflow-hidden bg-[#0a0a0a]">

                <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/60 to-transparent" />

                <div className="relative z-10 mx-auto flex h-full flex-col-reverse items-center justify-center gap-10 px-6 py-12 md:flex-row md:px-12 lg:px-20">
                    <motion.div
                        className="w-full md:w-1/2"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                            Empower Your Fitness Journey
                        </p>
                        <h1 className="text-white font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight">
                            Unleash Your
                            <br />
                            Great <span className="text-primary">Potential</span>
                        </h1>
                        <p className="text-muted-foreground mt-6 text-base md:text-lg max-w-md leading-relaxed">
                            <a href="/watch" className="underline">Watch</a> or <a href="/upload" className="underline">Upload</a> workouts, track your progress, and connect with a community of fitness enthusiasts. Your journey to a stronger, healthier life starts here.
                        </p>
                        <div className="flex flex-wrap gap-3 mt-8">
                            <Button asChild size="lg" className="text-black rounded-full px-8 font-heading font-semibold bg-primary hover:bg-primary/90">
                                <Link href="https://www.youtube.com/@LUNIOStudios" target="_blank">
                                    Start Training
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="rounded-full px-8 font-heading font-semibold border-white/20 hover:bg-white/10 hover:text-white">
                                <Link href="https://www.youtube.com/@LUNIOStudios" target="_blank">
                                    <Play className="w-4 h-4 mr-2" />
                                    Watch Videos
                                </Link>
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div
                        className="w-full md:w-1/2 flex justify-center"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="w-full max-w-md overflow-hidden rounded-3xl border border-white/20 shadow-2xl backdrop-blur-lg bg-black/40">
                            <img
                                src="https://asset.imagine.art/processed/7b290d17-0cc0-4ef8-890c-1fe9694f1450"
                                alt="Hero image"
                                className="h-100 w-full object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default Hero