'use client'

import { Sparkles, Target, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import Image from "next/image"
import { BottomNav } from "@/components/bottom-nav"
import { ArrowRightIcon, ChevronRightIcon } from "@radix-ui/react-icons"
import { Parallax } from 'react-scroll-parallax';

export default function BonusPlusLandingComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/family.jpg"
          alt="OCBC Bonus+ hero image"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 to-red-600/80 z-10"></div>
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-3xl font-extrabold mb-6">OCBC Bonus+</h1>
          <p className="text-lg font-semibold mb-8">Reach your goals faster, earn rewards, and enjoy exclusive benefits</p>
          <Button className="bg-white text-red-600 hover:bg-red-50 text-lg font-semibold py-6 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105">
            Get Started Now
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-7 px-4 max-w-6xl mx-auto">
        <h2 className="text-lg font-bold text-center mb-6">Unlock the Power of <span className="text-red-600">Bonus+</span></h2>
        <div className="grid grid-cols-3 gap-2">
          {[
            { title: "Higher Interest Rates", description: "Enjoy competitive interest rates that grow with your balance", icon: TrendingUp },
            { title: "Bonus Rewards", description: "Earn extra rewards for consistent savings and reaching milestones", icon: Sparkles },
            { title: "Goal-Based Savings", description: "A savings account meant to help you track and reach your big targets", icon: Target }
          ].map((feature, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-3 flex flex-col items-center text-center">
                <h3 className="text-base font-semibold mb-2 text-red-600">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-red-900 text-white py-10 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How Bonus+ Works</h2>
          <div className="grid grid-cols-1 gap-12 items-center">
            <div className="space-y-8">
              {[
                "Open your Bonus+ account in minutes",
                "Make regular deposits to grow your balance",
                "The longer you save without withdrawing, the higher your interest rate",
                "Withdraw for big ticket expenses (HDB, wedding, car) to gain points and not lose any interest rate",
                "Achieve your financial milestones faster"
              ].map((step, index) => (
                <div key={index} className="flex items-center">
                  <div className="bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-base">{step}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Big Ticket Purchases</h3>
              <ScrollArea className="w-full whitespace-nowrap rounded-md border border-red-400">
                <div className="flex space-x-4 p-4">
                  {[
                    { name: "BTO", src: "/bto.jpg" },
                    { name: "Car", src: "/car.jpg" },
                    { name: "Wedding", src: "/wedding.jpg" },
                    { name: "Recurring Payments", src: "/payments.jpg" }
                  ].map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                      {/* <Parallax speed={5}> */}
                      <div className="w-28 h-28 bg-white rounded-full overflow-hidden flex items-center justify-center">
                        <Parallax className="w-32 h-32 relative" speed={-1.5}>
                          <Image 
                            src={item.src} 
                            alt={item.name} 
                            fill
                            objectFit="cover"
                          />
                        </Parallax>
                      </div>
                      {/* </Parallax> */}
                      <span className="text-sm">{item.name}</span>
                    </div>
                  ))}
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>
          </div>
        </div>
      </section>

      {/* Redeem Rewards and Points Section */}
      <section className="py-10 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-lg font-bold mb-4">Redeem Rewards and Points</h2>
          <p className="text-xl mb-4">
            Turn your savings into exciting rewards! With Bonus+, you can redeem your points for a wide range of benefits:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[
              { title: "Travel Vouchers", description: "Fund your next adventure" },
              { title: "Cashback", description: "Get cash rewards directly to your account" },
              { title: "Exclusive Deals", description: "Discounts on your favourite brands" }
            ].map((reward, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-red-600 mb-2">{reward.title}</h3>
                <p className="text-gray-600">{reward.description}</p>
              </div>
            ))}
          </div>
          <Button className="mt-10 bg-red-600 text-white hover:bg-red-700 text-base font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300 hover:scale-105">
            Explore All Rewards
            <ChevronRightIcon className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-400 text-white py-14 px-4 mb-12">
        <div className="text-center">
          <h2 className="text-lg font-extrabold mb-4">Ready to Boost Your Savings?</h2>
          <p className="text-base mb-4">Join Bonus+ today and start your journey towards financial success.</p>
          <Button className="bg-white text-red-600 hover:bg-red-50 text-base font-semibold py-6 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105">
            Open Your Bonus+ Account
            <ChevronRightIcon className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <BottomNav/>
    </div>
  )
}