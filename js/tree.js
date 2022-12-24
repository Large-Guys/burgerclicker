var purchased_skill_Skill_Tree = false;
function OnClickSkillTree_Skill_Tree()
{
    if(skill_points >= 1 && !purchased_skill_Skill_Tree)
    {
        document.getElementById("Skill_Tree").firstElementChild.style.filter = "brightness(100%)"
        purchased_skill_Skill_Tree = true;
        document.getElementById("Ingredients").style.display = "inline"
        //document.getElementById("Production").style.display = "inline"
        skill_points -= 1;
    }
}
var purchased_skill_Ingredients = false;
function OnClickSkillTree_Ingredients()
{
    if(skill_points >= 1 && !purchased_skill_Ingredients)
    {
        document.getElementById("Ingredients").firstElementChild.style.filter = "brightness(100%)"
        purchased_skill_Ingredients = true;
        document.getElementById("Veggies").style.display = "inline"
        document.getElementById("Cheeses").style.display = "inline"
        skill_points -= 1;
    }
}
var purchased_skill_Veggies = false;
function OnClickSkillTree_Veggies()
{
    if(skill_points >= 1 && !purchased_skill_Veggies)
    {
        purchased_skill_Veggies = true;
        document.getElementById("Veggies").firstElementChild.style.filter = "brightness(100%)"
        document.getElementById("Lettuce").style.display = "inline"
        document.getElementById("Tomato").style.display = "inline"
        skill_points -= 1;
    }
}
var purchased_skill_Lettuce = false;
function OnClickSkillTree_Lettuce()
{
    if(skill_points >= 1 && !purchased_skill_Lettuce)
    {
        document.getElementById("Lettuce").firstElementChild.style.filter = "brightness(100%)"
        purchased_skill_Lettuce = true;
        document.getElementById("Onions").style.display = "inline"
        
        skill_points -= 1;
        bonusBPS += 0.5;
    }
}
var purchased_skill_Onions = false;
function OnClickSkillTree_Onions()
{
    if(skill_points >= 2 && !purchased_skill_Onions)
    {
        document.getElementById("Onions").firstElementChild.style.filter = "brightness(100%)"
        purchased_skill_Onions = true;
        
    
        skill_points -= 2;
        bonusBPS += 0.5;
    }
}
var purchased_skill_Tomato = false;
function OnClickSkillTree_Tomato()
{
    if(skill_points >= 3 && !purchased_skill_Tomato)
    {
        document.getElementById("Tomato").firstElementChild.style.filter = "brightness(100%)"
        purchased_skill_Tomato = true;
        document.getElementById("Mushroom").style.display = "inline"
        
        skill_points -= 3;
        bonusBPS += 0.5;
    }
}
var purchased_skill_Mushroom = false;
function OnClickSkillTree_Mushroom()
{
    if(skill_points >= 4 && !purchased_skill_Mushroom)
    {
        document.getElementById("Mushroom").firstElementChild.style.filter = "brightness(100%)"
        purchased_skill_Mushroom = true;
        
    
        skill_points -= 4;
        bonusBPS += 0.5;
    }
}
var purchased_skill_Cheeses = false;
function OnClickSkillTree_Cheeses()
{
    if(skill_points >= 1 && !purchased_skill_Cheeses)
    {
        document.getElementById("Cheeses").firstElementChild.style.filter = "brightness(100%)"
        purchased_skill_Cheeses = true;
        document.getElementById("Cheddar").style.display = "inline"
        document.getElementById("Gouda").style.display = "inline"
        skill_points -= 1;
    }
}
var purchased_skill_Cheddar = false;
function OnClickSkillTree_Cheddar()
{
    if(skill_points >= 2 && !purchased_skill_Cheddar)
    {
        document.getElementById("Cheddar").firstElementChild.style.filter = "brightness(100%)"
        purchased_skill_Cheddar = true;
        document.getElementById("Monterey_Jack").style.display = "inline"
        
        skill_points -= 2;
        bonusBPS += 1;
    }
}
var purchased_skill_Monterey_Jack = false;
function OnClickSkillTree_Monterey_Jack()
{
    if(skill_points >= 2 && !purchased_skill_Monterey_Jack)
    {
        document.getElementById("Monterey_Jack").firstElementChild.style.filter = "brightness(100%)"
        purchased_skill_Monterey_Jack = true;
        
    
        skill_points -= 2;
        bonusBPS += 1;
    }
}
var purchased_skill_Gouda = false;
function OnClickSkillTree_Gouda()
{
    if(skill_points >= 3 && !purchased_skill_Gouda)
    {
        document.getElementById("Gouda").firstElementChild.style.filter = "brightness(100%)"
        purchased_skill_Gouda = true;
        document.getElementById("Swiss").style.display = "inline"
        
        skill_points -= 3;
        bonusBPS += 1;
    }
}
var purchased_skill_Swiss = false;
function OnClickSkillTree_Swiss()
{
    if(skill_points >= 3 && !purchased_skill_Swiss)
    {
        document.getElementById("Swiss").firstElementChild.style.filter = "brightness(100%)"
        purchased_skill_Swiss = true;
        document.getElementById("Blue").style.display = "inline"
        
        skill_points -= 3;
        bonusBPS += 1;
    }
}
var purchased_skill_Blue = false;
function OnClickSkillTree_Blue()
{
    if(skill_points >= 4 && !purchased_skill_Blue)
    {
        purchased_skill_Blue = true;
        document.getElementById("Blue").firstElementChild.style.filter = "brightness(100%)"
        document.getElementById("Meat").style.display = "inline"
        document.getElementById("Condiments").style.display = "inline"
    
        skill_points -= 4;
        bonusBPS += 1;
    }
}
var purchased_skill_Meat = false;
function OnClickSkillTree_Meat()
{
    if(skill_points >= 5 && !purchased_skill_Meat)
    {
        purchased_skill_Meat = true;
        document.getElementById("Meat").firstElementChild.style.filter = "brightness(100%)"
        document.getElementById("Bacon").style.display = "inline"
        
        skill_points -= 5;
    }
}
var purchased_skill_Bacon = false;
function OnClickSkillTree_Bacon()
{
    if(skill_points >= 5 && !purchased_skill_Bacon)
    {
        purchased_skill_Bacon = true;
        document.getElementById("Bacon").firstElementChild.style.filter = "brightness(100%)"
        document.getElementById("Wagyu").style.display = "inline"
        
        skill_points -= 5;
        bonusBPS += 3;
    }
}
var purchased_skill_Wagyu = false;
function OnClickSkillTree_Wagyu()
{
    if(skill_points >= 10 && !purchased_skill_Wagyu)
    {
        purchased_skill_Wagyu = true;
        document.getElementById("Wagyu").firstElementChild.style.filter = "brightness(100%)"
        
    
        skill_points -= 10;
        bonusBPS += 7;
    }
}
var purchased_skill_Condiments = false;
function OnClickSkillTree_Condiments()
{
    if(skill_points >= 4 && !purchased_skill_Condiments)
    {
        purchased_skill_Condiments = true;
        document.getElementById("Condiments").firstElementChild.style.filter = "brightness(100%)"
        document.getElementById("Ketchup").style.display = "inline"
        document.getElementById("Mustard").style.display = "inline"
        skill_points -= 4;
    }
}
var purchased_skill_Ketchup = false;
function OnClickSkillTree_Ketchup()
{
    if(skill_points >= 4 && !purchased_skill_Ketchup)
    {
        purchased_skill_Ketchup = true;
        document.getElementById("Ketchup").firstElementChild.style.filter = "brightness(100%)"
        document.getElementById("BBQ_Sause").style.display = "inline"
        
        skill_points -= 4;
        bonusBPS += 2;
    }
}
var purchased_skill_BBQ_Sause = false;
function OnClickSkillTree_BBQ_Sause()
{
    if(skill_points >= 5 && !purchased_skill_BBQ_Sause)
    {
        purchased_skill_BBQ_Sause = true;
        document.getElementById("BBQ_Sause").firstElementChild.style.filter = "brightness(100%)"
        
    
        skill_points -= 5;
        bonusBPS += 3;
    }
}
var purchased_skill_Mustard = false;
function OnClickSkillTree_Mustard()
{
    if(skill_points >= 4 && !purchased_skill_Mustard)
    {
        purchased_skill_Mustard = true;
        document.getElementById("Mustard").firstElementChild.style.filter = "brightness(100%)"
        document.getElementById("Mayo").style.display = "inline"
        
        skill_points -= 4;
        bonusBPS += 2;
    }
}
var purchased_skill_Mayo = false;
function OnClickSkillTree_Mayo()
{
    if(skill_points >= 5 && !purchased_skill_Mayo)
    {
        purchased_skill_Mayo = true;
        document.getElementById("Mayo").firstElementChild.style.filter = "brightness(100%)"
        
    
        skill_points -= 5;
        bonusBPS += 3;
    }
}
var purchased_skill_Production = false;
function OnClickSkillTree_Production()
{
    if(skill_points >= 1 && !purchased_skill_Production)
    {
        document.getElementById("Production").firstElementChild.style.filter = "brightness(100%)"
        purchased_skill_Production = true;
        
    
        skill_points -= 1;
    }
}
