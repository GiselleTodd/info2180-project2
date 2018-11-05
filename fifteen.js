window.onload = () => {

  let whole = document.getElementById("puzzlearea");
  let segs = document.querySelectorAll("#puzzlearea div");
  let x = 0;
  let y = 0;
  let shufflebutton = document.getElementById("shufflebutton");
  // let blankSpaceX , blankSpaceY;






for (let i = 0; i < segs.length; i++){ 

    segs[i].style.backgroundImage="url('background.jpg')";
    segs[i].classList.add("puzzlepiece");
    segs[i].style.top = y+"px";
    segs[i].style.left = x+"px";
    segs[i].style.backgroundPosition = `${-x}px ${-y}px`;

    x += 100;

    if(x == 400){
      x=0
      y += 100;
    }

    segs[i].addEventListener("mouseover", changeTileColour);
    segs[i].addEventListener("mouseout", removeChange);
    segs[i].addEventListener("click", moveTile);




    }

    shufflebutton.addEventListener("click", shuffleTiles);


    function changeTileColour(){
      this.style.border = "2px solid red";
      this.style.color = "#006600";

    }


    function removeChange(){
      this.style.border = "2px solid black";
      this.style.color = "black";
      this.style.textdecoration = "underline";

    }


    function shuffleTiles(){
      let ppiece;
      for (let i = 0; i < 100; i++)
        seg = Math.floor(Math.random() * 20);
        moveTile(segs[ppiece]);
    }

    function moveTile(){}

    function canMove(){}


    function leftMove(x, y){
      let pieceX = parseInt(x);
      let pieceY = parseInt(y);


      if (tileX == 0){

        for (let i = 0; i < div.length; i++){
            if ( parseInt(div[i].style.left)+ 100 == pieceX && parseInt(div[i].style.top) == pieceY ){

                return i;


            }

        }


      } else  {

        return -1;

      }

    }

    function rightMove(x,y){
      let pieceX = parseInt(x);
      let pieceY = parseInt(y);

      if (pieceX < 300){

        for (let i = 0; i < div.length ; i++){
         
            if(parseInt(div[i].style.left) - 100 == pieceX && parseInt(div[i].style.top) == pieceY){

              return i;
            }

        }

      } else {

        return -1;
      }

    }

    function aboveMove(x,y){}

    function belowMove(x,y){}

  

   }


