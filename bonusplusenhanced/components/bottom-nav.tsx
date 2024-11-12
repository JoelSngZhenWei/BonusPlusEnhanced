'use client'

import { Home, Sprout, ArrowLeftRight, Gift, Grid } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function BottomNav() {
  const pathname = usePathname()
  const activeSegment = '/' + pathname.split('/')[1]

  const navigation = [
    { name: 'Home', href: '/home', icon: Home },
    { name: 'Plan', href: '/plan', icon: Sprout },
    { name: 'Pay', href: '', icon: ArrowLeftRight },
    { name: 'Rewards', href: '', icon: Gift },
    { name: 'More', href: '', icon: Grid },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t border-gray-200 bg-background pb-2">
      <div className="relative">
        <div className="flex h-16">
          {navigation.map((item) => {
            const isActive = activeSegment === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "flex-1 flex flex-col items-center justify-center gap-1 relative clickable",
                  isActive && "text-red-600"
                )}
              >
                <item.icon
                  className={cn(
                    "h-6 w-6",
                    isActive ? "text-red-600" : "text-muted-foreground"
                  )}
                />
                <span className="text-xs font-medium">
                  {item.name}
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
