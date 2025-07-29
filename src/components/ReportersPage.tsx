import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Award, MapPin, Calendar, ExternalLink } from 'lucide-react';

const ReportersPage: React.FC = () => {
  const reporters = [
    {
      id: 'lois',
      name: "Lois Lane",
      title: "Senior Investigative Reporter",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      bio: "Lois Lane is The Daily Planet's most decorated investigative journalist, with over a decade of experience covering the most dangerous and important stories of our time. Her fearless reporting on Superman, LexCorp, and government corruption has earned her three Pulitzer Prizes.",
      quote: "Truth is non-negotiable. In a world of extraordinary people and events, ordinary journalism isn't enough.",
      joined: "January 2015",
      location: "Metropolis, NY",
      awards: 3,
      specialties: ["Investigative Journalism", "Superhero Affairs", "Corporate Corruption"],
      recentArticle: "Superman Saves Metropolis from Brainiac's Attack"
    },
    {
      id: 'clark',
      name: "Clark Kent",
      title: "Staff Reporter",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg",
      bio: "Clark Kent brings a unique perspective to The Daily Planet's newsroom, combining small-town values with big-city journalism. Originally from Smallville, Kansas, Clark specializes in human interest stories and has an uncanny ability to be in the right place at the right time.",
      quote: "Every story matters because every person matters. Behind every headline is a human being with hopes, fears, and dreams.",
      joined: "September 2020",
      location: "Metropolis, NY (Originally Smallville, KS)",
      awards: 2,
      specialties: ["Human Interest", "Rural Issues", "Environmental Reporting"],
      recentArticle: "Wayne Enterprises Clean Energy Initiative"
    },
    {
      id: 'cat',
      name: "Cat Grant",
      title: "Entertainment & Celebrity Reporter",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
      bio: "Cat Grant is The Daily Planet's premier entertainment and celebrity correspondent, with insider access to Hollywood's biggest stars and exclusive coverage of the superhero celebrity phenomenon. Her sharp wit and glamorous lifestyle make her one of Metropolis's most recognizable media personalities.",
      quote: "In a world where heroes walk among us, the line between news and entertainment has never been more blurred—or more fascinating.",
      joined: "March 2018",
      location: "Metropolis, NY",
      awards: 2,
      specialties: ["Celebrity News", "Entertainment Industry", "Fashion"],
      recentArticle: "Wonder Woman's UN Speech: Fashion and Diplomacy"
    }
  ];

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
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold font-serif text-slate-800 mb-4">Our Reporters</h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          Meet the fearless journalists who bring you the truth in the age of superheroes
        </p>
        <div className="mt-6 text-sm text-gray-600">
          The Daily Planet's award-winning team of reporters
        </div>
      </header>

      {/* Reporters Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {reporters.map((reporter) => (
          <article
            key={reporter.id}
            className="bg-white rounded-sm shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            {/* Reporter Image */}
            <div className="relative h-64 bg-gradient-to-r from-slate-800 to-slate-600">
              <img
                src={reporter.image}
                alt={reporter.name}
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h2 className="text-2xl font-bold mb-1">{reporter.name}</h2>
                <p className="text-gray-200">{reporter.title}</p>
              </div>
            </div>

            {/* Reporter Info */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>Since {reporter.joined.split(' ')[1]}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Award className="w-4 h-4" />
                    <span>{reporter.awards} Awards</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                {reporter.bio}
              </p>

              <blockquote className="border-l-4 border-blue-500 pl-4 italic text-sm text-slate-600 mb-4">
                "{reporter.quote}"
              </blockquote>

              {/* Specialties */}
              <div className="mb-4">
                <h4 className="font-semibold text-sm mb-2">Specialties</h4>
                <div className="flex flex-wrap gap-2">
                  {reporter.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* Recent Article */}
              <div className="mb-6">
                <h4 className="font-semibold text-sm mb-2">Latest Article</h4>
                <p className="text-sm text-gray-700">{reporter.recentArticle}</p>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
                <MapPin className="w-4 h-4" />
                <span>{reporter.location}</span>
              </div>

              {/* View Profile Button */}
              <Link
                to={`/reporter/${reporter.id}`}
                className="w-full bg-slate-800 text-white py-3 px-4 rounded-sm font-semibold hover:bg-slate-700 transition-colors flex items-center justify-center space-x-2"
              >
                <span>View Full Profile</span>
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Team Stats */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-600 rounded-sm p-8 text-white">
        <h2 className="text-3xl font-bold mb-6 text-center font-serif">Team Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">7</div>
            <div className="text-gray-300">Pulitzer Prizes</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">150+</div>
            <div className="text-gray-300">Exclusive Stories</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">24/7</div>
            <div className="text-gray-300">News Coverage</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">100%</div>
            <div className="text-gray-300">Truth Commitment</div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mt-12 bg-white rounded-sm shadow-lg p-8 text-center">
        <h3 className="text-2xl font-bold mb-4 text-slate-800">Work With Our Team</h3>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Have a story tip or want to collaborate with our award-winning journalists? 
          Our team is always looking for compelling stories that matter to our readers.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-sm font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Our Newsroom
          </Link>
          <button className="border border-slate-600 text-slate-600 px-8 py-3 rounded-sm font-semibold hover:bg-slate-600 hover:text-white transition-colors">
            Submit Story Tip
          </button>
        </div>
      </section>
    </main>
  );
};

export default ReportersPage;