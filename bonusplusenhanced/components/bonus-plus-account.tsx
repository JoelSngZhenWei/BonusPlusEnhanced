"use client"

import { Eye, EyeOff, Wallet, Target, Gift, TrendingUp, ArrowUpRight, Info, Clock } from "lucide-react"
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Link from "next/link"
import { useState, useMemo } from "react"
import { ArrowLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"

export function BonusPlusAccount() {
  const [showBalance, setShowBalance] = useState(true)
  const [transactionFilter, setTransactionFilter] = useState("all")
  const [yearFilter, setYearFilter] = useState("all")

  const transactions = [
    { date: "2024-10-25", desc: "Salary Credit", amount: 550, type: "credit", from: "7UPZ INTERNATIONAL PTE LTD OTHR", to: "BonusMax Account", status: "approved" },
    { date: "2024-10-02", desc: "Car Downpayment", amount: 42000, type: "debit", from: "BonusMax Account", to: "TESLA MOTORS", vendor: "Tesla Motors", model: "Model X", remarks: "Initial downpayment for new car", status: "pending" },
    { date: "2024-09-25", desc: "Salary Credit", amount: 550, type: "credit", from: "7UPZ INTERNATIONAL PTE LTD OTHR", to: "BonusMax Account", status: "approved" },
    { date: "2024-08-25", desc: "Salary Credit", amount: 550, type: "credit", from: "7UPZ INTERNATIONAL PTE LTD OTHR", to: "BonusMax Account", status: "approved" },
    { date: "2024-07-25", desc: "Salary Credit", amount: 550, type: "credit", from: "7UPZ INTERNATIONAL PTE LTD OTHR", to: "BonusMax Account", status: "approved" },
    { date: "2024-06-25", desc: "Salary Credit", amount: 550, type: "credit", from: "7UPZ INTERNATIONAL PTE LTD OTHR", to: "BonusMax Account", status: "approved" },
    { date: "2024-05-25", desc: "Salary Credit", amount: 550, type: "credit", from: "7UPZ INTERNATIONAL PTE LTD OTHR", to: "BonusMax Account", status: "approved" },
    { date: "2024-05-10", desc: "Wedding Expense", amount: 10000, type: "debit", from: "BonusMax Account", to: "ARTIZ STUDIO", vendor: "Artiz Studio", remarks: "Marriage photoshoot, booking of services for wedding", status: "approved" },
    { date: "2024-04-25", desc: "Salary Credit", amount: 550, type: "credit", from: "7UPZ INTERNATIONAL PTE LTD OTHR", to: "BonusMax Account", status: "approved" },
    { date: "2024-03-25", desc: "Salary Credit", amount: 550, type: "credit", from: "7UPZ INTERNATIONAL PTE LTD OTHR", to: "BonusMax Account", status: "approved" },
    { date: "2024-02-25", desc: "Salary Credit", amount: 550, type: "credit", from: "7UPZ INTERNATIONAL PTE LTD OTHR", to: "BonusMax Account", status: "approved" },
    { date: "2024-02-10", desc: "Wedding Expense", amount: 10000, type: "debit", from: "BonusMax Account", to: "ELEGANT WEDDINGS", vendor: "Elegant Weddings", remarks: "Venue booking deposit", status: "approved" },
    { date: "2024-01-25", desc: "Salary Credit", amount: 550, type: "credit", from: "7UPZ INTERNATIONAL PTE LTD OTHR", to: "BonusMax Account", status: "approved" },
    { date: "2023-12-25", desc: "Salary Credit", amount: 550, type: "credit", from: "7UPZ INTERNATIONAL PTE LTD OTHR", to: "BonusMax Account", status: "approved" },
    { date: "2023-11-25", desc: "Salary Credit", amount: 550, type: "credit", from: "7UPZ INTERNATIONAL PTE LTD OTHR", to: "BonusMax Account", status: "approved" },
  ]

  const years = [...new Set(transactions.map(t => new Date(t.date).getFullYear()))].sort((a, b) => b - a)

  const filteredTransactions = useMemo(() => {
    return transactions.filter(t => {
      const transactionYear = new Date(t.date).getFullYear().toString()
      return (transactionFilter === "all" || t.type === transactionFilter) &&
             (yearFilter === "all" || transactionYear === yearFilter)
    })
  }, [transactionFilter, yearFilter])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-red-600 text-white p-4">
        <div className="flex items-center gap-4 mb-6">
          <Link href="/home">
            <ArrowLeftIcon className="h-6 w-6" />
          </Link>
          <h1 className="text-xl font-semibold">BonusMax Account</h1>
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
            <span className="font-semibold">2.8% p.a.</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>OCBC$ Earned</span>
            <span className="font-semibold">OCBC$880</span>
          </div>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <div className="flex items-center gap-2 mt-4 cursor-pointer">
              <Info className="w-5 h-5" />
              <span className="text-sm">How does BonusMax Work?</span>
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>How BonusMax Works</DialogTitle>
              <DialogDescription>
                BonusMax is designed to help you save more and earn more. Here&apos;s how it works:
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
            <Link href="/btpurchase">
              <Button className="w-full bg-red-600 text-white rounded-full hover:bg-red-700">
                Make a Big Ticket Purchase
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
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
                    Big ticket purchases are significant expenses that qualify for special rewards in your BonusMax account.
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <p className="mb-2">Examples of big ticket purchases include:</p>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Home down payment</li>
                    <li>Wedding expenses</li>
                    <li>Car purchase</li>
                    <li>Major home renovations</li>
                  </ul>
                </div>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

        {/* Recent Transactions */}
        <section>
          <Card className="border shadow p-3">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Recent Transactions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <RadioGroup
                  defaultValue="all"
                  onValueChange={setTransactionFilter}
                  className="flex space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="all" id="all" />
                    <Label htmlFor="all">All</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="credit" id="credit" />
                    <Label htmlFor="credit">Credit</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="debit" id="debit" />
                    <Label htmlFor="debit">Debit</Label>
                  </div>
                </RadioGroup>
                <Select onValueChange={setYearFilter} defaultValue="all">
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Select Year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Years</SelectItem>
                    {years.map(year => (
                      <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <ScrollArea className="h-[300px]">
                <div className="space-y-4">
                  {filteredTransactions.map((transaction, index) => (
                    <Dialog key={index}>
                      <DialogTrigger asChild>
                        <div className="flex justify-between items-center py-2 border-b last:border-0 cursor-pointer hover:bg-gray-50">
                          <div>
                            <div className="text-sm text-gray-600">{format(new Date(transaction.date), "dd MMM yyyy")}</div>
                            <div className="font-medium">{transaction.desc}</div>
                            <div className="text-xs text-gray-500">
                              {transaction.type === 'credit' ? `From: ${transaction.from}` : `To: ${transaction.to}`}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className={`font-bold ${transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'} flex items-baseline`}>

                              <span 
                              className="text-xs text-gray-500 mr-1">

                                SGD
                              </span>
                              <span className="text-xl">{Math.abs(transaction.amount).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</span>
                              <span className="text-xs">.{(Math.abs(transaction.amount) % 1).toFixed(2).slice(2)}</span>
                            </div>
                            {transaction.status === 'pending' && (
                              <Badge variant="outline" className="mt-1">
                                <Clock className="w-3 h-3 mr-1" />
                                Pending
                              </Badge>
                            )}
                          </div>
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-[400px] rounded-lg">
                        <DialogHeader>
                          <DialogTitle></DialogTitle>
                          <DialogDescription></DialogDescription>
                        </DialogHeader>
                        <div className="text-center mb-4">
                          <div className="flex items-baseline justify-center">
                            <span className="text-xl text-gray-500 mr-1 font-bold">SGD</span>
                            <span className="text-3xl font-black">
                              {Math.abs(transaction.amount).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                            </span>
                            <span className="text-xl">
                              .{(Math.abs(transaction.amount) % 1).toFixed(2).slice(2)}
                            </span>
                          </div>
                          <div className="text-xs text-gray-500 mt-1">
                            {format(new Date(transaction.date), "PPP")}
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <div className="text-sm font-bold text-gray-500">Description</div>
                            <div className="text-base">{transaction.desc}</div>
                          </div>
                          <div>
                            <div className="text-sm font-bold text-gray-500">{transaction.type === 'credit' ? 'From' : 'To'}</div>
                            <div className="text-base">{transaction.type === 'credit' ? transaction.from : transaction.to}</div>
                          </div>
                          {transaction.type === 'debit' && (
                            <>
                              <div>
                                <div className="text-sm font-bold text-gray-500">Vendor</div>
                                <div className="text-base">{transaction.vendor}</div>
                              </div>
                              {transaction.model && (
                                <div>
                                  <div className="text-sm font-bold text-gray-500">Model</div>
                                  <div className="text-base">{transaction.model}</div>
                                </div>
                              )}
                              <div>
                                <div className="text-sm font-bold text-gray-500">Remarks</div>
                                <div className="text-base">{transaction.remarks}</div>
                              </div>
                            </>
                          )}
                        </div>
                      </DialogContent>
                    </Dialog>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </section>

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
              <div className="flex items-center gap-4 transition-all duration-300 clickable">
                <Gift className="h-6 w-6 text-red-600" />
                <div className="flex-1 ">
                  <h3 className="font-medium">Special Reward Coming Soon</h3>
                  <p className="text-sm text-gray-600">Make a big ticket purchase to unlock 5x points</p>
                </div>
                <ChevronRightIcon className="h-5 w-5 text-gray-400" />
              </div>
              <div className="flex items-center gap-4 transition-all duration-300 clickable">
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