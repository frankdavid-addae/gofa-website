"use client"

import { useState } from "react"
import Link from "next/link"
import { Bell, Search, Plus, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const notifications = [
  {
    id: 1,
    title: "Harvest Ready",
    message: "Your Tilapia farm is ready for harvest!",
    time: "2 hours ago",
    unread: true,
  },
  {
    id: 2,
    title: "Profit Credited",
    message: "GHS 1,250.00 has been added to your wallet",
    time: "1 day ago",
    unread: true,
  },
  {
    id: 3,
    title: "Farm Visit Confirmed",
    message: "Your visit on Dec 15 is confirmed",
    time: "2 days ago",
    unread: false,
  },
]

export function DashboardHeader() {
  const [searchOpen, setSearchOpen] = useState(false)
  const unreadCount = notifications.filter((n) => n.unread).length

  return (
    <header className="sticky top-0 z-20 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="flex items-center justify-between h-16 px-4 md:px-6 lg:px-8">
        {/* Left - Page Title / Search */}
        <div className="flex items-center gap-4 pl-12 lg:pl-0">
          {searchOpen ? (
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search farms, transactions..."
                className="w-64 pl-9 bg-muted border-0"
                autoFocus
                onBlur={() => setSearchOpen(false)}
              />
            </div>
          ) : (
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Search className="w-4 h-4" />
              <span className="hidden md:inline">Search...</span>
            </button>
          )}
        </div>

        {/* Right - Actions */}
        <div className="flex items-center gap-2">
          {/* New Investment Button */}
          <Button size="sm" className="hidden sm:flex bg-gold hover:bg-gold-dark text-forest gap-2" asChild>
            <Link href="/farming/categories">
              <Plus className="w-4 h-4" />
              New Investment
            </Link>
          </Button>

          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="relative w-10 h-10 rounded-xl hover:bg-muted flex items-center justify-center transition-colors">
                <Bell className="w-5 h-5 text-muted-foreground" />
                {unreadCount > 0 && (
                  <span className="absolute top-1 right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    {unreadCount}
                  </span>
                )}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel className="flex items-center justify-between">
                Notifications
                <Button variant="ghost" size="sm" className="text-xs text-gold-dark">
                  Mark all read
                </Button>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              {notifications.map((notification) => (
                <DropdownMenuItem key={notification.id} className="flex flex-col items-start gap-1 p-3 cursor-pointer">
                  <div className="flex items-center gap-2 w-full">
                    {notification.unread && <span className="w-2 h-2 bg-gold rounded-full" />}
                    <span className="font-medium text-foreground">{notification.title}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{notification.message}</span>
                  <span className="text-xs text-muted-foreground">{notification.time}</span>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuItem className="justify-center text-gold-dark" asChild>
                <Link href="/dashboard/notifications">View all notifications</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Profile Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-2 px-2 py-1.5 rounded-xl hover:bg-muted transition-colors">
                <div className="w-8 h-8 bg-forest rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">JD</span>
                </div>
                <ChevronDown className="w-4 h-4 text-muted-foreground hidden sm:block" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>
                <div className="font-medium">John Doe</div>
                <div className="text-xs text-muted-foreground font-normal">john@example.com</div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/dashboard/settings">Profile Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/dashboard/wallet">Wallet</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/dashboard/documents">Documents</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-500">Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
