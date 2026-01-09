"use client"

import {
  LayoutDashboard,
  ShoppingCart,
  UtensilsCrossed,
  Star,
  Settings,
  CreditCard,
  Users,
  HelpCircle,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "#" },
  { icon: ShoppingCart, label: "Food Order", href: "#" },
  { icon: UtensilsCrossed, label: "Manage Menu", href: "#" },
  { icon: Star, label: "Customer Review", href: "#" },
]

const otherItems = [
  { icon: Settings, label: "Settings", href: "#" },
  { icon: CreditCard, label: "Payment", href: "#" },
  { icon: Users, label: "Accounts", href: "#" },
  { icon: HelpCircle, label: "Help", href: "#" },
]

interface SidebarProps {
  isOpen: boolean
}

export function Sidebar({ isOpen }: SidebarProps) {
  const [activeItem, setActiveItem] = useState("Dashboard")

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/50 lg:hidden z-40" />}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed lg:relative w-64 h-full bg-card p-6 transition-transform duration-300 z-50 overflow-y-auto",
          !isOpen && "-translate-x-full lg:translate-x-0",
        )}
      >
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">GF</span>
            </div>
            <span className="font-bold text-foreground">GOODFOOD</span>
          </div>
          <div className="bg-green-400 text-white text-xs font-bold px-3 py-1 rounded-full w-fit">David Anicede</div>
        </div>

        <div className="space-y-4 mb-8">
          <p className="text-xs font-semibold text-muted-foreground uppercase">MENU</p>
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setActiveItem(item.label)}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                  activeItem === item.label
                    ? "bg-blue-500 text-white"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary",
                )}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="space-y-4">
          <p className="text-xs font-semibold text-muted-foreground uppercase">OTHERS</p>
          <nav className="space-y-2">
            {otherItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}
