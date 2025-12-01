"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Fish,
  Wallet,
  TrendingUp,
  Calendar,
  FileText,
  MessageCircle,
  Users,
  Bell,
  Settings,
  LogOut,
  ChevronLeft,
  Menu,
  X,
  Home,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const mainNavItems = [
  { icon: LayoutDashboard, label: "Overview", href: "/dashboard" },
  { icon: Fish, label: "My Farms", href: "/dashboard/farms" },
  { icon: Wallet, label: "Wallet", href: "/dashboard/wallet" },
  { icon: TrendingUp, label: "Profit Tracker", href: "/dashboard/profits" },
  { icon: Calendar, label: "Farm Visits", href: "/dashboard/visits" },
  { icon: FileText, label: "Documents", href: "/dashboard/documents" },
]

const secondaryNavItems = [
  { icon: MessageCircle, label: "Support", href: "/dashboard/support" },
  { icon: Users, label: "Community", href: "/dashboard/community" },
  { icon: Bell, label: "Notifications", href: "/dashboard/notifications" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
]

export function DashboardSidebar() {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const NavLink = ({ item }: { item: (typeof mainNavItems)[0] }) => {
    const isActive = pathname === item.href
    return (
      <Link
        href={item.href}
        onClick={() => setMobileOpen(false)}
        className={cn(
          "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all",
          isActive ? "bg-gold text-forest shadow-sm" : "text-muted-foreground hover:bg-muted hover:text-foreground",
        )}
      >
        <item.icon className={cn("w-5 h-5 flex-shrink-0", collapsed && "mx-auto")} />
        {!collapsed && <span>{item.label}</span>}
      </Link>
    )
  }

  const SidebarContent = () => (
    <>
      {/* Logo */}
      <div className={cn("p-4 border-b border-border", collapsed && "px-2")}>
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gold rounded-xl flex items-center justify-center flex-shrink-0">
            <span className="font-serif font-bold text-forest text-lg">G</span>
          </div>
          {!collapsed && (
            <div>
              <span className="font-serif font-bold text-xl text-foreground">GoFA</span>
              <span className="block text-xs text-muted-foreground">Farmer Dashboard</span>
            </div>
          )}
        </Link>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        <div
          className={cn(
            "text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2",
            collapsed ? "text-center" : "px-3",
          )}
        >
          {collapsed ? "Main" : "Main Menu"}
        </div>
        {mainNavItems.map((item) => (
          <NavLink key={item.href} item={item} />
        ))}

        <div
          className={cn(
            "text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-6 mb-2",
            collapsed ? "text-center" : "px-3",
          )}
        >
          {collapsed ? "More" : "Support & Settings"}
        </div>
        {secondaryNavItems.map((item) => (
          <NavLink key={item.href} item={item} />
        ))}
      </nav>

      {/* User Section */}
      <div className="p-3 border-t border-border">
        {!collapsed && (
          <div className="flex items-center gap-3 px-3 py-2 mb-2">
            <div className="w-10 h-10 bg-forest rounded-full flex items-center justify-center">
              <span className="text-white font-semibold">JD</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-medium text-foreground truncate">John Doe</div>
              <div className="text-xs text-muted-foreground truncate">john@example.com</div>
            </div>
          </div>
        )}
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="sm"
            className={cn(
              "flex-1 justify-start gap-2 text-muted-foreground hover:text-foreground",
              collapsed && "justify-center px-2",
            )}
            asChild
          >
            <Link href="/">
              <Home className="w-4 h-4" />
              {!collapsed && "Main Site"}
            </Link>
          </Button>
          {!collapsed && (
            <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600 hover:bg-red-50">
              <LogOut className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>

      {/* Collapse Button - Desktop */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="hidden lg:flex absolute -right-3 top-20 w-6 h-6 bg-background border border-border rounded-full items-center justify-center shadow-sm hover:bg-muted transition-colors"
      >
        <ChevronLeft className={cn("w-4 h-4 text-muted-foreground transition-transform", collapsed && "rotate-180")} />
      </button>
    </>
  )

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 w-10 h-10 bg-background border border-border rounded-xl flex items-center justify-center shadow-sm"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Mobile Overlay */}
      {mobileOpen && <div className="lg:hidden fixed inset-0 bg-black/50 z-40" onClick={() => setMobileOpen(false)} />}

      {/* Mobile Sidebar */}
      <aside
        className={cn(
          "lg:hidden fixed inset-y-0 left-0 z-50 w-64 bg-background border-r border-border flex flex-col transform transition-transform duration-300",
          mobileOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg hover:bg-muted"
        >
          <X className="w-5 h-5" />
        </button>
        <SidebarContent />
      </aside>

      {/* Desktop Sidebar */}
      <aside
        className={cn(
          "hidden lg:flex fixed inset-y-0 left-0 z-30 bg-background border-r border-border flex-col transition-all duration-300",
          collapsed ? "w-20" : "w-64",
        )}
      >
        <SidebarContent />
      </aside>
    </>
  )
}
