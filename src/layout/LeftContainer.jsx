import ShadowList from "./shadowlist/ShadowList"
import BoxPanel from "./boxpanel/BoxPanel"
import { useState } from "react"

export default function LeftContainer() {
    const [tabs, settabs] = useState(0)

    const tabslist = [
        { name: "Shadow", component: <ShadowList /> },
        { name: "BoxPanel", component: <BoxPanel /> },
    ]

    return (
        <div className="relative mt-20 w-[600px] h-[500px] border rounded-b rounded-tr border-gray-300 shadow-xl bg-gray-50 md:mt-0">
            <div className="flex absolute -translate-y-full -left-[1px]">
                {tabslist.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => settabs(index)}
                        className="min-w-[125px] py-2 px-3 mr-4 font-bold border-t border-x border-gray-300 bg-slate-50 hover:bg-slate-300 text-slate-700 rounded-t focus:outline-none focus:ring-2 ring-inset focus:ring-blue-300">
                        {tab.name}
                    </button>
                ))}
            </div>

            <div className="h-full overflow-auto">
                {tabslist[tabs].component}
            </div>
        </div>
    )
}
