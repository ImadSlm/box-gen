import { useEffect } from "react"
import getboxshadowvalue from "../../../utils/getboxshadowvalue"
import { useSelector } from "react-redux"

export default function ModalResult({ closemodal }) {
    const shadowvalues = useSelector((state) => state.shadows)

    useEffect(() => {
        document.body.style.overflow = "hidden"
        return () => document.body.style.overflow = "auto"
    }, [])

    let runninganimation = false
    function handlecopy(e) {
        if(!runninganimation){
            runninganimation = true
            e.target.textContent = "Copied !"

            setTimeout(() => {
                e.target.textContent = "Copy"
                runninganimation = false
            }, 1250);
        }
        navigator.clipboard.writeText(`box-state : ${getboxshadowvalue(shadowvalues)}`)
    }


    return (
        <div onClick={closemodal} className=" fixed z-10 inset-0 flex items-center justify-center bg-gray-600/75">
            <div
                onClick={(e) => e.stopPropagation()}
                className="max-w-[400px] rounded p-7 bg-gray-50 mb-[10vh]">
                <div className="flex items-end mb-5">
                    <p className="font-semibold mr-5">Here is your code !</p>
                    <button onClick={handlecopy} className="ml-auto mr-2 text-sm bg-blue-600 text-white hover:bg-blue-800 py-1 px-3 rounded">
                        Copy
                    </button>
                    <button
                        onClick={closemodal}
                        className=" text-sm bg-red-600 text-white hover:bg-red-900 py-1 px-3 rounded">
                        Close
                    </button>
                </div>
                <p className="rounded bg-gray-100 p-5">
                    <span className="font-semibold">box-shadow : </span>
                    <span>{getboxshadowvalue(shadowvalues)}</span>
                </p>
            </div>
        </div>
    )
}
