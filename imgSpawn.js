class ImageSpawn{
    constructor(imgLinks,canvas,ctx,sens){
        this.canvas = canvas;
        this.ctx = ctx;
        this.imgArrSize = imgLinks.length;
        
        this.pixelDelay = 0
        this.pixelDelayLim = 15;
        this.highDelay = screen.height/20;
        this.lowDelay = screen.height/30;
        this.imgArr =[];
        this.LastPos = null;
        for(var i =0;i<this.imgArrSize;i++){
            this.imgArr[i] = new Image();
            this.imgArr[i].src = imgLinks[i]; 
            this.imgArr[i].isLoaded = false;
            this.imgArr[i].onload = this.updAviableImgs(this.imgArr[i]);          
        }
    }
  
    /*Update property :is this image aviable  for spawn ?*/
     updAviableImgs(image){
       image.isLoaded = true;
    }
  
    /*spawn rand image in rand place if image are aviable for spawn
    */
    update(event){
        this.pixelDelay++;
       
        if(this.pixelDelay>this.pixelDelayLim){  
            this.spawn();
            this.pixelDelayLim = getRandomInt(this.lowDelay,this.highDelay);
            this.pixelDelay =0;
        }
    }
    resize(){
        let width = screen.width;
        let height = screen.height;  
        this.ctx.clearRect(0,0,width,height);
    }

    spawn(){       
        let randImg =null;
        let randPos = {x:null,y:null};
        while (1) {
            randImg = getRandomInt(0,this.imgArrSize);
            if(this.imgArr[randImg].isLoaded){
                break;
            }      
        }
             
        randPos.x = getRandomInt(0,screen.width - this.imgArr[randImg].width );
        randPos.y = getRandomInt(0,screen.height - this.imgArr[randImg].height );
      
        /*you may spawn image out of window size if change up code for randPos to:
        randPos.x = getRandomInt(0,window.width  );
        randPos.y = getRandomInt(0,window.height );
        
        */
        this.ctx.drawImage(this.imgArr[randImg],randPos.x,randPos.y);
        
    }

}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}




