"use client"

import { Eye, EyeOff, Wallet, Target, Gift, TrendingUp, ArrowUpRight, Info, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ArrowLeft } from "lucide-react"
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
import { ChevronRightIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
import { motion, AnimatePresence } from "framer-motion"


export function BonusPlusAccount() {
  const [showBalance, setShowBalance] = useState(true)
  const [transactionFilter, setTransactionFilter] = useState("all")
  const [yearFilter, setYearFilter] = useState("all")

  const transactions = [
    { date: "2024-10-25", desc: "Salary Credit", amount: 550, type: "credit", from: "7UPZ INTERNATIONAL PTE LTD", to: "BonusMax Account", status: "approved" },
    { date: "2024-10-02", desc: "Car Downpayment", amount: 42000, type: "debit", from: "BonusMax Account", to: "TESLA MOTORS", vendor: "Tesla Motors", model: "Model X", remarks: "Initial downpayment for new car", status: "pending" },
    { date: "2024-09-25", desc: "Salary Credit", amount: 550, type: "credit", from: "7UPZ INTERNATIONAL PTE LTD", to: "BonusMax Account", status: "approved" },
    { date: "2024-08-25", desc: "Salary Credit", amount: 550, type: "credit", from: "7UPZ INTERNATIONAL PTE LTD ", to: "BonusMax Account", status: "approved" },
    { date: "2024-07-25", desc: "Salary Credit", amount: 550, type: "credit", from: "7UPZ INTERNATIONAL PTE LTD ", to: "BonusMax Account", status: "approved" },
    { date: "2024-06-25", desc: "Salary Credit", amount: 550, type: "credit", from: "7UPZ INTERNATIONAL PTE LTD ", to: "BonusMax Account", status: "approved" },
    { date: "2024-05-25", desc: "Salary Credit", amount: 550, type: "credit", from: "7UPZ INTERNATIONAL PTE LTD ", to: "BonusMax Account", status: "approved" },
    { date: "2024-05-10", desc: "Cashback - Wedding Expense", amount: 120, type: "credit", from: "BonusMax Cashback", to: "BonusMax Account", status: "approved" },
    { date: "2024-05-10", desc: "Wedding Expense", amount: 8000, type: "debit", from: "BonusMax Account", to: "ARTIZ STUDIO", vendor: "Artiz Studio", remarks: "Marriage photoshoot, booking of services for wedding", status: "approved" },
    { date: "2024-04-25", desc: "Salary Credit", amount: 550, type: "credit", from: "7UPZ INTERNATIONAL PTE LTD ", to: "BonusMax Account", status: "approved" },
    { date: "2024-03-25", desc: "Salary Credit", amount: 550, type: "credit", from: "7UPZ INTERNATIONAL PTE LTD ", to: "BonusMax Account", status: "approved" },
    { date: "2024-02-25", desc: "Salary Credit", amount: 550, type: "credit", from: "7UPZ INTERNATIONAL PTE LTD ", to: "BonusMax Account", status: "approved" },
    { date: "2024-02-10", desc: "Wedding Expense - Cashback", amount: 150, type: "credit", from: "BonusMax Cashback", to: "BonusMax Account", status: "approved" },
    { date: "2024-02-10", desc: "Wedding Expense", amount: 10000, type: "debit", from: "BonusMax Account", to: "ELEGANT WEDDINGS", vendor: "Elegant Weddings", remarks: "Venue booking deposit", status: "approved" },
    { date: "2024-01-25", desc: "Salary Credit", amount: 550, type: "credit", from: "7UPZ INTERNATIONAL PTE LTD ", to: "BonusMax Account", status: "approved" },
    { date: "2023-12-25", desc: "Salary Credit", amount: 550, type: "credit", from: "7UPZ INTERNATIONAL PTE LTD ", to: "BonusMax Account", status: "approved" },
    { date: "2023-11-25", desc: "Salary Credit", amount: 550, type: "credit", from: "7UPZ INTERNATIONAL PTE LTD ", to: "BonusMax Account", status: "approved" },
  ]

  const years = [...new Set(transactions.map(t => new Date(t.date).getFullYear()))].sort((a, b) => b - a)

  const filteredTransactions = useMemo(() => {
    return transactions.filter(t => {
      const transactionYear = new Date(t.date).getFullYear().toString()
      return (transactionFilter === "all" || t.type === transactionFilter) &&
             (yearFilter === "all" || transactionYear === yearFilter)
    })
  }, [transactionFilter, yearFilter])
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <motion.header 
      className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 shadow-lg"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center justify-between mb-8">
        <Link href="/home">
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
            <ArrowLeft className="h-6 w-6" />
          </Button>
        </Link>
        <h1 className="text-2xl font-black">BonusMax Account</h1>
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/20"
          onClick={() => setShowBalance(!showBalance)}
        >
          {showBalance ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
        </Button>
      </div>
      
      <motion.div 
        className="space-y-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <div>
          <span className="text-sm opacity-80">Available balance</span>
          <div className="flex items-baseline mt-1 font-extrabold">
            <span className="text-xl mr-1">SGD</span>
            {showBalance ? (
              <>
                <span className="text-5xl">86,413</span>
                <span className="text-xl">.81</span>
              </>
            ) : (
              <span className="text-4xl font-bold">•••••••••</span>
            )}
          </div>
        </div>
        
        <div className="flex justify-between items-center bg-white/10 rounded-xl p-3">
          <div>
            <span className="text-sm opacity-80">Current Interest Rate</span>
            <p className="text-xl font-semibold mt-1">2.8% p.a.</p>
          </div>
          <div className="text-right">
            <span className="text-sm opacity-80">OCBC$ Earned</span>
            <p className="text-xl font-semibold mt-1">OCBC$4,800</p>
          </div>
        </div>

          {/* New Cashback Pot Section */}
          <div className="bg-white/10 rounded-xl p-3">
            <span className="text-sm opacity-80">Cashback Earned</span>
            <div className="flex items-baseline mt-1 font-extrabold">
              <span className="text-lg mr-1">SGD</span>
              {showBalance ? (
                <>
                  <span className="text-3xl">1,230</span>
                  <span className="text-lg">.00</span>
                </>
              ) : (
                <span className="text-3xl font-bold">•••••••</span>
              )}
            </div>
            <p className="text-xs mt-1">
              Earn 1.5% cashback on big ticket purchases.
            </p>
          </div>
      </motion.div>

      
      
      <Dialog>
        <DialogTrigger asChild>
          <motion.div 
            className="flex items-center gap-2 mt-4 cursor-pointer hover:bg-white/20 p-2 rounded-lg transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Info className="w-5 h-5" />
            <span className="text-sm font-medium">How does BonusMax Work?</span>
          </motion.div>
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
    </motion.header>

      {/* Main Content */}
      <main className="p-4 space-y-4">
        {/* Quick Actions */}
        <motion.div {...fadeInUp}>
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
        </motion.div>

        {/* Recent Transactions */}
        <motion.section {...fadeInUp} transition={{ delay: 0.2 }}>
          <Card className="border shadow p-3 px-6">
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
                  <div className="flex items-center space-x-1">
                    <RadioGroupItem value="all" id="all" />
                    <Label htmlFor="all">All</Label>
                  </div>
                  <div className="flex items-center space-x-1">
                    <RadioGroupItem value="credit" id="credit" />
                    <Label htmlFor="credit">Credit</Label>
                  </div>
                  <div className="flex items-center space-x-1">
                    <RadioGroupItem value="debit" id="debit" />
                    <Label htmlFor="debit">Debit</Label>
                  </div>
                </RadioGroup>
                <Select onValueChange={setYearFilter} defaultValue="all">
                  <SelectTrigger className="w-[100px]">
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
                <AnimatePresence>
                  {filteredTransactions.map((transaction, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <Dialog>
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
                                <span className="text-xs text-gray-500 mr-1">SGD</span>
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
                    </motion.div>
                  ))}
                </AnimatePresence>
              </ScrollArea>
            </CardContent>
          </Card>
        </motion.section>

        {/* Savings Goals */}
        <motion.section {...fadeInUp} transition={{ delay: 0.3 }}>
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
                <motion.div 
                  key={index} 
                  className="space-y-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">{goal.name}</h3>
                    <span className="text-sm text-gray-600">
                      ${goal.current.toLocaleString()} / ${goal.target.toLocaleString()}
                    </span>
                  </div>
                  <Progress value={(goal.current / goal.target) * 100} className="h-2" />
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.section>

        {/* Account Insights */}
        <motion.section {...fadeInUp} transition={{ delay: 0.4 }}>
          <h2 className="text-lg font-semibold mb-4">Account Insights</h2>
          <div className="grid grid-cols-2 gap-4">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
              <Card>
                <CardContent className="p-4">
                  <div className="flex flex-col items-center text-center">
                    <Wallet className="h-8 w-8 text-red-600 mb-2" />
                    <span className="text-sm text-gray-600">Monthly Average</span>
                    <span className="font-semibold">$10,234.56</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <Card>
                <CardContent className="p-4">
                  <div className="flex flex-col items-center text-center">
                    <TrendingUp className="h-8 w-8 text-red-600 mb-2" />
                    <span className="text-sm text-gray-600">Growth Rate</span>
                    <span className="font-semibold">+15.2%</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        {/* Upcoming Benefits */}
        <motion.section {...fadeInUp} transition={{ delay: 0.5 }}>
          <h2 className="text-lg font-semibold mb-4">Upcoming Benefits</h2>
          <Card>
            <CardContent className="p-4 space-y-4">
              <motion.div 
                className="flex items-center gap-4 transition-all duration-300 clickable"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Gift className="h-6 w-6 text-red-600" />
                <div className="flex-1 ">
                  <h3 className="font-medium">Special Reward Coming Soon</h3>
                  <p className="text-sm text-gray-600">Make a big ticket purchase to unlock 5x points</p>
                </div>
                <ChevronRightIcon className="h-5 w-5 text-gray-400" />
              </motion.div>
              <motion.div 
                className="flex items-center gap-4 transition-all duration-300 clickable "
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Target className="h-6 w-6 text-red-600" />
                <div className="flex-1">
                  <h3 className="font-medium">Goal Milestone Reward</h3>
                  <p className="text-sm text-gray-600">You have an upcoming milestone reward on <span className=""></span></p>
                </div>
                <ChevronRightIcon className="h-5 w-5 text-gray-400" />
              </motion.div>
            </CardContent>
          </Card>
        </motion.section>
      </main>
    </div>
  )
}