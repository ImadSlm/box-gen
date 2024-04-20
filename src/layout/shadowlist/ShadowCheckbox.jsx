import { useDispatch, useSelector } from "react-redux"
import { updatecheckbox } from "../../features/shadows"

export default function ShadowCeckbox({ name, shadowid }) {
    const dispatch = useDispatch()
    const checkboxshadow = useSelector((state) =>
        state.shadows.find((shadow) => shadow.id === shadowid)
    )
    // console.log(checkboxshadow)
    
    return (
        <>
            <input
                type="checkbox"
                onChange={() => dispatch(updatecheckbox({ shadowid, name }))}
                checked={checkboxshadow[name]}
                id={`checkbox-${name}-${shadowid}`}
                className="h-4 w-4 border-gray-300 cursor-pointer rounded mr-2"
            />
            <label 
            className="leading-4 mr-5"
            htmlFor={`checkbox-${name}-${shadowid}`}>
                {name.charAt(0).toUpperCase() + name.slice(1)}
            </label>
        </>
    )
}
