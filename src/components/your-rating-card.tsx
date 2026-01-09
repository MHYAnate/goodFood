"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

const TRACK = "#f1f5f9"

type RingProps = {
  value: number
  label: string
  color: string
  fill: string
  size: number
  valueSize: number
  labelSize: number
}

function Ring({
  value,
  label,
  color,
  fill,
  size,
  valueSize,
  labelSize,
}: RingProps) {
  const data = [
    { value },
    { value: 100 - value },
  ]

  const stroke = 4 // thinner border
  const radius = size / 2
  const innerFillSize = size - stroke * 4

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      {/* Soft inner fill */}
      <div
        className="absolute rounded-full"
        style={{
          width: innerFillSize,
          height: innerFillSize,
          backgroundColor: fill,
          opacity: 0.32,
        }}
      />

      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={radius - stroke}
            outerRadius={radius}
            startAngle={90}
            endAngle={-270}
            stroke="none"
          >
            <Cell fill={color} />
            <Cell fill={TRACK} />
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      {/* Center text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center leading-[1.05]">
        <span
          className="font-medium"
          style={{ fontSize: valueSize, color }}
        >
          {value}%
        </span>
        <span
          className="font-medium text-gray-500"
          style={{ fontSize: labelSize }}
        >
          {label}
        </span>
      </div>
    </div>
  )
}

export function YourRatingCard() {
  return (
    <Card className="border-0 rounded-2xl bg-white shadow-sm w-full">
      <CardHeader className="pb-1">
        <CardTitle className="text-[15px] font-semibold text-gray-800">
          Your Rating
        </CardTitle>
        <p className="text-[11px] text-gray-400">
          Lorem ipsum dolor sit amet, consectetur
        </p>
      </CardHeader>

      <CardContent>
        <div className="relative h-[230px] w-full">

          {/* Hygiene — overlaps Food Taste */}
          <div className="absolute left-[26%] top-[18%] z-40">
            <Ring
              value={85}
              label="Hygiene"
              color="#7b7af2"
              fill="#7b7af2"
              size={80}
              valueSize={15}
              labelSize={9}
            />
          </div>

          {/* Food Taste — dominant */}
          <div className="absolute right-[14%] top-[22%] z-20">
            <Ring
              value={85}
              label="Food Taste"
              color="#f5a13c"
              fill="#f5a13c"
              size={145}
              valueSize={28}
              labelSize={11}
            />
          </div>

          {/* Packaging — isolated, no overlap */}
          <div className="absolute left-[10%] bottom-[6%] z-10">
            <Ring
              value={92}
              label="Packaging"
              color="#22c6d8"
              fill="#22c6d8"
              size={105}
              valueSize={17}
              labelSize={9}
            />
          </div>

        </div>
      </CardContent>
    </Card>
  )
}
