"use client"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Eye, EyeOff, QrCode} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import { BottomNav } from "@/components/bottom-nav"
import { QrCodeScannerIcon, NotificationIcon, LogoutButton } from "@/components/icon-buttons"
import { motion } from "framer-motion"

export default function Component() {
  const [showBalance, setShowBalance] = useState(true)

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.2 }
  }
  const [activeButton, setActiveButton] = useState('accounts')

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName)
  }

  const buttonVariants = {
    tap: { scale: 1.05 }
  }

  return (
    <div className="min-h-screen bg-ocbc-white pb-16">
      <motion.header 
        className="fixed top-0 left-0 w-full z-50 bg-transparent p-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="">
          <div className="flex justify-between items-center">
            <QrCodeScannerIcon isDark={true} />
            <div className="flex items-center gap-4">
              <NotificationIcon isDark={true} />
              <LogoutButton isDark={false} />
            </div>
          </div>
        </div>
      </motion.header>
      {/* Hero Section */}
      <div className="relative">
        <Image
          src="/BG_Home.png"
          alt="Background decoration"
          width={1206}
          height={1174}
          className="w-full h-auto"
        />
        <motion.div 
          className="absolute top-0 left-0 w-full p-4 pt-20"
          {...fadeInUp}
        >
          <div className="mt-8 mx-8">
            <h1 className="text-3xl font-bold text-gray-800">Hello!</h1>
            <p className="mt-1 text-gray-700 max-w-[250px]">
              We are here to meet your<br/>banking needs - for now, and<br/>beyond.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Quick Actions and Promotional Banner Card */}
      <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
        <Card className="mx-4 -mt-40 relative z-10 mb-4 bg-white shadow-md">
          <CardContent className="">
            {/* Quick Actions */}
            <div className="grid grid-cols-3 gap-4 mb-4 px-6 pt-6 text-center ">
              {[
                { icon: "PayNow", label: "PayNow" },
                { icon: <QrCode className="h-6 w-6" />, label: "Scan & Pay" },
                { icon: "ForeignExchange", label: "Foreign Exchange" }
              ].map((action, index) => (
                <motion.div 
                  key={action.label}
                  className="flex flex-col items-center gap-2 transition-all duration-300 clickable"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <div className="p-3 rounded-xl bg-gray-50 transition-all duration-300 clickable">
                    {typeof action.icon === "string" ? (
                      action.icon === "PayNow" ? (
                        <svg
                          className="h-6 w-6"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="h-6 w-6"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M4 6v12c0 1.1.9 2 2 2h14v-4"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )
                    ) : (
                      action.icon
                    )}
                  </div>
                  <span className="text-sm">{action.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Promotional Banner */}
            <motion.div
              className="flex items-center justify-between p-4 bg-pink-100 rounded-b-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center gap-2">
                <span role="img" aria-label="celebration">🎉</span>
                <span className="text-sm text-gray-600">
                  Add more joy to the festive seasons with our deals!
                </span>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>

      {/* White Background Section */}
      <div className="bg-white w-full">
      {/* Account Tabs */}
      <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
        <div className="w-full px-4 py-2">
          <div className="flex space-x-2 overflow-x-auto">
            {['accounts', 'cards', 'investments', 'loans'].map((buttonName) => (
              <motion.div key={buttonName} variants={buttonVariants} whileTap="tap">
                <Button
                  variant={activeButton === buttonName ? 'default' : 'ghost'}
                  className={`rounded-full transition-all duration-300 ${
                    activeButton === buttonName
                      ? 'bg-red-600 text-white hover:bg-red-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                  onClick={() => handleButtonClick(buttonName)}
                >
                  {buttonName.charAt(0).toUpperCase() + buttonName.slice(1)}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

        {/* Account Details */}
        <div className="p-4">
          <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
            <Card className="bg-gray-100 mb-4 highlight-glow">
              <CardContent className="p-4">
                <Link href="/home/bonusplusaccount" className="flex items-center gap-4 transition-all duration-300 clickable">
                  <div className="h-12 w-12 rounded-full bg-red-300 flex items-center justify-center font-bold tracking-wide text-lg">
                    B+
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold">BonusMax Account</h3>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </Link>

                <div className="space-y-4 mt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Available balance</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setShowBalance(!showBalance)}
                    >
                      {showBalance ? (
                        <Eye className="h-5 w-5" />
                      ) : (
                        <EyeOff className="h-5 w-5" />
                      )}
                      <span className="sr-only">
                        {showBalance ? "Hide" : "Show"} balance
                      </span>
                    </Button>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-semibold">
                      {showBalance ? "SGD $86'413.81" : "SGD $•••••••••"}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div {...fadeInUp} transition={{ delay: 0.5 }}>
            <Card className="bg-gray-100 mb-4">
              <CardContent className="p-4">
                <div className="flex items-center gap-4 transition-all duration-300 clickable">
                  <div className="h-12 w-12 rounded-full bg-[#F8E4D8] flex items-center justify-center text-lg">
                    FRA
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">FRANK Account</h3>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </div>

                <div className="space-y-4 mt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Available balance</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setShowBalance(!showBalance)}
                    >
                      {showBalance ? (
                        <Eye className="h-5 w-5" />
                      ) : (
                        <EyeOff className="h-5 w-5" />
                      )}
                      <span className="sr-only">
                        {showBalance ? "Hide" : "Show"} balance
                      </span>
                    </Button>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-semibold">
                      {showBalance ? "SGD $22'122.90" : "SGD $•••••••••"}
                    </span>
                  </div>
                  <div className="pt-2">
                    <span className="text-gray-600">Debit card no.</span>
                    <div className="text-gray-900">
                      {showBalance ? "•••• •••• •••• 1234" : "•••• •••• •••• ••••"}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Goals Section */}
        <motion.div 
          className="p-4 space-y-4"
          {...fadeInUp}
          transition={{ delay: 0.6 }}
        >
          <div className="bg-[#FFF5F5] p-4 rounded-xl">
            <span className="text-sm text-gray-600">SAVINGS GOAL</span>
            <h3 className="font-semibold mt-1">
              Stay on track and make your dreams a reality
            </h3>
          </div>
        </motion.div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  )
}