'use client'

import { useLocation } from 'react-router-dom'; // Import useLocation to access the URL
import { useState } from 'react';
import CustomImage from '../assets/CustomImage';
import { Menu, Transition, Dialog } from '@headlessui/react';
import { ChevronDownIcon, XIcon, CalendarIcon } from 'lucide-react';

// Mock data
const events = [
  { id: 1, title: 'F1 Monaco Grand Prix', category: 'Formula 1', date: '2023-05-28', time: '14:00', location: 'Monaco', thumbnail: '/placeholder.svg?height=200&width=300', isLive: true },
  { id: 2, title: 'UEFA Champions League Final', category: 'Football', date: '2023-06-10', time: '20:00', location: 'Istanbul', thumbnail: '/placeholder.svg?height=200&width=300', isLive: false },
  { id: 3, title: 'Wimbledon', category: 'Tennis', date: '2023-07-03', time: '12:00', location: 'London', thumbnail: '/placeholder.svg?height=200&width=300', isLive: false },
  { id: 4, title: 'NBA Finals Game 1', category: 'Basketball', date: '2023-06-01', time: '21:00', location: 'Boston', thumbnail: '/placeholder.svg?height=200&width=300', isLive: true },
  { id: 5, title: 'Tour de France Stage 1', category: 'Cycling', date: '2023-07-01', time: '10:00', location: 'Bilbao', thumbnail: '/placeholder.svg?height=200&width=300', isLive: false },
  { id: 6, title: 'Super Bowl LVIII', category: 'American Football', date: '2024-02-11', time: '18:30', location: 'Las Vegas', thumbnail: '/placeholder.svg?height=200&width=300', isLive: false },
];

const relatedCategories = ['Rally', 'Drag Racing', 'NASCAR'];

export default function SubcategoryLandingPage() {
  const location = useLocation(); // Access the location object to get the URL
  const queryParams = new URLSearchParams(location.search); // Create a URLSearchParams object
  const subcategory = queryParams.get('subcategory') || "Motorsports"; // Get the subcategory from the URL or default to "Motorsports"

  const [sortBy, setSortBy] = useState('popularity');
  const [selectedDate, setSelectedDate] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const liveEventsCount = events.filter(event => event.isLive).length;

  const openModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  // Filter events based on the selected subcategory
  const filteredEvents = events.filter(event => event.category === subcategory && (selectedDate ? event.date === selectedDate : true));

  return (
    <div className="min-h-screen" style={{backgroundColor: '#01060e' }}>
      {/* Hero Section */}
      <div className="relative h-96 bg-gray-900 text-white">
        <CustomImage
          src="/placeholder.svg?height=400&width=1200"
          alt={subcategory}
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold mb-4">{subcategory}</h1>
          <p className="text-xl">Discover amazing {subcategory.toLowerCase()} events</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Live Events Indicator */}
        <div className="bg-red-600 text-white py-2 px-4 rounded-full inline-block mb-6">
          <span className="font-semibold">Live Now:</span> {liveEventsCount} events
        </div>

        {/* Filter and Sort Options */}
        <div className="flex flex-wrap justify-between items-center mb-8">
          <div className="flex items-center space-x-4 mb-4 sm:mb-0">
            <div className="relative">
              <input
                type ="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="border rounded p-2 pr-10"
              />
              <CalendarIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            <Menu as="div" className="relative">
              <Menu.Button className="inline-flex justify-center items-center px-4 py-2 border rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                Sort by: {sortBy}
                <ChevronDownIcon className="ml-2 h-5 w-5" aria-hidden="true" />
              </Menu.Button>
              <Transition
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {['popularity', 'time', 'location'].map((option) => (
                      <Menu.Item key={option}>
                        {({ active }) => (
                          <button
                            className={`${
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                            } block px-4 py-2 text-sm w-full text-left`}
                            onClick={() => setSortBy(option)}
                          >
                            {option}
                          </button>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <div key={event.id} className="rounded-lg shadow-md overflow-hidden" style={{ backgroundColor: '#1f2937'}}>
                <CustomImage
                  src={event.thumbnail}
                  alt={event.title}
                  width={300}
                  height={200}
                  className="w-full text-white h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl text-white font-semibold mb-2">{event.title}</h3>
                  <p className="text-sm text-white mb-2">{event.category}</p>
                  <p className="text-sm text-white mb-2">
                    {event.date} at {event.time} • {event.location}
                  </p>
                  {event.isLive && (
                    <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full">LIVE</span>
                  )}
                  <div className="mt-4 flex justify-between items-center">
                    <button
                      onClick={() => openModal(event)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      More Details
                    </button>
                    <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
                      Buy Tickets
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No events found for this subcategory.</p>
          )}
        </div>

        {/* Additional Sections */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Upcoming Events */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
            <ul className="space-y-2">
              {events.filter(event => !event.isLive).slice(0, 3).map(event => (
                <li key={event.id} className="flex justify-between items-center">
                  <span>{event.title}</span>
                  <span className="text-gray-600">{event.date}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Related Categories */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Related Categories</h2>
            <ul className="space-y-2">
              {relatedCategories.map((category) => (
                <li key={category}>
                  <a href="#" className="text-blue-600 hover:text-blue-800">{category}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Event Detail Modal */}
      <Transition show={isModalOpen} as="div">
        <Dialog onClose={() => setIsModalOpen(false)} className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

            <div className="relative bg-white rounded max-w-md mx-auto p-6">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              >
                <XIcon className="h-6 w-6" />
              </button>
              {selectedEvent && (
                <>
                  <h3 className="text-lg font-medium leading-6 text-gray-900 mb-2">{selectedEvent.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">{selectedEvent.category}</p>
                  <p className="mb-2"><strong>Date:</strong> {selectedEvent.date}</p>
                  <p className="mb-2"><strong>Time:</strong> {selectedEvent.time}</p>
                  <p className="mb-2"><strong>Location:</strong> {selectedEvent.location}</p>
                  <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <div className="flex justify-end">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mr-2">
                      Reserve Spot
                    </button>
                    {selectedEvent.isLive && (
                      <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">
                        Watch Live
                      </button>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}