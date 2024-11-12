'use client'

import Link from "next/link"
import { Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { BottomNav } from "@/components/bottom-nav"
import Image from "next/image"
import { OcbcBonusCard } from "@/components/ocbc-bonus-card"
import { motion } from "framer-motion"

export default function Plan() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-16 pt-4">
      {/* Plan your finances section */}
      <motion.section 
        className="p-4 space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="flex justify-between items-center"
          {...fadeInUp}
        >
          <div>
            <h2 className="text-2xl font-semibold">Plan your finances</h2>
            <p className="text-sm text-muted-foreground">Manage, protect, build and grow your wealth.</p>
          </div>
          <div className="text-sm text-blue-600 hover:underline">
            Learn more
          </div>
        </motion.div>

        {/* Net Worth Card */}
        <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
          <Card className="p-3 border shadow text-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="font-bold uppercase tracking-wide">NET WORTH</CardTitle>
              <Button variant="ghost" size="icon">
                <Info className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2 mb-4">
                <Button variant="destructive" className="rounded-full transition-all duration-300 clickable">OCBC</Button>
                <Button variant="outline" className="rounded-full transition-all duration-300 clickable">Your Financial OneView</Button>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">What you have (SGD)</span>
                  <span className=" font-bold tracking-wide">$ 98'722.91</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">What you owe (SGD)</span>
                  <span className="font-bold tracking-wide">$ 12'309.10</span>
                </div>
              </div>
              <div className="text-blue-600 hover:underline text-sm block mt-4">
                How did we calculate this?
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* OCBC BonusMax Card */}
        <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
          <OcbcBonusCard />
        </motion.div>

        {/* Track and Invest Cards */}
        <div className="grid grid-cols-2 gap-4">
          {['TRACK', 'INVEST'].map((title, index) => (
            <motion.div 
              key={title}
              {...fadeInUp} 
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <Card className="pt-6 px-3 border shadow overflow-hidden relative transition-all duration-300 clickable">
                <CardHeader>
                  <CardTitle className="text-sm font-bold uppercase tracking-wide">{title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  {title === 'TRACK' ? (
                    <>
                      <p>Money in (SGD)</p>
                      <br/>
                      <p>Money out (SGD)</p>
                    </>
                  ) : (
                    <>
                      <p>Check out our products and insights</p>
                      <div className="text-blue-600 hover:underline block mt-2">
                        Start investing
                      </div>
                    </>
                  )}
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src={title === 'TRACK' ? "/moneybulb.png" : "/moneysprout.png"}
                      alt={title === 'TRACK' ? "Lightbulb with money, representing financial tracking" : "Money growing from a plant, representing investment growth"}
                      layout="fill"
                      objectFit="contain"
                      objectPosition="right bottom"
                      className={title === 'INVEST' ? "ml-8" : ""}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Goals and Insure Cards */}
        <div className="grid grid-cols-2 gap-4">
          {['GOALS', 'INSURE'].map((title, index) => (
            <motion.div 
              key={title}
              {...fadeInUp} 
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              <Card className="px-3 pt-6 border shadow overflow-hidden relative transition-all duration-300 clickable">
                <CardHeader>
                  <CardTitle className="text-sm font-bold uppercase tracking-wide">{title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  {title === 'GOALS' ? (
                    <>
                      <p>Save regularly for your needs and wants</p>
                      <div className="text-blue-600 hover:underline block mt-2">
                        Create new goal
                      </div>
                    </>
                  ) : (
                    <p>Find policies to fill the gaps in your insurance</p>
                  )}
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src={title === 'GOALS' ? "/savings.png" : "/rainumbrella.png"}
                      alt={title === 'GOALS' ? "Piggy bank and coins, representing savings goals" : "Umbrella protecting from rain, representing insurance coverage"}
                      layout="fill"
                      objectFit="contain"
                      objectPosition="right bottom"
                      className={title === 'INSURE' ? "ml-2 my-6" : ""}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Financial Summary Section */}
      <motion.section 
        className="p-4 space-y-4 text-sm"
        {...fadeInUp}
        transition={{ delay: 0.8 }}
      >
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-semibold">Your financial summary</h2>
            <p className="text-muted-foreground">Take control of your financial health.</p>
          </div>
        </div>

        <ScrollArea className="w-full">
          <div className="flex w-full gap-4 pb-2">
            {['Income Saved', 'Investment Portfolio', 'Retirement Planning'].map((title, index) => (
              <motion.div 
                key={title}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card className="w-[300px] flex-none border shadow overflow-hidden transition-all duration-300 clickable">
                  <div className="p-4 ">
                    <CardHeader className="p-0 mb-2">
                      <CardTitle className="text-sm font-bold text-muted-foreground uppercase tracking-wide">{title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 space-y-2">
                      <h3 className="text-lg font-semibold">
                        {title === 'Income Saved' ? 'You spent more than your income last month' :
                         title === 'Investment Portfolio' ? 'Your portfolio needs diversification' :
                         'Start planning for retirement early'}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {title === 'Income Saved' ? 'We recommend that you save at least 10% of your monthly income, after CPF contributions.' :
                         title === 'Investment Portfolio' ? 'Consider spreading your investments across different asset classes to reduce risk.' :
                         'The power of compound interest works best over long periods. Start your retirement planning now.'}
                      </p>
                      <div className="text-blue-600 hover:underline text-sm block">
                        {title === 'Income Saved' ? 'See how you can save more' :
                         title === 'Investment Portfolio' ? 'Learn about diversification' :
                         'Begin retirement planning'}
                      </div>
                    </CardContent>
                  </div>
                  <div className="h-[150px] relative overflow-hidden">
                    <Image
                      src="/handpursesavings.png"
                      alt={`Hand holding a purse, representing ${title.toLowerCase()}`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </motion.section>

      {/* Wealth Insights Section */}
      <motion.section 
        className="p-4 space-y-4 mb-4 text-sm"
        {...fadeInUp}
        transition={{ delay: 1 }}
      >
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-semibold">Wealth Insights</h2>
            <p className="text-muted-foreground">Discover wealth-related articles that we have curated exclusively for you.</p>
          </div>
          <Link href="" className="text-blue-600 hover:underline">
            See all
          </Link>
        </div>

        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex w-full gap-4">
            {[
              { date: '28 OCT 2024', title: 'Essential Investment Strategies for Beginners' },
              { date: '29 OCT 2024', title: 'Understanding Current Market Trends' },
              { date: '30 OCT 2024', title: 'Smart Retirement Planning Tips' },
              { date: '31 OCT 2024', title: 'Maximizing Your Savings Potential' },
              { date: '01 NOV 2024', title: 'The Basics of Asset Allocation' },
              { date: '02 NOV 2024', title: 'Understanding Risk Tolerance in Investing' },
              { date: '03 NOV 2024', title: 'Tax-Efficient Investing Strategies' },
              { date: '04 NOV 2024', title: 'The Power of Compound Interest' },
            ].map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card className="w-[300px] flex-none border overflow-hidden transition-all duration-300 clickable">
                  <CardContent className="p-0">
                    <Image
                      src='/rainyday.png'
                      alt='Wealth insight'
                      width='300'
                      height='40'
                      objectFit="cover"
                      className="w-full h-40 object-cover object-center"
                    />
                    <div className="p-4">
                      <p className="text-sm text-muted-foreground">{article.date}</p>
                      <h3 className="font-semibold mt-2">{article.title}</h3>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </motion.section>
      <BottomNav/>
    </div>
  )
}