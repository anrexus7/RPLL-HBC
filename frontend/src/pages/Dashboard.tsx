import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, PieChart, Pie, Cell 
} from 'recharts';
import { DollarSign, Share2, ThumbsUp, Star } from 'lucide-react';

// --- MOCK DATA ---
const barData = [
  { name: 'JAN', '2019': 30, '2020': 40 },
  { name: 'FEB', '2019': 20, '2020': 35 },
  { name: 'MAR', '2019': 45, '2020': 25 },
  { name: 'APR', '2019': 30, '2020': 15 },
  { name: 'MAY', '2019': 40, '2020': 30 },
  { name: 'JUNE', '2019': 25, '2020': 48 },
  { name: 'JULY', '2019': 45, '2020': 20 },
  { name: 'AUG', '2019': 30, '2020': 25 },
  { name: 'SEP', '2019': 40, '2020': 15 },
];

const areaData = [
  { name: '1', uv: 20, pv: 10 },
  { name: '2', uv: 40, pv: 20 },
  { name: '3', uv: 30, pv: 45 },
  { name: '4', uv: 50, pv: 20 },
  { name: '5', uv: 30, pv: 55 },
  { name: '6', uv: 45, pv: 30 },
];

const pieData = [
  { name: 'Completed', value: 45 },
  { name: 'Remaining', value: 55 },
];

const COLORS = ['#db2777', '#fbcfe8'];

export default function Dashboard() {
  return (
    <>
      {/* TOP CARDS */}
      <div className="grid grid-cols-4 gap-6 mb-6">
        <div className="bg-pink-600 text-white rounded-xl p-6 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="text-sm font-medium text-pink-100">Earning</span>
            <div className="bg-white/20 p-1 rounded-full"><DollarSign size={16} /></div>
          </div>
          <div className="text-3xl font-bold mt-4">$ 628</div>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="text-sm font-medium text-gray-500">Share</span>
            <Share2 size={18} className="text-pink-500" />
          </div>
          <div className="text-3xl font-bold mt-4">2434</div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="text-sm font-medium text-gray-500">Likes</span>
            <ThumbsUp size={18} className="text-pink-500" />
          </div>
          <div className="text-3xl font-bold mt-4">1259</div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="text-sm font-medium text-gray-500">Rating</span>
            <Star size={18} className="text-pink-500" />
          </div>
          <div className="text-3xl font-bold mt-4">8,5</div>
        </div>
      </div>

      {/* BOTTOM SECTION LAYOUT */}
      <div className="grid grid-cols-3 gap-6">
        
        {/* KIRI (Bar Chart & Area Chart + Calendar) */}
        <div className="col-span-2 space-y-6">
          {/* BAR CHART */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-semibold text-gray-600">Result</h3>
              <button className="bg-pink-500 text-white px-4 py-1 text-sm rounded-full hover:bg-pink-600 transition">
                Check Now
              </button>
            </div>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#888' }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#888' }} />
                  <Tooltip cursor={{fill: 'transparent'}} />
                  <Bar dataKey="2019" fill="#fbcfe8" radius={[2, 2, 0, 0]} barSize={12} />
                  <Bar dataKey="2020" fill="#db2777" radius={[2, 2, 0, 0]} barSize={12} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-end gap-4 mt-2 text-xs text-gray-400">
              <div className="flex items-center gap-1"><div className="w-3 h-3 bg-pink-200 rounded-sm"></div>2019</div>
              <div className="flex items-center gap-1"><div className="w-3 h-3 bg-pink-600 rounded-sm"></div>2020</div>
            </div>
          </div>

          {/* AREA CHART & CALENDAR (MOCK) */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col justify-between col-span-1">
              <div className="mb-2">
                 <div className="flex items-center gap-2 text-xs text-gray-500 mb-1"><div className="w-2 h-2 rounded-full bg-pink-500"></div> Lorem Ipsum</div>
                 <div className="flex items-center gap-2 text-xs text-gray-500"><div className="w-2 h-2 rounded-full bg-pink-800"></div> Dolor Amet</div>
              </div>
              <div className="h-32 w-full mt-auto">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={areaData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#db2777" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#db2777" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="uv" stroke="#db2777" fillOpacity={1} fill="url(#colorUv)" strokeWidth={2} />
                    <Area type="monotone" dataKey="pv" stroke="#9d174d" fill="transparent" strokeWidth={2} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* MOCK CALENDAR */}
            <div className="bg-white p-6 rounded-xl shadow-sm text-xs text-gray-500 col-span-1">
              <div className="grid grid-cols-7 gap-y-3 text-center mb-2 font-medium">
                <div>S</div><div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div>
              </div>
              <div className="grid grid-cols-7 gap-y-3 text-center">
                {[...Array(30)].map((_, i) => {
                  const day = i + 1;
                  const isSelected = day === 25;
                  const isHighlightDark = day === 3 || day === 10 || day === 11;
                  
                  let classes = "w-6 h-6 mx-auto flex items-center justify-center rounded-md";
                  if (isSelected) classes += " bg-pink-500 text-white font-bold";
                  else if (isHighlightDark) classes += " bg-pink-900 text-white";
                  
                  return <div key={i} className={classes}>{day}</div>;
                })}
              </div>
            </div>
          </div>
        </div>

        {/* KANAN (Doughnut Chart & List) */}
        <div className="col-span-1 bg-white p-6 rounded-xl shadow-sm flex flex-col items-center">
          <div className="relative w-48 h-48 mb-6">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <span className="text-2xl font-bold text-gray-700">45%</span>
            </div>
          </div>

          <div className="w-full space-y-4 mb-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="text-center text-sm text-gray-400 border-b border-gray-100 pb-2">
                Lorem ipsum
              </div>
            ))}
          </div>

          <button className="mt-auto w-full bg-pink-500 text-white py-3 rounded-lg font-medium hover:bg-pink-600 transition shadow-md shadow-pink-200">
            Check Now
          </button>
        </div>
      </div>
    </>
  );
}