import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

const notesSlice = createSlice(
    {
        name: "note",
        initialState: {
            // To show data in localStorage
            notes: localStorage.getItem("notes") ? JSON.parse(localStorage.getItem("notes")) : []
        },
        reducers: {
            addNote: (state, action) => {
                // This is where list is stored in action.payload
                const note = action.payload;

                // pushing the list we created in createNote function
                state.notes.push(note);
                localStorage.setItem("notes", JSON.stringify(state.notes));

                // displaying toast when notes created
                toast.success("Notes created successfully")
            },
            removeNote: (state, action) => {
                const noteId = action.payload;
                // finding unique id which one has to be removed
                const index = state.notes.findIndex((item) => item.id === noteId)

                if (index >= 0) {
                    state.notes.splice(index, 1)
                    localStorage.setItem("notes", JSON.stringify(state.notes));

                    // displaying toast when notes removed
                    toast.success("Removed note Successfully")
                }
            },
            updateNote: (state, action) => {
                const note = action.payload;
                // finding unique id which one has to be updated
                const index = state.notes.findIndex((item) => item.id === note.id)

                if (index >= 0) {
                    state.notes[index] = note
                    localStorage.setItem("notes", JSON.stringify(state.notes));

                    // displaying toast when notes updated
                    toast.success("Updated note Successfully")
                }
            },
            resetNote: (state) => {
                state.notes = [];

                // removing complete notes from localStorage
                localStorage.removeItem("notes");
            },
        }
    }
)

export const { addNote, removeNote, updateNote, resetNote } = notesSlice.actions;

export default notesSlice.reducer;

// Now import the reducer to store page