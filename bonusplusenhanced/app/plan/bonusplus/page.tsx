'use client'

import { ArrowRight, Sparkles, Target, TrendingUp, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { BottomNav } from "@/components/bottom-nav"

export default function BonusPlusLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="OCBC Bonus+ hero image"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 to-red-600/80 z-10"></div>
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-2xl font-extrabold mb-6">OCBC Bonus+</h1>
          <p className="text-xl font-semibold mb-8">Reach your goals faster, earn rewards, and enjoy exclusive benefits</p>
          <Button className="bg-white text-red-600 hover:bg-red-50 text-lg font-semibold py-6 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105">
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-7 px-4 max-w-6xl mx-auto">
        <h2 className="text-xl font-bold text-center mb-6">Unlock the Power of <span className="text-red-600">Bonus+</span></h2>
        <div className="grid grid-cols-3 gap-2">
          {[
            { title: "Higher Interest Rates", description: "Enjoy competitive interest rates that grow with your balance", icon: TrendingUp },
            { title: "Bonus Rewards", description: "Earn extra rewards for consistent savings and reaching milestones", icon: Sparkles },
            { title: "Goal-Based Savings", description: "Set and track your financial goals with personalized insights", icon: Target }
          ].map((feature, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-3 flex flex-col items-center text-center">
                {/* <feature.icon className="h-16 w-16 text-red-600 mb-4" /> */}
                <h3 className="text-base font-semibold mb-2 text-red-600">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-red-900 text-white py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How Bonus+ Works</h2>
          <div className="grid grid-cols-1 gap-12 items-center">
            <div className="space-y-8">
              {[
                "Open your Bonus+ account in minutes",
                "Make regular deposits to grow your balance",
                "Watch your interest rate grow as you save more",
                "Watch your rewards and interest accumulate",
                "Achieve your financial milestones faster"
              ].map((step, index) => (
                <div key={index} className="flex items-center">
                  <div className="bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-lg">{step}</p>
                </div>
              ))}
            </div>
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="How Bonus+ works illustration"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-red-900">What Our Customers Say</h2>
          <blockquote className="text-xl italic text-gray-700 mb-8">
            &apos;Bonus+ has transformed the way I save. The rewards and higher interest rates have helped me reach my savings goals much faster than I ever thought possible!&apos;
          </blockquote>
          <p className="font-semibold text-red-600">- Sarah L., Bonus+ Member since 2022</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-400 text-white py-14 px-4 mb-12">
        <div className="text-center">
          <h2 className="text-xl font-extrabold mb-4">Ready to Boost Your Savings?</h2>
          <p className="text-lg mb-4">Join Bonus+ today and start your journey towards financial success.</p>
          <Button className="bg-white text-red-600 hover:bg-red-50 text-base font-semibold py-6 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105">
            Open Your Bonus+ Account
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <BottomNav/>
    </div>
  )
}