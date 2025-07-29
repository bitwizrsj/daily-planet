import React, { useState } from 'react';
import { Eye, AlertTriangle, FileText, Clock, Users, ArrowLeft, Shield } from 'lucide-react';

interface LexWatchProps {
  onNavigate: (page: string) => void;
}

const LexWatch: React.FC<LexWatchProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('investigations');

  const investigations = [
    {
      title: "LexCorp Satellite Network: Hidden Military Applications",
      status: "Active Investigation",
      author: "Lois Lane",
      publishDate: "March 10, 2025",
      excerpt: "Exclusive documents reveal LexCorp's civilian satellites are equipped with advanced surveillance and weapons systems.",
      image: "https://images.pexels.com/photos/586019/pexels-photo-586019.jpeg",
      severity: "High"
    },
    {
      title: "The Kryptonite Files: How Lex Luthor Weaponizes Alien Technology",
      status: "Ongoing",
      author: "Clark Kent",
      publishDate: "March 5, 2025",
      excerpt: "Investigation into LexCorp's acquisition and militarization of Kryptonian artifacts found after Superman's first appearance.",
      image: "https://images.pexels.com/photos/2156/sky-earth-space-working.jpg",
      severity: "Critical"
    },
    {
      title: "Government Contracts: LexCorp's $2.3 Billion Pentagon Deal",
      status: "Under Review",
      author: "Cat Grant",
      publishDate: "February 28, 2025",
      excerpt: "Analysis of classified contracts shows LexCorp developing 'superhuman countermeasures' for the Department of Defense.",
      image: "https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg",
      severity: "High"
    }
  ];

  const timeline = [
    {
      date: "March 15, 2025",
      event: "LexCorp satellite malfunction",
      description: "Mysterious failure of LexCorp surveillance satellite coincides with Superman sighting",
      type: "incident"
    },
    {
      date: "March 10, 2025",
      event: "Daily Planet publishes satellite exposé",
      description: "Lois Lane reveals hidden military applications in LexCorp's civilian satellite network",
      type: "publication"
    },
    {
      date: "February 20, 2025",
      event: "Kryptonite acquisition confirmed",
      description: "Sources confirm LexCorp has been collecting and studying Kryptonian artifacts",
      type: "evidence"
    },
    {
      date: "January 15, 2025",
      event: "Pentagon contract signed",
      description: "$2.3 billion defense contract for 'enhanced security measures' approved",
      type: "contract"
    },
    {
      date: "December 2024",
      event: "Anti-Superman rhetoric increases",
      description: "Lex Luthor begins public campaign questioning Superman's motives",
      type: "statement"
    }
  ];

  const team = [
    {
      name: "Lois Lane",
      role: "Lead Investigator",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      expertise: "Corporate Corruption, Government Oversight"
    },
    {
      name: "Clark Kent",
      role: "Research Specialist",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg",
      expertise: "Technology, Environmental Impact"
    },
    {
      name: "Jimmy Olsen",
      role: "Data Analyst",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
      expertise: "Financial Records, Digital Forensics"
    }
  ];

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
      <header className="text-center mb-12">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <Eye className="w-8 h-8 text-red-600" />
          <h1 className="text-4xl font-bold font-serif text-slate-800">LexWatch</h1>
        </div>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          Investigating LexCorp's activities and holding Lex Luthor accountable through fearless journalism
        </p>
        <div className="mt-6 bg-red-50 border border-red-200 rounded-sm p-4 max-w-2xl mx-auto">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            <p className="text-red-800 font-semibold">Active Investigations: 12</p>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap justify-center mb-8 border-b border-gray-200">
        <button
          onClick={() => setActiveTab('investigations')}
          className={`px-6 py-3 font-semibold border-b-2 transition-colors ${
            activeTab === 'investigations'
              ? 'border-red-600 text-red-600'
              : 'border-transparent text-gray-600 hover:text-red-600'
          }`}
        >
          Active Investigations
        </button>
        <button
          onClick={() => setActiveTab('timeline')}
          className={`px-6 py-3 font-semibold border-b-2 transition-colors ${
            activeTab === 'timeline'
              ? 'border-red-600 text-red-600'
              : 'border-transparent text-gray-600 hover:text-red-600'
          }`}
        >
          Timeline
        </button>
        <button
          onClick={() => setActiveTab('team')}
          className={`px-6 py-3 font-semibold border-b-2 transition-colors ${
            activeTab === 'team'
              ? 'border-red-600 text-red-600'
              : 'border-transparent text-gray-600 hover:text-red-600'
          }`}
        >
          Investigation Team
        </button>
      </div>

      {/* Active Investigations */}
      {activeTab === 'investigations' && (
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {investigations.map((investigation, index) => (
              <article
                key={index}
                className="bg-white rounded-sm shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => onNavigate('article')}
              >
                <img
                  src={investigation.image}
                  alt={investigation.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      investigation.severity === 'Critical'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-orange-100 text-orange-800'
                    }`}>
                      {investigation.severity}
                    </span>
                    <span className="text-sm text-gray-500">{investigation.status}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-3 text-slate-800 hover:text-red-600 transition-colors">
                    {investigation.title}
                  </h3>
                  
                  <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                    {investigation.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>By {investigation.author}</span>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{investigation.publishDate}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Timeline */}
      {activeTab === 'timeline' && (
        <section>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center font-serif text-slate-800">
              LexCorp Investigation Timeline
            </h2>
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      item.type === 'incident' ? 'bg-red-100 text-red-600' :
                      item.type === 'publication' ? 'bg-blue-100 text-blue-600' :
                      item.type === 'evidence' ? 'bg-orange-100 text-orange-600' :
                      item.type === 'contract' ? 'bg-green-100 text-green-600' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      {item.type === 'incident' && <AlertTriangle className="w-6 h-6" />}
                      {item.type === 'publication' && <FileText className="w-6 h-6" />}
                      {item.type === 'evidence' && <Shield className="w-6 h-6" />}
                      {item.type === 'contract' && <FileText className="w-6 h-6" />}
                      {item.type === 'statement' && <Users className="w-6 h-6" />}
                    </div>
                  </div>
                  
                  <div className="flex-1 bg-white rounded-sm shadow-md p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-slate-800">{item.event}</h3>
                      <span className="text-sm text-gray-500">{item.date}</span>
                    </div>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Team */}
      {activeTab === 'team' && (
        <section>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center font-serif text-slate-800">
              LexWatch Investigation Team
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-white rounded-sm shadow-lg p-6 text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold mb-2 text-slate-800">{member.name}</h3>
                  <p className="text-red-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-sm text-gray-700">{member.expertise}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-sm p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-red-800">Submit Anonymous Tips</h3>
              <p className="text-red-700 mb-6">
                Have information about LexCorp's activities? Our secure tip line protects whistleblowers and sources.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-red-600 text-white px-8 py-3 rounded-sm font-semibold hover:bg-red-700 transition-colors">
                  Submit Secure Tip
                </button>
                <button className="border border-red-600 text-red-600 px-8 py-3 rounded-sm font-semibold hover:bg-red-600 hover:text-white transition-colors">
                  Download Secure App
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default LexWatch;