'use client'

import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"


const Hero = () => {
    const bodyParts = [
        { name: "Lower Back", x: "47%", y: "40%", color: "#ff6b6b" },
        { name: "Triceps", x: "55%", y: "30%", color: "#4ecdc4" },
        { name: "Quads", x: "54%", y: "60%", color: "#45b7d1" },
        { name: "Calves", x: "45%", y: "75%", color: "#f9ca24" },
        { name: "Upper Back", x: "49%", y: "25%", color: "#f0932b" },
        { name: "Glutes", x: "49%", y: "50%", color: "#eb4d4b" }
    ]

    return (
        <div>
            <section className="relative h-[70vh] md:h-[85vh] overflow-hidden bg-[#0a0a0a]">
                <img
                    src='	https://media.base44.com/images/public/69cd1f7dd2494a522c3c32dd/04a6dd4a5_generated_163761ae.png'
                    alt="Fitness hero"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/60 to-transparent" />

                {/* Body Part Markers */}
                {bodyParts.map((part, index) => (
                    <motion.div
                        key={part.name}
                        className="absolute z-10 cursor-pointer group hidden xl:block"
                        style={{ left: part.x, top: part.y }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        whileHover={{ scale: 1.2 }}
                    >
                        {/* Pulsing dot */}
                        <motion.div
                            className="relative w-4 h-4 rounded-full border-2 border-white shadow-lg"
                            style={{ backgroundColor: part.color }}
                            animate={{
                                boxShadow: [
                                    `0 0 0 0 ${part.color}40`,
                                    `0 0 0 10px ${part.color}00`,
                                ]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />

                        {/* Hover tooltip */}
                        <motion.div
                            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-black/80 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none"
                            initial={{ y: 10 }}
                            whileHover={{ y: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            {part.name}
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80"></div>
                        </motion.div>
                    </motion.div>
                ))}

                <div className="absolute inset-0 flex items-center">
                    <div className="px-12 md:px-12 lg:px-80 max-w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                                Transform Your Body
                            </p>
                            <h1 className="text-white font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight">
                                Push Beyond
                                <br />
                                Your <span className="text-primary">Limits</span>
                            </h1>
                            <p className="text-muted-foreground mt-6 text-base md:text-lg max-w-md leading-relaxed">
                                Expert-crafted workouts and nutrition plans designed to help you achieve your fitness goals.
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
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero