import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  Users, 
  Music, 
  Palette, 
  Shirt, 
  Trophy, 
  Instagram, 
  Facebook, 
  Twitter, 
  MapPin,
  ChevronDown,
  Menu,
  X,
  Code,
  Gamepad2,
  Mic,
  PenTool,
  Scissors,
  Camera,
  Brush,
  Sparkles,
  Flame,
  Puzzle
} from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CountdownTimer from './components/CountdownTimer';
import EventSection from './components/EventSection';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 300;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId || 'hero');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const techEvents = [
    {
      id: 1,
      title: '24-Hour Hackathon',
      description: 'Build innovative solutions to real-world problems in this intense coding marathon.',
      icon: <Code size={24} />,
      date: 'March 15-16, 2025',
      location: 'Main Computer Lab',
      registrationLink: '#register'
    },
    {
      id: 2,
      title: 'LAN Gaming Tournament',
      description: 'Compete in popular games like CS:GO, Valorant, and FIFA to win exciting prizes.',
      icon: <Gamepad2 size={24} />,
      date: 'March 17, 2025',
      location: 'Gaming Arena',
      registrationLink: '#register'
    },
    {
      id: 3,
      title: 'Tech Quiz',
      description: 'Test your knowledge of technology, coding, and industry trends.',
      icon: <Puzzle size={24} />,
      date: 'March 18, 2025',
      location: 'Seminar Hall',
      registrationLink: '#register'
    }
  ];

  const culturalEvents = [
    {
      id: 1,
      title: 'Dance Competition',
      description: 'Showcase your dance skills in solo, duet, or group performances.',
      icon: <Music size={24} />,
      date: 'March 19, 2025',
      location: 'Main Auditorium',
      registrationLink: '#register'
    },
    {
      id: 2,
      title: 'Singing Contest',
      description: 'Perform your favorite songs and impress the judges with your vocal talent.',
      icon: <Mic size={24} />,
      date: 'March 20, 2025',
      location: 'Open Air Theater',
      registrationLink: '#register'
    },
    {
      id: 3,
      title: 'Drama Competition',
      description: 'Present theatrical performances that captivate and move the audience.',
      icon: <Users size={24} />,
      date: 'March 21, 2025',
      location: 'Drama Hall',
      registrationLink: '#register'
    },
    {
      id: 4,
      title: 'Poetry Slam',
      description: 'Express your thoughts through powerful poetry and spoken word performances.',
      icon: <PenTool size={24} />,
      date: 'March 22, 2025',
      location: 'Literary Club',
      registrationLink: '#register'
    },
    {
      id: 5,
      title: 'Antakshari',
      description: 'Test your knowledge of songs in this classic musical game of quick thinking.',
      icon: <Music size={24} />,
      date: 'March 23, 2025',
      location: 'Music Room',
      registrationLink: '#register'
    }
  ];

  const artEvents = [
    {
      id: 1,
      title: 'Rangoli Competition',
      description: 'Create beautiful traditional floor art using colored powders and natural materials.',
      icon: <Palette size={24} />,
      date: 'March 22, 2025',
      location: 'Art Gallery',
      registrationLink: '#register'
    },
    {
      id: 2,
      title: 'T-shirt Painting',
      description: 'Design and paint unique wearable art on plain t-shirts.',
      icon: <Brush size={24} />,
      date: 'March 23, 2025',
      location: 'Design Studio',
      registrationLink: '#register'
    },
    {
      id: 3,
      title: 'Poster Making',
      description: 'Create impactful posters on social and environmental themes.',
      icon: <PenTool size={24} />,
      date: 'March 24, 2025',
      location: 'Art Room',
      registrationLink: '#register'
    },
    {
      id: 4,
      title: 'Mehendi Design',
      description: 'Showcase your skills in creating intricate henna designs.',
      icon: <Sparkles size={24} />,
      date: 'March 25, 2025',
      location: 'Cultural Hall',
      registrationLink: '#register'
    },
    {
      id: 5,
      title: 'Photography Contest',
      description: 'Capture moments that tell stories and showcase your photography skills.',
      icon: <Camera size={24} />,
      date: 'March 26, 2025',
      location: 'Photography Lab',
      registrationLink: '#register'
    }
  ];

  const fashionEvents = [
    {
      id: 1,
      title: 'Fashion Show',
      description: 'Walk the ramp in designer outfits and showcase your modeling talent.',
      icon: <Shirt size={24} />,
      date: 'March 25, 2025',
      location: 'Fashion Arena',
      registrationLink: '#register'
    },
    {
      id: 2,
      title: 'Designer Showcase',
      description: 'Present your clothing designs and compete for the best designer award.',
      icon: <Scissors size={24} />,
      date: 'March 26, 2025',
      location: 'Design Studio',
      registrationLink: '#register'
    },
    {
      id: 3,
      title: 'Costume Contest',
      description: 'Create and wear costumes that represent different themes and cultures.',
      icon: <Shirt size={24} />,
      date: 'March 27, 2025',
      location: 'Costume Hall',
      registrationLink: '#register'
    }
  ];

  const thrillEvents = [
    {
      id: 1,
      title: 'Roadies Challenge',
      description: 'Test your physical and mental strength in this adventure-based competition.',
      icon: <Flame size={24} />,
      date: 'March 28, 2025',
      location: 'Adventure Zone',
      registrationLink: '#register'
    },
    {
      id: 2,
      title: 'Fun Games',
      description: 'Participate in a variety of entertaining games and activities.',
      icon: <Gamepad2 size={24} />,
      date: 'March 29, 2025',
      location: 'Sports Ground',
      registrationLink: '#register'
    },
    {
      id: 3,
      title: 'Bazar Challenge',
      description: 'Test your bargaining and business skills in this market simulation game.',
      icon: <Trophy size={24} />,
      date: 'March 30, 2025',
      location: 'Commerce Block',
      registrationLink: '#register'
    },
    {
      id: 4,
      title: 'Treasure Hunt',
      description: 'Solve clues and find hidden treasures across the campus.',
      icon: <MapPin size={24} />,
      date: 'March 31, 2025',
      location: 'Entire Campus',
      registrationLink: '#register'
    }
  ];

  const galleryImages = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      alt: 'Tech event from previous year',
      category: 'tech'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      alt: 'Cultural performance',
      category: 'cultural'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      alt: 'Art exhibition',
      category: 'art'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1469488865564-c2de10f69f96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      alt: 'Fashion show',
      category: 'fashion'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
      alt: 'Adventure challenge',
      category: 'thrill'
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      alt: 'Hackathon participants',
      category: 'tech'
    }
  ];

  const faqs = [
    {
      id: 1,
      question: 'How do I register for events?',
      answer: 'You can register for events through our online portal. Click on the "Register" button on the event page and follow the instructions.'
    },
    {
      id: 2,
      question: 'Is there an entry fee for the festival?',
      answer: 'Yes, there is a nominal entry fee of ₹500 for the entire festival. Individual events may have additional registration fees.'
    },
    {
      id: 3,
      question: 'Can I participate in multiple events?',
      answer: 'Yes, you can participate in multiple events as long as there are no schedule conflicts.'
    },
    {
      id: 4,
      question: 'Are there accommodation facilities available?',
      answer: 'Yes, we provide accommodation facilities for outstation participants at a nominal cost. Please mention your accommodation requirements during registration.'
    },
    {
      id: 5,
      question: 'What are the prize amounts for competitions?',
      answer: 'Prize amounts vary for different events. The total prize pool for Tejanta 2025 is over ₹10 lakhs. Specific prize details are mentioned on individual event pages.'
    },
    {
      id: 6,
      question: 'How can I become a sponsor?',
      answer: 'For sponsorship inquiries, please contact our sponsorship team at sponsors@tejanta2025.com or call +91 9876543210.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar 
        activeSection={activeSection} 
        isMenuOpen={isMenuOpen} 
        toggleMenu={toggleMenu} 
      />
      
      <main>
        <Hero />
        
        <section id="countdown" className="py-20 bg-gradient-to-b from-purple-900 to-indigo-900">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-yellow-400">Countdown to Tejanta 2025</h2>
            <CountdownTimer targetDate="2025-03-15T00:00:00" />
          </div>
        </section>
        
        <section id="tech-spardha" className="py-20 bg-gray-900">
          <EventSection 
            title="Tech Spardha" 
            description="Showcase your technical skills and compete with the best minds in various tech competitions."
            events={techEvents}
            bgColor="from-blue-900 to-indigo-800"
            icon={<Code size={32} className="text-blue-400" />}
          />
        </section>
        
        <section id="kala-utsav" className="py-20 bg-gray-800">
          <EventSection 
            title="Kala Utsav" 
            description="Celebrate the cultural diversity through music, dance, and theatrical performances."
            events={culturalEvents}
            bgColor="from-pink-900 to-purple-800"
            icon={<Music size={32} className="text-pink-400" />}
          />
        </section>
        
        <section id="rang-riwaaz" className="py-20 bg-gray-900">
          <EventSection 
            title="Rang Riwaaz" 
            description="Express your creativity through various art forms and showcase your artistic talents."
            events={artEvents}
            bgColor="from-green-900 to-teal-800"
            icon={<Palette size={32} className="text-green-400" />}
          />
        </section>
        
        <section id="fashion-mela" className="py-20 bg-gray-800">
          <EventSection 
            title="Fashion Mela" 
            description="Walk the ramp, showcase your designs, and be a part of the glamorous fashion world."
            events={fashionEvents}
            bgColor="from-red-900 to-orange-800"
            icon={<Shirt size={32} className="text-red-400" />}
          />
        </section>
        
        <section id="thrill-arena" className="py-20 bg-gray-900">
          <EventSection 
            title="Thrill Arena" 
            description="Challenge yourself with exciting adventures and thrilling activities."
            events={thrillEvents}
            bgColor="from-yellow-900 to-amber-800"
            icon={<Flame size={32} className="text-yellow-400" />}
          />
        </section>
        
        <section id="gallery" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-yellow-400">Gallery</h2>
            <p className="text-xl text-center mb-12 max-w-3xl mx-auto">Relive the memories of previous editions of Tejanta through our gallery.</p>
            <Gallery images={galleryImages} />
          </div>
        </section>
        
        <section id="faq" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-yellow-400">Frequently Asked Questions</h2>
            <FAQ faqs={faqs} />
          </div>
        </section>
        
        <section id="register" className="py-20 bg-gradient-to-b from-indigo-900 to-purple-900">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-yellow-400">Register Now</h2>
            <p className="text-xl text-center mb-12 max-w-3xl mx-auto">Join us for an unforgettable experience at Tejanta 2025. Register now to participate in your favorite events!</p>
            
            <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="college" className="block text-sm font-medium mb-2">College/University</label>
                  <input 
                    type="text" 
                    id="college" 
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="events" className="block text-sm font-medium mb-2">Select Events (You can select multiple)</label>
                  <select 
                    id="events" 
                    multiple
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 h-40"
                    required
                  >
                    <optgroup label="Tech Spardha">
                      <option value="hackathon">24-Hour Hackathon</option>
                      <option value="gaming">LAN Gaming Tournament</option>
                      <option value="techquiz">Tech Quiz</option>
                    </optgroup>
                    <optgroup label="Kala Utsav">
                      <option value="dance">Dance Competition</option>
                      <option value="singing">Singing Contest</option>
                      <option value="drama">Drama Competition</option>
                      <option value="poetry">Poetry Slam</option>
                      <option value="antakshari">Antakshari</option>
                    </optgroup>
                    <optgroup label="Rang Riwaaz">
                      <option value="rangoli">Rangoli Competition</option>
                      <option value="tshirt">T-shirt Painting</option>
                      <option value="poster">Poster Making</option>
                      <option value="mehendi">Mehendi Design</option>
                      <option value="photography">Photography Contest</option>
                    </optgroup>
                    <optgroup label="Fashion Mela">
                      <option value="fashionshow">Fashion Show</option>
                      <option value="designer">Designer Showcase</option>
                      <option value="costume">Costume Contest</option>
                    </optgroup>
                    <optgroup label="Thrill Arena">
                      <option value="roadies">Roadies Challenge</option>
                      <option value="games">Fun Games</option>
                      <option value="bazar">Bazar Challenge</option>
                      <option value="treasure">Treasure Hunt</option>
                    </optgroup>
                  </select>
                  <p className="text-xs text-gray-400 mt-1">Hold Ctrl (or Cmd on Mac) to select multiple events</p>
                </div>
                
                <div>
                  <label htmlFor="accommodation" className="block text-sm font-medium mb-2">Accommodation Required?</label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input type="radio" name="accommodation" value="yes" className="mr-2" />
                      Yes
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="accommodation" value="no" className="mr-2" />
                      No
                    </label>
                  </div>
                </div>
                
                <div className="pt-4">
                  <button 
                    type="submit" 
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    Register & Pay ₹500
                  </button>
                  <p className="text-center text-sm text-gray-400 mt-2">Registration fee includes access to all events</p>
                </div>
              </form>
            </div>
          </div>
        </section>
        
        <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-yellow-400">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <p className="mb-6">Have questions about Tejanta 2025? Feel free to reach out to us.</p>
                <div className="flex items-center mb-4">
                  <MapPin size={24} className="mr-4 text-yellow-400" />
                  <p>LNCT Campus, Indore, Madhya Pradesh, India</p>
                </div>
                <div className="flex items-center mb-4">
                  <Clock size={24} className="mr-4 text-yellow-400" />
                  <p>9:00 AM - 6:00 PM (Monday - Saturday)</p>
                </div>
                <div className="flex items-center mb-6">
                  <Users size={24} className="mr-4 text-yellow-400" />
                  <p>Emergency Contact: +91 9876543210</p>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-white hover:text-yellow-400 transition-colors">
                    <Instagram size={24} />
                  </a>
                  <a href="#" className="text-white hover:text-yellow-400 transition-colors">
                    <Facebook size={24} />
                  </a>
                  <a href="#" className="text-white hover:text-yellow-400 transition-colors">
                    <Twitter size={24} />
                  </a>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;