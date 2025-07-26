import React, { useState, useEffect } from 'react';
import { MapPin, Activity, Clock, Filter, Zap, ArrowLeft, Shield, Compass } from 'lucide-react';

interface HeroTrackerProps {
  onNavigate: (page: string) => void;
}

const HeroTracker: React.FC<HeroTrackerProps> = ({ onNavigate }) => {
  const [selectedHero, setSelectedHero] = useState('all');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const heroes = [
    {
      id: 'superman',
      name: 'Superman',
      status: 'Active',
      lastSeen: '2 minutes ago',
      location: 'Downtown Metropolis',
      coordinates: { x: 45, y: 35 },
      color: 'blue',
      activity: 'Patrol',
      confidence: 98
    },
    {
      id: 'flash',
      name: 'Flash',
      status: 'En Route',
      lastSeen: '5 minutes ago',
      location: 'Central City Bridge',
      coordinates: { x: 75, y: 60 },
      color: 'red',
      activity: 'Emergency Response',
      confidence: 89
    },
    {
      id: 'wonderwoman',
      name: 'Wonder Woman',
      status: 'Offline',
      lastSeen: '2 hours ago',
      location: 'Embassy District',
      coordinates: { x: 30, y: 45 },
      color: 'gold',
      activity: 'Diplomatic Meeting',
      confidence: 95
    },
    {
      id: 'batman',
      name: 'Batman',
      status: 'Unknown',
      lastSeen: '6 hours ago',
      location: 'Gotham City',
      coordinates: { x: 20, y: 80 },
      color: 'gray',
      activity: 'Investigation',
      confidence: 67
    }
  ];

  const recentSightings = [
    {
      time: '14:32',
      hero: 'Superman',
      location: 'Centennial Park',
      activity: 'Rescued cat from tree',
      reporter: 'Citizen Report',
      verified: true
    },
    {
      time: '14:15',
      hero: 'Flash',
      location: 'Interstate 95',
      activity: 'Prevented multi-car accident',
      reporter: 'Traffic Cam',
      verified: true
    },
    {
      time: '13:45',
      hero: 'Superman',
      location: 'LexCorp Tower',
      activity: 'Brief aerial patrol',
      reporter: 'Security Footage',
      verified: true
    },
    {
      time: '13:20',
      hero: 'Wonder Woman',
      location: 'UN Headquarters',
      activity: 'Entering diplomatic meeting',
      reporter: 'News Crew',
      verified: true
    },
    {
      time: '12:55',
      hero: 'Batman',
      location: 'Gotham Harbor',
      activity: 'Investigating warehouse',
      reporter: 'Anonymous Tip',
      verified: false
    }
  ];

  const filteredHeroes = selectedHero === 'all' 
    ? heroes 
    : heroes.filter(hero => hero.id === selectedHero);

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      {/* Back Button */}
      <button
        onClick={() => onNavigate('home')}
        className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Home</span>
      </button>

      {/* Header */}
      <header className="text-center mb-8">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <Activity className="w-8 h-8 text-green-500 animate-pulse" />
          <h1 className="text-4xl font-bold font-serif text-slate-800">Hero Tracker</h1>
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
        </div>
        <p className="text-lg text-gray-700">
          Real-time superhero activity monitoring across Metropolis and beyond
        </p>
        <div className="mt-4 flex items-center justify-center space-x-4 text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>Last Updated: {currentTime.toLocaleTimeString()}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Shield className="w-4 h-4" />
            <span>4 Heroes Tracked</span>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Map Section */}
        <section className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-800">Live Map</h2>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Filter className="w-4 h-4 text-gray-500" />
                    <select
                      value={selectedHero}
                      onChange={(e) => setSelectedHero(e.target.value)}
                      className="border border-gray-300 rounded-lg px-3 py-1 text-sm"
                    >
                      <option value="all">All Heroes</option>
                      <option value="superman">Superman</option>
                      <option value="flash">Flash</option>
                      <option value="wonderwoman">Wonder Woman</option>
                      <option value="batman">Batman</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Simplified Map */}
            <div className="relative h-96 bg-gradient-to-br from-blue-100 to-green-100 p-4">
              {/* Grid lines */}
              <div className="absolute inset-0 opacity-20">
                {[...Array(10)].map((_, i) => (
                  <div key={i}>
                    <div
                      className="absolute border-l border-gray-400"
                      style={{ left: `${i * 10}%`, height: '100%' }}
                    />
                    <div
                      className="absolute border-t border-gray-400"
                      style={{ top: `${i * 10}%`, width: '100%' }}
                    />
                  </div>
                ))}
              </div>

              {/* City landmarks */}
              <div className="absolute top-4 left-4 bg-gray-800 text-white px-2 py-1 rounded text-xs">
                Metropolis
              </div>
              <div className="absolute bottom-4 right-4 bg-gray-600 text-white px-2 py-1 rounded text-xs">
                Gotham City
              </div>

              {/* Hero markers */}
              {filteredHeroes.map((hero) => (
                <div
                  key={hero.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                  style={{ 
                    left: `${hero.coordinates.x}%`, 
                    top: `${hero.coordinates.y}%` 
                  }}
                >
                  <div className={`w-4 h-4 rounded-full border-2 border-white shadow-lg animate-pulse ${
                    hero.status === 'Active' ? 'bg-green-500' :
                    hero.status === 'En Route' ? 'bg-yellow-500' :
                    hero.status === 'Offline' ? 'bg-gray-500' :
                    'bg-red-500'
                  }`}>
                    <div className={`absolute inset-0 rounded-full animate-ping ${
                      hero.status === 'Active' ? 'bg-green-400' :
                      hero.status === 'En Route' ? 'bg-yellow-400' :
                      'bg-gray-400'
                    }`}></div>
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-black text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    <div className="font-semibold">{hero.name}</div>
                    <div className="text-xs opacity-75">{hero.location}</div>
                  </div>
                </div>
              ))}

              {/* Compass */}
              <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
                <Compass className="w-6 h-6 text-gray-600" />
              </div>
            </div>
          </div>
        </section>

        {/* Sidebar */}
        <aside className="space-y-6">
          {/* Hero Status */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-bold mb-4 text-slate-800">Hero Status</h3>
            <div className="space-y-4">
              {heroes.map((hero) => (
                <div key={hero.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${
                      hero.status === 'Active' ? 'bg-green-500 animate-pulse' :
                      hero.status === 'En Route' ? 'bg-yellow-500 animate-pulse' :
                      hero.status === 'Offline' ? 'bg-gray-500' :
                      'bg-red-500'
                    }`}></div>
                    <div>
                      <p className="font-semibold text-sm">{hero.name}</p>
                      <p className="text-xs text-gray-600">{hero.activity}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`text-xs font-semibold ${
                      hero.status === 'Active' ? 'text-green-600' :
                      hero.status === 'En Route' ? 'text-yellow-600' :
                      hero.status === 'Offline' ? 'text-gray-600' :
                      'text-red-600'
                    }`}>
                      {hero.status}
                    </p>
                    <p className="text-xs text-gray-500">{hero.lastSeen}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Sightings */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-bold mb-4 text-slate-800">Recent Sightings</h3>
            <div className="space-y-4 max-h-80 overflow-y-auto">
              {recentSightings.map((sighting, index) => (
                <div key={index} className="border-l-2 border-blue-200 pl-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-sm">{sighting.hero}</span>
                    <span className="text-xs text-gray-500">{sighting.time}</span>
                  </div>
                  <p className="text-sm text-gray-700 mb-1">{sighting.activity}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-3 h-3 text-gray-400" />
                      <span className="text-xs text-gray-600">{sighting.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      {sighting.verified ? (
                        <Shield className="w-3 h-3 text-green-500" />
                      ) : (
                        <Clock className="w-3 h-3 text-yellow-500" />
                      )}
                      <span className="text-xs text-gray-500">{sighting.reporter}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Report Sighting */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-2xl p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-bold text-blue-800">Report a Sighting</h3>
            </div>
            <p className="text-sm text-blue-700 mb-4">
              Did you see a superhero in action? Help us keep the tracker updated with your verified sightings.
            </p>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Submit Sighting Report
            </button>
            <p className="text-xs text-blue-600 mt-2 text-center">
              All reports are verified before publication
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default HeroTracker;