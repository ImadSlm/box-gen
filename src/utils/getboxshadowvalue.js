export default function getboxshadowvalue(shadows) {
    let finalstring = ""

    shadows.forEach(el => {
        if(el.active){
            el.inputs.forEach(input => {
                if (input.type === "range") finalstring += ` ${input.value}px `
                else if (input.type === "color") finalstring += `${input.value}`
            })

            if (el.inset) finalstring += " inset"

            if(shadows.indexOf(el) === shadows.length - 1) finalstring += ";"
            else finalstring += "," 
        }
    })
    return finalstring
}
