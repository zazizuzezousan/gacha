const cv = document.getElementById("mycanvas");
const cvctx = cv.getContext("2d");
const pick = document.getElementById("pick");

function startDraw(){
    const gacha = new Image();
    gacha.src = "gachagacha.png";
    gacha.onload = () => {
        cvctx.drawImage(gacha,0,0,400,600);
    }
}

function capsuleDraw(){
    const closedcapsule = new Image();
    const openedcapsule = new Image();
    let capsuleColor;
    capsuleColor = Math.floor(Math.random()*4);
    if(capsuleColor == 0){
        closedcapsule.src = "capsule_toy_close1_red.png";
        openedcapsule.src = "capsule_toy_open1_red.png";
    }
    if(capsuleColor == 1){
        closedcapsule.src = "capsule_toy_close2_blue.png";
        openedcapsule.src = "capsule_toy_open2_blue.png";
    }
    if(capsuleColor == 2){
        closedcapsule.src = "capsule_toy_close3_green.png";
        openedcapsule.src = "capsule_toy_open3_green.png";
    }
    if(capsuleColor == 3){
        closedcapsule.src = "capsule_toy_close4_yellow.png";
        openedcapsule.src = "capsule_toy_open4_yellow.png";
    }
    closedcapsule.onload = () =>{
        openedcapsule.onload = () => {
            cvctx.clearRect(500,175,300,239);
            cvctx.drawImage(closedcapsule,450,400,100,100);
            setTimeout(function(){
                cvctx.clearRect(450,400,100,100);
                cvctx.drawImage(closedcapsule,500,300,150,150);
            },1000);
            setTimeout(function(){
                cvctx.clearRect(500,300,150,150);
                cvctx.drawImage(openedcapsule,500,175,300,239);
            },3000);
            setTimeout(function(){
                cvctx.clearRect(0,0,800,600);
                cvctx.beginPath();
                cvctx.fillStyle = "red";
                cvctx.fillRect(0,0,cv.width,cv.height);
                const gift = new Image();
                gift.src = "gift0.png";
                gift.onload = () => {
                    cvctx.drawImage(gift,100,200,600,400);
                    cvctx.font = '100pt Arial';
                    cvctx.fillStyle = "yellow";
                    cvctx.fillText("スーパーレア",200,150,400);
                }
            },5000);
        }
    }
}

startDraw();

pick.addEventListener("click",function(){
    cvctx.clearRect(0,0,cv.width,cv.height);
    startDraw();
    capsuleDraw();
});