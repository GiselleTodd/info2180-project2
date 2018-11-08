
window.onload =() =>
{
 
 let puzzleArea = document.getElementById("puzzlearea");
 let seg = document.querySelectorAll("#puzzlearea div")
 let shufflebutton = document.getElementById("shufflebutton")
 
 let x=0;
 let y =0;
 let count =0;

 let blankSpaceX= '300px';
 let blankSpaceY= '300px';



 
 for (let i=0; i< seg.length; i++)
  {
   seg[i].classList.add("puzzlepiece");
   seg[i].style.left = x+"px";  
   seg[i].style.top = y+"px";
   //Line of code to help position of image in each tile
   seg[i].style.backgroundPosition = `${-x}px ${-y}px`;
   x +=100;
   count +=1;
   if (count%4==0){
    y+=100;
    x=0;
   }
   
   seg[i].addEventListener("mouseover",highlightTile);
   seg[i].addEventListener("mouseout",undoHiglight);
   seg[i].addEventListener("click",moveTile);
   
    }

     shufflebutton.addEventListener("click",shuffle);
     restartbutton.addEventListener("click",restart);

 function highlightTile()
   {
    if(move(parseInt(this.innerHTML)))
    {
     this.style.border = "2px solid red";
     this.style.color = "#006600";
    }
   };
 function undoHiglight()
   {
    this.style.border = "2px solid black";
    this.style.color = "#000000";
   };


 //Function to allow tiles to chagned their position
 function moveTile()
   {
    if(move(parseInt(this.innerHTML)))
    {
     swap(this.innerHTML-1);
     if(finish())
     {
      Gamewin();
     }
     return;
    }
   };
 
 function shuffle()
 {
  for (var i=0; i<250; i++)
        {
            let rand = parseInt(Math.random()* 100) %4;
            if (rand == 0)
            {
                let mve = checkUp(blankSpaceX,blankSpaceY);
                if ( mve != -1)
                {
                    swap(mve);
                }
            }
            if (rand == 1)
            {
                let mve = checkDown(blankSpaceX,blankSpaceY);
                if ( mve != -1) 
                {
                    swap(mve);
                }
            }
            if (rand == 2)
            {
                let mve = checkLeft(blankSpaceX,blankSpaceY);
                if ( mve != -1)
                {
                    swap(mve);
                }
            }
            if (rand == 3)
            {
                let mve = checkRight(blankSpaceX,blankSpaceY);
                if (mve != -1)
                {
                    swap(mve);
                }
            }
        }
 }
 
 
 function swap (pos)
 {
  let temp = seg[pos].style.top;
  seg[pos].style.top= blankSpaceY;
  blankSpaceY = temp;
  temp=seg[pos].style.left;
  seg[pos].style.left = blankSpaceX;
  blankSpaceX = temp;
 }

 
 function move(pos)
 {
  if (checkLeft(blankSpaceX,blankSpaceY) == (pos-1))
  {
   return true;
  }
  if(checkDown(blankSpaceX,blankSpaceY) == (pos-1))
  {
   return true;
  }
  if(checkUp(blankSpaceX,blankSpaceY) == (pos-1))
  {
   return true;
  }
  if(checkRight(blankSpaceX,blankSpaceY) == (pos-1))
  {
   return true;
  }
 }

 function checkUp (x, y)
 {
     var xx = parseInt(x);
     var yy = parseInt(y);
     if (yy > 0)
     {
         for (var i=0; i<seg.length; i++)
         {
             if (parseInt(seg[i].style.top) + 100 == yy && parseInt(seg[i].style.left) == xx) 
             {
                 return i;
             }
         } 
     }
     else 
     {
         return -1;
     }
 }
 function checkDown (x, y)
 {
     var xx = parseInt(x);
     var yy = parseInt(y);
     if (yy < 300)
     {
         for (var i=0; i<seg.length; i++)
         {
             if (parseInt(seg[i].style.top) - 100 == yy && parseInt(seg[i].style.left) == xx) 
             {
                 return i;
             }
         }
     } 
     else
     {
         return -1;
     } 
 }
 function checkLeft(x, y)
 {
     var xx = parseInt(x);
     var yy = parseInt(y);
     if (xx > 0)
     {
         for (var i = 0; i < seg.length; i++) 
         {
             if (parseInt(seg[i].style.left) + 100 == xx && parseInt(seg[i].style.top) == yy)
             {
                 return i;
             } 
         }
     }
     else 
     {
         return -1;
     }
 }
 function checkRight (x, y)
 {
     var xx = parseInt(x);
     var yy = parseInt(y);
     if (xx < 300)
     {
         for (var i =0; i<seg.length; i++)
         {
             if (parseInt(seg[i].style.left) - 100 == xx && parseInt(seg[i].style.top) == yy) 
             {
                 return i;
             }
         }
     }
     else
     {
         return -1;
     } 
 }
}