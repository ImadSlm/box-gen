import { useEffect } from "react"
import getboxshadowvalue from "../../../utils/getboxshadowvalue"
import getboxvalue from "../../../utils/getboxvalue"
import { useSelector } from "react-redux"

export default function ModalResult({ closemodal }) {
    const shadowvalues = useSelector((state) => state.shadows)
    const boxvalues = useSelector((state) => state.boxproperties)
    
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
            }, 1000);
        }
        navigator.clipboard.writeText(`box-shadow : ${getboxshadowvalue(shadowvalues)} \n${getboxvalue(boxvalues)}`)
    }


    return (
        <div onClick={closemodal} className=" fixed z-10 inset-0 flex items-center justify-center bg-gray-600/75">
            <div
                onClick={(e) => e.stopPropagation()}
                className="max-w-[400px] rounded p-7 bg-gray-50 mb-[10vh]">
                <div className="flex items-end mb-5">
                    <p className="font-semibold mr-5">Here is your code 🎉</p>
                    <button onClick={handlecopy} className="ml-auto mr-2 text-sm bg-blue-600 text-white hover:bg-blue-800 py-1 px-3 rounded">
                        Copy
                    </button>
                    <button
                        onClick={closemodal}
                        className=" text-sm bg-red-600 text-white hover:bg-red-900 py-1 px-3 rounded">
                        Close
                    </button>
                </div>
                <p className="rounded font-mono text-gray-200 bg-gray-900 p-10">
                    <span className="font-semibold">box-shadow : </span>
                    <span>{getboxshadowvalue(shadowvalues)}<br></br></span>
                    <span className="font-semibold">box panel : </span>
                    <span>{getboxvalue(boxvalues)}</span>
                </p>
            </div>
        </div>
    )
}
