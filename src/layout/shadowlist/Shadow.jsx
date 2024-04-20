import { useEffect, useState } from "react"
import chevron from "../../assets/chevron.svg"
import ShadowRange from "./ShadowRange";
import ShadowColorPicker from "./ShadowColorPicker"
import ShadowCheckbox from "./ShadowCheckbox"
import { removeshadow } from "../../features/shadows";
import { useDispatch } from "react-redux";


export default function Shadow({ panelnumber, shadow }) {
    const [toggleshadow, settoggleshadow] = useState(false)
    const dispatch = useDispatch()

    //pour n'avoir que le premier shadow d'ouvert au refresh
    useEffect(() => {
        if (panelnumber === 1) {
            settoggleshadow(true)
        };
    }, []);

    const shadowinputs = shadow.inputs.map((input,index) => {
		if (input.type === "range") {
			return <ShadowRange key={index} inputdata={shadow.inputs[index]} shadowid={shadow.id}/>;
		}
		else if(input.type === "color"){
			return <ShadowColorPicker key={index} inputdata={shadow.inputs[index]} shadowid={shadow.id}/>
		}
	})

    return (
        <li className="bg-gray-50 border-b border-gray-300">
            <button onClick={() => settoggleshadow(!toggleshadow)} className="w-full px-6  py-4 flex justify-between items-center hover:bg-gray-200">
                <span>Shadow {panelnumber}</span>
                <img
                    src={chevron}
                    style={{
                        transform: `${
                            toggleshadow ? "rotate(90deg)" : "rotate(0deg)"
                        }`,
                    }}
                    className="font-bold w-5"
                    alt=""
                />
            </button>
            {toggleshadow && (
                <>
                    <div className="flex items-end px-6 pt-4">
                        <ShadowCheckbox name={"active"} shadowid={shadow.id}/>
                        <ShadowCheckbox name={"inset"} shadowid={shadow.id}/>
                        <button onClick={() => dispatch(removeshadow(shadow.id))} className="ml-auto text-sm bg-red-600 text-white hover:bg-red-700 py-1 px-3 rounded">
                            Remove
                        </button>
                    </div>
                    <div className="px-6 py-4">
                        {shadowinputs}
                    </div>
                </>
            )}
        </li>
    )
}
