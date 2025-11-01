import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.img
              src="/logo.png"
              alt="Hackathon 2026 Logo"
              className="w-32 h-32 mx-auto mb-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hackathon 2026
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Join us for 48 hours of innovation, creativity, and coding
            </p>
            <a
              href="/app/register"
              className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Register Now
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Join Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Amazing Prizes</h3>
              <p className="text-gray-600">
                Win exciting prizes and get a chance to showcase your talent to industry experts.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Learn & Network</h3>
              <p className="text-gray-600">
                Connect with like-minded individuals and learn from experienced mentors.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Build the Future</h3>
              <p className="text-gray-600">
                Work on cutting-edge technologies and solve real-world problems.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;