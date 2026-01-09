// "use client"

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

// const data = [
//   { name: "Hygiene", value: 85 },
//   { name: "Food Taste", value: 85 },
//   { name: "Packaging", value: 92 },
// ]

// const COLORS = ["#6366f1", "#f59e0b", "#06b6d4"]

// export function YourRatingCard() {
//   return (
//     <Card className="border-0 shadow-lg h-full">
//       <CardHeader>
//         <CardTitle className="text-lg">Your Rating</CardTitle>
//         <p className="text-xs text-muted-foreground mt-1">Lorem ipsum dolor sit amet, consectetur</p>
//       </CardHeader>
//       <CardContent>
//         <div className="relative h-64 flex items-center justify-center">
//           <ResponsiveContainer width="100%" height="100%">
//             <PieChart>
//               <Pie
//                 data={[
//                   { name: "Hygiene", value: 85 },
//                   { name: "Other", value: 15 },
//                 ]}
//                 cx="50%"
//                 cy="50%"
//                 innerRadius={50}
//                 outerRadius={80}
//                 dataKey="value"
//                 startAngle={90}
//                 endAngle={-270}
//               >
//                 <Cell fill="#6366f1" />
//                 <Cell fill="#f3f4f6" />
//               </Pie>
//             </PieChart>
//           </ResponsiveContainer>
//           <div className="absolute text-center">
//             <div className="text-3xl font-bold text-blue-600">85%</div>
//             <div className="text-xs text-muted-foreground">Hygiene</div>
//           </div>
//         </div>

//         <div className="grid grid-cols-2 gap-4 mt-8">
//           {/* Food Taste */}
//           <div className="flex flex-col items-center">
//             <div className="relative w-20 h-20 flex items-center justify-center mb-2">
//               <ResponsiveContainer width="100%" height="100%">
//                 <PieChart>
//                   <Pie
//                     data={[{ value: 85 }, { value: 15 }]}
//                     cx="50%"
//                     cy="50%"
//                     innerRadius={30}
//                     outerRadius={45}
//                     dataKey="value"
//                     startAngle={90}
//                     endAngle={-270}
//                   >
//                     <Cell fill="#f59e0b" />
//                     <Cell fill="#f3f4f6" />
//                   </Pie>
//                 </PieChart>
//               </ResponsiveContainer>
//               <div className="absolute text-center">
//                 <div className="text-sm font-bold">85%</div>
//               </div>
//             </div>
//             <span className="text-xs font-semibold text-center">Food Taste</span>
//           </div>

//           {/* Packaging */}
//           <div className="flex flex-col items-center">
//             <div className="relative w-20 h-20 flex items-center justify-center mb-2">
//               <ResponsiveContainer width="100%" height="100%">
//                 <PieChart>
//                   <Pie
//                     data={[{ value: 92 }, { value: 8 }]}
//                     cx="50%"
//                     cy="50%"
//                     innerRadius={30}
//                     outerRadius={45}
//                     dataKey="value"
//                     startAngle={90}
//                     endAngle={-270}
//                   >
//                     <Cell fill="#06b6d4" />
//                     <Cell fill="#f3f4f6" />
//                   </Pie>
//                 </PieChart>
//               </ResponsiveContainer>
//               <div className="absolute text-center">
//                 <div className="text-sm font-bold">92%</div>
//               </div>
//             </div>
//             <span className="text-xs font-semibold text-center">Packaging</span>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   )
// }

"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

// Data configuration
const data = [
  { name: "Hygiene", value: 85 },
  { name: "Food Taste", value: 85 },
  { name: "Packaging", value: 92 },
]

const COLORS = ["#6366f1", "#f59e0b", "#06b6d4"] // Indigo, Amber, Cyan
const TRACK_COLOR = "#f3f4f6" // Light gray track color

// Reusable component for the Circular Progress
const CircularProgress: React.FC<{
  value: number;
  color: string;
  size?: number;
  strokeWidth?: number;
  fontSize?: string;
  showLabel?: boolean;
  label?: string;
}> = ({
  value,
  color,
  size = 100,
  strokeWidth = 10,
  fontSize = "24px",
  showLabel = true,
  label = "",
}) => {
  // Calculate the "remaining" value for the background track (100 - value)
  const chartData = [
    { name: "score", value: value },
    { name: "remaining", value: 100 - value },
  ]

  const radius = size / 2 - strokeWidth
  const innerRadius = size / 2 - strokeWidth

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={innerRadius}
            outerRadius={size / 2 - strokeWidth / 2}
            startAngle={90}
            endAngle={-270}
            paddingAngle={0}
            stroke="none"
          >
            <Cell fill={color} />
            <Cell fill={TRACK_COLOR} />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      {/* Centered Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span 
          className="font-bold" 
          style={{ fontSize: fontSize, color: color }}
        >
          {value}%
        </span>
        {label && (
          <span className="text-[10px] text-gray-500 font-medium uppercase tracking-wide mt-0.5">
            {label}
          </span>
        )}
      </div>
    </div>
  )
}

export function YourRatingCard() {
  return (
    <Card className="border-0 shadow-xl rounded-2xl bg-white h-full w-full overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-[18px] font-bold text-gray-800">Your Rating</CardTitle>
        <p className="text-[11px] text-gray-400 font-normal leading-tight mt-1">
          Lorem ipsum dolor sit amet, consectetur
        </p>
      </CardHeader>
      <CardContent>
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4 items-center justify-center h-full">
          
          {/* Left Side: Main Hygiene Rating */}
          <div className="flex flex-col items-center justify-center order-1 md:order-1">
            <CircularProgress
              value={85}
              color={COLORS[0]}
              size={180}
              strokeWidth={12}
              fontSize="36px"
              label="Hygiene"
            />
          </div>

          {/* Right Side: Secondary Ratings */}
          <div className="flex flex-row md:flex-col gap-6 justify-center items-center order-2 md:order-2 w-full">
            
            {/* Food Taste */}
            <div className="flex flex-col items-center gap-2">
              <CircularProgress
                value={85}
                color={COLORS[1]}
                size={100}
                strokeWidth={10}
                fontSize="18px"
              />
              <span className="text-xs font-semibold text-gray-600">Food Taste</span>
            </div>

            {/* Packaging */}
            <div className="flex flex-col items-center gap-2">
              <CircularProgress
                value={92}
                color={COLORS[2]}
                size={100}
                strokeWidth={10}
                fontSize="18px"
              />
              <span className="text-xs font-semibold text-gray-600">Packaging</span>
            </div>

          </div>
        </div>
      </CardContent>
    </Card>
  )
}