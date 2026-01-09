"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const foodItems = [
  { id: 1, name: "Fresh Salad Bowl", price: "IDR 45.000", emoji: "🥗" },
  { id: 2, name: "Chicken Noodles", price: "IDR 75.000", emoji: "🍝" },
  { id: 3, name: "Smoothie Fruits", price: "IDR 45.000", emoji: "🥤" },
  { id: 4, name: "Hot Chicken Wings", price: "IDR 45.000", emoji: "🍗" },
]

export function MostOrderedFoodCard() {
  return (
    <Card className="border-0 shadow-lg h-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <div>
          <CardTitle className="text-lg">Most Ordered Food</CardTitle>
          <p className="text-xs text-muted-foreground mt-1">Adipiscing elit, sed do eiusmod tempor</p>
        </div>
        <Button variant="ghost" className="text-blue-500 text-sm">
          View Report
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {foodItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="text-2xl">{item.emoji}</div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{item.name}</p>
                </div>
              </div>
              <p className="text-sm font-semibold text-muted-foreground">{item.price}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
