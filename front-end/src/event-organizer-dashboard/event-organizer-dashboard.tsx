import './event-organizer-dashboard.css'
import { useState } from "react"
import { Bell, Calendar, ChevronDown, Menu, Plus, Settings, Users } from "lucide-react"
import { Bar, BarChart, Line, LineChart, ResponsiveContainer } from "recharts"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Mock data for charts
const revenueData = [
  { name: "Jan", total: 1500 },
  { name: "Feb", total: 2300 },
  { name: "Mar", total: 3200 },
  { name: "Apr", total: 4500 },
  { name: "May", total: 4900 },
  { name: "Jun", total: 5700 },
]

const ticketSalesData = [
  { name: "Mon", sales: 120 },
  { name: "Tue", sales: 200 },
  { name: "Wed", sales: 150 },
  { name: "Thu", sales: 300 },
  { name: "Fri", sales: 400 },
  { name: "Sat", sales: 500 },
  { name: "Sun", sales: 350 },
]

export default function EventOrganizerDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-[#01060e] text-gray-100">
      {/* Sidebar */}
      <aside className={`bg-gray-800 w-64 min-h-screen flex flex-col transition-all duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:relative z-50`}>
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h1 className="text-xl font-bold text-gray-100">EventFlow</h1>
          <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-gray-400 hover:text-gray-100">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <li><Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-gray-100 hover:bg-gray-700"><Calendar className="mr-2 h-4 w-4" /> Dashboard</Button></li>
            <li><Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-gray-100 hover:bg-gray-700"><Users className="mr-2 h-4 w-4" /> Events</Button></li>
            <li><Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-gray-100 hover:bg-gray-700"><Bell className="mr-2 h-4 w-4" /> Notifications</Button></li>
            <li><Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-gray-100 hover:bg-gray-700"><Settings className="mr-2 h-4 w-4" /> Settings</Button></li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 lg:px-8 overflow-auto">
        <div className="max-w-7xl mx-auto">
          {/* Top Bar */}
          <div className="flex justify-between items-center mb-6">
            <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(true)} className="lg:hidden text-gray-400 hover:text-gray-100">
              <Menu className="h-6 w-6" />
            </Button>
            <h1 className="text-2xl font-semibold text-gray-100">Dashboard</h1>
            <div className="flex items-center space-x-4">
              <Input type="search" placeholder="Search..." className="w-full max-w-[200px] bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-400" />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder-user.jpg" alt="@johndoe" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-gray-800 border-gray-700" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none text-gray-100">John Doe</p>
                      <p className="text-xs leading-none text-gray-400">john@example.com</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-gray-700" />
                  <DropdownMenuItem className="text-gray-300 hover:text-gray-100 hover:bg-gray-700">Profile</DropdownMenuItem>
                  <DropdownMenuItem className="text-gray-300 hover:text-gray-100 hover:bg-gray-700">Settings</DropdownMenuItem>
                  <DropdownMenuItem className="text-gray-300 hover:text-gray-100 hover:bg-gray-700">Log out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Overview Cards */}
          <div className="grid gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">Total Events</CardTitle>
                <Calendar className="h-4 w-4 text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-100">12</div>
                <p className="text-xs text-gray-400">+2 from last month</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">Tickets Sold</CardTitle>
                <Users className="h-4 w-4 text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-100">1,234</div>
                <p className="text-xs text-gray-400">+15% from last week</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">Revenue</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-gray-400"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-100">$45,231.89</div>
                <p className="text-xs text-gray-400">+20.1% from last month</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">Active Users</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-gray-400"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-100">573</div>
                <p className="text-xs text-gray-400">+201 since last hour</p>
              </CardContent>
            </Card>
          </div>

          {/* Charts */}
          <div className="grid gap-6 mb-8 md:grid-cols-2">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-100">Revenue Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    total: {
                      label: "Revenue",
                      color: "hsl(var(--chart-1))",
                    },
                  }}
                  className="h-[200px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={revenueData}>
                      <Line type="monotone" dataKey="total" stroke="var(--color-total)" strokeWidth={2} />
                      <ChartTooltip content={<ChartTooltipContent />} />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-100">Ticket Sales</CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    sales: {
                      label: "Sales",
                      color: "hsl(var(--chart-2))",
                    },
                  }}
                  className="h-[200px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={ticketSalesData}>
                      <Bar dataKey="sales" fill="var(--color-sales)" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>

          {/* Upcoming Events */}
          <Card className="mb-8 bg-gray-800 border-gray-700">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-gray-100">Upcoming Events</CardTitle>
                <Button size="sm" className="bg-gray-700 text-gray-100 hover:bg-gray-600">
                  <Plus className="mr-2 h-4 w-4" /> Add Event
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-400">
                  <thead className="text-xs text-gray-400 uppercase bg-gray-700">
                    <tr>
                      <th scope="col" className="px-6 py-3">Event Name</th>
                      <th scope="col" className="px-6 py-3">Date</th>
                      <th scope="col" className="px-6 py-3">Venue</th>
                      <th scope="col" className="px-6 py-3">Status</th>
                      <th scope="col" className="px-6 py-3">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-700">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-100 whitespace-nowrap">
                        Summer Music Festival
                      </th>
                      <td className="px-6 py-4">July 15, 2023</td>
                      <td className="px-6 py-4">Central Park</td>
                      <td className="px-6 py-4">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-800 text-green-100">
                          Open
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <Button variant="outline" size="sm" className="border-gray-600 text-#01060e hover:bg-gray-700">Manage</Button>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-100 whitespace-nowrap">
                        Tech Conference 2023
                      </th>
                      <td className="px-6 py-4">August 5, 2023</td>
                      <td className="px-6 py-4">Convention Center</td>
                      <td className="px-6 py-4">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-800 text-yellow-100">
                          Limited
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <Button variant="outline" size="sm" className="border-gray-600 text-#01060e hover:bg-gray-700">Manage</Button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="px-6 py-4 font-medium text-gray-100 whitespace-nowrap">
                        Charity Gala Dinner
                      </th>
                      <td className="px-6 py-4">September 20, 2023</td>
                      <td className="px-6 py-4">Grand Hotel</td>
                      <td className="px-6 py-4">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-800 text-red-100">
                          Sold Out
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <Button variant="outline" size="sm" className="border-gray-600 text-#01060e hover:bg-gray-700">Manage</Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-gray-100">Recent Activity</CardTitle>
              <CardDescription className="text-gray-400">Latest updates and actions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="flex items-center">
                  <span className="relative flex shrink-0 overflow-hidden rounded-full h-10 w-10">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" alt="@johndoe" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                  </span>
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none text-gray-100">John Doe</p>
                    <p className="text-sm text-gray-400">
                      Created a new event: Summer Music Festival
                    </p>
                  </div>
                  <div className="ml-auto font-medium text-gray-400">Just now</div>
                </div>
                <div className="flex items-center">
                  <span className="relative flex shrink-0 overflow-hidden rounded-full h-10 w-10">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" alt="@janedoe" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                  </span>
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none text-gray-100">Jane Doe</p>
                    <p className="text-sm text-gray-400">
                      Updated ticket prices for Tech Conference 2023
                    </p>
                  </div>
                  <div className="ml-auto font-medium text-gray-400">5 minutes ago</div>
                </div>
                <div className="flex items-center">
                  <span className="relative flex shrink-0 overflow-hidden rounded-full h-10 w-10">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" alt="@bobsmith" />
                      <AvatarFallback>BS</AvatarFallback>
                    </Avatar>
                  </span>
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none text-gray-100">Bob Smith</p>
                    <p className="text-sm text-gray-400">
                      Cancelled registration for Charity Gala Dinner
                    </p>
                  </div>
                  <div className="ml-auto font-medium text-gray-400">1 hour ago</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}