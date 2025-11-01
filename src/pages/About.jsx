import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-4xl font-bold mb-8 p-4 rounded-lg">About Hackathon 2026</h1>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              Welcome to the most anticipated hackathon of 2026! Our mission is to bring together
              talented developers, designers, and innovators to create groundbreaking solutions
              that shape the future.
            </p>
            
            <h2 className="text-2xl font-semibold mt-12 mb-6">Our Vision</h2>
            <p className="text-lg text-gray-700 mb-6">
              We believe in fostering innovation through collaboration. Our hackathon provides
              a platform for participants to push their boundaries, learn new technologies,
              and create impactful solutions.
            </p>

            <h2 className="text-2xl font-semibold mt-12 mb-6">What to Expect</h2>
            <ul className="list-disc pl-6 text-lg text-gray-700 space-y-3">
              <li>48 hours of intense coding and creativity</li>
              <li>Mentorship from industry experts</li>
              <li>Workshops and tech talks</li>
              <li>Networking opportunities</li>
              <li>Amazing prizes and swag</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-12 mb-6">Venue</h2>
            <p className="text-lg text-gray-700 mb-6">
              The hackathon will be held at the Tech Innovation Center, featuring state-of-the-art
              facilities and a creative environment conducive to innovation.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;