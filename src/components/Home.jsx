import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addNote, updateNote } from "../redux/notesSlice";
import { toast } from 'react-toastify';


const Home = () => {

    // To manage input state
    const [title, setTitle] = useState("");

    // To manage textarea state
    const [content, setContent] = useState("");

    // To read and modify the query string in the URL for the current location
    const [searchParams, setSearchParams] = useSearchParams();

    // when we want to update a note
    const noteId = searchParams.get("noteId");

    // To read data from store 
    const allNoteCards = useSelector((state) => state.note.notes);

    // To access reducer logic functions we need to use dispatch
    const dispatch = useDispatch();

    // What should be added when creating a note
    const createNote = () => {

        // validate title
        if (!title.trim()) {
            toast.error("Please fill all fields"); // Show error toast
            return; // Stop further execution
        }
        // validate content
        if (!content.trim()) {
            toast.error("Please fill all fields"); // Show error toast
            return; // Stop further execution
        }

        const formatDate = new Date().toLocaleDateString("default", { month: "long" }) + " " + new Date().getDate() + " , " + new Date().getFullYear();

        const note = {
            title: title,
            content: content,
            id: noteId || Date.now().toString(36),
            createdAt: formatDate,
        }
        if (noteId) {
            // update note
            dispatch(updateNote(note));
        }
        else {
            // create note
            dispatch(addNote(note));
        }

        // After updating and creating a notes, empty the fields
        setTitle("");
        setContent("");
        setSearchParams({});
    }

    // To show data when we click on edit btn
    useEffect(() => {
        if (noteId) {
            const notecard = allNoteCards.find((card) => card.id === noteId);
            setTitle(notecard.title);
            setContent(notecard.content)
        }
    }, []);


    return (
        <div className="lg:w-[45rem] md:w-[45rem] sm:w-[24rem] mt-7 mx-auto border-2 border-gray-900 p-3 rounded-lg">
            <div className="flex justify-between items-center gap-3">
                {/* Title goes here */}
                <input
                    className="bg-black border-b-2 border-gray-800 outline-none p-1.5 lg:w-[70%] md:w-[70%] sm:w-[60%] text-teal-300 font-medium"
                    type="text"
                    placeholder="Enter the Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                {/* Creation and updation btn on basis of noteId */}
                <button onClick={createNote} className="bg-teal-400 py-2 lg:px-7 md:px-7 sm:px-2 rounded-lg font-bold hover:shadow-light">{noteId ? "Update Note" : "Create a Note"}</button>
            </div>

            <div className="mt-4">
                {/* Content goes here */}
                <textarea type="text" rows="20" className="w-full mx-auto bg-gray-600 border-2 border-teal-300 outline-none rounded-lg p-3 text-white" value={content} onChange={(e) => setContent(e.target.value)} />
            </div>
        </div>
    )
}

export default Home
