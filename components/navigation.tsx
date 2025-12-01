"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { Menu, X, ChevronDown, LogIn } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavItem {
  label: string
  href: string
  children?: { label: string; href: string; description?: string }[]
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "White-Collar Farming",
    href: "/farming",
    children: [
      { label: "How It Works", href: "/farming/how-it-works", description: "Learn the simple 3-step process" },
      { label: "Farm Categories", href: "/farming/categories", description: "Explore investment options" },
      { label: "Dashboard", href: "/farming/dashboard", description: "Login to your farmer portal" },
    ],
  },
  { label: "Agri-Tourism", href: "/agri-tourism" },
  { label: "Infrastructure", href: "/infrastructure" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLogoClick = () => {
    router.push("/")
    setIsMobileMenuOpen(false)
  }

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <button
            onClick={handleLogoClick}
            className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
            aria-label="GoFA - Go to home"
          >
            <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
              <span className="font-serif font-bold text-forest text-lg">G</span>
            </div>
            <div>
              <div className={`text-xl font-serif font-bold ${isScrolled ? "text-foreground" : "text-white"}`}>
                GoFA
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-1 ${
                    isActive(item.href)
                      ? "text-gold"
                      : isScrolled
                        ? "text-foreground/80 hover:text-foreground hover:bg-muted"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown */}
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-2 w-64 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="bg-background rounded-xl shadow-xl border border-border p-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block p-3 rounded-lg hover:bg-muted transition-colors"
                        >
                          <div className="font-medium text-foreground">{child.label}</div>
                          {child.description && (
                            <div className="text-sm text-muted-foreground mt-0.5">{child.description}</div>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              className={`hidden sm:inline-flex gap-2 ${
                isScrolled ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10"
              }`}
              asChild
            >
              <Link href="/farming/dashboard">
                <LogIn className="w-4 h-4" />
                Login
              </Link>
            </Button>
            <Button
              size="sm"
              className="hidden sm:inline-flex bg-gold hover:bg-gold-dark text-forest font-semibold"
              asChild
            >
              <Link href="/farming/categories">Start Farming</Link>
            </Button>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="bg-background rounded-xl shadow-xl border border-border p-4">
              <nav className="flex flex-col space-y-1">
                {navItems.map((item) => (
                  <div key={item.label}>
                    <Link
                      href={item.href}
                      className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        isActive(item.href)
                          ? "text-gold bg-gold/10"
                          : "text-foreground/80 hover:text-foreground hover:bg-muted"
                      }`}
                      onClick={() => !item.children && setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="ml-4 mt-1 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
              <div className="mt-4 pt-4 border-t border-border flex flex-col gap-2">
                <Button variant="outline" className="w-full justify-center gap-2 bg-transparent" asChild>
                  <Link href="/farming/dashboard">
                    <LogIn className="w-4 h-4" />
                    Login
                  </Link>
                </Button>
                <Button className="w-full bg-gold hover:bg-gold-dark text-forest font-semibold" asChild>
                  <Link href="/farming/categories">Start Farming</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
