var DisplayArea = document.getElementById("VisualElements");
var Pedestrians = [];
var Dedestrians = [];
class Pedestrian
{
    constructor(index)
    {
        this.index = index
        this.element = document.createElement("img");
        this.element.id = "Pedestrian";
        this.element.src = 'art/PedRun/Ped1.png';
        this.element.addEventListener("click", () => {
            this.pop();
          });
        this.x = Math.floor(Math.random()*10)*10;
        this.y = Math.floor(Math.random()*10)*10;
        this.frameTime = 0;
        this.frame = 1;
        this.targetX = Math.floor(Math.random()*10)*10;
        this.targetY = Math.floor(Math.random()*10)*10;
        this.isDead = false;
        DisplayArea.appendChild(this.element)
    }
    pop()
    {
        Pedestrians[this.index].element.remove();
        Pedestrians.splice(this.index,1);
        for (let i = this.index; i < Pedestrians.length; i++) {
            Pedestrians[i].index -= 1;
        }
        Burgers += BPS*50;
        playSound(sfx_pop);
    }
    update()
    {
        if(this.isDead == false)
        {
            this.frameTime += Math.random()*0.4;
            if(this.frameTime > 1)
            {
                this.frameTime = 0;
                this.frame += 1;
                if(this.frame > 4)
                {
                    this.frame = 1;
                }
                this.element.src = `art/PedRun/Ped${this.frame}.png`;
            }
            if(this.targetX < this.x)
            {
                this.x -= 0.33;
            }
            else if(this.targetX > this.x)
            {
                this.x += 0.33;
            }
            if(this.targetY < this.y)
            {
                this.y -= 0.33;
            }
            else if(this.targetY > this.y)
            {
                this.y += 0.33;
            }
            if(Math.abs(this.targetX - this.x) + Math.abs(this.targetY-this.y) < 2)
            {
                this.targetX = Math.floor(Math.random()*10)*10;
                this.targetY = Math.floor(Math.random()*10)*10;
            }
        }
        else
        {
            this.element.src = `art/PedRun/PedDed.png`;
        }
        this.element.style.left = this.x + "%"
        this.element.style.top = this.y + "%"
    }
}
function SpawnPedestrian()
{
    Pedestrians[Pedestrians.length] = new Pedestrian(Pedestrians.length);
}
function UpdatePedestrians()
{
    for (let i = 0; i < Pedestrians.length; i++) {
        Pedestrians[i].update();
    }
}
