import { useDispatch } from "react-redux"
import { updateshadowvalue } from "../../features/shadows";

export default function ShadowColorPicker({inputdata, shadowid}) {
    const dispatch = useDispatch();

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
    <div className="mt-3">
        <p>{inputdata.name}</p>
        <div className="flex mt-2">
            <input
                value={inputdata.value}
                onChange={handleinputs}
                type="text"
                className="flex-grow border py-1 px-2 focus:outline-1 outline-gray-400"
            />
            <input
                value={inputdata.value}
                onChange={handleinputs}
                type="color"
                className="cursor-pointer h-[40px]"
            />
        </div>
    </div>
)
}