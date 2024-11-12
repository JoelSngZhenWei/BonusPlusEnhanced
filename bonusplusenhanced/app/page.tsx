"use client"
import Image from "next/image"
import Link from "next/link"
import { Gift, Lightbulb, MoreHorizontal, QrCode } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useRouter } from 'next/navigation';

// import { QrCodeScannerIcon,NotificationIcon  } from "@/components/icon-buttons"

export default function Component() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/home');
  };
  return (
    <div className="min-h-screen ocbc-white-bg">
      <header className="fixed top-0 left-0 w-full z-50 bg-transparent p-2">
      </header>
      <div className="relative">
        <div className="relative w-full" style={{ height:'500px'}}> {/* Reduced height to allow overlap */}
          <Image
            src="/BG-Login2.png"
            alt="Background Image"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute top-20 right-28 text-slate-700 text-right"> {/* Moved up to overlap */}
            <div className="flex items-right gap-2">
              <div >
                <div className="text-xl tracking-wide ocbc-red">For <span className="font-black">Now,</span></div>
                <div className="text-xl tracking-wide ocbc-red">and <span className="font-black">beyond.</span></div>
                <div className="text-sm font-semibold">OCBC Singapore</div>
              </div>
            </div>
          </div>
        </div>
        <Card className="mx-4 -mt-14 relative z-10 p-3 grid gap-4 ocbc-white-bg"> {/* Increased negative margin for overlap */}
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center gap-2 transition-all duration-300 clickable">
              <div className="p-3 bg-gray-200 rounded-full ">
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
              <span className="text-xs text-center">Foreign Exchange</span>
            </div>
            <div className="flex flex-col items-center gap-2 transition-all duration-300 clickable">
              <div className="p-3 bg-gray-200 rounded-full">
                <QrCode className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xs text-center">Scan & Pay</span>
            </div>
            <div className="flex flex-col items-center gap-2 transition-all duration-300 clickable">
              <div className="p-3 bg-gray-200 rounded-full">
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
              <span className="text-xs text-center">PayNow</span>
            </div>
            <div className="flex flex-col items-center gap-2 transition-all duration-300 clickable">
              <div className="p-3 bg-gray-200 rounded-full">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xs text-center">Wealth Insights</span>
            </div>
            <div className="flex flex-col items-center gap-2 transition-all duration-300 clickable">
              <div className="p-3 bg-gray-200 rounded-full">
                <Gift className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xs text-center">Rewards</span>
            </div>
            <div className="flex flex-col items-center gap-2 transition-all duration-300 clickable">
              <div className="p-3 bg-gray-200 rounded-full">
                <MoreHorizontal className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xs text-center">More</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <Button className="w-full py-6 text-base bg-slate-700 rounded-sm highlight-glow" variant="default" onClick={handleClick}>
              Log in to OCBC Singapore
            </Button>
            <p className="text-xs text-muted-foreground">
              Security Advisory: Beware of calls from scammers claiming to be from OCBC. Do not give away your banking details/passwords to anyone.{" "}
              <Link href="#" className="text-blue-500 hover:underline">
                Learn more
              </Link>
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}