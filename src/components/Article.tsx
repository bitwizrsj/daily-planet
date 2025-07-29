import React from 'react';
import { Clock, Share2, Bookmark, Heart, MessageCircle, ArrowLeft } from 'lucide-react';

interface ArticleProps {
  onNavigate: (page: string) => void;
}

const Article: React.FC<ArticleProps> = ({ onNavigate }) => {
  const article = {
    title: "Superman Saves Metropolis from Brainiac's Attack",
    subtitle: "Exclusive: Inside the 6-hour siege that nearly destroyed the city",
    author: "Lois Lane",
    publishDate: "March 15, 2025",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/1114690/pexels-photo-1114690.jpeg",
    category: "Breaking News"
  };

  const relatedArticles = [
    {
      title: "Brainiac's Technology: What We Know",
      author: "Clark Kent",
      time: "1 day ago"
    },
    {
      title: "Metropolis Rebuilding Efforts Underway",
      author: "Cat Grant", 
      time: "2 days ago"
    },
    {
      title: "Superman's First Public Statement",
      author: "Jimmy Olsen",
      time: "3 days ago"
    }
  ];

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      {/* Back Button */}
      <button
        onClick={() => onNavigate('home')}
        className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Home</span>
      </button>

      {/* Article Header */}
      <header className="mb-8">
        <div className="flex items-center space-x-4 mb-4">
          <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {article.category}
          </span>
          <div className="flex items-center text-gray-600 text-sm space-x-4">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {article.publishDate}
            </div>
            <span>{article.readTime}</span>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif text-slate-800 leading-tight">
          {article.title}
        </h1>
        
        <p className="text-xl text-gray-700 mb-6 font-light">
          {article.subtitle}
        </p>

        <div className="flex items-center justify-between border-b border-gray-200 pb-6">
          <div className="flex items-center space-x-4">
            <img
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
              alt={article.author}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-slate-800">{article.author}</p>
              <p className="text-sm text-gray-600">Senior Reporter</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors">
              <Share2 className="w-5 h-5" />
              <span className="hidden md:inline">Share</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-600 hover:text-yellow-600 transition-colors">
              <Bookmark className="w-5 h-5" />
              <span className="hidden md:inline">Save</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-600 hover:text-red-600 transition-colors">
              <Heart className="w-5 h-5" />
              <span className="hidden md:inline">Like</span>
            </button>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="mb-8">
        <img
          src={article.image}
          alt="Article hero"
          className="w-full h-96 object-cover rounded-sm shadow-lg"
        />
        <p className="text-sm text-gray-600 mt-2 italic">
          Superman confronts Brainiac's drones above downtown Metropolis. Photo: Jimmy Olsen/Daily Planet
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Article Content */}
        <article className="lg:col-span-2 prose prose-lg max-w-none">
          <div className="text-gray-800 leading-relaxed space-y-6">
            <p className="text-xl font-light text-slate-700 border-l-4 border-blue-500 pl-6 italic">
              "I've covered Superman for three years, but yesterday's battle against Brainiac was unlike anything Metropolis has ever witnessed."
            </p>

            <p>
              At 6:47 AM yesterday morning, the first Brainiac probe descended through Metropolis's skyline, its alien technology crackling with an otherworldly energy that immediately disrupted the city's power grid. Within minutes, dozens more followed, each the size of a city bus and armed with weaponry that defied our understanding of physics.
            </p>

            <p>
              Superman arrived within three minutes of the first sighting—a response time that likely saved thousands of lives. What followed was a six-hour battle that took the Man of Steel from the Financial District to the harbor, through the subway tunnels, and finally into the stratosphere above our city.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 font-serif">The Human Cost</h2>

            <p>
              Mayor Berkowitz reported preliminary damage assessments showing structural damage to 47 buildings, though miraculously, casualty reports remain minimal thanks to Superman's strategic efforts to draw the conflict away from populated areas.
            </p>

            <p>
              "He wasn't just fighting those machines," said Maria Santos, a financial analyst who witnessed the battle from her 23rd-floor office window. "He was protecting us. Every move he made was calculated to keep those things away from people."
            </p>

            <h2 className="text-2xl font-bold text-slate-800 font-serif">Brainiac's Technology</h2>

            <p>
              Dr. Emil Hamilton of S.T.A.R. Labs, who analyzed debris recovered from the scene, describes the alien technology as "centuries beyond anything in our current understanding." The probes appeared to be gathering data—scanning buildings, infrastructure, and even individual civilians.
            </p>

            <p>
              "This wasn't a random attack," Hamilton explained. "These probes were methodical, systematic. They were collecting information about our city, our people, our defenses. The question we need to ask is: what was Brainiac planning to do with that data?"
            </p>

            <h2 className="text-2xl font-bold text-slate-800 font-serif">Superman's Response</h2>

            <p>
              In an exclusive statement to the Daily Planet, Superman addressed the city's concerns about future attacks: "Brainiac represents a threat not just to Metropolis, but potentially to all of Earth. I want the people of this city to know that I will continue to stand between them and any force that threatens their safety."
            </p>

            <p>
              The Man of Steel also acknowledged the efforts of the Metropolis Emergency Response Team and the National Guard units that assisted in evacuation efforts during the battle.
            </p>

            <p>
              As cleanup efforts continue across the city, one thing remains clear: yesterday's attack was likely just the beginning. Brainiac's interest in Metropolis—and Earth—represents a new chapter in our understanding of Superman's role not just as a protector of our city, but as humanity's defender against threats we're only beginning to comprehend.
            </p>
          </div>

          {/* Comments Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <MessageCircle className="w-6 h-6 mr-2" />
              Reader Comments
            </h3>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-sm p-4">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    JS
                  </div>
                  <div>
                    <p className="font-semibold">John Smith</p>
                    <p className="text-sm text-gray-600">2 hours ago</p>
                  </div>
                </div>
                <p className="text-gray-800">
                  Incredible reporting, Lois. Your firsthand account really captures the intensity of what we all experienced yesterday. Thank you for your fearless journalism.
                </p>
              </div>

              <div className="bg-gray-50 rounded-sm p-4">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    MR
                  </div>
                  <div>
                    <p className="font-semibold">MetropolisResident</p>
                    <p className="text-sm text-gray-600">4 hours ago</p>
                  </div>
                </div>
                <p className="text-gray-800">
                  I was in the subway when it happened. The way Superman made sure we were all safe before engaging those probes... we're lucky to have him.
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="space-y-6">
          {/* Related Articles */}
          <div className="bg-white rounded-sm shadow-lg p-6">
            <h3 className="text-lg font-bold mb-4 text-slate-800">Related Articles</h3>
            <div className="space-y-4">
              {relatedArticles.map((related, index) => (
                <div
                  key={index}
                  className="cursor-pointer hover:bg-gray-50 p-3 rounded-sm transition-colors"
                  onClick={() => onNavigate('article')}
                >
                  <h4 className="font-semibold text-sm text-slate-800 hover:text-blue-600 transition-colors">
                    {related.title}
                  </h4>
                  <p className="text-xs text-gray-600 mt-1">
                    By {related.author} • {related.time}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Author Bio */}
          <div className="bg-white rounded-sm shadow-lg p-6">
            <h3 className="text-lg font-bold mb-4 text-slate-800">About the Author</h3>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
                alt="Lois Lane"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">Lois Lane</p>
                <p className="text-sm text-gray-600">Senior Reporter</p>
              </div>
            </div>
            <p className="text-sm text-gray-800">
              Lois Lane is a Pulitzer Prize-winning journalist specializing in investigative reporting and superhero affairs. She has been covering Superman's activities since his first public appearance.
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default Article;