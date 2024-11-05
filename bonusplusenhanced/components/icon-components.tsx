'use client'

import { Expand, Bell, LogOut } from "lucide-react"
import Link from "next/link"

interface IconButtonProps {
  isDark?: boolean
}

export function ExpandIcon({ isDark = false }: IconButtonProps) {
  return (
    <button 
      aria-label="Expand" 
      className={`p-2 rounded-full ${isDark ? 'bg-gray-800 text-white' : 'bg-black/20 text-white'} hover:bg-black/30 transition-colors`}
    >
      <Expand className="h-6 w-6" />
    </button>
  )
}

export function NotificationIcon({ isDark = false }: IconButtonProps) {
  return (
    <button 
      aria-label="Notifications" 
      className={`p-2 rounded-full ${isDark ? 'bg-gray-800 text-white' : 'bg-black/20 text-white'} hover:bg-black/30 transition-colors`}
    >
      <Bell className="h-6 w-6" />
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
      className={`inline-flex items-center justify-center p-2 rounded-full ${isDark ? 'bg-gray-800 text-white' : 'bg-black/20 text-white'} hover:bg-black/30 transition-colors ${className}`}
    >
      <LogOut className="h-6 w-6" />
      <span className="sr-only">Logout</span>
    </Link>
  )
}