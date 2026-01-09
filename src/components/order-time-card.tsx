"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { name: "Afternoon", value: 40, orders: "1,890 orders" },
  { name: "Evening", value: 32 },
  { name: "Morning", value: 28 },
]

const COLORS = ["#6366f1", "#a78bfa", "#c4b5fd"]

export function OrderTimeCard() {
  return (
    <Card className="border-0">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <div>
          <CardTitle className="text-lg">Order Time</CardTitle>
          <p className="text-xs text-muted-foreground mt-1">From 1-8 Dec, 2020</p>
        </div>
        <Button variant="ghost" className="text-blue-500 text-sm">
          View Report
        </Button>
      </CardHeader>
      <CardContent>
        <div className="relative h-64 flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={2} dataKey="value">
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>

          {/* Tooltip overlay */}
          <div className="absolute top-4 right-4 bg-slate-800 text-white text-xs rounded-lg p-3 shadow-lg">
            <div className="font-semibold mb-1">Afternoon</div>
            <div className="text-xs">3pm - 4pm</div>
            <div className="text-sm font-bold mt-1">1,890 orders</div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-6 mt-6 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
            <span>Afternoon 40%</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
            <span>Evening 32%</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-purple-200 rounded-full"></div>
            <span>Morning 28%</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
