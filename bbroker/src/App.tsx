
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { TrendingUp, DollarSign, Users, Activity } from 'lucide-react'

function App() {
  const [activeTab, setActiveTab] = useState('dashboard')

  const stats = [
    { title: 'Total Revenue', value: '$45,231.89', change: '+20.1%', icon: DollarSign },
    { title: 'Active Users', value: '2,350', change: '+180.1%', icon: Users },
    { title: 'Sales', value: '12,234', change: '+19%', icon: TrendingUp },
    { title: 'Active Now', value: '573', change: '+201', icon: Activity },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-primary">BBroker</h1>
              <nav className="hidden md:flex space-x-4">
                <Button 
                  variant={activeTab === 'dashboard' ? 'default' : 'ghost'}
                  onClick={() => setActiveTab('dashboard')}
                >
                  Dashboard
                </Button>
                <Button 
                  variant={activeTab === 'trades' ? 'default' : 'ghost'}
                  onClick={() => setActiveTab('trades')}
                >
                  Trades
                </Button>
                <Button 
                  variant={activeTab === 'portfolio' ? 'default' : 'ghost'}
                  onClick={() => setActiveTab('portfolio')}
                >
                  Portfolio
                </Button>
                <Button 
                  variant={activeTab === 'analytics' ? 'default' : 'ghost'}
                  onClick={() => setActiveTab('analytics')}
                >
                  Analytics
                </Button>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline">Login</Button>
              <Button>Sign Up</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
              <p className="text-muted-foreground">
                Welcome to BBroker - Your trading companion
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <Card key={index}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        {stat.title}
                      </CardTitle>
                      <Icon className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <p className="text-xs text-muted-foreground">
                        <span className="text-green-600">{stat.change}</span> from last month
                      </p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Feature Cards */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Quick Trade</CardTitle>
                  <CardDescription>
                    Execute trades quickly with our streamlined interface
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">Start Trading</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Market Analysis</CardTitle>
                  <CardDescription>
                    Get real-time market insights and analytics
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">View Markets</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Portfolio Management</CardTitle>
                  <CardDescription>
                    Track and manage your investment portfolio
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">Manage Portfolio</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === 'trades' && (
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Trades</h2>
            <Card>
              <CardHeader>
                <CardTitle>Trading Interface</CardTitle>
                <CardDescription>Execute and monitor your trades</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Trading interface coming soon...</p>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'portfolio' && (
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Portfolio</h2>
            <Card>
              <CardHeader>
                <CardTitle>Your Portfolio</CardTitle>
                <CardDescription>Overview of your investments</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Portfolio view coming soon...</p>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
            <Card>
              <CardHeader>
                <CardTitle>Market Analytics</CardTitle>
                <CardDescription>Advanced market analysis and insights</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Analytics dashboard coming soon...</p>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              © 2024 BBroker. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm">Privacy</Button>
              <Button variant="ghost" size="sm">Terms</Button>
              <Button variant="ghost" size="sm">Support</Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
