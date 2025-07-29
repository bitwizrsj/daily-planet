import React from 'react';
import {
  Clock,
  MapPin,
  TrendingUp,
  Activity,
  AlertTriangle,
  Globe,
  Camera,
  Star,
  Users,
  Shield,
  Zap,
  BookOpen,
  Radio,
  Calendar,
  Award
} from 'lucide-react';

const Homepage: React.FC = () => {
  const heroStory = {
    title: "LOOK UP IT'S SUPERMAN",
    subtitle:
      'Exclusive: Inside the 6-hour siege that nearly destroyed the city',
    author: 'Lois Lane',
    time: '2 hours ago',
    image: 'https://images4.alphacoders.com/138/1385846.jpg',
  };

  const topNews = {
    headline: 'SUPERMAN: FRIEND OR FOE?',
    author: {
      name: 'Lois Lane',
      title: 'Investigative Reporter',
      avatar:
        'https://alfabetajuega.com/hero/2025/06/rachel-brosnahan.webp?width=768&aspect_ratio=16:9&format=nowebp',
    },
    summary: `As Superman's public presence grows, so does the concern as to whether he is a protector or a potential danger. Monday gathered mixed public opinion as civilians in some areas feel if the Metropolis population had known a hero under the costume, we'd understand power vs. threat. Fortunately, I believe one doesn't have to be just that... a threat.`,
    photo: {
      url: 'https://i.ytimg.com/vi/uhUht6vAsMY/maxresdefault.jpg',
      caption: 'Photo by Jimmy Olsen',
    },
    tags: ['Superman', 'Opinion', 'Metropolis', 'DCU', 'Lois Lane'],
    published: '2025-07-11',
    readTime: '3 min read',
  };

  const latestNews = [
    {
      title: 'Wayne Enterprises Announces Clean Energy Initiative',
      author: 'Clark Kent',
      time: '4 hours ago',
      category: 'Business',
      image:
        'https://res.cloudinary.com/dsol90tiu/image/upload/v1753739636/Untitled_8_j8stym.png',
    },
    {
      title: 'Flash Breaks Sound Barrier Helping Coastal City',
      author: 'Cat Grant',
      time: '6 hours ago',
      category: 'Heroes',
      image:
        'https://res.cloudinary.com/dsol90tiu/image/upload/v1753739636/Untitled_7_mayqbh.png',
    },
    {
      title: 'LuthorCorp Stock Drops After Satellite Incident',
      author: 'Jimmy Olsen',
      time: '8 hours ago',
      category: 'Business',
      image: 'https://preview.redd.it/lexcorp-or-luthorcorp-which-one-do-you-prefer-v0-mgo41tnrcu7e1.png?auto=webp&s=3e594751d75d0d0a1a579868a86dfe8168a84d06',
    },
    {
      title: 'Wonder Woman Addresses UN Security Council',
      author: 'Perry White',
      time: '12 hours ago',
      category: 'Politics',
      image:
        'https://res.cloudinary.com/dsol90tiu/image/upload/v1753739635/Untitled_2_n24ezi.jpg',
    },
    {
      title: 'Daily Planet Wins Pulitzer for Investigative Journalism',
      author: 'Lois Lane',
      time: '12 hours ago',
      category: 'Media',
      image: 'https://www.thepopverse.com/_next/image?url=https%3A%2F%2Fmedia.thepopverse.com%2Fmedia%2Fsuperman-teaser-trailer-daily-planet-header-nrho2w1bw4iexamgsasndo4qtq.png&w=1280&q=75',
    },
    {
      title: 'Guy Gardner Finalizes Team Name "Justice Gang" — A New Era of Heroes Begins',
      author: 'Lois Lane',
      time: '4 hours ago',
      category: 'Justice League Watch',
      image: 'https://i.namu.wiki/i/GZgPf4-dk6OtXkXbA9Wy-Go8Ucg3J5WUXvtjlqLZVtouRd-m2Ux-4RNJGeZBcC7Dz9KDAMzlz_kZPKWqWwOWxg.webp',
    }      
  ];

  const worldNews = [
    {
      title: 'Atlantis Diplomatic Relations with Surface World Improve',
      location: 'Atlantic Ocean',
      author: 'Steve Lombard',
      time: '3 hours ago',
    },
    {
      title: 'Themyscira Opens Cultural Exchange Program',
      location: 'Mediterranean Sea',
      author: 'Cat Grant',
      time: '5 hours ago',
    },
    {
      title: 'Coast City Rebuilds After Green Lantern Incident',
      location: 'California',
      author: 'Ron Troupe',
      time: '7 hours ago',
    },
    {
      title: 'Gorilla City Scientists Share Technology Breakthrough',
      location: 'Africa',
      author: 'Clark Kent',
      time: '9 hours ago',
    }
  ];

  const heroSpotlight = {
    name: 'Green Arrow',
    realName: 'Oliver Queen',
    city: 'Star City',
    recentAct: 'Stopped major drug trafficking operation in the Glades',
    image: 'https://static.wikia.nocookie.net/marvel_dc/images/4/42/Green_Arrow_0021.jpg',
    quote: '"Justice isn\'t just about stopping the bad guys. It\'s about giving people hope for a better tomorrow."'
  };

  const photoGallery = [
    {
      image: 'https://i.ytimg.com/vi/uhUht6vAsMY/maxresdefault.jpg',
      caption: 'Superman saves falling aircraft over Metropolis Bridge',
      photographer: 'Jimmy Olsen'
    },
    {
      image: 'https://res.cloudinary.com/dsol90tiu/image/upload/v1753739636/Untitled_7_mayqbh.png',
      caption: 'Flash creates whirlwind to stop forest fire',
      photographer: 'Staff Photographer'
    },
    {
      image: 'https://res.cloudinary.com/dsol90tiu/image/upload/v1753739635/Untitled_2_n24ezi.jpg',
      caption: 'Wonder Woman at the United Nations headquarters',
      photographer: 'AP Photo'
    }
  ];

  const opinions = [
    {
      title: 'The Future of Meta-Human Registration',
      author: 'Perry White',
      excerpt: 'As heroes multiply, should we require registration? The debate continues...',
      time: '6 hours ago'
    },
    {
      title: 'Corporate Responsibility in the Age of Heroes',
      author: 'Lois Lane',
      excerpt: 'Companies like Wayne Enterprises set the bar for how business can support heroic efforts...',
      time: '8 hours ago'
    }
  ];

  const sports = [
    {
      title: 'Metropolis Meteors Win Championship',
      score: 'Meteors 24 - Sharks 17',
      time: '2 hours ago'
    },
    {
      title: 'Flash Agrees to Honorary Coach Position',
      team: 'Central City Track Team',
      time: '5 hours ago'
    }
  ];

  const trendingTopics = [
    'Superman sightings',
    'LexCorp investigation',
    'Gotham crime rates',
    'Justice League formation',
    'Metropolis reconstruction',
  ];

  return (
    <div className="min-h-screen">
      <main className="max-w-7xl mx-auto px-4 py-8 bg-white">
        {/* Hero Story */}
        <section className="mb-12">
          <div className="relative bg-slate-800 rounded-sm overflow-hidden shadow-2xl">
            <img
              src={heroStory.image}
              alt="Hero story"
              className="w-full h-[70vh] object-cover object-top opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-800/50 to-transparent">
              <div className="absolute bottom-0 left-0 p-8">
                <div className="max-w-3xl">
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                    {heroStory.title}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Top News Section */}
        <section className="mb-12 border-black pt-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-black text-black uppercase">
              {topNews.headline}
            </h2>
            <div className="w-32 h-[1px] bg-gray-700 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="flex-shrink-0 w-32 h-32 overflow-hidden">
                <img
                  src={topNews.author.avatar}
                  alt={`Avatar of ${topNews.author.name}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-serif font-bold text-black uppercase tracking-wide">
                  By {topNews.author.name}
                </h3>
                <h4 className="text-sm font-serif text-gray-600 italic mb-4">
                  {topNews.author.title}
                </h4>
                <p className="text-gray-800 leading-relaxed font-serif text-justify">
                  {topNews.summary}
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img
                src={topNews.photo.url}
                alt={topNews.photo.caption}
                className="w-full h-80 object-cover"
              />
              <div className="bg-black text-white px-3 py-1 text-xs font-serif">
                {topNews.photo.caption}
              </div>
            </div>
          </div>
        </section>

        {/* World News Banner */}
        <section className="mb-12">
          <div className="border-t-2 border-b-2 border-black py-6">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-black text-black uppercase tracking-tight flex items-center justify-center gap-2">
                <Globe className="w-8 h-8" />
                World News
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {worldNews.map((news, index) => (
                <div key={index} className="border-l-2 border-gray-300 pl-4 hover:border-black transition-colors cursor-pointer">
                  <div className="flex items-center gap-1 text-xs font-serif font-bold text-gray-600 mb-1">
                    <MapPin className="w-3 h-3" />
                    {news.location}
                  </div>
                  <h3 className="text-sm font-serif font-bold text-black leading-tight mb-2 hover:underline">
                    {news.title}
                  </h3>
                  <div className="flex justify-between items-center text-xs font-serif text-gray-500">
                    <span>By {news.author}</span>
                    <span>{news.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Latest News */}
          <section className="lg:col-span-2">
            <div className="border-t-2 border-gray-300 pt-6 mb-6">
              <h2 className="text-3xl font-black text-black tracking-tight uppercase text-center mb-4">
                Latest News
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {latestNews.map((article, index) => (
                <article
                  key={index}
                  className="group border-b border-gray-300 pb-6 cursor-pointer hover:bg-gray-50 p-3 transition-colors"
                >
                  <div>
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover border border-gray-300 mb-3"
                    />
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-serif font-bold text-black uppercase tracking-wider border border-black px-2 py-1">
                          {article.category}
                        </span>
                        <div className="flex items-center text-gray-500 text-xs font-serif">
                          <Clock className="w-3 h-3 mr-1" />
                          {article.time}
                        </div>
                      </div>
                      <h3 className="text-lg font-serif font-bold text-black leading-tight group-hover:underline">
                        {article.title}
                      </h3>
                      <p className="text-xs font-serif text-gray-600 uppercase tracking-wide">
                        By {article.author}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Hero Spotlight */}
            <section className="mb-12">
              <div className="border-t-2 border-gray-300 pt-6 mb-6">
                <h2 className="text-3xl font-black text-black tracking-tight uppercase text-center mb-4 flex items-center justify-center gap-2">
                  <Star className="w-8 h-8" />
                  Hero Spotlight
                </h2>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-green-50 border-2 border-gray-300 p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-1">
                    <img
                      src={heroSpotlight.image}
                      alt={heroSpotlight.name}
                      className="w-full h-64 object-cover border border-gray-300"
                    />
                  </div>
                  <div className="md:col-span-2 space-y-4">
                    <div>
                      <h3 className="text-2xl font-serif font-black text-black uppercase">
                        {heroSpotlight.name}
                      </h3>
                      <p className="text-sm font-serif text-gray-600 italic">
                        {heroSpotlight.realName} • {heroSpotlight.city}
                      </p>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-serif font-bold text-black uppercase mb-1">Recent Heroic Act:</h4>
                        <p className="text-sm font-serif text-gray-800">{heroSpotlight.recentAct}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-serif font-bold text-black uppercase mb-1">Quote:</h4>
                        <blockquote className="text-sm font-serif italic text-gray-800 border-l-4 border-green-600 pl-4">
                          {heroSpotlight.quote}
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Photo Gallery */}
            <section className="mb-12">
              <div className="border-t-2 border-gray-300 pt-6 mb-6">
                <h2 className="text-3xl font-black text-black tracking-tight uppercase text-center mb-4 flex items-center justify-center gap-2">
                  <Camera className="w-8 h-8" />
                  Photo Gallery
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {photoGallery.map((photo, index) => (
                  <div key={index} className="group cursor-pointer">
                    <img
                      src={photo.image}
                      alt={photo.caption}
                      className="w-full h-48 object-cover border border-gray-300 group-hover:opacity-90 transition-opacity"
                    />
                    <div className="bg-black text-white p-3">
                      <p className="text-xs font-serif font-bold mb-1">{photo.caption}</p>
                      <p className="text-xs font-serif text-gray-300">Photo by {photo.photographer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Opinion & Editorial */}
            <section className="mb-12">
              <div className="border-t-2 border-gray-300 pt-6 mb-6">
                <h2 className="text-3xl font-black text-black tracking-tight uppercase text-center mb-4 flex items-center justify-center gap-2">
                  <BookOpen className="w-8 h-8" />
                  Opinion & Editorial
                </h2>
              </div>
              <div className="space-y-6">
                {opinions.map((opinion, index) => (
                  <article key={index} className="border-l-4 border-gray-600 pl-6 hover:border-black transition-colors cursor-pointer">
                    <h3 className="text-xl font-serif font-bold text-black mb-2 hover:underline">
                      {opinion.title}
                    </h3>
                    <p className="text-sm font-serif text-gray-800 mb-3 leading-relaxed">
                      {opinion.excerpt}
                    </p>
                    <div className="flex justify-between items-center text-xs font-serif text-gray-600">
                      <span className="font-bold">By {opinion.author}</span>
                      <span>{opinion.time}</span>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Sports */}
            <section className="mb-12">
              <div className="border-t-2 border-gray-300 pt-6 mb-6">
                <h2 className="text-3xl font-black text-black tracking-tight uppercase text-center mb-4 flex items-center justify-center gap-2">
                  <Award className="w-8 h-8" />
                  Sports
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sports.map((sport, index) => (
                  <div key={index} className="bg-gray-50 border border-gray-300 p-4 hover:bg-gray-100 transition-colors cursor-pointer">
                    <h3 className="text-lg font-serif font-bold text-black mb-2">
                      {sport.title}
                    </h3>
                    {sport.score && (
                      <p className="text-sm font-serif font-bold text-gray-800 mb-2">{sport.score}</p>
                    )}
                    {sport.team && (
                      <p className="text-sm font-serif text-gray-800 mb-2">{sport.team}</p>
                    )}
                    <p className="text-xs font-serif text-gray-600">{sport.time}</p>
                  </div>
                ))}
              </div>
            </section>
          </section>

          {/* Enhanced Sidebar */}
          <aside className="space-y-6">
            {/* Live Hero Tracker */}
            <div className="border-2 border-gray-300 bg-white">
              <div className="bg-gray-600 text-white p-3">
                <div className="flex items-center space-x-2">
                  <Activity className="w-4 h-4" />
                  <h3 className="text-sm font-serif font-bold uppercase tracking-wide">
                    Live Hero Tracker
                  </h3>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
              </div>
              <div className="p-4 space-y-3">
                <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                  <span className="text-sm font-serif font-bold">Superman</span>
                  <span className="text-xs bg-green-600 text-white px-2 py-1 font-serif font-bold">
                    ACTIVE
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                  <span className="text-sm font-serif font-bold">Flash</span>
                  <span className="text-xs bg-yellow-600 text-white px-2 py-1 font-serif font-bold">
                    EN ROUTE
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                  <span className="text-sm font-serif font-bold">Wonder Woman</span>
                  <span className="text-xs bg-gray-600 text-white px-2 py-1 font-serif font-bold">
                    OFFLINE
                  </span>
                </div>
                <button className="w-full bg-gray-600 text-white py-2 font-serif font-bold text-sm uppercase tracking-wide hover:bg-gray-800 transition-colors">
                  View Full Tracker
                </button>
              </div>
            </div>

            {/* Metropolis Weather */}
            <div className="border-2 border-gray-300 bg-white">
              <div className="bg-gray-600 text-white p-3">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <h3 className="text-sm font-serif font-bold uppercase tracking-wide">
                    Metropolis Weather
                  </h3>
                </div>
              </div>
              <div className="p-4 text-center">
                <div className="text-4xl font-serif font-black text-black">72°F</div>
                <div className="text-black font-serif font-bold uppercase text-sm">Partly Cloudy</div>
                <div className="text-xs text-gray-600 mt-2 font-serif italic">
                  No unusual atmospheric disturbances detected
                </div>
              </div>
            </div>

            {/* Daily Planet Radio */}
            <div className="border-2 border-blue-600 bg-white">
              <div className="bg-blue-600 text-white p-3">
                <div className="flex items-center space-x-2">
                  <Radio className="w-4 h-4" />
                  <h3 className="text-sm font-serif font-bold uppercase tracking-wide">
                    DP Radio Live
                  </h3>
                  <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm font-serif font-bold text-black mb-2">NOW PLAYING:</p>
                <p className="text-sm font-serif text-black mb-4">
                  "Hero Hour" with Perry White discussing meta-human legislation
                </p>
                <button className="w-full bg-blue-600 text-white py-2 font-serif font-bold text-sm uppercase tracking-wide hover:bg-blue-700 transition-colors">
                  Listen Live
                </button>
              </div>
            </div>

            {/* Events Calendar */}
            <div className="border-2 border-gray-300 bg-white">
              <div className="bg-gray-600 text-white p-3">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <h3 className="text-sm font-serif font-bold uppercase tracking-wide">
                    Upcoming Events
                  </h3>
                </div>
              </div>
              <div className="p-4 space-y-3">
                <div className="border-b border-gray-200 pb-2">
                  <p className="text-sm font-serif font-bold text-black">Justice League Press Conference</p>
                  <p className="text-xs font-serif text-gray-600">Tomorrow 2:00 PM</p>
                </div>
                <div className="border-b border-gray-200 pb-2">
                  <p className="text-sm font-serif font-bold text-black">Wayne Foundation Gala</p>
                  <p className="text-xs font-serif text-gray-600">Friday 7:00 PM</p>
                </div>
                <div className="border-b border-gray-200 pb-2">
                  <p className="text-sm font-serif font-bold text-black">Hero Appreciation Day</p>
                  <p className="text-xs font-serif text-gray-600">Next Week</p>
                </div>
              </div>
            </div>

            {/* Staff Picks */}
            <div className="border-2 border-green-600 bg-white">
              <div className="bg-green-600 text-white p-3">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <h3 className="text-sm font-serif font-bold uppercase tracking-wide">
                    Staff Picks
                  </h3>
                </div>
              </div>
              <div className="p-4 space-y-3">
                <div className="border-b border-gray-200 pb-2">
                  <p className="text-sm font-serif font-bold text-black hover:underline cursor-pointer">
                    The Psychology of Heroism
                  </p>
                  <p className="text-xs font-serif text-gray-600">Recommended by Lois Lane</p>
                </div>
                <div className="border-b border-gray-200 pb-2">
                  <p className="text-sm font-serif font-bold text-black hover:underline cursor-pointer">
                    Gotham's Crime Statistics: A Deep Dive
                  </p>
                  <p className="text-xs font-serif text-gray-600">Recommended by Clark Kent</p>
                </div>
              </div>
            </div>

            {/* Trending in DCU */}
            <div className="border-2 border-gray-300 bg-white">
              <div className="bg-gray-600 text-white p-3">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4" />
                  <h3 className="text-sm font-serif font-bold uppercase tracking-wide">
                    Trending in DCU
                  </h3>
                </div>
              </div>
              <div className="p-4 space-y-2">
                {trendingTopics.map((topic, index) => (
                  <div key={index} className="flex items-center justify-between border-b border-gray-200 pb-2">
                    <span className="text-sm font-serif font-bold text-black">{topic}</span>
                    <span className="text-xs font-serif font-bold text-gray-600">#{index + 1}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* LexWatch Alert */}
            <div className="border-2 border-red-600 bg-white">
              <div className="bg-red-600 text-white p-3">
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="w-4 h-4" />
                  <h3 className="text-sm font-serif font-bold uppercase tracking-wide">
                    LexWatch Alert
                  </h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm font-serif text-black mb-4 leading-relaxed">
                  New evidence suggests LexCorp's involvement in recent satellite
                  malfunction.
                </p>
                <button
                  className="block w-full bg-red-600 text-white py-2 font-serif font-bold text-sm uppercase tracking-wide hover:bg-red-700 transition-colors text-center"
                >
                  Read Investigation
                </button>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Homepage;