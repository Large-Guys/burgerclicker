function GenerateSave()
{
    let str = Burgers+"s"+employees+"s"+microwaves+"s"+factories+"s"+bonusBurgers+"s"+burgerFabricator+"s"+squareBurger;
    let encodedstr = "";
    for (let index = 0; index < str.length; index++) {
        let c = str.charCodeAt(index);
        encodedstr += String.fromCharCode(c+8);
    }
}
function ImportSave(save)
{
    for (let index = 0; index < save.length; index++) {
        let c = save.charCodeAt(index);
        encodedstr += String.fromCharCode(c-8);
    }
    splitcode = encodedstr.split('s');
    Burgers = Number(splitcode[0]);
    employees = Number(splitcode[1]);
    microwaves = Number(splitcode[2]);
    factories = Number(splitcode[3]);
    bonusBurgers = Number(splitcode[4]);
    burgerFabricator = Number(splitcode[5]);
    squareBurger = Number(splitcode[6]);
}