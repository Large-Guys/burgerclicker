function GenerateSave()
{
    let str = Burgers+"s"+employees+"s"+microwaves+"s"+factories+"s"+bonusBurgers+"s"+burgerFabricator;
    let encodedstr = "";
    for (let index = 0; index < str.length; index++) {
        let c = str.charCodeAt(index);
        encodedstr += String.fromCharCode(c+8);
    }
    console.log(encodedstr);
}