

export default function getboxvalue(boxproperties) {
    let finalstring = "";

    boxproperties.forEach((input) => {
        if (input.type === "range") {
            finalstring += `${input.name} : ${input.value}px ;\n`;
        } else if (input.type === "color") {
            finalstring += `Color : ${input.value} ;\n`;
        }
    });
    
    return finalstring;
}

