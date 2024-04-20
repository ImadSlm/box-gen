import { useDispatch } from "react-redux"
import { updateshadowvalue } from "../../features/shadows"

export default function ShadowRange({ inputdata, shadowid }) {
    const dispatch = useDispatch()

    function handleinputs(e) {
        dispatch(
            updateshadowvalue({
                inputnumber: inputdata.inputnumber,
                value: e.target.value,
                shadowid,
            })
        )
    }

    return (
        <div className="my-4 ">
            <div className="flex justify-between items-baseline">
                <p>{inputdata.name}</p>
                <div className="flex items-baseline mb-2">
                    <input
                        value={inputdata.value}
                        onChange={handleinputs}
                        className="w-14 h-8 mr-2 border border-gray-200 text-center"
                        type="number"
                    />
                    <p>px</p>
                </div>
            </div>

            <div className="relative z-0 w-full flex items-center">
                <input
                    value={inputdata.value}
                    onChange={handleinputs}
                    type="range"
                    min={inputdata.minmax[0]}
                    max={inputdata.minmax[1]}
                    className="w-full h-[2px] bg-gray-300 rounded-lg appearance-none cursor-pointer"
                />
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-0.5 h-10 bg-gray-300 rounded"></div>
            </div>
        </div>
    )
}
