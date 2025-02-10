import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ViewNotes = () => {

    const { id } = useParams();

    const allNoteCards = useSelector((state) => state.note.notes);

    // To view unique not card
    const note = allNoteCards.filter((card) => card.id === id)[0];

    return (
        <div className="lg:w-[45rem] md:w-[45rem] sm:w-[24rem] mt-7 mx-auto border-2 border-gray-900 p-3 rounded-lg">
            <div className="flex justify-between items-center gap-3">
                {/* Title goes here */}
                <input
                    className="bg-black border-b-2 border-gray-900 outline-none p-1.5 w-[90%] text-teal-300 font-medium select-none"
                    type="text"
                    disabled
                    placeholder="Enter the Title"
                    value={note.title}
                    // eslint-disable-next-line no-undef
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button className="bg-teal-400 py-2 lg:px-7 md:px-7 sm:px-2 rounded-lg font-bold hover:shadow-light">
                    <Link to="/notes">Back</Link>
                </button>
            </div>

            <div className="mt-4">
                {/* Content goes here */}
                <textarea type="text" disabled rows="20" className="w-full mx-auto bg-gray-600 border-2 border-teal-300 outline-none rounded-lg p-3 text-white select-none" value={note.content}
                    // eslint-disable-next-line no-undef
                    onChange={(e) => setContent(e.target.value)} />
            </div>
        </div>
    )
}

export default ViewNotes
