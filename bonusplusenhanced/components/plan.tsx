'use client'

import Link from "next/link"
import { ChevronRight, Info, Plant, Umbrella, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Toggle } from "@/components/ui/toggle"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

export function Plan() {
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
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
        <Card>
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
          <Card>
            <CardHeader>
              <CardTitle className="text-base font-medium">TRACK</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>Money in (SGD)</p>
              <p>Money out (SGD)</p>
              <div className="mt-4">
                <img src="/placeholder.svg?height=100&width=100" alt="Money tracking illustration" className="w-16 h-16" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base font-medium">INVEST</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Check out our products and insights</p>
              <Link href="/invest" className="text-blue-600 hover:underline block mt-2">
                Start investing
              </Link>
              <div className="mt-4">
                <Plant className="h-16 w-16 text-green-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Goals and Insure Cards */}
        <div className="grid grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base font-medium">GOALS</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Save regularly for your needs and wants</p>
              <Link href="/goals" className="text-blue-600 hover:underline block mt-2">
                Create new goal
              </Link>
              <div className="mt-4">
                <Wallet className="h-16 w-16 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base font-medium">INSURE</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Find policies to fill the gaps in your insurance</p>
              <div className="mt-4">
                <Umbrella className="h-16 w-16 text-purple-600" />
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
            <Card className="w-[300px] flex-none">
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
            </Card>
            <Card className="w-[300px] flex-none">
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
            </Card>
            <Card className="w-[300px] flex-none">
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
            </Card>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>

      {/* Wealth Insights Section */}
      <section className="p-4 space-y-4">
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
            <Card className="w-[300px] flex-none">
              <CardContent className="p-0">
                <img src="/placeholder.svg?height=200&width=300" alt="Investment strategies" className="w-full h-40 object-cover" />
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">28 OCT 2024</p>
                  <h3 className="font-semibold mt-2">Essential Investment Strategies for Beginners</h3>
                </div>
              </CardContent>
            </Card>
            <Card className="w-[300px] flex-none">
              <CardContent className="p-0">
                <img src="/placeholder.svg?height=200&width=300" alt="Market trends" className="w-full h-40 object-cover" />
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">29 OCT 2024</p>
                  <h3 className="font-semibold mt-2">Understanding Current Market Trends</h3>
                </div>
              </CardContent>
            </Card>
            <Card className="w-[300px] flex-none">
              <CardContent className="p-0">
                <img src="/placeholder.svg?height=200&width=300" alt="Retirement planning" className="w-full h-40 object-cover" />
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
    </div>
  )
}