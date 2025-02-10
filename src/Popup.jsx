import { IoCopy } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiMiniXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const Popup = ({ closePopup }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-[#000000a3] popup">
            <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-black w-[30%] h-[30%] p-4 rounded-lg">
                <div className="flex justify-between items-start text-white">
                    <h2 className="font-bold text-2xl">Share Link</h2>
                    <button className="text-2xl border-2 border-white rounded-lg outline-none" onClick={closePopup}><HiMiniXMark /></button>
                </div>
                <p className="text-white text-lg pt-1">Anyone who has this link will be able to view this.</p>
                <div className="flex justify-between py-5 gap-2">
                    <input type="url" className="w-full rounded-lg bg-black border-2 border-white outline-none" />
                    <span className="text-xl border-2 border-white rounded-lg text-white p-1" onClick={(link) => {
                        navigator.clipboard.writeText(link.content)
                    }
                    }><IoCopy /></span>
                </div>
                <div className="flex gap-5">
                    <button className="bg-[#25D366] text-white text-xl p-1 rounded-full">
                        <Link to="https://web.whatsapp.com/" target="_blank"><FaWhatsapp /></Link></button>
                    <button className="bg-[#1877F2] text-white text-xl p-1 rounded-full">
                        <Link to="https://www.facebook.com/" target="_blank"><FaFacebookF /></Link></button>
                    <button className="bg-black text-white text-xl p-1 rounded-full">
                        <Link to="https://x.com/?lang=en" target="_blank"><FaXTwitter /></Link></button>
                </div>
            </div>
        </div>
    )
}

export default Popup
