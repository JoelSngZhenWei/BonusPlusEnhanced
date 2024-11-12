'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, ArrowLeft, CheckCircle, DollarSign, TrendingUp, Gift, ArrowLeftIcon, Sparkles, Rocket, Star } from 'lucide-react'
import { motion } from "framer-motion"
import Link from 'next/link'
import Image from 'next/image'

// ... (previous code remains unchanged)

function WelcomeSection({ onNext }: { onNext: () => void }) {
  return (
    <div className="text-center max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-red-600">
          Welcome to Your Financial Upgrade!
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="text-lg md:text-xl mb-8 text-gray-700">
          Get ready for an exciting journey with OCBC BonusMax! We're thrilled to enhance your banking experience with powerful features designed to supercharge your savings and rewards.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {[
          { icon: Sparkles, text: "Boost Your Savings" },
          { icon: Rocket, text: "Accelerate Your Rewards" },
          { icon: Star, text: "Unlock Exclusive Benefits" },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center"
          >
            <item.icon className="h-12 w-12 text-red-600 mb-4" />
            <p className="text-lg font-semibold text-gray-800">{item.text}</p>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <Button onClick={onNext} className="bg-red-600 hover:bg-red-700 text-lg px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
          Start Your Upgrade <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </motion.div>
    </div>
  )
}

// ... (rest of the code remains unchanged)