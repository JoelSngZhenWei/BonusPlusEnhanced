'use client'

import Link from "next/link"
import { Info } from "lucide-react"
// import { ChevronRight, Plant } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Toggle } from "@/components/ui/toggle"
// import { Toggle } from "@radix-ui/react-toggle"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { BottomNav } from "@/components/bottom-nav"
import Image from "next/image"

export default function Plan() {
  return (
    <div className="min-h-screen bg-gray-50 pb-16 pt-6">
      {/* Plan your finances section */}
      <section className="p-4 space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-semibold">Plan your finances</h2>
            <p className="text-muted-foreground">Manage, protect, build and grow your wealth.</p>
          </div>
          <Link href="/learn-more" className="text-blue-600 hover:underline">
            Learn more
          </Link>
        </div>

        {/* Net Worth Card */}
        <Card className="p-6 border  shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-medium">NET WORTH</CardTitle>
            <Button variant="ghost" size="icon">
              <Info className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2 mb-4">
              <Button variant="destructive" className="rounded-full">OCBC</Button>
              <Button variant="outline" className="rounded-full">Your Financial OneView</Button>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">What you have (SGD)</span>
                <span>0.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">What you owe (SGD)</span>
                <span>0.00</span>
              </div>
            </div>
            <Link href="/calculate" className="text-blue-600 hover:underline text-sm block mt-4">
              How did we calculate this?
            </Link>
          </CardContent>
        </Card>

        {/* Track and Invest Cards */}
        <div className="grid grid-cols-2 gap-4">
        <Card className="pt-6 px-6 border shadow overflow-hidden relative">
          <CardHeader>
            <CardTitle className="text-base font-medium">TRACK</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p>Money in (SGD)</p>
            <p>Money out (SGD)</p>
            <div className="relative h-40 mt-4">
              <Image
                src="/moneybulb.png"
                alt="Lightbulb with money, representing financial tracking"
                width={3840}
                height={2160}
                className="absolute bottom-[-20%] right-[-10%] w-[60%] h-auto object-contain"
              />
            </div>
          </CardContent>
        </Card>
        <Card className="p-6 border shadow overflow-hidden relative">
          <CardHeader>
            <CardTitle className="text-base font-medium">INVEST</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p>Check out our products and insights</p>
            <Link href="/invest" className="text-blue-600 hover:underline block mt-2">
              Start investing
            </Link>
            <div className="relative h-40 mt-4">
              <Image
                src="/moneysprout.png"
                alt="Money growing from a plant, representing investment growth"
                width={1920}
                height={1080}
                className="absolute bottom-[-10%] right-[-5%] w-[70%] h-auto object-contain"
              />
            </div>
          </CardContent>
        </Card>
        </div>

        {/* Goals and Insure Cards */}
        <div className="grid grid-cols-2 gap-4">
        <Card className="p-6 border shadow overflow-hidden relative">
          <CardHeader>
            <CardTitle className="text-base font-medium">GOALS</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p>Save regularly for your needs and wants</p>
            <Link href="/goals" className="text-blue-600 hover:underline block mt-2">
              Create new goal
            </Link>
            <div className="relative h-40 mt-4">
              <Image
                src="/savings.png"
                alt="Piggy bank and coins, representing savings goals"
                width={1920}
                height={1080}
                className="absolute bottom-[-10%] right-[-5%] w-[70%] h-auto object-contain"
              />
            </div>
          </CardContent>
        </Card>
        <Card className="p-6 border shadow overflow-hidden relative">
          <CardHeader>
            <CardTitle className="text-base font-medium">INSURE</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p>Find policies to fill the gaps in your insurance</p>
            <div className="relative h-40 mt-4">
              <Image
                src="/rainumbrella.png"
                alt="Umbrella protecting from rain, representing insurance coverage"
                width={3840}
                height={2160}
                className="absolute bottom-[-20%] right-[-10%] w-[60%] h-auto object-contain"
              />
            </div>
          </CardContent>
        </Card>
        </div>
      </section>

      {/* Financial Summary Section */}
      <section className="p-4 space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold">Your financial summary</h2>
          <p className="text-muted-foreground">Take control of your financial health.</p>
        </div>
      </div>

      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex w-full gap-4">
          <Card className="w-[300px] flex-none border shadow overflow-hidden">
            <div className="p-6">
              <CardHeader>
                <CardTitle className="text-base font-medium">INCOME SAVED</CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-2">You spent more than your income last month</h3>
                <p className="text-sm text-muted-foreground">We recommend that you save at least 10% of your monthly income, after CPF contributions.</p>
                <Link href="/save" className="text-blue-600 hover:underline text-sm block mt-4">
                  See how you can save more
                </Link>
              </CardContent>
            </div>
            <div className="h-[150px] relative overflow-hidden">
              <Image
                src="/handpursesavings.png"
                alt="Hand holding a purse, representing savings"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </Card>
          <Card className="w-[300px] flex-none border shadow overflow-hidden">
            <div className="p-6">
              <CardHeader>
                <CardTitle className="text-base font-medium">INVESTMENT PORTFOLIO</CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-2">Your portfolio needs diversification</h3>
                <p className="text-sm text-muted-foreground">Consider spreading your investments across different asset classes to reduce risk.</p>
                <Link href="/diversify" className="text-blue-600 hover:underline text-sm block mt-4">
                  Learn about diversification
                </Link>
              </CardContent>
            </div>
            <div className="h-[150px] relative">
              <Image
                src="/handpursesavings.png"
                alt="Hand holding a purse, representing investment diversification"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </Card>
          <Card className="w-[300px] flex-none border shadow overflow-hidden">
            <div className="p-6">
              <CardHeader>
                <CardTitle className="text-base font-medium">RETIREMENT PLANNING</CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-2">Start planning for retirement early</h3>
                <p className="text-sm text-muted-foreground">The power of compound interest works best over long periods. Start your retirement planning now.</p>
                <Link href="/retirement" className="text-blue-600 hover:underline text-sm block mt-4">
                  Begin retirement planning
                </Link>
              </CardContent>
            </div>
            <div className="h-[150px] relative">
              <Image
                src="/handpursesavings.png"
                alt="Hand holding a purse, representing retirement savings"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </Card>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>

      {/* Wealth Insights Section */}
      <section className="p-4 space-y-4 mb-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-semibold">Wealth Insights</h2>
            <p className="text-muted-foreground">Discover wealth-related articles that we have curated exclusively for you.</p>
          </div>
          <Link href="/insights" className="text-blue-600 hover:underline">
            See all
          </Link>
        </div>

        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex w-full gap-4">
            <Card className="w-[300px] flex-none border overflow-hidden">
              <CardContent className="p-0">
                <img src="/rainyday.png" alt="Wealth insight" className="w-full h-40 object-cover object-center" />
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">28 OCT 2024</p>
                  <h3 className="font-semibold mt-2">Essential Investment Strategies for Beginners</h3>
                </div>
              </CardContent>
            </Card>
            <Card className="w-[300px] flex-none border overflow-hidden">
              <CardContent className="p-0">
                <img src="/rainyday.png" alt="Wealth insight" className="w-full h-40 object-cover object-center" />
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">29 OCT 2024</p>
                  <h3 className="font-semibold mt-2">Understanding Current Market Trends</h3>
                </div>
              </CardContent>
            </Card>
            <Card className="w-[300px] flex-none  border overflow-hidden">
              <CardContent className="p-0">
                <img src="/rainyday.png" alt="Wealth insight" className="w-full h-40 object-cover object-center" />
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">30 OCT 2024</p>
                  <h3 className="font-semibold mt-2">Smart Retirement Planning Tips</h3>
                </div>
              </CardContent>
            </Card>
            <Card className="w-[300px] flex-none  border overflow-hidden">
              <CardContent className="p-0">
                <img src="/rainyday.png" alt="Wealth insight" className="w-full h-40 object-cover object-center" />
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">30 OCT 2024</p>
                  <h3 className="font-semibold mt-2">Smart Retirement Planning Tips</h3>
                </div>
              </CardContent>
            </Card>
            <Card className="w-[300px] flex-none  border overflow-hidden">
              <CardContent className="p-0">
                <img src="/rainyday.png" alt="Wealth insight" className="w-full h-40 object-cover object-center" />
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">30 OCT 2024</p>
                  <h3 className="font-semibold mt-2">Smart Retirement Planning Tips</h3>
                </div>
              </CardContent>
            </Card>
            <Card className="w-[300px] flex-none  border overflow-hidden">
              <CardContent className="p-0">
                <img src="/rainyday.png" alt="Wealth insight" className="w-full h-40 object-cover object-center" />
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">30 OCT 2024</p>
                  <h3 className="font-semibold mt-2">Smart Retirement Planning Tips</h3>
                </div>
              </CardContent>
            </Card>
            <Card className="w-[300px] flex-none  border overflow-hidden">
              <CardContent className="p-0">
                <img src="/rainyday.png" alt="Wealth insight" className="w-full h-40 object-cover object-center" />
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">30 OCT 2024</p>
                  <h3 className="font-semibold mt-2">Smart Retirement Planning Tips</h3>
                </div>
              </CardContent>
            </Card>
            <Card className="w-[300px] flex-none  border overflow-hidden">
              <CardContent className="p-0">
                <img src="/rainyday.png" alt="Wealth insight" className="w-full h-40 object-cover object-center" />
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">30 OCT 2024</p>
                  <h3 className="font-semibold mt-2">Smart Retirement Planning Tips</h3>
                </div>
              </CardContent>
            </Card>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>
      <BottomNav/>
    </div>
  )
}