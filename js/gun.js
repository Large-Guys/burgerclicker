/*class Turret
{
    constructor()
    {
        this.element = document.createElement("img");
        this.element.id = "Gun";
        this.element.src = 'art/BurgerGun.png';
        this.x = Math.floor(Math.random()*10)*10;
        this.y = Math.floor(Math.random()*10)*10;
        this.frameTime = 0;
        this.frame = 1;
        this.targetX = Math.floor(Math.random()*10)*10;
        this.targetY = Math.floor(Math.random()*10)*10;
        this.isDead = false;
        this.rotation = 0;
        this.target = null;
        DisplayArea.appendChild(this.element)
    }
    update()
    {
        if(this.target == null)
        {
            if(Pedestrians.length > 0)
            this.target = Pedestrians[Math.floor(Math.random()*Pedestrians.length)]
        }
        else{
            //Get x direction
            let dirx = this.target.x-this.x;
            let diry = this.target.y-this.y;
            //Normalize
            let length = Math.abs(dirx) + Math.abs(diry);
            dirx /= length;
            diry /= length;
            //get angle
            let angle = Math.atan2(diry,dirx)*57.2958; //Fucky wucky number is radian to degree constant
            this.rotation = angle
        }
        this.element.style.left = this.x + "%"
        this.element.style.top = this.y + "%"
        this.element.style.transform =`rotate(${this.rotation}deg)`
    }
    shoot()
    {
        this.target.isDead = true
        var t = 0;
        for (let i = 0; i < Pedestrians.length; i++) {
            if(Pedestrians[i] == this.target)
            {
                t = i;
            }
        }
        Dedestrians[t] = Object.assign(Object.create(Object.getPrototypeOf(this.target)), this.target);
        Pedestrians.splice(t,1);
        this.target = null

    }
}
var turrets = []*/