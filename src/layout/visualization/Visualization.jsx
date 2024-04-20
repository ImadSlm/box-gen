import { useSelector } from "react-redux"
import getboxshadowvalue from "../../utils/getboxshadowvalue"
import ModalBtn from "./modal/ModalBtn"

export default function Visualization() {
    const shadowvalues = useSelector((state) => state.shadows)
    const boxproperties = useSelector((state) => state.boxproperties)
    // console.log(getboxshadowvalue(shadowvalues))

    return (
        <div className="flex flex-col p-5 ml-10 lg:ml-28">
            <ModalBtn />
            <div
                className="w-[250px] h-[250px] bg-white rounded-xl mb-20 lg:mb-40 "
                style={{
                    boxShadow: `${getboxshadowvalue(shadowvalues).slice(0,-1)}`,
                    borderRadius: `${boxproperties[0].value}px`,
                    height: `${boxproperties[1].value}px`,
                    width: `${boxproperties[2].value}px`,
                    backgroundColor: `${boxproperties[3].value}`,
                }}>

                </div>
        </div>
    )
}
