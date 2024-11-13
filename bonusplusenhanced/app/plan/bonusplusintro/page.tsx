'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { BottomNav } from "@/components/bottom-nav"
import { ArrowRightIcon, ChevronRightIcon } from "@radix-ui/react-icons"
import { motion } from "framer-motion"
import Link from 'next/link'

export default function BonusPlusLandingComponent() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/family.jpg"
          alt="OCBC BonusMax hero image"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 to-red-600/80 z-10"></div>
        <motion.div 
          className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-3xl font-extrabold mb-6">OCBC BonusMax</h1>
          <p className="text-lg font-semibold mb-8">Reach your goals faster, earn rewards, and enjoy exclusive benefits</p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/transitionnormal" passHref>
              <Button className="bg-white text-red-600 hover:bg-red-50 text-lg font-semibold py-6 px-8 rounded-full shadow-lg transition-all duration-300 clickable">
                Get Started Now
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Key Features Section */}
      <section className="py-8 px-2 max-w-6xl mx-auto">
        <motion.h2 
          className="text-lg font-bold text-center mb-3"
          {...fadeInUp}
        >
          Unlock the Power of <span className="text-red-600">BonusMax</span>
        </motion.h2>
        <motion.div 
          className="grid grid-cols-3 gap-2 auto-rows-fr"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {[
            { title: "Interest Rates", description: "Enjoy competitive interest rates that grow with your balance" },
            { title: "Bonus Rewards", description: "Earn extra rewards for consistent savings and reaching milestones" },
            { title: "Goal-Based Savings", description: "A savings account meant to help you track and reach your big targets" }
          ].map((feature, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full p-1">
                <CardHeader className="flex-grow-0 pt-3">
                  <CardTitle className="text-xs font-bold text-red-600 text-center">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="pb-3 px-1 flex flex-col justify-between flex-grow">
                  <p className="text-xs text-gray-600 text-center">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section className="bg-red-900 text-white py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-2xl font-bold text-center mb-6"
            {...fadeInUp}
          >
            How BonusMax Works
          </motion.h2>
          <div className="grid grid-cols-1 gap-12 items-center">
            <motion.div 
              className="space-y-8"
              variants={stagger}
              initial="initial"
              animate="animate"
            >
              {[
                "Open your BonusMax account in minutes",
                "Make regular deposits to grow your balance",
                "The longer you save without withdrawing, the higher your interest rate",
                "Withdraw for big ticket expenses (HDB, wedding, car) to gain points and not lose any interest rate",
                "Achieve your financial milestones faster"
              ].map((step, index) => (
                <motion.div key={index} className="flex items-center" variants={fadeInUp}>
                  <div className="bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-base">{step}</p>
                </motion.div>
              ))}
            </motion.div>
            <motion.div 
              className="mt-12"
              {...fadeInUp}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-8 text-center">Big Ticket Purchases</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { name: "Property", src: "/bto.jpg", description: "Your dream home" },
                  { name: "Car", src: "/car.jpg", description: "Your perfect ride" },
                  { name: "Wedding", src: "/wedding.jpg", description: "Your special day" },
                  { name: "Renovations", src: "/payments.jpg", description: "Your ideal space" }
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="w-32 h-32 bg-white rounded-full overflow-hidden flex items-center justify-center shadow-lg mb-4">
                      <div className="w-36 h-36 relative">
                        <Image 
                          src={item.src} 
                          alt={item.name} 
                          fill
                          objectFit="cover"
                        />
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold mb-2">{item.name}</h4>
                    <p className="text-sm text-red-200 text-center">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Redeem Rewards and Points Section */}
      <section className="py-10 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-lg font-bold mb-4"
            {...fadeInUp}
          >
            Redeem Rewards and Points
          </motion.h2>
          <motion.p 
            className="text-base mb-4"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Turn your savings into exciting rewards! With BonusMax, you can redeem your points for a wide range of benefits:
          </motion.p>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10"
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            {[
              { title: "Travel Vouchers", description: "Fund your next adventure" },
              { title: "Cashback", description: "Get cash rewards directly to your account" },
              { title: "Exclusive Deals", description: "Discounts on your favourite brands" }
            ].map((reward, index) => (
              <motion.div key={index} className="bg-white p-6 rounded-lg shadow-md" variants={fadeInUp}>
                <h3 className="text-lg font-semibold text-red-600 mb-2">{reward.title}</h3>
                <p className="text-gray-600">{reward.description}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button className="mt-10 bg-red-600 text-white hover:bg-red-700 text-base font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300 clickable">
              Explore All Rewards
              <ChevronRightIcon className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-400 text-white py-14 px-4 mb-12">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-lg font-extrabold mb-4">Ready to Boost Your Savings?</h2>
          <p className="text-base mb-4">Join BonusMax today and start your journey towards financial success.</p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/transitionnormal" passHref>
              <Button className="bg-white text-red-600 hover:bg-red-50 text-base font-semibold py-6 px-8 rounded-full shadow-lg transition-all duration-300 clickable">
                Open Your BonusMax Account
                <ChevronRightIcon className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <BottomNav/>
    </div>
  )
}