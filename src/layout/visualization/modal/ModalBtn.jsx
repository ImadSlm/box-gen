import { useState } from "react"
import { createPortal } from "react-dom"
import ModalResult from "./ModalResult"

export default function ModalBtn() {
    const [showmodal, setshowmodal] = useState(false)
    return (
        <>
            <button onClick={() => setshowmodal(!showmodal)} className="relative z-0 mx-auto mt-2 py-1 px-3 text-sm rounded cursor-pointer bg-blue-600 text-white hover:bg-blue-700">
                get the code
            </button>
            {showmodal && createPortal(
                    <ModalResult closemodal={() => setshowmodal(!showmodal)} />, document.body
                )}
        </>
    )
}
