window.onload = () => {

  let whole = document.getElementById("puzzlearea");
  let segs = document.querySelectorAll("#puzzlearea div");
  let x = 0;
  let y = 0;
  let shufflebutton = document.getElementById("shufflebutton");
  let blankSpaceX  = "300px";
  let blankSpaceY  = "300px";
  



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
    segs[i].addEventListener("click", slideTile);
  

    }




  shufflebutton.addEventListener("click", shuffle);


    function changeTileColour(){
      this.style.border = "2px solid red";
      this.style.color = "#006600";

    }


    function removeChange(){
      this.style.border = "2px solid black";
      this.style.color = "black";
      this.style.textdecoration = "underline";

    }
//change function names accordingly; misleading/confusing function names
    function shuffle(){
      for (let i = 0; i < 250; i++){

        let rand = parseInt(Math.random() * 100) % 4;
          if (rand == 0){
            let mve = checkTopMove(blankSpaceX, blankSpaceY);

            if (mve != -1){
                swap(mve);
            }
          }

          if (rand == 1){
            let mve = checkBelowMove(blankSpaceX, blankSpaceY);

            if (mve != -1){
                swap(mve);
            }
          }

          if (rand == 2){
            let mve = checkLeftMove(blankSpaceX, blankSpaceY);

            if (mve != -1){
                swap(mve);
            }
          }

          if (rand == 3){
            let mve = checkRightMove(blankSpaceX, blankSpaceY);

            if (mve != -1){
                swap(mve);
            }
          }
        


           
      }

    }



    function slideTile(){
        if(canMove(parseInt(this.innerHTML))){
          swap(this.innerHtML -1);
        }

    }



     function swap(pos){

        let temp = segs[pos].style.top;
        segs[pos].style.top = blankSpaceY;
        blankSpaceY = temp;

        temp = segs[pos].style.left;
        segs[pos].style.left = blankSpaceX;
        blankSpaceX = temp;

    }

    function canMove(pos){
          if (checkLeftMove(blankSpaceX, blankSpaceY) == (pos-1)){
            return true;
          }

          if (checkRightMove(blankSpaceX, blankSpaceY) == (pos-1)){
            return true;
          
          }

          if (checkTopMove(blankSpaceX, blankSpaceY) == (pos-1)){
            return true;
          
          }

          if (checkBelowMove(blankSpaceX, blankSpaceY) == (pos-1)){
            return true;
          
          }

      }


    function checkLeftMove(x, y){
      let pieceX = parseInt(x);
      let pieceY = parseInt(y);


      if (pieceX == 0){

        for (let i = 0; i < segs.length; i++){
            if ( parseInt(segs[i].style.left)+ 100 == pieceX && parseInt(segs[i].style.top) == pieceY ){

                return i;


            }

        }


      } else  {

        return -1;

      }

    }

    function checkRightMove(x,y){
      let pieceX = parseInt(x);
      let pieceY = parseInt(y);

      if (pieceX < 300){

        for (let i = 0; i < segs.length ; i++){
         
            if(parseInt(segs[i].style.left) - 100 == pieceX && parseInt(segs[i].style.top) == pieceY){

              return i;
            }

        }

      } else {

        return -1;
      }

    }

    function checkTopMove(x,y){
      let pieceX = parseInt(x);
      let pieceY = parseInt(y);

      if (pieceY > 0){

        for (let i = 0; i < segs.length ; i++){
         
            if(parseInt(segs[i].style.top) + 100 == pieceY && parseInt(segs[i].style.topleft) == pieceX){

              return i;
            }

        }

      } else {

        return -1;
      }

    }

    function checkBelowMove(x,y){
      let pieceX = parseInt(x);
      let pieceY = parseInt(y);

      if (pieceY < 300){

        for (let i = 0; i < segs.length ; i++){
         
            if(parseInt(segs[i].style.top) - 100 == pieceY && parseInt(segs[i].style.left) == pieceX){

              return i;
            }

        }

      } else {

        return -1;
      }




    }





  }

