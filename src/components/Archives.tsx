import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, Tag, FileText, ArrowLeft, Filter, Clock } from 'lucide-react';

const Archives: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('2025');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const archiveEntries = [
    {
      date: 'March 15, 2025',
      headline: 'Superman Saves Metropolis from Brainiac Attack',
      category: 'Breaking News',
      author: 'Lois Lane',
      excerpt: 'Exclusive coverage of the six-hour siege that nearly destroyed downtown Metropolis.',
      significance: 'Major Event'
    },
    {
      date: 'March 10, 2025',
      headline: 'LexCorp Satellite Network Exposed: Hidden Military Applications',
      category: 'Investigation',
      author: 'Lois Lane',
      excerpt: 'Investigation reveals civilian satellites equipped with advanced surveillance systems.',
      significance: 'High Impact'
    },
    {
      date: 'February 28, 2025',
      headline: 'Superman\'s First Public Interview',
      category: 'Exclusive',
      author: 'Clark Kent',
      excerpt: 'The Man of Steel speaks candidly about his mission to protect Earth.',
      significance: 'Historic'
    },
    {
      date: 'February 14, 2025',
      headline: 'Valentine\'s Day Rescue: Flash Saves Wedding from Disaster',
      category: 'Human Interest',
      author: 'Cat Grant',
      excerpt: 'The Fastest Man Alive ensures a couple\'s special day goes off without a hitch.',
      significance: 'Feel Good'
    },
    {
      date: 'January 20, 2025',
      headline: 'Wonder Woman Addresses Global Climate Summit',
      category: 'Politics',
      author: 'Perry White',
      excerpt: 'Amazon princess calls for immediate action on environmental protection.',
      significance: 'Policy Impact'
    },
    {
      date: 'January 1, 2025',
      headline: 'New Year, New Heroes: Justice League Formation Confirmed',
      category: 'Breaking News',
      author: 'Lois Lane',
      excerpt: 'Exclusive: Multiple heroes coordinate response to global threats.',
      significance: 'Historic'
    },
    {
      date: 'December 25, 2024',
      headline: 'Christmas Miracle: Superman Delivers Presents Worldwide',
      category: 'Human Interest',
      author: 'Jimmy Olsen',
      excerpt: 'The Last Son of Krypton spreads holiday cheer across the globe.',
      significance: 'Feel Good'
    },
    {
      date: 'December 1, 2024',
      headline: 'Lex Luthor Announces Presidential Campaign',
      category: 'Politics',
      author: 'Clark Kent',
      excerpt: 'LexCorp CEO enters race with anti-alien platform.',
      significance: 'High Impact'
    },
    {
      date: 'November 15, 2024',
      headline: 'Batman Spotted in Metropolis: Cross-City Alliance?',
      category: 'Heroes',
      author: 'Cat Grant',
      excerpt: 'The Dark Knight ventures beyond Gotham for mysterious meeting.',
      significance: 'Significant'
    },
    {
      date: 'October 31, 2024',
      headline: 'Halloween Horror: Real Monsters Threaten Metropolis',
      category: 'Breaking News',
      author: 'Lois Lane',
      excerpt: 'Supernatural entities emerge on All Hallows\' Eve, heroes respond.',
      significance: 'Major Event'
    }
  ];

  const years = ['2025', '2024', '2023', '2022'];
  const categories = ['all', 'Breaking News', 'Investigation', 'Politics', 'Heroes', 'Human Interest', 'Exclusive'];

  const filteredEntries = archiveEntries.filter(entry => {
    const matchesSearch = entry.headline.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         entry.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         entry.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesYear = selectedYear === 'all' || entry.date.includes(selectedYear);
    const matchesCategory = selectedCategory === 'all' || entry.category === selectedCategory;
    
    return matchesSearch && matchesYear && matchesCategory;
  });

  const significanceColors = {
    'Historic': 'bg-purple-100 text-purple-800 border-purple-200',
    'Major Event': 'bg-red-100 text-red-800 border-red-200',
    'High Impact': 'bg-orange-100 text-orange-800 border-orange-200',
    'Policy Impact': 'bg-blue-100 text-blue-800 border-blue-200',
    'Significant': 'bg-yellow-100 text-yellow-800 border-yellow-200',
    'Feel Good': 'bg-green-100 text-green-800 border-green-200'
  };

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      {/* Back Button */}
      <Link
        to="/"
        className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Home</span>
      </Link>

      {/* Header */}
      <header className="text-center mb-8">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <FileText className="w-8 h-8 text-slate-600" />
          <h1 className="text-4xl font-bold font-serif text-slate-800">Daily Planet Archives</h1>
        </div>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Searchable archive of our coverage from the dawn of the superhero age
        </p>
        <div className="mt-4 text-sm text-gray-600">
          Preserving truth and accountability since 1938
        </div>
      </header>

      {/* Search and Filters */}
      <div className="bg-white rounded-sm shadow-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search */}
          <div className="md:col-span-2 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search headlines, authors, or content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Year Filter */}
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
            >
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>

          {/* Category Filter */}
          <div className="relative">
            <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4" />
            <span>Showing {filteredEntries.length} of {archiveEntries.length} articles</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>Sort by:</span>
            <select className="border border-gray-300 rounded px-2 py-1 text-xs">
              <option>Date (Newest)</option>
              <option>Date (Oldest)</option>
              <option>Relevance</option>
              <option>Author</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-6">
        {filteredEntries.map((entry, index) => (
          <article
            key={index}
            className="bg-white rounded-sm shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer border border-gray-100"
          >
            <Link to="/article">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{entry.date}</span>
                    </div>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">
                      {entry.category}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs font-semibold border ${
                      significanceColors[entry.significance as keyof typeof significanceColors]
                    }`}>
                      {entry.significance}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold mb-2 text-slate-800 hover:text-blue-600 transition-colors font-serif">
                    {entry.headline}
                  </h2>

                  <p className="text-gray-700 mb-3 leading-relaxed">
                    {entry.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">By {entry.author}</span>
                    <span className="text-blue-600 hover:text-blue-800 text-sm font-semibold transition-colors">
                      Read Full Article →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>

      {/* No Results */}
      {filteredEntries.length === 0 && (
        <div className="text-center py-12">
          <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
          <p className="text-gray-500">Try adjusting your search terms or filters</p>
        </div>
      )}

      {/* Easter Eggs Section */}
      <div className="mt-12 bg-gradient-to-r from-slate-800 to-slate-600 rounded-sm p-8 text-white">
        <h3 className="text-2xl font-bold mb-4 font-serif">Notable Archive Discoveries</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-sm p-4">
            <h4 className="font-semibold mb-2">First Superman Sighting</h4>
            <p className="text-sm text-gray-200">
              Our archives contain the very first reported Superman sighting, filed by an intern who later became our Editor-in-Chief.
            </p>
          </div>
          <div className="bg-white/10 rounded-sm p-4">
            <h4 className="font-semibold mb-2">Anonymous Donations</h4>
            <p className="text-sm text-gray-200">
              Mysterious recurring headline: "Bruce W. makes anonymous donation" - appears 47 times since 2020.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Archives;