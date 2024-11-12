'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, ArrowLeft, CheckCircle, DollarSign, TrendingUp, Gift, ArrowLeftIcon, Sparkles, Rocket, Star } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from "framer-motion"

const steps = ['Overview', 'Benefits', 'Confirmation']

export default function TransitionPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [agreed, setAgreed] = useState(false)
  const [transitionComplete, setTransitionComplete] = useState(false)

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleTransition = () => {
    setTransitionComplete(true)
  }

  const progressPercentage = ((currentStep + 1) / steps.length) * 100

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/family.jpg"
          alt="OCBC BonusMax hero image"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 to-red-600/80 z-10"></div>
        <div className="absolute top-4 left-4 z-30">
          <Link href="/home">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <ArrowLeftIcon className="h-6 w-6" />
            </Button>
          </Link>
        </div>
        <motion.div 
          className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4">BonusMax</h1>
          <p className="text-xl">
            Welcome to OCBC BonusMax! Discover features designed to help you reach your financial goals faster and smarter.
          </p>
        </motion.div>
      </header>

      {/* Progress Bar */}
      <div className="container mx-auto px-4 py-8">
        <Progress value={progressPercentage} className="w-full h-2 mb-4" />
        <div className="flex justify-between mb-8">
          {steps.map((step, index) => (
            <div
              key={step}
              className={`text-sm font-medium ${
                index <= currentStep ? 'text-red-600' : 'text-gray-400'
              }`}
            >
              {step}
            </div>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {currentStep === 0 && <WelcomeSection onNext={nextStep} />}
            {currentStep === 1 && <BenefitsSection onNext={nextStep} onPrev={prevStep} />}
            {currentStep === 2 && !transitionComplete && (
              <ConfirmationSection
                agreed={agreed}
                setAgreed={setAgreed}
                onTransition={handleTransition}
                onPrev={prevStep}
              />
            )}
            {transitionComplete && <CompletionSection />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

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
          Get ready for an exciting journey with OCBC BonusMax! We&apos;re thrilled to enhance your banking experience with powerful features designed to supercharge your savings and rewards.
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

function BenefitsSection({ onNext, onPrev }: { onNext: () => void; onPrev: () => void }) {
  const benefits = [
    {
      title: "Competitive Rates",
      description: "Earn up to 2.8% with BonusMax's growing interest rate.",
      icon: DollarSign,
      image: "/rate.png",
    },
    {
      title: "Supporting You",
      description: "Earn cashback on big-ticket purchases and everyday transactions.",
      icon: Gift,
      image: "/buyhouse.png",
    },
    {
      title: "Earn Rewards as you Save",
      description: "Get OCBC$ for monthly deposits and redeem them for attractive rewards.",
      icon: TrendingUp,
      image: "/rewards.png",
    },
  ]

  return (
    <div className="relative">
      <motion.h2 
        className="text-2xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Key Benefits of BonusMax
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {benefits.map((benefit, index) => (
          <motion.div 
            key={index} 
            className="relative overflow-hidden rounded-lg shadow-lg group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Image
              src={benefit.image}
              alt={benefit.title}
              width={400}
              height={400}
              className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-80"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
              <benefit.icon className="mb-4 h-10 w-10" />
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-sm">{benefit.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div 
        className="flex justify-between"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Button onClick={onPrev} variant="ghost" size="icon" className="absolute left-0 mt-5 transform -translate-y-1/2 text-red-600 hover:bg-red-100">
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <Button onClick={onNext} className="bg-red-600 hover:bg-red-700 ml-auto">
          Next <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </motion.div>
    </div>
  )
}

function ConfirmationSection({
  agreed,
  setAgreed,
  onTransition,
  onPrev,
}: {
  agreed: boolean
  setAgreed: (value: boolean) => void
  onTransition: () => void
  onPrev: () => void
}) {
  return (
    <div className="relative">
      <motion.h2 
        className="text-2xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Confirm Your Account Opening
      </motion.h2>
      <motion.p 
        className="text-center mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Your account will be set up with ease. Start taking advantage of BonusMax&apos;s features right away to boost your savings and rewards.
      </motion.p>
      <motion.div 
        className="flex items-center space-x-2 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Checkbox id="terms" checked={agreed} onCheckedChange={(checked) => setAgreed(checked as boolean)} />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          I agree to the terms and conditions of the transition
        </label>
      </motion.div>
      <motion.p 
        className="text-sm text-gray-500 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        By checking this box, you agree to the{' '}
        <Link href="/terms" className="text-blue-600 hover:underline">
          full terms and conditions
        </Link>{' '}
        of the OCBC BonusMax account.
      </motion.p>
      <motion.div 
        className="flex justify-between"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Button onClick={onPrev} variant="ghost" size="icon" className="absolute left-0 mt-5 transform -translate-y-1/2 text-red-600 hover:bg-red-100">
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <Button
          onClick={onTransition}
          disabled={!agreed}
          className="bg-red-600 hover:bg-red-700 disabled:opacity-50 ml-auto"
        >
          Open Now
        </Button>
      </motion.div>
    </div>
  )
}

function CompletionSection() {
  return (
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
      </motion.div>
      <motion.h2 
        className="text-2xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Account Setup Complete!
      </motion.h2>
      <motion.p 
        className="mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Your account is now ready! Welcome to OCBC BonusMax. We&apos;ve sent a confirmation email with all the details about your new account."
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Link href="/home">
          <Button className="bg-red-600 hover:bg-red-700">Go to Dashboard</Button>
        </Link>
      </motion.div>
    </div>
  )
}