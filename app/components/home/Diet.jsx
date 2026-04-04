'use client'

import { ArrowRight, Clock, Flame, Play } from 'lucide-react'
import Link from 'next/link'

const Diet = () => {
    return (
        <div>
            <section className="relative px-12 md:px-12 lg:px-64 overflow-hidden bg-[#0a0a0a] p-8">
                <div className="flex items-end justify-between mb-6">
                    <div>
                        <h1 className="text-white font-heading text-2xl md:text-3xl font-bold tracking-tight">Nutrition Plans</h1>
                        <h2 className="text-muted-foreground text-sm mt-1">Personalized meal plans for your fitness goals</h2>
                    </div>
                    <div>
                        <Link href="/categories" className="flex items-center text-sm font-medium text-primary hover:text-primary/80">
                            View All
                            <ArrowRight className="w-5 h-5 text-primary" />
                        </Link>
                    </div>
                </div>
                <div>
                    <div className="w-full flex flex-wrap justify-between gap-8">
                        {[
                            {
                                title: 'Muscle Gain Plan',
                                description: 'A comprehensive nutrition plan designed to support muscle growth and recovery. Focused on high-quality proteins, complex carbohydrates, and essential fats.',
                                image: 'https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                                difficulty: 'muscle gain',
                                duration: '28 days',
                                calories: '2800 cal/day'
                            },
                            {
                                title: 'HIIT Cardio Rush',
                                description: 'High-intensity interval training to boost your metabolism and improve cardiovascular endurance. Short bursts of intense exercise followed by recovery periods.',
                                image: 'https://images.unsplash.com/photo-1467453678174-768ec283a940?q=80&w=1144&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                                category: 'CARDIO',
                                difficulty: 'advanced',
                                duration: '30 min',
                                calories: '320 cal'
                            },
                            {
                                title: 'Morning Yoga Flow',
                                description: 'Gentle yoga sequence to start your day with mindfulness and flexibility. Perfect for improving posture and reducing stress.',
                                image: 'https://images.unsplash.com/photo-1521986329282-0436c1f1e212?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                                category: 'YOGA',
                                difficulty: 'beginner',
                                duration: '25 min',
                                calories: '120 cal'
                            }
                        ].map((workout) => (
                            <div key={workout.title} className="w-100 h-105 flex flex-col rounded-2xl overflow-hidden group hover:shadow-2xl transition-shadow duration-300 bg-[#0a0a0a] border border-white/20">
                                <div className='relative h-50'>
                                    <img
                                        src={workout.image}
                                        alt={workout.title}
                                        className="w-full h-50 object-cover transition-transform duration-700"
                                    />
                                    <div className="absolute h-50 inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />
                                    <div className="absolute flex flex-row items-center justify-between bottom-0 left-0 right-0 p-3 ">
                                        <h3 className="font-heading text-xs font-bold text-primary tracking-tight py-1 px-3 border border-primary rounded-full bg-primary/25">{workout.difficulty}</h3>
                                    </div>
                                </div>
                                <div className='relative h-45 px-5 gap-3 flex flex-col justify-start'>
                                    <h1 className='text-white font-heading text-lg font-bold tracking-tight'>{workout.title}</h1>
                                    <h2 className='text-muted-foreground text-sm mt-1'>{workout.description}</h2>
                                    <div className='flex flex-row gap-5  bottom-5 left-5 right-5'>
                                        <div className='flex flex-row items-center gap-1'>
                                            <Flame className='w-4 h-4 inline-block mr-1 text-muted-foreground' />
                                            <span className='text-muted-foreground text-sm'>{workout.calories}</span>
                                        </div>
                                        <div className='flex flex-row items-center gap-1'>
                                            <span className='text-muted-foreground text-sm'>{workout.duration}</span>
                                        </div>
                                    </div>
                                    <hr className='border border-gray-400/30' />
                                    <div className='flex flex-row justify-center gap-20 bottom-1 left-5 right-5'>
                                        <div className='flex flex-col items-center'>
                                            <h3 className='text-white text-sm font-medium'>200g</h3>
                                            <span className='text-muted-foreground text-xs'>Protein</span>
                                        </div>
                                        <div className='flex flex-col items-center'>
                                            <h3 className='text-white text-sm font-medium'>200g</h3>
                                            <span className='text-muted-foreground text-xs'>Protein</span>
                                        </div>
                                        <div className='flex flex-col items-center'>
                                            <h3 className='text-white text-sm font-medium'>200g</h3>
                                            <span className='text-muted-foreground text-xs'>Protein</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Diet