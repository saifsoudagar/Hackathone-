import { createSlice } from '@reduxjs/toolkit';
import photos from '../assets (1)/photo'; // Adjust the path if needed

const { image1, image2, image3, image4, image5 } = photos;

// Initial state with unique ids for each hackathon
const initialState = [
    { id: 1, img: image1, description: 'Description no 1', name: 'Data Science Bootcamp - Graded Datathon', status: 'Upcoming', level: 'Easy' },
    { id: 2, img: image2, description: 'Description no 2', name: 'Data Sprint 72 - Butterfly Identification', status: 'Upcoming', level: 'Hard' },
    { id: 3, img: image3, description: 'Description no 3', name: 'Data Sprint 71 - Weather Recognition', status: 'Upcoming', level: 'Easy' },
    { id: 4, img: image4, description: 'Description no 4', name: 'Data Sprint 70 - Airline Passenger Satisfaction', status: 'Active', level: 'medium' },
    { id: 5, img: image5, description: 'Description no 5', name: 'Engineering Graduates Employment Outcomes', status: 'Past', level: 'Hard' }
];

const hackathonSlice = createSlice({
    name: 'hackathons',
    initialState,
    reducers: {
        addHackathon: (state, action) => {
            state.push(action.payload);
        },
        removeHackathon: (state, action) => {
            return state.filter(hackathon => hackathon.id !== action.payload);
        },
        updateHackathon: (state, action) => {
            const index = state.findIndex(hackathon => hackathon.id === action.payload.id);
            if (index !== -1) {
                state[index] = {...state[index], ...action.payload };
            }
        }
    }
});

export const { addHackathon, removeHackathon, updateHackathon } = hackathonSlice.actions;

export default hackathonSlice.reducer;