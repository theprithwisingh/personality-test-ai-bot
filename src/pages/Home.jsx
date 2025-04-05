import React from 'react';
import { Link } from 'react-router-dom';
import "tailwindcss";
const Home = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navbar */}
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-2xl font-bold text-gray-900">
            <span className="text-green-600">XY</span>Z
          </h1>

          <nav className="hidden md:flex gap-6">
            <Link to="/test" className="text-gray-700 hover:text-green-600">
              Personality Test
            </Link>
            <Link to="/types" className="text-gray-700 hover:text-green-600">
              Personality Types
            </Link>
            <Link to="/others" className="text-gray-700 hover:text-green-600">
              Others
            </Link>
          </nav>

          <div className="flex gap-4">
            <Link to="/login">
              <button className="px-4 py-2 border border-green-600 text-green-600 font-medium rounded-full transition-all hover:bg-green-600 hover:text-white">
                Login
              </button>
            </Link>
            <Link to="/take-test">
              <button className="bg-green-600 text-white px-5 py-2 rounded-full font-medium hover:bg-green-700 transition">
                Take the Test →
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center flex-grow text-center px-6 m-10">
        <h1 className="text-7xl font-bold text-gray-900 leading-tight">
          Discover <br />
          <span className="text-green-600">Your Strengths,</span> <br />
          Boost Your Confidence.
        </h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
          Unlock the secrets to your unique strengths, behaviors, and preferences
          with our in-depth personality test.
        </p>
        <div className="mt-6">
          <Link to="/take-test">
            <button className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-medium shadow-md hover:bg-green-700 transition flex items-center gap-2">
              Take the Test →
            </button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-b from-white to-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
            Unlock Your True Potential
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: 'Free Personality Test',
                description: 'Answer honestly to find out your personality type.',
                icon: '📝',
              },
              {
                title: 'Detailed Insights',
                description: 'Get a deep understanding of your strengths & behavior.',
                icon: '📊',
              },
              {
                title: 'Unlock Your Potential',
                description: 'Unlock strategies to enhance your personal & professional life.',
                icon: '🚀',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition-transform transform hover:-translate-y-2 flex flex-col items-center text-center"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-gray-600 text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto text-center">
          <p className="text-sm">©2024-25 Find Your own Way</p>
          <div className="flex justify-center gap-6 mt-2 text-sm">
            <Link to="/terms" className="hover:text-white transition">
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="hover:text-white transition">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
