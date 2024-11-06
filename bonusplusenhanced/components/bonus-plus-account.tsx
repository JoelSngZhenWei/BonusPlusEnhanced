"use client"

import { Eye, EyeOff, Wallet, Target, Gift, TrendingUp, ArrowUpRight, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Link from "next/link"
import { useState } from "react"
import { ArrowLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons"

export function BonusPlusAccount() {
  const [showBalance, setShowBalance] = useState(true)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-red-600 text-white p-4">
        <div className="flex items-center gap-4 mb-6">
          <Link href="/home">
            <ArrowLeftIcon className="h-6 w-6" />
          </Link>
          <h1 className="text-xl font-semibold">Bonus+ Account</h1>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm opacity-90">Available balance (SGD)</span>
            <Button
              variant="ghost"
              size="icon"
              className="text-white"
              onClick={() => setShowBalance(!showBalance)}
            >
              {showBalance ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
            </Button>
          </div>
          <div className="text-3xl font-bold">
            {showBalance ? "$86,413.81" : "$•••••••••"}
          </div>
          <div className="flex justify-between text-sm">
            <span>Current Interest Rate</span>
            <span className="font-semibold">3.5% p.a.</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Points Earned</span>
            <span className="font-semibold">2,450 pts</span>
          </div>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <div className="flex items-center gap-2 mt-4 cursor-pointer">
              <Info className="w-5 h-5" />
              <span className="text-sm">How does Bonus+ Work?</span>
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>How Bonus+ Works</DialogTitle>
              <DialogDescription>
                Bonus+ is designed to help you save more and earn more. Here&apos;s how it works:
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <ul className="list-disc pl-4 space-y-2">
                <li>Higher interest rates for consistent savings</li>
                <li>Bonus points for reaching savings milestones</li>
                <li>Special rewards for big ticket purchases</li>
                <li>Flexible withdrawals without losing benefits</li>
                <li>Personalized savings goals and tracking</li>
              </ul>
            </div>
          </DialogContent>
        </Dialog>
      </header>

      {/* Main Content */}
      <main className="p-4 space-y-4">
        {/* Quick Actions */}
        <Card className="">
          <CardContent className="p-2 px-4 space-y-2">
            <Button className="w-full bg-red-600 text-white rounded-full hover:bg-red-700">
              Make a Big Ticket Purchase
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <p className="text-sm text-gray-500 text-center cursor-pointer hover:underline">
                  What counts as a big ticket purchase?
                </p>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Big Ticket Purchases</DialogTitle>
                  <DialogDescription>
                    Big ticket purchases are significant expenses that qualify for special rewards in your Bonus+ account.
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <p className="mb-2">Examples of big ticket purchases include:</p>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Home down payment</li>
                    <li>Wedding expenses</li>
                    <li>Car purchase</li>
                    <li>Major home renovations</li>
                    <li>High-end electronics or appliances</li>
                  </ul>
                  <p className="mt-4">Purchases typically need to be $5,000 or more to qualify.</p>
                </div>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

        {/* Savings Goals */}
        <section>
          <Card className="p-3 border shadow">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Your Savings Goals</CardTitle>
            </CardHeader>
            <CardContent className="p-4 space-y-4">
              {[
                { name: "House Down Payment", current: 45000, target: 60000 },
                { name: "Wedding Fund", current: 15000, target: 30000 },
                { name: "Car Purchase", current: 8000, target: 20000 }
              ].map((goal, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">{goal.name}</h3>
                    <span className="text-sm text-gray-600">
                      ${goal.current.toLocaleString()} / ${goal.target.toLocaleString()}
                    </span>
                  </div>
                  <Progress value={(goal.current / goal.target) * 100} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        {/* Recent Transactions */}
        <section>
          <Card className="border shadow p-3">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Recent Transactions</CardTitle>
            </CardHeader>
            <ScrollArea className="h-[300px]">
              <CardContent className="p-4 space-y-4">
                {[
                  { date: "22 Nov", desc: "Salary Credit", amount: 5000, type: "credit" },
                  { date: "20 Nov", desc: "Interest Earned", amount: 12.50, type: "credit" },
                  { date: "18 Nov", desc: "Points Redemption", amount: -500, type: "debit" },
                  { date: "15 Nov", desc: "Cashback Reward", amount: 25, type: "credit" }
                ].map((transaction, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b last:border-0">
                    <div>
                      <div className="text-sm text-gray-600">{transaction.date}</div>
                      <div className="font-medium">{transaction.desc}</div>
                    </div>
                    <div className={`font-semibold ${transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'}`}>
                      {transaction.type === 'credit' ? '+' : '-'}${Math.abs(transaction.amount).toLocaleString()}
                    </div>
                  </div>
                ))}
              </CardContent>
            </ScrollArea>
          </Card>
        </section>

        {/* Account Insights */}
        <section>
          <h2 className="text-lg font-semibold mb-4">Account Insights</h2>
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex flex-col items-center text-center">
                  <Wallet className="h-8 w-8 text-red-600 mb-2" />
                  <span className="text-sm text-gray-600">Monthly Average</span>
                  <span className="font-semibold">$10,234.56</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex flex-col items-center text-center">
                  <TrendingUp className="h-8 w-8 text-red-600 mb-2" />
                  <span className="text-sm text-gray-600">Growth Rate</span>
                  <span className="font-semibold">+15.2%</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Upcoming Benefits */}
        <section>
          <h2 className="text-lg font-semibold mb-4">Upcoming Benefits</h2>
          <Card>
            <CardContent className="p-4 space-y-4">
              <div className="flex items-center gap-4">
                <Gift className="h-6 w-6 text-red-600" />
                <div className="flex-1">
                  <h3 className="font-medium">Special Reward Coming Soon</h3>
                  <p className="text-sm text-gray-600">Make a big ticket purchase to unlock 5x points</p>
                </div>
                <ChevronRightIcon className="h-5 w-5 text-gray-400" />
              </div>
              <div className="flex items-center gap-4">
                <Target className="h-6 w-6 text-red-600" />
                <div className="flex-1">
                  <h3 className="font-medium">Goal Milestone Reward</h3>
                  <p className="text-sm text-gray-600">$50 bonus when you reach your next savings goal</p>
                </div>
                <ChevronRightIcon className="h-5 w-5 text-gray-400" />
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}