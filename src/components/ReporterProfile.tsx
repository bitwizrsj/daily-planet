import React from 'react';
import { Award, Calendar, MapPin, ArrowLeft, ExternalLink } from 'lucide-react';

interface ReporterProfileProps {
  reporter: string;
  onNavigate: (page: string) => void;
}

const ReporterProfile: React.FC<ReporterProfileProps> = ({ reporter, onNavigate }) => {
  const reporterData = {
    lois: {
      name: "Lois Lane",
      title: "Senior Investigative Reporter",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      bio: "Lois Lane is The Daily Planet's most decorated investigative journalist, with over a decade of experience covering the most dangerous and important stories of our time. Her fearless reporting on Superman, LexCorp, and government corruption has earned her three Pulitzer Prizes and the respect of readers worldwide.",
      quote: "Truth is non-negotiable. In a world of extraordinary people and events, ordinary journalism isn't enough.",
      joined: "January 2015",
      location: "Metropolis, NY",
      awards: ["Pulitzer Prize (2023, 2024, 2025)", "Edward R. Murrow Award", "Society of Professional Journalists Ethics Award"],
      specialties: ["Investigative Journalism", "Superhero Affairs", "Corporate Corruption", "Government Accountability"],
      recentArticles: [
        {
          title: "Superman Saves Metropolis from Brainiac's Attack",
          date: "March 15, 2025",
          category: "Breaking News"
        },
        {
          title: "Inside LexCorp's Secret Military Contracts",
          date: "March 10, 2025",
          category: "Investigation"
        },
        {
          title: "The Real Cost of Superhero Intervention",
          date: "March 5, 2025",
          category: "Analysis"
        },
        {
          title: "Exclusive: Superman's Origin Story Revealed",
          date: "February 28, 2025",
          category: "Exclusive"
        }
      ]
    },
    clark: {
      name: "Clark Kent",
      title: "Staff Reporter",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg",
      bio: "Clark Kent brings a unique perspective to The Daily Planet's newsroom, combining small-town values with big-city journalism. Originally from Smallville, Kansas, Clark specializes in human interest stories and has an uncanny ability to be in the right place at the right time for breaking news.",
      quote: "Every story matters because every person matters. Behind every headline is a human being with hopes, fears, and dreams.",
      joined: "September 2020",
      location: "Metropolis, NY (Originally Smallville, KS)",
      awards: ["Associated Press Feature Writing Award", "National Headliner Award", "Kansas Press Association Honor"],
      specialties: ["Human Interest", "Rural Issues", "Environmental Reporting", "Breaking News"],
      recentArticles: [
        {
          title: "Smallville Farmers Adapt to Climate Change",
          date: "March 12, 2025",
          category: "Environment"
        },
        {
          title: "Wayne Enterprises Clean Energy Initiative",
          date: "March 8, 2025",
          category: "Business"
        },
        {
          title: "Metropolis Food Bank Feeds Record Numbers",
          date: "March 3, 2025",
          category: "Human Interest"
        },
        {
          title: "The Heroes We Don't See: First Responders",
          date: "February 25, 2025",
          category: "Community"
        }
      ]
    },
    cat: {
      name: "Cat Grant",
      title: "Entertainment & Celebrity Reporter",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
      bio: "Cat Grant is The Daily Planet's premier entertainment and celebrity correspondent, with insider access to Hollywood's biggest stars and exclusive coverage of the superhero celebrity phenomenon. Her sharp wit and glamorous lifestyle make her one of Metropolis's most recognizable media personalities.",
      quote: "In a world where heroes walk among us, the line between news and entertainment has never been more blurred—or more fascinating.",
      joined: "March 2018",
      location: "Metropolis, NY",
      awards: ["Entertainment Journalists Guild Award", "Celebrity Access Media Prize", "Metropolis Media Personality of the Year"],
      specialties: ["Celebrity News", "Entertainment Industry", "Fashion", "Pop Culture"],
      recentArticles: [
        {
          title: "Flash Breaks Sound Barrier Helping Coastal City",
          date: "March 14, 2025",
          category: "Heroes"
        },
        {
          title: "Wonder Woman's UN Speech: Fashion and Diplomacy",
          date: "March 9, 2025",
          category: "Style"
        },
        {
          title: "Metropolis Film Festival Preview",
          date: "March 2, 2025",
          category: "Entertainment"
        },
        {
          title: "The Social Media Hero: How Superman Uses Instagram",
          date: "February 20, 2025",
          category: "Social Media"
        }
      ]
    }
  };

  const data = reporterData[reporter as keyof typeof reporterData];

  if (!data) {
    return <div>Reporter not found</div>;
  }

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      {/* Back Button */}
      <button
        onClick={() => onNavigate('home')}
        className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Home</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Info */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden sticky top-8">
            <div className="relative h-48 bg-gradient-to-r from-slate-800 to-slate-600">
              <img
                src={data.image}
                alt={data.name}
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-32 h-32 rounded-full border-4 border-white object-cover"
              />
            </div>
            
            <div className="pt-20 p-6 text-center">
              <h1 className="text-2xl font-bold text-slate-800 mb-2">{data.name}</h1>
              <p className="text-gray-600 mb-4">{data.title}</p>
              
              <div className="space-y-3 text-sm text-gray-600 mb-6">
                <div className="flex items-center justify-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>Joined {data.joined}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>{data.location}</span>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-semibold mb-3">Specialties</h3>
                <div className="flex flex-wrap gap-2">
                  {data.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Bio */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-slate-800 font-serif">Biography</h2>
            <p className="text-gray-800 leading-relaxed mb-6">{data.bio}</p>
            
            <blockquote className="border-l-4 border-blue-500 pl-6 italic text-lg text-slate-700 bg-blue-50 p-4 rounded-r-lg">
              "{data.quote}"
            </blockquote>
          </section>

          {/* Awards */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center space-x-2 mb-6">
              <Award className="w-6 h-6 text-yellow-500" />
              <h2 className="text-2xl font-bold text-slate-800 font-serif">Awards & Recognition</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.awards.map((award, index) => (
                <div
                  key={index}
                  className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-center space-x-3"
                >
                  <Award className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                  <span className="text-sm font-medium text-yellow-800">{award}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Recent Articles */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-slate-800 font-serif">Recent Articles</h2>
            <div className="space-y-4">
              {data.recentArticles.map((article, index) => (
                <article
                  key={index}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer group"
                  onClick={() => onNavigate('article')}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">
                          {article.category}
                        </span>
                        <span className="text-sm text-gray-500">{article.date}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                        {article.title}
                      </h3>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0 ml-4" />
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section className="bg-gradient-to-r from-slate-800 to-slate-600 rounded-2xl shadow-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4 font-serif">Contact {data.name.split(' ')[0]}</h2>
            <p className="text-gray-200 mb-6">
              Have a story tip or want to get in touch? {data.name.split(' ')[0]} is always looking for compelling stories that matter to our readers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-slate-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Send Story Tip
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-800 transition-colors">
                Schedule Interview
              </button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default ReporterProfile;