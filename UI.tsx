import React, { useState, useEffect } from 'react';
import { MapPin, TrendingUp, Leaf, AlertCircle, CheckCircle, Clock, Navigation } from 'lucide-react';

export default function RPMHireAI() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [simulationStep, setSimulationStep] = useState(0);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    if (simulationStep > 0 && simulationStep < 5) {
      const timer = setTimeout(() => {
        setSimulationStep(simulationStep + 1);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [simulationStep]);

  const startSimulation = () => {
    setSimulationStep(1);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">RPM Hire AI</h1>
                <p className="text-sm text-slate-600">Smart Equipment Deployment Platform</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-xs text-slate-500">Carbon Saved Today</div>
                <div className="text-lg font-bold text-green-600">247 kg CO₂</div>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-1">
            {['dashboard', 'live-map', 'analytics'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-medium capitalize transition-colors ${
                  activeTab === tab
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Notification */}
      {showNotification && (
        <div className="fixed top-20 right-6 bg-white border-l-4 border-green-500 shadow-lg rounded-lg p-4 max-w-sm z-50 animate-slideIn">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
            <div>
              <div className="font-semibold text-slate-900">AI Processing Started</div>
              <div className="text-sm text-slate-600">Analyzing optimal deployment strategy...</div>
            </div>
          </div>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-6 py-8">
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm font-medium text-slate-600">Active Equipment</div>
                  <TrendingUp className="w-4 h-4 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-slate-900">847</div>
                <div className="text-xs text-green-600 mt-1">↑ 12% utilization</div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm font-medium text-slate-600">Avg. Response Time</div>
                  <Clock className="w-4 h-4 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-slate-900">23 min</div>
                <div className="text-xs text-green-600 mt-1">↓ 35% faster</div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm font-medium text-slate-600">CO₂ Reduction</div>
                  <Leaf className="w-4 h-4 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-slate-900">18.4%</div>
                <div className="text-xs text-green-600 mt-1">↓ 2.1 tonnes/week</div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm font-medium text-slate-600">Cost Savings</div>
                  <Navigation className="w-4 h-4 text-orange-600" />
                </div>
                <div className="text-3xl font-bold text-slate-900">$4.2k</div>
                <div className="text-xs text-green-600 mt-1">↓ This week</div>
              </div>
            </div>

            {/* AI Recommendation Engine Demo */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl shadow-lg p-8 text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">AI Recommendation Engine</h2>
                  <p className="text-blue-100">Real-time equipment deployment optimization</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-lg p-6 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-sm font-medium text-blue-100 mb-3">Current Request</div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-white/80">Equipment:</span>
                        <span className="font-semibold">Crash Barrier 1</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/80">From:</span>
                        <span className="font-semibold">Box Hill</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/80">To:</span>
                        <span className="font-semibold">Doncaster</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/80">Due:</span>
                        <span className="font-semibold">1 OCT 2025, 12:00</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm font-medium text-blue-100 mb-3">AI Analysis Status</div>
                    <div className="space-y-3">
                      {[
                        { label: 'Agent Availability', done: simulationStep >= 1 },
                        { label: 'Route Optimization', done: simulationStep >= 2 },
                        { label: 'Carbon Calculation', done: simulationStep >= 3 },
                        { label: 'Assignment Complete', done: simulationStep >= 4 }
                      ].map((step, i) => (
                        <div key={i} className="flex items-center gap-3">
                          {step.done ? (
                            <CheckCircle className="w-5 h-5 text-green-300" />
                          ) : (
                            <div className="w-5 h-5 border-2 border-white/30 rounded-full"></div>
                          )}
                          <span className={step.done ? 'font-medium' : 'text-white/60'}>
                            {step.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {simulationStep === 0 && (
                <button
                  onClick={startSimulation}
                  className="w-full bg-white text-blue-600 font-semibold py-4 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Run AI Optimization
                </button>
              )}

              {simulationStep >= 4 && (
                <div className="bg-green-500/20 border border-green-300/30 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-300 mt-1" />
                    <div className="flex-1">
                      <div className="font-bold text-lg mb-2">Optimal Assignment Found</div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <div className="text-blue-100 mb-1">Assigned Agent</div>
                          <div className="font-semibold">John Smith</div>
                          <div className="text-xs text-blue-200">Mont Albert (4.2km away)</div>
                        </div>
                        <div>
                          <div className="text-blue-100 mb-1">Optimized Route</div>
                          <div className="font-semibold">12.8 km</div>
                          <div className="text-xs text-green-300">↓ 3.4 km saved vs standard</div>
                        </div>
                        <div>
                          <div className="text-blue-100 mb-1">Carbon Impact</div>
                          <div className="font-semibold">-0.87 kg CO₂</div>
                          <div className="text-xs text-green-300">18% reduction</div>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-white/20">
                        <div className="font-medium mb-2">Work Order Created: WOT100246</div>
                        <div className="text-sm text-blue-100">Notification sent to John Smith via mobile app</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Recent Deployments</h3>
              <div className="space-y-3">
                {[
                  { id: 'WOT100245', item: 'Electronic Signage #47', from: 'Richmond', to: 'Hawthorn', agent: 'Sarah Johnson', status: 'completed' },
                  { id: 'WOT100244', item: 'Steel Barrier #23', from: 'Footscray', to: 'Sunshine', agent: 'Mike Chen', status: 'in-progress' },
                  { id: 'WOT100243', item: 'Message Board #12', from: 'Caulfield', to: 'Oakleigh', agent: 'Emma Wilson', status: 'completed' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className={`w-2 h-2 rounded-full ${item.status === 'completed' ? 'bg-green-500' : 'bg-blue-500'}`}></div>
                      <div>
                        <div className="font-semibold text-slate-900">{item.item}</div>
                        <div className="text-sm text-slate-600">{item.from} → {item.to}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-slate-900">{item.agent}</div>
                      <div className="text-xs text-slate-500">{item.id}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'live-map' && (
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Live Equipment Tracking</h2>
            <div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center relative overflow-hidden">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 500'%3E%3Crect fill='%23e2e8f0' width='800' height='500'/%3E%3Cg fill='%2394a3b8'%3E%3Cpath d='M0 250h800M400 0v500M200 0v500M600 0v500M0 125h800M0 375h800'/%3E%3C/g%3E%3Ccircle cx='400' cy='250' r='8' fill='%233b82f6'/%3E%3Ccircle cx='350' cy='200' r='6' fill='%2310b981'/%3E%3Ccircle cx='480' cy='280' r='6' fill='%23f59e0b'/%3E%3Ctext x='400' y='270' text-anchor='middle' fill='%23334155' font-size='12' font-family='sans-serif'%3EBox Hill%3C/text%3E%3C/svg%3E" 
                alt="Map"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium">Active Work Orders (24)</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">Available Equipment (157)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-sm font-medium">In Transit (18)</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Sustainability Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <div className="text-4xl font-bold text-green-600">18.4%</div>
                  <div className="text-sm text-slate-600 mt-2">Carbon Reduction</div>
                  <div className="text-xs text-slate-500 mt-1">vs. previous quarter</div>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="text-4xl font-bold text-blue-600">847 km</div>
                  <div className="text-sm text-slate-600 mt-2">Distance Saved</div>
                  <div className="text-xs text-slate-500 mt-1">AI-optimized routes</div>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-lg">
                  <div className="text-4xl font-bold text-purple-600">2.1 t</div>
                  <div className="text-sm text-slate-600 mt-2">CO₂ Prevented</div>
                  <div className="text-xs text-slate-500 mt-1">this month</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Equipment Health Scores</h3>
              <div className="space-y-4">
                {[
                  { name: 'Crash Barriers', score: 87, status: 'good' },
                  { name: 'Electronic Signage', score: 92, status: 'excellent' },
                  { name: 'Steel Barriers', score: 74, status: 'fair' },
                  { name: 'Message Boards', score: 88, status: 'good' }
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-slate-700">{item.name}</span>
                      <span className="text-sm font-bold text-slate-900">{item.score}/100</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          item.score >= 85 ? 'bg-green-500' : item.score >= 70 ? 'bg-blue-500' : 'bg-orange-500'
                        }`}
                        style={{ width: `${item.score}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}