import Image from "next/image"
import Link from "next/link"
import { Gift, Lightbulb, MoreHorizontal, QrCode } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { NotificationIcon } from "@/components/icon-components"
import { ExpandIcon } from "@/components/icon-components"

export default function Component() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative">
      <div className="relative h-screen"> {/* Use h-screen to make it fill the viewport height */}
        <Image
          src="/deepavali.png"
          alt="Deepavali celebration background"
          layout="fill"           // Use `layout="fill"` to make it occupy the entire div
          objectFit="cover"        // Ensures the image covers the entire container
          className="brightness-75" // Adjust brightness if needed
        />
          <div className="absolute top-4 flex justify-between w-full px-4">
            <ExpandIcon />
            <NotificationIcon />
          </div>
        <div className="absolute bottom-4 right-4 text-white">
          <div className="flex items-center gap-2">
            <span className="text-sm">🪔</span>
            <div>
              <div className="text-sm font-medium">OCBC Singapore</div>
              <div className="text-lg font-bold">Happy Deepavali!</div>
            </div>
          </div>
        </div>
      </div>
        
        <Card className="mx-4 -mt-6 relative z-10 p-6 grid gap-8 ocbc-white-bg">
          <div className="grid grid-cols-3 gap-8">
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 bg-primary/10 rounded-lg">
                <svg
                  className="h-6 w-6 text-primary"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4" />
                  <path d="M4 6v12c0 1.1.9 2 2 2h14v-4" />
                  <path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z" />
                </svg>
              </div>
              <span className="text-sm text-center">Foreign Exchange</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 bg-primary/10 rounded-lg">
                <QrCode className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm text-center">Scan & Pay</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 bg-primary/10 rounded-lg">
                <svg
                  className="h-6 w-6 text-primary"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                </svg>
              </div>
              <span className="text-sm text-center">PayNow</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm text-center">Wealth Insights</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Gift className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm text-center">Rewards</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 bg-primary/10 rounded-lg">
                <MoreHorizontal className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm text-center">More</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <Button className="w-full py-6 text-lg bg-slate-700	" variant="default">
              Log in to OCBC Singapore
            </Button>
            <p className="text-sm text-muted-foreground">
              Security Advisory: Beware of calls from scammers claiming to be from OCBC. Do not give away your banking details/passwords to anyone.{" "}
              <Link href="#" className="text-primary hover:underline">
                Learn more
              </Link>
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}