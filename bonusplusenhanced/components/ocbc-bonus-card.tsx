'use client'

import { Sparkles, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation" // Import useRouter
// import { Parallax } from 'react-scroll-parallax';

export function OcbcBonusCard() {
  const router = useRouter() // Initialize the router

  const handleClick = () => {
    router.push("/plan/bonusplusintro") // Navigate to /plan/bonusplus
  }

  return (
    <Card className="overflow-hidden border shadow">

      <CardHeader className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 p-3 pt-4">
        {/* <Parallax speed={-0.75}> */}
          <CardTitle className="text-base font-extrabold uppercase tracking-wide text-white">OCBC Bonus+</CardTitle>
          <p className="text-white font-bold text-xs">Supercharge your savings</p>
        {/* </Parallax> */}
      </CardHeader>


      <CardContent className="p-3 bg-white">
        <ul className="space-y-3 mb-3">
          <li className="flex items-center text-xs">
            <div className="p-1 mr-3">
              <Sparkles className="h-5 w-5 text-red-600" />
            </div>
            <span>Earn up to ~5% on your savings</span>
          </li>
          <li className="flex items-center text-xs">
            <div className="rounded-full p-1 mr-3">
              <Sparkles className="h-5 w-5 text-red-600" />
            </div>
            <span>Help finance your BTO, weddings, cars, and more</span>
          </li>
          <li className="flex items-center text-xs">
            <div className="rounded-full p-1 mr-3">
              <Sparkles className="h-5 w-5 text-red-600" />
            </div>
            <span>Exclusive offers and rewards</span>
          </li>
        </ul>
        {/* <Parallax speed={-0.75}> */}
        <Button className="w-full bg-red-600 hover:bg-red-700 text-white text-sm" onClick={handleClick}>
          Start saving for your goals
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        {/* </Parallax> */}
      </CardContent>
    </Card>
  )
}
