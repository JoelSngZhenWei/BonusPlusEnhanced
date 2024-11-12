'use client'

import { useState } from "react"
import { QrCode, Bell, LogOut } from "lucide-react"
import Link from "next/link"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { formatDistanceToNow } from "date-fns"

interface IconButtonProps {
  isDark?: boolean
}

export function QrCodeScannerIcon({ isDark = false }: IconButtonProps) {
  return (
    <button 
      aria-label="Scan QR Code" 
      className={`p-2 ${isDark ? 'text-black' : 'text-white'} hover:opacity-70 transition-opacity clickable`}
    >
      <QrCode className="h-7 w-7" />
    </button>
  )
}

export function NotificationIcon({ isDark = false }: IconButtonProps) {
  const [isOpen, setIsOpen] = useState(false)

  const notifications = [
    { id: 1, title: "BonusMax, here we come!", description: "You're all set for the upgrade to BonusMax! Let's reach your goals together!", isPriority: true, learnMore: true, demoTryMe: true, createdAt: new Date(2024, 10, 12) },
    {
      id: 2,
      title: "Get Ready for Enhanced Savings!",
      description: "BonusMax is here to help you achieve your big life goals! Stay tuned for an effortless upgrade!",
      isPriority: true,
      learnMore: true,
      createdAt: new Date(2024, 9, 15)
    },
    { id: 3, title: "Explore BonusMax", description: "Explore BonusMax! Our enhanced savings account offers features designed for your future goals. Learn how your FRANK account can evolve with you.", isPriority: true, learnMore: true, createdAt: new Date(2024, 4, 12) },
    { id: 4, title: "Account statement", description: "Your monthly account statement is now available.", isPriority: false, createdAt: new Date(2024, 3, 15) },
  ]

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <button 
          aria-label="Notifications" 
          className={`p-2 ${isDark ? 'text-black' : 'text-white'} hover:opacity-70 transition-opacity clickable relative`}
        >
          <Bell className="h-7 w-7" />
          {notifications.length > 0 && (
            <span className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {notifications.length}
            </span>
          )}
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-80 mr-6 ">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-semibold text-lg">Notifications</h3>
        </div>
        <ScrollArea className="h-[300px]">
          {notifications.map((notification) => (
            <div 
              key={notification.id} 
              className={`mb-4 p-3 rounded-lg transition-all duration-300 clickable ${
                notification.isPriority ? 'bg-pink-100' : 'bg-gray-100'
              }`}
            >
              <h4 className={`font-bold ${notification.isPriority ? 'ocbc-red' : ''}`}>
                {notification.title}
              </h4>
              <p className="text-sm text-gray-600">{notification.description}</p>
              {notification.demoTryMe && (
                <div className="flex justify-center mt-3 mb-3">
                  <Link href="/transition">
                    <Button className="text-lg font-bold bg-red-600 hover:bg-red-700 text-white">
                      Transition to BonusMax
                    </Button>
                  </Link>
                </div>
              )}
              {notification.learnMore && (
                <div className="mt-2">
                  <Link href="/plan/bonusplusintro" className="text-sm text-blue-600 hover:underline">
                    Learn more
                  </Link>
                </div>
              )}
              <div className="flex justify-end items-center ">
                <p className="text-xs text-gray-400">
                  {formatDistanceToNow(notification.createdAt, { addSuffix: true })}
                </p>
              </div>
            </div>
          ))}
        </ScrollArea>
      </PopoverContent>
    </Popover>
  )
}

interface LogoutButtonProps {
  isDark?: boolean
  className?: string
}

export function LogoutButton({ isDark = false, className = '' }: LogoutButtonProps) {
  return (
    <Link 
      href="/" 
      className={`inline-flex items-center justify-center p-2 ${isDark ? 'text-white' : 'text-black'} hover:opacity-70 transition-opacity ${className} clickable`}
    >
      <LogOut className="h-6 w-6" />
      <span className="sr-only">Logout</span>
    </Link>
  )
}