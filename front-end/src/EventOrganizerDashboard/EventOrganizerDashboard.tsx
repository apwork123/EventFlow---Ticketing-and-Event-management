import { useState } from "react"
import { Bell, Calendar, ChevronDown, CreditCard, Layers, LineChart, List, Mail, Menu, MessageSquare, PieChart, Plus, Settings, Users } from "lucide-react"
import { Bar, BarChart, Line, LineChart, ResponsiveContainer } from "recharts"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const data = [
  {
    name: "Jan",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Feb",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Mar",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Apr",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "May",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jun",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jul",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Aug",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Sep",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Oct",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Nov",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Dec",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
]

export default function EventOrganizerDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`bg-white w-64 min-h-screen p-4 ${isSidebarOpen ? '' : 'hidden'}`}>
        <nav>
          <ul className="space-y-2">
            <li><a href="#" className="flex items-center space-x-2 text-gray-700 hover:bg-gray-200 rounded p-2"><Layers className="h-5 w-5" /><span>Overview</span></a></li>
            <li><a href="#" className="flex items-center space-x-2 text-gray-700 hover:bg-gray-200 rounded p-2"><Calendar className="h-5 w-5" /><span>Events</span></a></li>
            <li><a href="#" className="flex items-center space-x-2 text-gray-700 hover:bg-gray-200 rounded p-2"><CreditCard className="h-5 w-5" /><span>Tickets</span></a></li>
            <li><a href="#" className="flex items-center space-x-2 text-gray-700 hover:bg-gray-200 rounded p-2"><LineChart className="h-5 w-5" /><span>Analytics</span></a></li>
            <li><a href="#" className="flex items-center space-x-2 text-gray-700 hover:bg-gray-200 rounded p-2"><Users className="h-5 w-5" /><span>Audience</span></a></li>
            <li><a href="#" className="flex items-center space-x-2 text-gray-700 hover:bg-gray-200 rounded p-2"><MessageSquare className="h-5 w-5" /><span>Feedback</span></a></li>
            <li><a href="#" className="flex items-center space-x-2 text-gray-700 hover:bg-gray-200 rounded p-2"><Settings className="h-5 w-5" /><span>Settings</span></a></li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold">Event Organizer Dashboard</h1>
          <Button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Overview Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <LineChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground">+20.1% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">3 this week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Tickets Sold</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,345</div>
              <p className="text-xs text-muted-foreground">+15% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Campaigns</CardTitle>
              <Mail className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7</div>
              <p className="text-xs text-muted-foreground">2 ending this week</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid gap-6 md:grid-cols-2 mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Revenue Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  total: {
                    label: "Revenue",
                    color: "hsl(var(--chart-1))",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <Line 
                      type="monotone"
                      dataKey="total"
                      strokeWidth={2}
                      activeDot={{
                        r: 8,
                      }}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Ticket Sales by Event</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  total: {
                    label: "Sales",
                    color: "hsl(var(--chart-2))",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <Bar dataKey="total" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Events Table */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
            <CardDescription>A list of upcoming events and their details.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Event</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Venue</TableHead>
                  <TableHead>Tickets Sold</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Summer Music Festival</TableCell>
                  <TableCell>July 15, 2023</TableCell>
                  <TableCell>Central Park</TableCell>
                  <TableCell>5,000 / 10,000</TableCell>
                  <TableCell><span className="px-2 py-1 rounded-full text-xs font-semibold bg-green-200 text-green-800">Open</span></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Tech Conference 2023</TableCell>
                  <TableCell>August 5, 2023</TableCell>
                  <TableCell>Convention Center</TableCell>
                  <TableCell>2,500 / 3,000</TableCell>
                  <TableCell><span className="px-2 py-1 rounded-full text-xs font-semibold bg-yellow-200 text-yellow-800">Almost Sold Out</span></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Food & Wine Expo</TableCell>
                  <TableCell>September 10, 2023</TableCell>
                  <TableCell>City Hall</TableCell>
                  <TableCell>1,000 / 5,000</TableCell>
                  <TableCell><span className="px-2 py-1 rounded-full text-xs font-semibold bg-green-200 text-green-800">Open</span></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Quick Actions</h2>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Actions <ChevronDown className="ml-2 h-4 w-4" /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Plus className="mr-2 h-4 w-4" />
                <span>Create New Event</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Mail className="mr-2 h-4 w-4" />
                <span>Send Promotion</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <PieChart className="mr-2 h-4 w-4" />
                <span>View Reports</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest updates and actions</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mr-3">
                  <CreditCard className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-medium">New ticket sale</p>
                  <p className="text-xs text-gray-500">Summer Music Festival - 2 tickets</p>
                </div>
                <span className="text-xs text-gray-500 ml-auto">2 min ago</span>
              </li>
              <li className="flex items-center">
                <span className="w-9 h-9 flex items-center justify-center rounded-full bg-green-100 text-green-600 mr-3">
                  <MessageSquare className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-medium">New review</p>
                  <p className="text-xs text-gray-500">Tech Conference 2023 - 5 star rating</p>
                </div>
                <span className="text-xs text-gray-500 ml-auto">1 hour ago</span>
              </li>
              <li className="flex items-center">
                <span className="w-9 h-9 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-600 mr-3">
                  <Bell className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-medium">Event reminder</p>
                  <p className="text-xs text-gray-500">Food & Wine Expo starts in 3 days</p>
                </div>
                <span className="text-xs text-gray-500 ml-auto">3 hours ago</span>
              </li>
            
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}