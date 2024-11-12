'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, ArrowLeft, CheckCircle, DollarSign, TrendingUp, UserCheck } from 'lucide-react'
import Link from 'next/link'

const steps = ['Overview', 'Benefits', 'Confirmation']

export function Transition() {
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
      <header className="bg-red-600 text-white p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">OCBC BonusMax</h1>
        <p className="text-xl">
          Welcome to OCBC+ BonusMax! Your FRANK account upgrade will provide enhanced features designed to help you reach your financial goals.
        </p>
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
      </div>
    </div>
  )
}

function WelcomeSection({ onNext }: { onNext: () => void }) {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Welcome & Transition Overview</h2>
      <p className="mb-6">
        We're excited to upgrade your FRANK account to OCBC+ BonusMax. This transition will enhance your banking experience with new features and benefits.
      </p>
      <Button onClick={onNext} className="bg-red-600 hover:bg-red-700">
        Next <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  )
}

function BenefitsSection({ onNext, onPrev }: { onNext: () => void; onPrev: () => void }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center">Key Benefits of BonusMax</h2>
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <DollarSign className="mx-auto h-12 w-12 text-red-600 mb-4" />
          <h3 className="font-bold mb-2">Cashback Opportunities</h3>
          <p>Earn cashback on big-ticket purchases and everyday transactions.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <TrendingUp className="mx-auto h-12 w-12 text-red-600 mb-4" />
          <h3 className="font-bold mb-2">Enhanced Reward Points</h3>
          <p>Earn more points and enjoy flexible redemption options.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <UserCheck className="mx-auto h-12 w-12 text-red-600 mb-4" />
          <h3 className="font-bold mb-2">Personalized Insights</h3>
          <p>Receive tailored financial advice to boost your savings.</p>
        </div>
      </div>
      <div className="flex justify-between">
        <Button onClick={onPrev} variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        <Button onClick={onNext} className="bg-red-600 hover:bg-red-700">
          Next <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
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
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center">Seamless Transition Confirmation</h2>
      <p className="text-center mb-6">
        Your transition will be completed with minimal disruption. Account details, including your balance, will transfer automatically, with all your FRANK features and funds fully accessible.
      </p>
      <div className="flex items-center space-x-2 mb-4">
        <Checkbox id="terms" checked={agreed} onCheckedChange={(checked) => setAgreed(checked as boolean)} />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          I agree to the terms and conditions of the transition
        </label>
      </div>
      <p className="text-sm text-gray-500 mb-6">
        By checking this box, you agree to the{' '}
        <Link href="/terms" className="text-blue-600 hover:underline">
          full terms and conditions
        </Link>{' '}
        of the OCBC+ BonusMax account.
      </p>
      <div className="flex justify-between">
        <Button onClick={onPrev} variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        <Button
          onClick={onTransition}
          disabled={!agreed}
          className="bg-red-600 hover:bg-red-700 disabled:opacity-50"
        >
          Transition Now
        </Button>
      </div>
    </div>
  )
}

function CompletionSection() {
  return (
    <div className="text-center">
      <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
      <h2 className="text-2xl font-bold mb-4">Transition Complete!</h2>
      <p className="mb-6">
        Your transition is complete! You are now an OCBC+ BonusMax user. We've sent a confirmation email with details about your enhanced account.
      </p>
      <Link href="/dashboard">
        <Button className="bg-red-600 hover:bg-red-700">Go to Dashboard</Button>
      </Link>
    </div>
  )
}