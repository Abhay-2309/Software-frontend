import { motion } from 'framer-motion';

const Schedule = () => {
  const schedule = [
    {
      day: 'Day 1',
      events: [
        { time: '9:00 AM', event: 'Registration & Check-in' },
        { time: '10:00 AM', event: 'Opening Ceremony' },
        { time: '11:00 AM', event: 'Team Formation' },
        { time: '12:00 PM', event: 'Lunch Break' },
        { time: '1:00 PM', event: 'Hacking Begins' },
        { time: '6:00 PM', event: 'Evening Workshops' },
      ]
    },
    {
      day: 'Day 2',
      events: [
        { time: '9:00 AM', event: 'Morning Check-in' },
        { time: '10:00 AM', event: 'Mentorship Sessions' },
        { time: '12:00 PM', event: 'Lunch Break' },
        { time: '3:00 PM', event: 'Progress Updates' },
        { time: '6:00 PM', event: 'Tech Talks' },
      ]
    },
    {
      day: 'Day 3',
      events: [
        { time: '9:00 AM', event: 'Final Hours' },
        { time: '12:00 PM', event: 'Project Submissions' },
        { time: '2:00 PM', event: 'Presentations' },
        { time: '4:00 PM', event: 'Judging' },
        { time: '5:00 PM', event: 'Awards Ceremony' },
      ]
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-8">Event Schedule</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {schedule.map((day, index) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <h2 className="text-2xl font-semibold mb-6">{day.day}</h2>
                <div className="space-y-4">
                  {day.events.map((event, eventIndex) => (
                    <div key={eventIndex} className="border-l-4 border-blue-600 pl-4">
                      <p className="font-semibold text-blue-600">{event.time}</p>
                      <p className="text-gray-700">{event.event}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Schedule;