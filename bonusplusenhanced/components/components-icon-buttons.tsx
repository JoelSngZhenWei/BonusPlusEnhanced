'use client'

import { useState } from "react"
import { QrCode, Bell, LogOut } from "lucide-react"
import Link from "next/link"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

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
    { id: 1, title: "New message", description: "You have a new message from OCBC support." },
    { id: 2, title: "Payment due", description: "Your credit card payment is due in 3 days." },
    { id: 3, title: "Interest rate update", description: "The interest rate for your savings account has been updated." },
    { id: 4, title: "Security alert", description: "A new device has logged into your account." },
    { id: 5, title: "Promotion", description: "New cashback promotion available for your credit card." },
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
      <PopoverContent className="w-80">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-semibold text-lg">Notifications</h3>
          <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
            Close
          </Button>
        </div>
        <ScrollArea className="h-[300px]">
          {notifications.map((notification) => (
            <div key={notification.id} className="mb-4 p-3 bg-gray-100 rounded-lg">
              <h4 className="font-medium">{notification.title}</h4>
              <p className="text-sm text-gray-600">{notification.description}</p>
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