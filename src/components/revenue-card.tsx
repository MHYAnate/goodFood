"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp } from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

const data = [
  { date: "01", "Last 6 days": 4000, "Last Week": 2400 },
  { date: "02", "Last 6 days": 3000, "Last Week": 1398 },
  { date: "03", "Last 6 days": 2000, "Last Week": 9800 },
  { date: "04", "Last 6 days": 2780, "Last Week": 3908 },
  { date: "05", "Last 6 days": 1890, "Last Week": 4800 },
  { date: "06", "Last 6 days": 2390, "Last Week": 3800 },
  { date: "07", "Last 6 days": 3490, "Last Week": 4300 },
  { date: "08", "Last 6 days": 2100, "Last Week": 3200 },
  { date: "09", "Last 6 days": 2780, "Last Week": 2908 },
  { date: "10", "Last 6 days": 1890, "Last Week": 4800 },
  { date: "11", "Last 6 days": 2390, "Last Week": 3800 },
  { date: "12", "Last 6 days": 3490, "Last Week": 4300 },
]

export function RevenueCard() {
  return (
    <Card className="border-0">
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-4">
        <div>
          <CardTitle className="text-lg">Revenue</CardTitle>
          <div className="flex flex-col items-center gap-2 mt-2">
            <span className="text-3xl font-bold">IDR 7.852.000</span>
            <div className="flex items-center gap-1 text-green-500 text-sm font-semibold">
              <TrendingUp className="w-4 h-4" />
              2.1% vs last week
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-1">Sales from 1-12 Dec, 2020</p>
        </div>
        <Button variant="softBlue" className="text-blue-500 text-sm">
          View Report
        </Button>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Last 6 days" fill="#4f46e5" radius={[8, 8, 0, 0]} />
            <Bar dataKey="Last Week" fill="#d1d5db" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
