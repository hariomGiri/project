import React, { ReactNode } from 'react';

interface Event {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
  date: string;
  location: string;
  registrationLink: string;
}

interface EventSectionProps {
  title: string;
  description: string;
  events: Event[];
  bgColor: string;
  icon: ReactNode;
}

const EventSection: React.FC<EventSectionProps> = ({ 
  title, 
  description, 
  events, 
  bgColor,
  icon 
}) => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-center mb-8">
        {icon}
        <h2 className="text-4xl md:text-5xl font-bold text-center ml-4 text-yellow-400">{title}</h2>
      </div>
      <p className="text-xl text-center mb-12 max-w-3xl mx-auto">{description}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map(event => (
          <div 
            key={event.id} 
            className={`bg-gradient-to-br ${bgColor} p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105`}
          >
            <div className="flex items-center mb-4">
              {event.icon}
              <h3 className="text-xl font-bold ml-2">{event.title}</h3>
            </div>
            <p className="mb-4">{event.description}</p>
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <svg className="w-5 h-5 mr-2 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <span>{event.date}</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>{event.location}</span>
              </div>
            </div>
            <a 
              href={event.registrationLink} 
              className="inline-block bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-semibold py-2 px-4 rounded transition-colors w-full text-center"
            >
              Register Now
            </a>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <a 
          href="#register" 
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full transition-colors"
        >
          Register for All Events
        </a>
      </div>
    </div>
  );
};

export default EventSection;