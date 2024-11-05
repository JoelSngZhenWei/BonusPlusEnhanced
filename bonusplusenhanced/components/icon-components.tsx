'use client'

import { Expand, Bell } from "lucide-react"

export function ExpandIcon() {
  return (
    <button aria-label="Expand" className="p-2 rounded-full bg-black/20 text-white hover:bg-black/30 transition-colors">
      <Expand className="h-6 w-6" />
    </button>
  )
}

export function NotificationIcon() {
  return (
    <button aria-label="Notifications" className="p-2 rounded-full bg-black/20 text-white hover:bg-black/30 transition-colors">
      <Bell className="h-6 w-6" />
    </button>
  )
}