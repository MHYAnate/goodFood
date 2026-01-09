// "use client"

// import { useState } from "react"
// import { Sidebar } from "./sideBar"
// import { TopNav } from "./top-nav"
// import { RevenueCard } from "./revenue-card"
// import { OrderTimeCard } from "./order-time-card"
// import { YourRatingCard } from "./your-rating-card"
// import { MostOrderedFoodCard } from "./most-ordered-food-card"
// import { OrderMetricsCard } from "./order-metrics-card"

// export function Dashboard() {
//   const [sidebarOpen, setSidebarOpen] = useState(true)

//   return (
//     <div className="flex h-screen bg-background">
//       <Sidebar isOpen={sidebarOpen} />
//       <div className="flex-1 flex flex-col overflow-hidden">
//         <TopNav onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
//         <main className="flex-1 overflow-auto p-6 md:p-8">
//           <h1 className="text-3xl font-bold text-foreground mb-8">Dashboard</h1>

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
//             <div className="lg:col-span-2">
//               <RevenueCard />
//             </div>
//             <OrderTimeCard />
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//             <div className="lg:col-span-1">
//               <YourRatingCard />
//             </div>
//             <div className="lg:col-span-1">
//               <MostOrderedFoodCard />
//             </div>
//             <div className="lg:col-span-1">
//               <OrderMetricsCard />
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   )
// }

"use client"

import { useState, useEffect } from "react"
import { Sidebar } from "./sideBar"
import { TopNav } from "./top-nav"
import { RevenueCard } from "./revenue-card"
import { OrderTimeCard } from "./order-time-card"
import { YourRatingCard } from "./your-rating-card"
import { MostOrderedFoodCard } from "./most-ordered-food-card"
import { OrderMetricsCard } from "./order-metrics-card"

export function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Close sidebar on window resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Prevent body scroll when sidebar is open on mobile
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [sidebarOpen])

  const closeSidebar = () => setSidebarOpen(false)
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <TopNav onMenuClick={toggleSidebar} />
        
        <main className="flex-1 overflow-auto p-4 sm:p-6 md:p-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8">
            Dashboard
          </h1>

          {/* First Row */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
            <div className="xl:col-span-2">
              <RevenueCard />
            </div>
            <div className="xl:col-span-1">
              <OrderTimeCard />
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 border-b-gray-800">
            <div className="md:col-span-1">
              <YourRatingCard />
            </div>
            <div className="md:col-span-1">
              <MostOrderedFoodCard />
            </div>
            <div className="md:col-span-2 xl:col-span-1">
              <OrderMetricsCard />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}