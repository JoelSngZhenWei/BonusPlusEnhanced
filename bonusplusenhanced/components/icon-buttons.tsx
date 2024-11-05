'use client'

import { QrCode, Bell, LogOut } from "lucide-react"
import Link from "next/link"

interface IconButtonProps {
  isDark?: boolean
}

export function QrCodeScannerIcon({ isDark = false }: IconButtonProps) {
  return (
    <button 
      aria-label="Scan QR Code" 
      className={`p-2 ${isDark ? 'text-black' : 'text-white'} hover:opacity-70 transition-opacity`}
    >
      <QrCode className="h-7 w-7" />
    </button>
  )
}

export function NotificationIcon({ isDark = false }: IconButtonProps) {
  return (
    <button 
      aria-label="Notifications" 
      className={`p-2 ${isDark ? 'text-black' : 'text-white'} hover:opacity-70 transition-opacity`}
    >
      <Bell className="h-7 w-7" />
    </button>
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
      className={`inline-flex items-center justify-center p-2 ${isDark ? 'text-white' : 'text-black'} hover:opacity-70 transition-opacity ${className}`}
    >
      <LogOut className="h-6 w-6" />
      <span className="sr-only">Logout</span>
    </Link>
  )
}