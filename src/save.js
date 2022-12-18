function GenerateSave()
{
    let str = Burgers+":"+employees+":"+microwaves+":"+factories+":"+bonusBurgers+":"+burgerFabricator+":"+squareBurger+":"+burgerGun;
    let encodedstr = "";
    for (let index = 0; index < str.length; index++) {
        let c = str.charCodeAt(index);
        encodedstr += String.fromCharCode(c+17);
    }
    localStorage.setItem('save', encodedstr);
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
    if(splitcode[0])
    Burgers = Number(splitcode[0]);
    if(splitcode[1])
    employees = Number(splitcode[1]);
    if(splitcode[2])
    microwaves = Number(splitcode[2]);
    if(splitcode[3])
    factories = Number(splitcode[3]);
    if(splitcode[4])
    bonusBurgers = Number(splitcode[4]);
    if(splitcode[5])
    burgerFabricator = Number(splitcode[5]);
    if(splitcode[6])
    squareBurger = Number(splitcode[6]);
    if(splitcode[7])
    burgerGun = Number(splitcode[7]);
    Update_Text();
}