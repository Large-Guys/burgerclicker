function GenerateSave()
{
    let str = Burgers+":"+employees+":"+microwaves+":"+factories+":"+bonusBurgers+":"+burgerFabricator+":"+squareBurger;
    let encodedstr = "";
    for (let index = 0; index < str.length; index++) {
        let c = str.charCodeAt(index);
        encodedstr += String.fromCharCode(c+17);
    }
    return encodedstr;
}
function ImportSave(save)
{
    let encodedstr = ""
    for (let index = 0; index < save.length; index++) {
        let c = save.charCodeAt(index);
        encodedstr += String.fromCharCode(c-17);
    }
    splitcode = encodedstr.split(':');
    Burgers = Number(splitcode[0]);
    employees = Number(splitcode[1]);
    microwaves = Number(splitcode[2]);
    factories = Number(splitcode[3]);
    bonusBurgers = Number(splitcode[4]);
    burgerFabricator = Number(splitcode[5]);
    squareBurger = Number(splitcode[6]);
    Update_Text();
}