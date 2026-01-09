"use client"

import { useState } from "react"
import { Sidebar } from "./sideBar"
import { TopNav } from "./top-nav"
import { RevenueCard } from "./revenue-card"
import { OrderTimeCard } from "./order-time-card"
import { YourRatingCard } from "./your-rating-card"
import { MostOrderedFoodCard } from "./most-ordered-food-card"
import { OrderMetricsCard } from "./order-metrics-card"

export function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="flex h-screen bg-background">
      <Sidebar isOpen={sidebarOpen} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNav onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 overflow-auto p-6 md:p-8">
          <h1 className="text-3xl font-bold text-foreground mb-8">Dashboard</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2">
              <RevenueCard />
            </div>
            <OrderTimeCard />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <YourRatingCard />
            </div>
            <div className="lg:col-span-1">
              <MostOrderedFoodCard />
            </div>
            <div className="lg:col-span-1">
              <OrderMetricsCard />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
