function GenerateSave()
{
    let str = Burgers+":"+employees+":"+microwaves+":"+factories+":"+bonusBurgers+":"+burgerFabricator+":"+squareBurger+":"+burgerGun+":"+burgerBot+":"+Date.now()+":"+skill_points+":"+skillPointCost+":"+totalBurgers;
    let encodedstr = "";
    for (let index = 0; index < str.length; index++) {
        let c = str.charCodeAt(index);
        encodedstr += String.fromCharCode(c+17);
    }
    localStorage.setItem('save', encodedstr);
    //Saving
    let skillsave = (purchased_skill_Skill_Tree ? "y":"n")+(purchased_skill_Ingredients ? "y":"n")+(purchased_skill_Veggies ? "y":"n")+(purchased_skill_Lettuce ? "y":"n")+(purchased_skill_Onions ? "y":"n")+(purchased_skill_Tomato ? "y":"n")+(purchased_skill_Mushroom ? "y":"n")+(purchased_skill_Cheeses ? "y":"n")+(purchased_skill_Cheddar ? "y":"n")+(purchased_skill_Monterey_Jack ? "y":"n")+(purchased_skill_Gouda ? "y":"n")+(purchased_skill_Swiss ? "y":"n")+(purchased_skill_Blue ? "y":"n")+(purchased_skill_Meat ? "y":"n")+(purchased_skill_Bacon ? "y":"n")+(purchased_skill_Wagyu ? "y":"n")+(purchased_skill_Condiments ? "y":"n")+(purchased_skill_Ketchup ? "y":"n")+(purchased_skill_BBQ_Sause ? "y":"n")+(purchased_skill_Mustard ? "y":"n")+(purchased_skill_Mayo ? "y":"n")+(purchased_skill_Production ? "y":"n");
    localStorage.setItem('skill_save', skillsave);
    return encodedstr;
}
function ImportSave(save,skill_save)
{
    let encodedstr = ""
    for (let index = 0; index < save.length; index++) {
        let c = save.charCodeAt(index);
        encodedstr += String.fromCharCode(c-17);
    }

    //Importing
skill_points = 999;
if(skill_save.charAt(0)=='y') OnClickSkillTree_Skill_Tree()
skill_points = 999;
if(skill_save.charAt(1)=='y') OnClickSkillTree_Ingredients()
skill_points = 999;
if(skill_save.charAt(2)=='y') OnClickSkillTree_Veggies()
skill_points = 999;
if(skill_save.charAt(3)=='y') OnClickSkillTree_Lettuce()
skill_points = 999;
if(skill_save.charAt(4)=='y') OnClickSkillTree_Onions()
skill_points = 999;
if(skill_save.charAt(5)=='y') OnClickSkillTree_Tomato()
skill_points = 999;
if(skill_save.charAt(6)=='y') OnClickSkillTree_Mushroom()
skill_points = 999;
if(skill_save.charAt(7)=='y') OnClickSkillTree_Cheeses()
skill_points = 999;
if(skill_save.charAt(8)=='y') OnClickSkillTree_Cheddar()
skill_points = 999;
if(skill_save.charAt(9)=='y') OnClickSkillTree_Monterey_Jack()
skill_points = 999;
if(skill_save.charAt(10)=='y') OnClickSkillTree_Gouda()
skill_points = 999;
if(skill_save.charAt(11)=='y') OnClickSkillTree_Swiss()
skill_points = 999;
if(skill_save.charAt(12)=='y') OnClickSkillTree_Blue()
skill_points = 999;
if(skill_save.charAt(13)=='y') OnClickSkillTree_Meat()
skill_points = 999;
if(skill_save.charAt(14)=='y') OnClickSkillTree_Bacon()
skill_points = 999;
if(skill_save.charAt(15)=='y') OnClickSkillTree_Wagyu()
skill_points = 999;
if(skill_save.charAt(16)=='y') OnClickSkillTree_Condiments()
skill_points = 999;
if(skill_save.charAt(17)=='y') OnClickSkillTree_Ketchup()
skill_points = 999;
if(skill_save.charAt(18)=='y') OnClickSkillTree_BBQ_Sause()
skill_points = 999;
if(skill_save.charAt(19)=='y') OnClickSkillTree_Mustard()
skill_points = 999;
if(skill_save.charAt(20)=='y') OnClickSkillTree_Mayo()
skill_points = 999;
if(skill_save.charAt(21)=='y') OnClickSkillTree_Production()



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
    if(splitcode[8])
    burgerBot = Number(splitcode[8]);
    if(splitcode[9])
    time_sense_last_update = Date.now();
    if(splitcode[10])
    skill_points = Number(splitcode[10]);
    if(splitcode[11])
    skillPointCost = Number(splitcode[11]);
    if(splitcode[12])
    totalBurgers = Number(splitcode[12]);

    Update_Text();
}