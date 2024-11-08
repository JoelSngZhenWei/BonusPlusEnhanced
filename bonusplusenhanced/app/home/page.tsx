"use client"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Eye, EyeOff, QrCode} from "lucide-react"
// import {Bell, Expand} from 'lucide-react'
// import Settings from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import { BottomNav } from "@/components/bottom-nav"
import { QrCodeScannerIcon,NotificationIcon,LogoutButton  } from "@/components/icon-buttons"

export default function Component() {
  const [showBalance, setShowBalance] = useState(true)

  return (
    <div className="min-h-screen bg-ocbc-white pb-16">
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent p-2">
        <div className="">
          <div className="flex justify-between items-center">
            <QrCodeScannerIcon isDark={true} />
            <div className="flex items-center gap-4">
              <NotificationIcon isDark={true} />
              <LogoutButton isDark={false} />
            </div>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <div className="relative">
        <Image
          src="/BG_Home.png"
          alt="Background decoration"
          width={1206}
          height={1174}
          className="w-full h-auto"
        />
        <div className="absolute top-0 left-0 w-full p-4 pt-20">
          <div className="mt-8 mx-8">
            <h1 className="text-3xl font-bold text-gray-800">Hello!</h1>
            <p className="mt-1 text-gray-700 max-w-[250px]">
              We are here to meet your<br/>banking needs - for now, and<br/>beyond.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Actions and Promotional Banner Card */}
      <Card className="mx-4 -mt-40 relative z-10 mb-4 bg-white shadow-md">
        <CardContent className="">
          {/* Quick Actions */}
          <div className="grid grid-cols-3 gap-4 mb-4 px-6 pt-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 rounded-xl bg-gray-50">
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
              </div>
              <span className="text-sm">PayNow</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 rounded-xl bg-gray-50">
                <QrCode className="h-6 w-6" />
              </div>
              <span className="text-sm">Scan & Pay</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 rounded-xl bg-gray-50">
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
              </div>
              <span className="text-sm">Foreign Exchange</span>
            </div>
          </div>

          {/* Promotional Banner */}
          <div
            className="flex items-center justify-between p-4 bg-pink-100 rounded-b-xl"
          >
            <div className="flex items-center gap-2">
              <span role="img" aria-label="celebration">🎉</span>
              <span className="text-sm text-gray-600">
                Add more joy to the festive seasons with our deals!
              </span>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </div>
        </CardContent>
      </Card>

      {/* White Background Section */}
      <div className="bg-white w-full">
        {/* Account Tabs */}
        <Tabs defaultValue="accounts" className="w-full">
          <TabsList className="w-full justify-start px-4 h-12 bg-transparent">
            <TabsTrigger
              value="accounts"
              className="data-[state=active]:bg-red-600 data-[state=active]:text-white rounded-full"
            >
              Accounts
            </TabsTrigger>
            <TabsTrigger value="cards">Cards</TabsTrigger>
            <TabsTrigger value="investments">Investments</TabsTrigger>
            <TabsTrigger value="loans">Loans</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Account Details */}
        <div className="p-4">
        <Card className="bg-gray-100 mb-4">
            <CardContent className="p-4">
              <Link href="/home/bonusplusaccount" className="flex items-center gap-4">
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
          <Card className="bg-gray-100 mb-4">
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
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
        </div>

        {/* Goals Section */}
        <div className="p-4 space-y-4">
          <div className="bg-[#FFF5F5] p-4 rounded-xl">
            <span className="text-sm text-gray-600">SAVINGS GOAL</span>
            <h3 className="font-semibold mt-1">
              Stay on track and make your dreams a reality
            </h3>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  )
}