// src/api/api.js

import axios from 'axios';

const API_URL = 'http://localhost:5173';  // Update this URL to match your backend server's URL

// Fetch all events
export const fetchEvents = async () => {
  try {
    const response = await axios.get(`${API_URL}/events`);
    return response.data;
  } catch (error) {
    console.error("Error fetching events:", error);
  }
};

// Purchase ticket
export const purchaseTicket = async ({ eventId, quantity, user }) => {
  try {
    const response = await axios.post(`${API_URL}/events/${eventId}/tickets`, { quantity, user });
    return response.data;
  } catch (error) {
    console.error("Error purchasing ticket:", error);
  }
};
