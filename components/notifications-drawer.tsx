// components/notifications-drawer.tsx

"use client"

import { Bell, Check, Trash } from "lucide-react"
import { useState } from "react"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"

interface Notification {
  id: number
  message: string
  read: boolean
}

const initialNotifications: Notification[] = [
  { id: 1, message: "New internship at InnovateX posted!", read: false },
  { id: 2, message: "Reminder: Apply for DevHack before 20th July.", read: false },
  { id: 3, message: "New AI Fellowship opportunity available.", read: true },
]

export default function NotificationsDrawer() {
  const [notifications, setNotifications] = useState(initialNotifications)

  const markAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    )
  }

  const deleteNotification = (id: number) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id))
  }

  const unreadCount = notifications.filter((n) => !n.read).length

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5 text-gray-600" />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              {unreadCount}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 bg-white shadow-md border rounded-lg">
        <h3 className="text-sm font-semibold px-4 pt-3 pb-2">Notifications</h3>
        <ul className="divide-y max-h-64 overflow-y-auto">
          {notifications.length === 0 ? (
            <li className="text-sm text-center py-4 text-gray-500">
              You're all caught up!
            </li>
          ) : (
            notifications.map((notif) => (
              <li
                key={notif.id}
                className="flex justify-between items-start gap-2 px-4 py-2 hover:bg-gray-50"
              >
                <div className="text-sm text-gray-800">
                  <p className={`${notif.read ? "text-gray-500" : "font-medium"}`}>{notif.message}</p>
                </div>
                <div className="flex items-center gap-2">
                  {!notif.read && (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => markAsRead(notif.id)}
                    >
                      <Check className="w-4 h-4 text-green-600" />
                    </Button>
                  )}
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => deleteNotification(notif.id)}
                  >
                    <Trash className="w-4 h-4 text-gray-400 hover:text-red-500" />
                  </Button>
                </div>
              </li>
            ))
          )}
        </ul>
      </PopoverContent>
    </Popover>
  )
}
