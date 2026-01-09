"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingDown } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

const data = [
  { date: "01", "Last 6 days": 2000, "Last Week": 2400 },
  { date: "02", "Last 6 days": 1800, "Last Week": 2300 },
  { date: "03", "Last 6 days": 2100, "Last Week": 2400 },
  { date: "04", "Last 6 days": 2300, "Last Week": 2500 },
  { date: "05", "Last 6 days": 2400, "Last Week": 2600 },
  { date: "06", "Last 6 days": 2500, "Last Week": 2700 },
]

export function OrderMetricsCard() {
  return (
    <Card className="border-0 h-full">
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-4">
        <div>
          <CardTitle className="text-lg">Order</CardTitle>
          <div className="flex flex-col items-center gap-2 mt-2">
            <span className="text-3xl font-bold">2.568</span>
            <div className="flex items-center gap-1 text-red-500 text-sm font-semibold">
              <TrendingDown className="w-4 h-4" />
              2.1% vs last week
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-1">Sales from 1-8 Dec, 2020</p>
        </div>
        <Button variant="softBlue" className="text-blue-500 text-sm">
          View Report
        </Button>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Last 6 days" stroke="#6366f1" dot={false} strokeWidth={2} />
            <Line type="monotone" dataKey="Last Week" stroke="#d1d5db" dot={false} strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
