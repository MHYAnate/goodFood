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
  X,
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
  onClose: () => void
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [activeItem, setActiveItem] = useState("Dashboard")

  return (
    <>
      {/* Mobile overlay - closes sidebar when clicked */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 lg:hidden",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sidebar */}
      <aside
        className={cn(
          // Base styles
          "fixed top-0 left-0 z-50 h-full bg-gray-100 overflow-y-auto",
          // Width - responsive
          "w-[280px] sm:w-64",
          // Padding - responsive
          "p-4 sm:p-6",
          // Transition
          "transition-transform duration-300 ease-in-out",
          // Transform based on open state - mobile
          isOpen ? "translate-x-0" : "-translate-x-full",
          // Desktop: always visible and relative positioning
          "lg:translate-x-0 lg:relative lg:flex-shrink-0",
          // Shadow on mobile when open
          isOpen && "shadow-2xl lg:shadow-none"
        )}
      >
        {/* Close button - mobile only */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200 transition-colors lg:hidden"
          aria-label="Close sidebar"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* Logo and User */}
        <div className="mb-6 sm:mb-8">
          <div className=" border-b-1 pb-5 w-full border-gray-300 flex items-center gap-2 mb-4 sm:mb-6">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm">GF</span>
            </div>
            <span className="font-bold text-gray-800 text-sm sm:text-base">GOODFOOD</span>
          </div>
        
        </div>

        {/* Menu Section */}
        <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            MENU
          </p>
          <nav className="space-y-1 sm:space-y-2">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setActiveItem(item.label)}
                className={cn(
                  "flex items-center gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg text-sm font-medium transition-all duration-200",
                  activeItem === item.label
                    ? "bg-blue-500 text-white shadow-md shadow-blue-500/30"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                )}
              >
                <item.icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="truncate">{item.label}</span>
              </a>
            ))}
          </nav>
        </div>

        {/* Others Section */}
        <div className="space-y-3 sm:space-y-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            OTHERS
          </p>
          <nav className="space-y-1 sm:space-y-2">
            {otherItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-200 transition-all duration-200"
              >
                <item.icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="truncate">{item.label}</span>
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom spacing for mobile scroll */}
        <div className="h-6 lg:hidden" />
      </aside>
    </>
  )
}