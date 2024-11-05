'use client'

import { ArrowRight, Check, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import Image from "next/image"

export function BonusPlusLandingComponent() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="OCBC Bonus+ hero image"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
        />
        <div className="absolute inset-0 bg-blue-900/70 z-10"></div>
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">OCBC Bonus+</h1>
          <p className="text-xl md:text-2xl mb-8">Supercharge your savings for life&apos;s big milestones</p>
          <Button className="bg-white text-blue-600 hover:bg-blue-50 text-lg font-semibold py-6 px-8">
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features of Bonus+</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Big-Purchase Cashback", description: "Earn extra cashback on major expenses" },
            { title: "Milestone Rewards", description: "Unlock exclusive rewards as you reach savings goals" },
            { title: "Tailored Offers", description: "Get personalized deals for life's big purchases" }
          ].map((feature, index) => (
            <Card key={index} className="bg-blue-50">
              <CardContent className="p-6">
                <Check className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-100 py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How Bonus+ Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                "Open a Bonus+ account",
                "Set your savings goals",
                "Make regular deposits",
                "Earn rewards as you save",
                "Achieve your financial milestones"
              ].map((step, index) => (
                <div key={index} className="flex items-center">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
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

      {/* Testimonials Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex space-x-8 pb-4">
              {[
                { name: "Sarah L.", quote: "Bonus+ helped me save for my dream wedding. The cashback rewards were a great bonus!" },
                { name: "Michael T.", quote: "I love how Bonus+ gamifies saving. It's made putting money aside actually fun." },
                { name: "Emily W.", quote: "The tailored offers have saved me so much on big purchases. Highly recommend!" },
                { name: "David K.", quote: "Bonus+ made saving for a house deposit so much easier. Great features and rewards!" }
              ].map((testimonial, index) => (
                <Card key={index} className="w-[300px] flex-none">
                  <CardContent className="p-6">
                    <p className="italic mb-4">{testimonial.quote}</p>
                    <p className="font-semibold">{testimonial.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Supercharge Your Savings?</h2>
          <p className="text-xl mb-8">Join Bonus+ today and start your journey towards financial success.</p>
          <Button className="bg-white text-blue-600 hover:bg-blue-50 text-lg font-semibold py-6 px-8">
            Open Your Bonus+ Account
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center">
          <div className="w-full md:w-auto text-center md:text-left mb-4 md:mb-0">
            <p>&copy; 2024 OCBC Bank. All rights reserved.</p>
          </div>
          <div className="w-full md:w-auto text-center md:text-right">
            <a href="#" className="text-blue-300 hover:text-blue-100 mx-2">Terms & Conditions</a>
            <a href="#" className="text-blue-300 hover:text-blue-100 mx-2">Privacy Policy</a>
            <a href="#" className="text-blue-300 hover:text-blue-100 mx-2">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  )
}