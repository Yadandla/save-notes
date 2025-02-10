import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { removeNote } from "../redux/notesSlice";
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
import { MdEdit, MdDelete, MdPreview } from "react-icons/md";
import { IoIosCopy } from "react-icons/io";

const Notes = () => {
    // Now can read data from the store with useSelector
    //State.name.initialsate
    const notes = useSelector((state) => state.note.notes);

    // // actions, where logic is executed and access them
    const dispatch = useDispatch();

    const [search, setSearch] = useState("");

    // // by filter method, search title
    const filterData = notes.filter((note) => note.title.toLowerCase().includes(search.toLowerCase()));

    // Function for deletion of note
    const deleteNote = (note) => {
        dispatch(removeNote(note));
    }

    return (
        <div className="lg:w-[45rem] md:w-[45rem] sm:w-[24rem] mt-7 mx-auto border-2 border-gray-900 p-3 rounded-lg relative">
            <div>
                <input
                    className="w-full mt-7 mb-2 bg-black border-b-2 border-gray-900 outline-none p-1.5 text-teal-300 font-medium"
                    type="search"
                    placeholder="Search Title"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            {
                filterData.length > 0 &&
                filterData.map((note) => {
                    return (
                        <div className="bg-black mt-2 p-3 rounded-lg flex justify-between items-start gap-4 scale-95 hover:scale-100 transition-all duration-700 border-2 border-gray-900 " key={note.id}>
                            <div className="text-white">
                                <h2 className="font-bold pb-3 text-teal-400 text-2xl">{note.title}</h2>
                                <p className="break-all">{note.content}</p>
                            </div>
                            <div>
                                <div className="flex justify-end gap-3 pb-3">
                                    <button className="bg-teal-400 p-1 rounded-lg text-black hover:bg-black hover:text-teal-400">
                                        <Link to={`/?noteId=${note.id}`}><MdEdit /></Link>
                                    </button>
                                    <button className="bg-teal-400 p-1 rounded-lg text-black hover:bg-black hover:text-teal-400" onClick={() => deleteNote(note.id)}><MdDelete /></button>
                                    <button className="bg-teal-400 p-1 rounded-lg text-black hover:bg-black hover:text-teal-400" onClick={() => {
                                        navigator.clipboard.writeText(note.content)
                                        toast.success("Copied to Clipboard")
                                    }
                                    }><IoIosCopy /></button>
                                    <button className="bg-teal-400 p-1 rounded-lg text-black hover:bg-black hover:text-teal-400">
                                        <Link to={`/notes/${note.id}`}><MdPreview /></Link>
                                    </button>
                                </div>
                                <div>
                                    <p className="text-white">{note.createdAt}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}


export default Notes
