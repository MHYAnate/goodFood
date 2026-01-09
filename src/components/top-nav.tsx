"use client"

import { Menu, Search, Bell, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface TopNavProps {
  onMenuClick: () => void
}

export function TopNav({ onMenuClick }: TopNavProps) {
  return (
    <div className=" border-b border-b-gray-200 bg-card px-6 py-4 flex items-center justify-between gap-4">
      <Button variant="ghost" size="icon" onClick={onMenuClick} className="lg:hidden">
        <Menu className="w-5 h-5" />
      </Button>

      <div className="flex-1 max-w-md hidden sm:flex">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search..." className="pl-10 bg-secondary border-0" />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 px-4 py-2  text-black rounded-lg">
          <div className="flex items-center gap-2 text-sm font-semibold"><div className="bg-orange-400 p-1 rounded-full">🍔</div> Delicious Burger</div>
          <ChevronDown className="w-4 h-4" />
        </div>
        <Button variant="ghost" size="icon">
          <Bell className="w-5 h-5" />
        </Button>
      </div>
    </div>
  )
}
