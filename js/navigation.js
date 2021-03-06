class NewNavigate{
    constructor(ProfileImg){

        this.settingButton = createButton("Setting");
        this.shopButton = createButton("Shop");
        this.shopButton.position(-300,windowHeight/1.22);
        this.settingButton.position(-300,windowHeight/1.22);

        

        this.bgImg = createImg("./assets/Mountain.png", "game bg");

        this.bg_high = createImg("./assets/Untitled.png", "highlight");
        this.bg_high.class("grey_bg_trans")
        this.bg_high.position(-60,-10)

        this.tittle = createElement();
        this.line2 = createElement();
        this.line = createElement();

        

        this.playButton = createButton("Play");
        this.accountButton = createButton("Account");

        this.homeButton = createButton("Home");
        
        this.info = createElement("h2");
        this.info.html("Version: Beta")

        ///////////            home
        this.tittleW = createElement("h1")
        this.tag = createElement("h1")

        ///////////            play
        this.singleP = createButton("Single Player")
        this.joinButton = createButton("Join Button")
        this.createButtons = createButton("Create Button")
        this.randomP = createButton("Random 🌎 Player")

        ///////////            account
        this.gameName = createElement("h2")
        this.gameProfileImg = createImg(ProfileImg,"ProfuleImg")

        this.editName = createButton("✏️");
        this.editName.position(width+600,165)
        this.editName.class("editCheckBDisapper")

        this.doneNaming = createButton("✅");
        this.doneNaming.position(width+600,165)
        this.doneNaming.class("editCheckBDisapper")

        this.coin = createElement("h1")
        this.coin.position(width +600,325)
        this.coin.class("accElemDis")
        this.coin.html("Coins in bank: "+ NaN)

        this.hs = createElement("h1")
        this.hs.position(width -(width*10.5/18),385)
        this.hs.class("accElemDis")
        this.hs.html("HighScore: "+ NaN)

        this.inst = createElement("h5")
        this.inst.position(width+25,height-120)

        this.wn = createButton("What's new ?")
        this.wn.position(width - 65,height-125)
        this.wn.class("whatn")

        this.visitsTillNow = createElement("h6")
        this.visitsTillNow.position(width/4,height-80)
        this.visitsTillNow.class("greeting")
        this.visitsTillNow.html(0)

       // this.joinInput = createInput("").attribute("placeholder", "Enter the code")
       // this.joinInput.position(width /2.25,175)
        //this.joinInput.class("customInput")

        //this.homeInP = createImg("home.png","homeP");
        //this.homeInP.position(width-90,90) //aded home

        this.easy_btn = createButton("Easy")
        this.easy_btn.position(windowWidth+600,windowHeight-200)
        this.easy_btn.class("btn_levels_1")

        this.normal_btn = createButton("Normal")
        this.normal_btn.position(windowWidth-+600,windowHeight-200)
        this.normal_btn.class("btn_levels_2")

        this.hard_btn = createButton("Hard")
        this.hard_btn.position(windowWidth+600,windowHeight-200)
        this.hard_btn.class("btn_levels_3")

        this.extremly_hard_btn = createButton("Infinity")
        this.extremly_hard_btn.position(windowWidth+600,windowHeight-200)
        this.extremly_hard_btn.class("btn_levels_4")

        this.input_name = createInput("").attribute("placeholder", "Enter your name");
        this.input_name.position(width +100,165)
        this.input_name.class("customInput")

        this.feed_back_h = createImg('./assets/noun-feedback-1394882.png')
        this.feed_back_h.position(55,windowHeight-120)
        this.feed_back_h.class("icons")

        this.help = createImg('./assets/question-mark.png')
        this.help.position(230,windowHeight-120)
        this.help.class("icons")

        this.instruction_give = createElement("h1")
        this.instruction_give.html("")
        this.instruction_give.position(100,100)
        this.instruction_give.class("inst_text");

        this.next_btn = createImg("./assets/next-button.png")
        this.back_btn = createImg("./assets/back-button.png")
        this.remove_btn = createImg("./assets/remove.png")

        this.next_btn.position(windowWidth/2+90,windowHeight+15)
        this.back_btn.position(windowWidth/2-180,windowHeight+15) //height: windowHeight-120
        this.remove_btn.position(windowWidth/2-45,windowHeight+15) 

        this.next_btn.class("icons_3")
        this.remove_btn.class("icons_3")
        this.back_btn.class("icons_3")

        this.function_bar = createImg("./assets/Untitled.png","bar")
        this.function_bar.class("bg_bar")
        this.function_bar.position(windowWidth/2-237.5,windowHeight)  //height: windowHeight-135
        
        
        


        
        

       
        
    }
    
      

  display(name,isEditClicked,coin,highS,numT){
        //this.setElementsPosition()
        //this.setElementsStyle()

        if(navWindow=="welcome"){

          this.bgImg.position(-10,-5);
          this.tittle.position(0,0);
          this.line2.position(windowWidth/8-187,-275)
          this.line.position(windowWidth/4+10,-15);
          // this.input.position(width / 2 - 110, height / 2 - 80);
          this.playButton.position(40,windowHeight/3.2);
          this.accountButton.position(40,windowHeight/2.1);
          //this.settingButton.position(40,windowHeight/1.55);
          //this.shopButton .position(40,windowHeight/1.22);
          this.homeButton.position(-300,windowHeight/3.2);
          this.info.position(width -(width*7.5/18), height / 1 - 60);
          
          
          

        /////

          this.bgImg.class("gameBG");
          this.tittle.class("tittle")
          this.line2.class("bottom");
          this.line.class("rotate");
          //this.input.class("customInput");

          if(which_func_exp!=el[0]){
            this.feed_back_h.class("icons");
          }else{
            this.feed_back_h.class("icons_focus");
            this.instruction_give.html(" From this button you can give feedback about this game ")
            this.instruction_give.position(55,windowHeight-300)
          }

          if(which_func_exp!=el[1]){
            this.wn.class("whatn")
          }else{
            this.wn.class("whatn_focus");
            this.instruction_give.html("From this you can get to know what is added in this update");
            this.instruction_give.position(55,windowHeight-300)
          }

          if(which_func_exp!=el[2]){
            this.playButton.class("customButton");
          }else{
            this.playButton.class("customButton_focus");
            this.instruction_give.html("This will take you to play section");
            this.instruction_give.position(55,windowHeight-300)
          }

          
          //this.settingButton.class("customButton")
          this.accountButton.class("customButton");
         // this.shopButton.class("customButton"); 
          this.homeButton.class("customButton")
          this.info.class("greeting");

          ////////////////navigation
          ////////////////options

          this.tittleW.position(width -(width*12/18),100)
            this.tittleW.html("Welcome to Reaching Infinity")
            this.tittleW.class("tittleText")

            this.tag.position(width -(width*8.79/18),340)
            this.tag.html("a 2d platformer game")
            this.tag.class("tag")

            this.singleP.position(windowWidth+600,120)
            this.singleP.class("roundButton")

            this.joinButton.position(windowWidth+600,280)
            this.joinButton.class("smallButton")

            this.createButtons.position(windowWidth+600,280)
            this.createButtons.class("smallButton")

            this.randomP.position(windowWidth+600,440)

            

            this.gameProfileImg.position(width-95,20)
            this.gameProfileImg.class("profileImgS")

            this.editName.position(width+100,165)
            this.editName.class("editCheckBDisapper")

            this.doneNaming.position(width+100,165)
            this.doneNaming.class("editCheckBDisapper")

            if(isEditClicked == true){
              this.doneNaming.position(width-150,165)
              this.doneNaming.class("editCheckBDisapper")
              this.gameName.html(name);
              this.gameName.position(width +600,20) //width -(width*10/18) width -(width*7.5/18)
              this.gameName.class("name")

            }else{
              this.doneNaming.position(width+100,165)
              this.doneNaming.class("editCheckBDisapper")
              this.gameName.html(name);
              this.gameName.position(width +600,20) //width -(width*10/18) width -(width*7.5/18)
              this.gameName.class("name")
            }

            this.coin.position(width +10,325)
            this.coin.class("accElemDis")
            this.coin.html("Coins in bank: "+ coin +"🪙")

            this.hs.position(width +10,385)
            this.hs.class("accElemDis")
            this.hs.html("HighScore: "+ highS)

            this.gameProfileImg.mousePressed(() => {
              navWindow = ty[2]
              isEditClick = false;
            });

            this.inst.position(width+25,height-120)
            this.inst.html("")
            this.inst.class("")

         
          this.wn.position(40,windowHeight/1.55)
          
          

          this.visitsTillNow.position(width/4+40,height-100)
          this.visitsTillNow.class("greeting")

          if(numT!=undefined){
            this.visitsTillNow.html("Visits: "+numT)
          }else{
            this.visitsTillNow.html("Visits: "+0)
          }

          this.easy_btn.position(windowWidth+600,windowHeight-200);
        this.normal_btn.position(windowWidth+600,windowHeight-200);
        this.hard_btn.position(windowWidth+600,windowHeight-200);
        this.extremly_hard_btn.position(windowWidth+600,windowHeight-200);
        this.input_name.position(width +100,165)
          

        }else if(navWindow=="play"){
          
            this.bgImg.position(-10,-5);
            this.tittle.position(0,0);
            this.line2.position(windowWidth/8-187,-275)
            this.line.position(windowWidth/4+10,-15);
            // this.input.position(width / 2 - 110, height / 2 - 80);
            this.playButton.position(-300,windowHeight/3.2);
            this.accountButton.position(40,windowHeight/2.1);
            //this.settingButton.position(40,windowHeight/1.55);
            //this.shopButton .position(40,windowHeight/1.22);
            this.homeButton.position(40,windowHeight/3.2);
            this.info.position(width -(width*7.5/18), height / 1 +60);

          /////

            this.bgImg.class("gameBG");
            this.tittle.class("tittle")
            this.line2.class("bottom");
            this.line.class("rotate");
            //this.input.class("customInput");
            this.playButton.class("customButton");
            //this.settingButton.class("customButton")
            this.accountButton.class("customButton");
            //this.shopButton.class("customButton"); 
            this.homeButton.class("customButton")
            this.info.class("greeting");

          ////////////////navigation
          ////////////////options
            this.tittleW.position(width -(width*12/18),100)
            this.tittleW.html("Welcome to Reaching Infinity")
            this.tittleW.class("tittleTextDis")

            this.tag.position(width -(width*8.79/18),340)
            this.tag.html("a 2d platformer game")
            this.tag.class("tagDis")
            this.singleP.position(windowWidth/2-60,windowHeight/2-195)    
            
            
            

            if(which_func_exp!=el[3]){
              this.easy_btn.class("inst_text")
              this.normal_btn.class("inst_text")
              this.hard_btn.class("inst_text")
              this.extremly_hard_btn.class("inst_text")
              this.instruction_give.html("");
              this.instruction_give.position(55,windowHeight-300)
            }else{                                      
              this.easy_btn.class("inst_text_focus")
              this.normal_btn.class("inst_text_focus")
              this.hard_btn.class("inst_text_focus")
              this.extremly_hard_btn.class("inst_text_focus")
              this.instruction_give.html("You can choose levels");
              this.instruction_give.position(55,windowHeight-300)
            }

            if(which_func_exp!=el[4]){
              this.singleP.class("roundButton")
            }else{                                      
              this.singleP.class("roundButton_focus")
              this.instruction_give.html("This will take you to the playing mode");
              this.instruction_give.position(55,windowHeight-300)
            }

            if(which_func_exp!=el[5]){
              this.accountButton.class("customButton")
              this.accountButton.position(40,windowHeight/2.1);
            }else{
              this.accountButton.class("customButton_focus")
              this.instruction_give.html("This will take you to the account section");
              this.instruction_give.position(55,windowHeight-300)
              this.accountButton.position(40,windowHeight/2.1);
            }
            

            this.joinButton.position(windowWidth+600,windowHeight/2-40)
            this.joinButton.class("smallButton")

            this.createButtons.position(windowWidth+600,windowHeight/2-40)
            this.createButtons.class("smallButton")

            this.randomP.position(windowWidth+600,windowHeight/2+125)
            this.randomP.class("roundButton")

            this.gameName.html(name);
            this.gameName.position(width +600,120)
            this.gameName.class("nameDis")

            this.gameProfileImg.position(width-95,20) 
            this.gameProfileImg.class("profileImgS")

            this.editName.position(width+100,165)
            this.editName.class("editCheckBDisapper")

            this.doneNaming.position(width+100,165)
            this.doneNaming.class("editCheckBDisapper")

            this.coin.position(width +600,325)
            this.coin.class("accElemDis")
            this.coin.html("Coins in bank: "+ coin +"🪙")

            this.hs.position(width +10,385)
            this.hs.class("accElemDis")
            this.hs.html("HighScore: "+ highS)

            this.gameProfileImg.mousePressed(() => {
              navWindow = ty[2]
              isEditClick = false;
            });

            this.inst.position(width/4+50,height-140)
            //this.inst.html("Play: For playing the game. Account: For changing your character and name. And also for seeing Highscore and Coins. Setting: For changing volume and platform color. Shop: For buying power-ups and character")
            this.inst.html("")
            this.inst.class("instruc")


          this.wn.position(width + 65,height-125)
          this.wn.class("whatn")

          this.visitsTillNow.position(width/4+40,height+50)
          this.visitsTillNow.class("greeting")

          this.easy_btn.position(windowWidth-950,windowHeight-200);
        this.normal_btn.position(windowWidth-750,windowHeight-200);
        this.hard_btn.position(windowWidth-550,windowHeight-200);
        this.extremly_hard_btn.position(windowWidth-350,windowHeight-200);
        this.input_name.position(width +100,165)

          
          
        }else if(navWindow=="account"){

          this.bgImg.position(-10,-5);
          this.tittle.position(0,0);
          this.line2.position(windowWidth/8-187,-275)
          this.line.position(windowWidth/4+10,-15);
          // this.input.position(width / 2 - 110, height / 2 - 80);
          this.playButton.position(40,windowHeight/3.2);

          this.accountButton.class("customButton")
          this.accountButton.position(-300,windowHeight/2.1);
          //this.settingButton.position(40,windowHeight/1.55);
          //this.shopButton .position(40,windowHeight/1.22);
          this.homeButton.position(40,windowHeight/2.1);
          this.info.position(width -(width*7.5/18), height / 1 +60);

        /////

          this.bgImg.class("gameBG");
          this.tittle.class("tittle")
          this.line2.class("bottom");
          this.line.class("rotate");
          //this.input.class("customInput");
          this.playButton.class("customButton");
          //this.settingButton.class("customButton")
          //this.accountButton.class("customButton");
          //this.shopButton.class("customButton"); 
          this.homeButton.class("customButton")
          this.info.class("greeting");


          ////////////////navigation
          ////////////////options
          this.tittleW.position(width -(width*12/18),100)
          this.tittleW.html("Welcome to Reaching Infinity")
          this.tittleW.class("tittleTextDis")

          this.tag.position(width -(width*8.79/18),340)
          this.tag.html("a 2d platformer game")
          this.tag.class("tagDis")

          this.singleP.position(width + 600,120)
          this.singleP.class("roundButton")

          this.joinButton.position(width + 600,280)
          this.joinButton.class("smallButton")

          this.createButtons.position(width + 600,280)
          this.createButtons.class("smallButton")

          this.randomP.position(width + 600,440)
          this.randomP.class("roundButton")

          //this.gameName.html(name);
          //this.gameName.position(width -(width*7.5/18),120)  //            this.gameName.position(width -(width*5/18),120)
          //this.gameName.class("name")

          this.gameProfileImg.position(width -(width*10/18),120) //width -(width*10/18) width -(width*7.5/18)
          this.gameProfileImg.class("profileImg")

          this.editName.position(width-150,165)
          this.editName.class("editCheckB")

          this.doneNaming.position(width-150,165)
          this.doneNaming.class("editCheckB")

          if(isEditClicked == true){
            this.doneNaming.position(width-150,165)
            this.doneNaming.class("editCheckB")
            this.editName.position(width+100,165)
            this.editName.class("editCheckBDisapper")
            this.gameName.html(name);
            this.gameName.position(width +600,20) //width -(width*10/18) width -(width*7.5/18)
            this.gameName.class("name_inv")
            this.input_name.position(width -(width*7.5/18)-10,165)
            
            

            if(this.input_name.value()!=""){
              name_p = this.input_name.value()
            }
          }else{
            this.doneNaming.position(width+100,165)
            this.doneNaming.class("editCheckBDisapper")
            this.editName.position(width-150,165)
            this.editName.class("editCheckB")
            this.gameName.html(name);
            this.gameName.position(width -(width*7.5/18)-10,120) //width -(width*10/18) width -(width*7.5/18)
            this.gameName.class("name")
            this.input_name.position(width +100,165)
          }




          /*if(which_func_exp!=el[5]){
            this.accountButton.class("customButton_focus")
            this.accountButton.position(-300,windowHeight/2.1);
          }else{
            this.accountButton.class("customButton_focus")
            this.instruction_give.html("This will take you to the account section");
            this.instruction_give.position(55,windowHeight-300)
            this.accountButton.position(-300,windowHeight/2.1);
          }*/

          //if(which_func_exp!=el[5]){
          //  this.accountButton.position(-300,windowHeight/2.1)
           // console.log("y")
          //}
          



          if(which_func_exp!=el[6]){

          }else{
            if(isEditClicked == true){
              this.doneNaming.class("editCheckB_focus")
              this.instruction_give.html("Click on this to save the name")
            }else{
              this.editName.class("editCheckB_focus")
              this.instruction_give.html("Click on this to change the name")
            }
          }
        

          this.coin.position(width -(width*10.5/18),325)
          this.coin.class("accElem")
          this.coin.html("Coins in bank: "+ coin +"🪙")

          this.hs.position(width -(width*10.5/18),385)
          this.hs.class("accElem")
          this.hs.html("HighScore: "+ highS)  

          this.gameProfileImg.mousePressed(() => {
           // navWindow = ty[2]
            isEditClick = isEditClicked;
          });

          this.inst.position(width/4+50,height-140)
            this.inst.html("")
            this.inst.class("instruc")

          this.wn.position(width + 65,height-125)
          this.wn.class("whatn")  

          this.easy_btn.position(windowWidth+600,windowHeight-200);
        this.normal_btn.position(windowWidth+600,windowHeight-200);
        this.hard_btn.position(windowWidth+600,windowHeight-200);
        this.extremly_hard_btn.position(windowWidth+600,windowHeight-200);

          

          
        }else if(navWindow=="setting"){

          this.bgImg.position(-10,-5);
          this.tittle.position(0,0);
          this.line2.position(windowWidth/8-187,-275)
          this.line.position(windowWidth/4+10,-15);
          // this.input.position(width / 2 - 110, height / 2 - 80);
          this.playButton.position(40,windowHeight/3.2);
          this.accountButton.position(40,windowHeight/2.1);
          //this.settingButton.position(-300,windowHeight/1.55);
          //this.shopButton .position(40,windowHeight/1.22);
          this.homeButton.position(40,windowHeight/1.55);
          this.info.position(width -(width*7.5/18), height / 1 +60);

        /////

          this.bgImg.class("gameBG");
          this.tittle.class("tittle")
          this.line2.class("bottom");
          this.line.class("rotate");
          //this.input.class("customInput");
          this.playButton.class("customButton");
          //this.settingButton.class("customButton")
          this.accountButton.class("customButton");
          //this.shopButton.class("customButton"); 
          this.homeButton.class("customButton")
          this.info.class("greeting");

          ////////////////navigation
          ////////////////options
          this.tittleW.position(width -(width*12/18),100)
          this.tittleW.html("Welcome to Reaching Infinity")
          this.tittleW.class("tittleTextDis")

          this.tag.position(width -(width*8.79/18),340)
          this.tag.html("a 2d platformer game")
          this.tag.class("tagDis")

          this.singleP.position(width + 600,120)
          this.singleP.class("roundButton")

          this.joinButton.position(width + 600,280)
          this.joinButton.class("smallButton")

          this.createButtons.position(width + 600,280)
          this.createButtons.class("smallButton")

          this.randomP.position(width + 600,440)
          this.randomP.class("roundButton")

          this.gameName.html(name);
          this.gameName.position(width +600,120)
          this.gameName.class("nameDis")

          this.gameProfileImg.position(width-95,20) 
            this.gameProfileImg.class("profileImgS")

          this.editName.position(width+100,165)
          this.editName.class("editCheckBDisapper")

          this.doneNaming.position(width+100,165)
            this.doneNaming.class("editCheckBDisapper")

          this.coin.position(width +600,325)
          this.coin.class("accElemDis")
          this.coin.html("Coins in bank: "+ coin +"🪙")

          this.hs.position(width +10,385)
          this.hs.class("accElemDis")
          this.hs.html("HighScore: "+ highS)  

          this.gameProfileImg.mousePressed(() => {
            navWindow = ty[2]
            isEditClick = false;
          });

          this.inst.position(width/4+50,height-140)
            this.inst.html("")
            this.inst.class("instruc")

          this.wn.position(width + 65,height-125)
          this.wn.class("whatn")  

          this.easy_btn.position(windowWidth+600,windowHeight-200);
          this.normal_btn.position(windowWidth+600,windowHeight-200);
          this.hard_btn.position(windowWidth+600,windowHeight-200);
          this.extremly_hard_btn.position(windowWidth+600,windowHeight-200);

          this.input_name.position(width +100,165)

          
        }else if(navWindow=="shop"){
          
          this.bgImg.position(-10,-5);
          this.tittle.position(0,0);
          this.line2.position(windowWidth/8-187,-275)
          this.line.position(windowWidth/4+10,-15);
          // this.input.position(width / 2 - 110, height / 2 - 80);
          this.playButton.position(40,windowHeight/3.2);
          this.accountButton.position(40,windowHeight/2.1);
          //this.settingButton.position(40,windowHeight/1.55);
          //this.shopButton .position(-300,windowHeight/1.22);
          this.homeButton.position(40,windowHeight/1.22);
          this.info.position(width -(width*7.5/18), height / 1 +60);

        /////

          this.bgImg.class("gameBG");
          this.tittle.class("tittle")
          this.line2.class("bottom");
          this.line.class("rotate");
          //this.input.class("customInput");
          this.playButton.class("customButton");
          //this.settingButton.class("customButton")
          this.accountButton.class("customButton");
          //this.shopButton.class("customButton"); 
          this.homeButton.class("customButton")
          this.info.class("greeting");

          ////////////////navigation
          ////////////////options
          this.tittleW.position(width -(width*12/18),100)
          this.tittleW.html("Welcome to Reaching Infinity")
          this.tittleW.class("tittleTextDis")

          this.tag.position(width -(width*8.79/18),340)
          this.tag.html("a 2d platformer game")
          this.tag.class("tagDis")

          this.singleP.position(width + 600,120)
          this.singleP.class("roundButton")

          this.joinButton.position(width + 600,280)
          this.joinButton.class("smallButton")

          this.createButtons.position(width + 600,280)
          this.createButtons.class("smallButton")

          this.randomP.position(width + 600,440)
          this.randomP.class("roundButton")

          this.gameName.html(name);
          this.gameName.position(width +600,120)
          this.gameName.class("nameDis")

          this.gameProfileImg.position(width-95,20) 
          this.gameProfileImg.class("profileImgS")

          this.editName.position(width+100,165)
          this.editName.class("editCheckBDisapper")  

          this.doneNaming.position(width+100,165)
            this.doneNaming.class("editCheckBDisapper")

          this.coin.position(width +600,325)
          this.coin.class("accElemDis")
          this.coin.html("Coins in bank: "+ coin +"🪙")  ///shop should display coins after

          this.hs.position(width +10,385)
          this.hs.class("accElemDis")
          this.hs.html("HighScore: "+ highS)    

          this.gameProfileImg.mousePressed(() => {
            navWindow = ty[2]
            isEditClick = false;
          });

          this.inst.position(width/4+50,height-140)
            this.inst.html("")
            this.inst.class("instruc")

          this.wn.position(width + 65,height-125)
          this.wn.class("whatn")  

          this.easy_btn.position(windowWidth+600,windowHeight-200);
          this.normal_btn.position(windowWidth+600,windowHeight-200);
          this.hard_btn.position(windowWidth+600,windowHeight-200);
          this.extremly_hard_btn.position(windowWidth+600,windowHeight-200);

          this.input_name.position(width +100,165)


        }else if(navWindow == "sp"){

          this.bgImg.position(-10,-5);
          this.tittle.position(0,0);
          this.line2.position(windowWidth/8-187,-275)
          this.line.position(windowWidth/4+10,-15);
          // this.input.position(width / 2 - 110, height / 2 - 80);
          this.playButton.position(40,windowHeight/3.2);
          this.accountButton.position(40,windowHeight/2.1);
          //this.settingButton.position(40,windowHeight/1.55);
          //this.shopButton .position(40,windowHeight/1.22);
          this.homeButton.position(-300,windowHeight/3.2);
          this.info.position(width -(width*7.5/18), height / 1 +60);

        /////

          this.bgImg.class("gameBG");
          this.tittle.class("tittle")
          this.line2.class("bottom");
          this.line.class("rotate");
          //this.input.class("customInput");
          this.playButton.class("customButton");
          //this.settingButton.class("customButton")
          this.accountButton.class("customButton");
          //this.shopButton.class("customButton"); 
          this.homeButton.class("customButton")
          this.info.class("greeting");

          ////navigation
          ////////////////options
          this.tittleW.position(width -(width*12/18),100)
          this.tittleW.html("Welcome to Reaching Infinity")
          this.tittleW.class("tittleTextDis")

          this.tag.position(width -(width*8.79/18),340)
          this.tag.html("a 2d platformer game")
          this.tag.class("tagDis")

          this.singleP.position(width + 600,120)
          this.singleP.class("roundButton")

          this.joinButton.position(width + 600,280)
          this.joinButton.class("smallButton")

          this.createButtons.position(width + 600,280)
          this.createButtons.class("smallButton")

          this.randomP.position(width + 600,440)
          this.randomP.class("roundButton")

          this.gameName.html(name);
          this.gameName.position(width +600,120)
          this.gameName.class("nameDis")

          this.gameProfileImg.position(width-95,20) 
          this.gameProfileImg.class("profileImgS")

          this.editName.position(width+100,165)
          this.editName.class("editCheckBDisapper")  

          this.doneNaming.position(width+100,165)
            this.doneNaming.class("editCheckBDisapper")

          this.coin.position(width +600,325)
          this.coin.class("accElemDis")
          this.coin.html("Coins in bank: "+ coin +"🪙")  ///shop should display coins after

          this.hs.position(width +10,385)
          this.hs.class("accElemDis")
          this.hs.html("HighScore: "+ highS)    

          this.gameProfileImg.mousePressed(() => {
            navWindow = ty[2]
            isEditClick = false;
          });

          this.inst.position(width/4+50,height-140)
            this.inst.html("")
            this.inst.class("instruc")

          this.wn.position(width + 65,height-125)
          this.wn.class("whatn")

          this.easy_btn.position(windowWidth+600,windowHeight-200);
          this.normal_btn.position(windowWidth+600,windowHeight-200);
          this.hard_btn.position(windowWidth+600,windowHeight-200);
          this.extremly_hard_btn.position(windowWidth+600,windowHeight-200);

          this.input_name.position(width +100,165)
          

        }else if(navWindow == "mp"){

          this.bgImg.position(-10,-5);
          this.tittle.position(0,0);
          this.line2.position(windowWidth/8-187,-275)
          this.line.position(windowWidth/4+10,-15);
          // this.input.position(width / 2 - 110, height / 2 - 80);
          this.playButton.position(40,windowHeight/3.2);
          this.accountButton.position(40,windowHeight/2.1);
          //this.settingButton.position(40,windowHeight/1.55);
          //this.shopButton .position(40,windowHeight/1.22);
          this.homeButton.position(-300,windowHeight/3.2);
          this.info.position(width -(width*7.5/18), height / 1 +60);

        /////

          this.bgImg.class("gameBG");
          this.tittle.class("tittle")
          this.line2.class("bottom");
          this.line.class("rotate");
          //this.input.class("customInput");
          this.playButton.class("customButton");
          //this.settingButton.class("customButton")
          this.accountButton.class("customButton");
          //this.shopButton.class("customButton"); 
          this.homeButton.class("customButton")
          this.info.class("greeting");

          ////navigation
          ////////////////options
          this.tittleW.position(width -(width*12/18),100)
          this.tittleW.html("Welcome to Reaching Infinity")
          this.tittleW.class("tittleTextDis")

          this.tag.position(width -(width*8.79/18),340)
          this.tag.html("a 2d platformer game")
          this.tag.class("tagDis")

          this.singleP.position(width + 600,120)
          this.singleP.class("roundButton")

          this.joinButton.position(width + 600,280)
          this.joinButton.class("smallButton")

          this.createButtons.position(width + 600,280)
          this.createButtons.class("smallButton")

          this.randomP.position(width + 600,440)
          this.randomP.class("roundButton")

          this.gameName.html(name);
          this.gameName.position(width +600,120)
          this.gameName.class("nameDis")

          this.gameProfileImg.position(width-95,20) 
          this.gameProfileImg.class("profileImgS")

          this.editName.position(width+100,165)
          this.editName.class("editCheckBDisapper")  

          this.doneNaming.position(width+100,165)
            this.doneNaming.class("editCheckBDisapper")

          this.coin.position(width +600,325)
          this.coin.class("accElemDis")
          this.coin.html("Coins in bank: "+ coin +"🪙")  ///shop should display coins after

          this.hs.position(width +10,385)
          this.hs.class("accElemDis")
          this.hs.html("HighScore: "+ highS)    

          this.gameProfileImg.mousePressed(() => {
            navWindow = ty[2]
            isEditClick = false;
          });

          this.inst.position(width/4+50,height-140)
            this.inst.html("")
            this.inst.class("instruc")

          this.wn.position(width + 65,height-125)
          this.wn.class("whatn")

          this.input_name.position(width +100,165)
          

        }else if(navWindow == "join"){

          this.bgImg.position(-10,-5);
          this.tittle.position(0,0);
          this.line2.position(windowWidth/8-187,-275)
          this.line.position(windowWidth/4+10,-15);
          // this.input.position(width / 2 - 110, height / 2 - 80);
          this.playButton.position(40,windowHeight/3.2);
          this.accountButton.position(40,windowHeight/2.1);
          //this.settingButton.position(40,windowHeight/1.55);
          //this.shopButton .position(40,windowHeight/1.22);
          this.homeButton.position(-300,windowHeight/3.2);
          this.info.position(width -(width*7.5/18), height / 1 +60);

        /////

          this.bgImg.class("gameBG");
          this.tittle.class("tittle")
          this.line2.class("bottom");
          this.line.class("rotate");
          //this.input.class("customInput");
          this.playButton.class("customButton");
          //this.settingButton.class("customButton")
          this.accountButton.class("customButton");
          //this.shopButton.class("customButton"); 
          this.homeButton.class("customButton")
          this.info.class("greeting");

          ////navigation
          ////////////////options
          this.tittleW.position(width -(width*12/18),100)
          this.tittleW.html("Welcome to Reaching Infinity")
          this.tittleW.class("tittleTextDis")

          this.tag.position(width -(width*8.79/18),340)
          this.tag.html("a 2d platformer game")
          this.tag.class("tagDis")

          this.singleP.position(width + 600,120)
          this.singleP.class("roundButton")

          this.joinButton.position(width + 600,280)
          this.joinButton.class("smallButton")

          this.createButtons.position(width + 600,280)
          this.createButtons.class("smallButton")

          this.randomP.position(width + 600,440)
          this.randomP.class("roundButton")

          this.gameName.html(name);
          this.gameName.position(width +600,120)
          this.gameName.class("nameDis")

          this.gameProfileImg.position(width-95,20) 
          this.gameProfileImg.class("profileImgS")

          this.editName.position(width+100,165)
          this.editName.class("editCheckBDisapper")  

          this.doneNaming.position(width+100,165)
            this.doneNaming.class("editCheckBDisapper")

          this.coin.position(width +600,325)
          this.coin.class("accElemDis")
          this.coin.html("Coins in bank: "+ coin +"🪙")  ///shop should display coins after

          this.hs.position(width +10,385)
          this.hs.class("accElemDis")
          this.hs.html("HighScore: "+ highS)    

          this.gameProfileImg.mousePressed(() => {
            navWindow = ty[2]
            isEditClick = false;
          });

          this.inst.position(width/4+50,height-140)
            this.inst.html("")
            this.inst.class("instruc")

          this.wn.position(width + 65,height-125)
          this.wn.class("whatn")
          
          this.input_name.position(width +100,165)

        }else if(navWindow == "create"){

          this.bgImg.position(-10,-5);
          this.tittle.position(0,0);
          this.line2.position(windowWidth/8-187,-275)
          this.line.position(windowWidth/4+10,-15);
          // this.input.position(width / 2 - 110, height / 2 - 80);
          this.playButton.position(40,windowHeight/3.2);
          this.accountButton.position(40,windowHeight/2.1);
          //this.settingButton.position(40,windowHeight/1.55);
          //this.shopButton .position(40,windowHeight/1.22);
          this.homeButton.position(-300,windowHeight/3.2);
          this.info.position(width -(width*7.5/18), height / 1 +60);

        /////

          this.bgImg.class("gameBG");
          this.tittle.class("tittle")
          this.line2.class("bottom");
          this.line.class("rotate");
          //this.input.class("customInput");
          this.playButton.class("customButton");
          //this.settingButton.class("customButton")
          this.accountButton.class("customButton");
          //this.shopButton.class("customButton"); 
          this.homeButton.class("customButton")
          this.info.class("greeting");

          ////navigation
          ////////////////options
          this.tittleW.position(width -(width*12/18),100)
          this.tittleW.html("Welcome to Reaching Infinity")
          this.tittleW.class("tittleTextDis")

          this.tag.position(width -(width*8.79/18),340)
          this.tag.html("a 2d platformer game")
          this.tag.class("tagDis")

          this.singleP.position(width + 600,120)
          this.singleP.class("roundButton")

          this.joinButton.position(width + 600,280)
          this.joinButton.class("smallButton")

          this.createButtons.position(width + 600,280)
          this.createButtons.class("smallButton")

          this.randomP.position(width + 600,440)
          this.randomP.class("roundButton")

          this.gameName.html(name);
          this.gameName.position(width +600,120)
          this.gameName.class("nameDis")

          this.gameProfileImg.position(width-95,20) 
          this.gameProfileImg.class("profileImgS")

          this.editName.position(width+100,165)
          this.editName.class("editCheckBDisapper")  

          this.doneNaming.position(width+100,165)
            this.doneNaming.class("editCheckBDisapper")

          this.coin.position(width +600,325)
          this.coin.class("accElemDis")
          this.coin.html("Coins in bank: "+ coin +"🪙")  ///shop should display coins after

          this.hs.position(width +10,385)
          this.hs.class("accElemDis")
          this.hs.html("HighScore: "+ highS)    

          this.gameProfileImg.mousePressed(() => {
            navWindow = ty[2]
            isEditClick = false;
          });

          this.inst.position(width/4+50,height-140)
            this.inst.html("")
            this.inst.class("instruc")

          this.wn.position(width + 65,height-125)
          this.wn.class("whatn")

          this.input_name.position(width +100,165)
          

        }else if(navWindow == "allHide"){

          this.bgImg.position(-width-10,-height-10);
          // this.input.position(width / 2 - 110, height / 2 - 80);
          this.playButton.position(-300,200);
          this.accountButton.position(-300,325);
          //this.settingButton.position(-300,450);
          //this.shopButton .position(-300,575);
          this.homeButton.position(-300,200);
          this.info.position(width -(width*7.5/18), height / 1 +60);

        /////

          this.bgImg.class("gameBGplaying");
          this.tittle.class("tittle")
          this.line2.class("bottom");
          this.line.class("rotate");
          //this.input.class("customInput");
          this.playButton.class("customButton");
          //this.settingButton.class("customButton")
          this.accountButton.class("customButton");
          //this.shopButton.class("customButton"); 
          this.homeButton.class("customButton")
          this.info.class("greeting");

          ////navigation
          ////////////////options
          this.tittleW.position(width -(width*12/18),100)
          this.tittleW.html("Welcome to Reaching Infinity")
          this.tittleW.class("tittleTextDis")

          this.tag.position(width -(width*8.79/18),340)
          this.tag.html("a 2d platformer game")
          this.tag.class("tagDis")

          this.singleP.position(width + 600,120)
          this.singleP.class("roundButton")

          this.joinButton.position(width + 600,280)
          this.joinButton.class("smallButton")

          this.createButtons.position(width + 600,280)
          this.createButtons.class("smallButton")

          this.randomP.position(width + 600,440)
          this.randomP.class("roundButton")

          this.gameName.html(name);
          this.gameName.position(width +600,120)
          this.gameName.class("nameDis")

          this.gameProfileImg.position(width+10,20) 
          this.gameProfileImg.class("profileImgS")

          this.editName.position(width+100,165)
          this.editName.class("editCheckBDisapper")  

          this.doneNaming.position(width+100,165)
            this.doneNaming.class("editCheckBDisapper")

          this.coin.position(width +600,325)
          this.coin.class("accElemDis")
          this.coin.html("Coins in bank: "+ coin +"🪙")  ///shop should display coins after

          this.hs.position(width +10,385)
          this.hs.class("accElemDis")
          this.hs.html("HighScore: "+ highS)    

          this.gameProfileImg.mousePressed(() => {
            navWindow = ty[2]
            isEditClick = false;
          });

          this.inst.position(width/4+50,height-140)
            this.inst.html("")
            this.inst.class("instruc")

          this.wn.position(width + 65,height-125)
          this.wn.class("whatn")
          this.easy_btn.position(windowWidth+600,windowHeight-200);
          this.normal_btn.position(windowWidth+600,windowHeight-200);
          this.hard_btn.position(windowWidth+600,windowHeight-200);
          this.extremly_hard_btn.position(windowWidth+600,windowHeight-200);

          this.input_name.position(width +100,165)
          

        }
        

  }


  toggleNav(){

    this.playButton.mousePressed(() => {
      if(which_func_exp!=el[2]){
        navWindow = ty[1]
        isEditClick = false;
        Fplaying = false;
        isSPclicked = false
        isMPclicked = false
      }
      
    });

    this.accountButton.mousePressed(() => {

      if(which_func_exp!=el[5]){
        navWindow = ty[2]
        isEditClick = false;
        Fplaying = false;
        isSPclicked = false
        isMPclicked = false
      }
      
    });

    this.settingButton.mousePressed(() => {

      swal(
        {
          closeOnClickOutside: true,
          imageSize: "350x350",
          title: 'In progress',
          text:'Setting coming soon...',
          type: 'info',
          animation: true,
          timer: 2500
        }
    );


/*      navWindow = ty[3]
      isEditClick = false;
      Fplaying = false;
      isSPclicked = false
      isMPclicked = false*/
    });

    this.shopButton.mousePressed(() => {

      swal(
        {
          closeOnClickOutside: true,
          imageSize: "350x350",
          title: 'In progress',
          text:'Shop coming soon...',
          type: 'info',
          animation: true,
          timer: 2500
        }
    );
    /*
      navWindow = ty[4]
      isEditClick = false;
      Fplaying = false;
      isSPclicked = false
      isMPclicked = false*/
    });

    this.homeButton.mousePressed(() => {
      navWindow = ty[0]
      isEditClick = false;
      Fplaying = false;
      isSPclicked = false
      isMPclicked = false
    });

    this.editName.mousePressed(() => {
      isEditClick = true;
    });

    this.doneNaming.mousePressed(() => {
      isEditClick = false;
    });

    this.singleP.mousePressed(() =>{
      if(obs_dif_data[0].dif_l!=0&&obs_dif_data[0].dif_l!=4){ 
        navWindow = ty[9]
        isSPclicked = true;
      }else if(obs_dif_data[0].dif_l==4){
    
        swal(
          {
            closeOnClickOutside: true,
            imageSize: "350x350",
            title: 'Infinity level in progress',
            text:'Choose a different level type',
            type: 'info',
            animation: true
          }
        );
      
      }else{
        swal(
          {
            closeOnClickOutside: true,
            imageSize: "350x350",
            title: 'Choose a level type',
            type: 'error',
            position: 'top-right',
            timer: 3000,
            animation: true
          }
        );
      }
      
    })

    this.randomP.mousePressed(() =>{
      navWindow = ty[9]
      isMPclicked = true
    });

    this.joinButton.mousePressed(() =>{
      navWindow = ty[7]
      Fplaying = true;
      
    })

    this.createButtons.mousePressed(() =>{
      navWindow = ty[8]
      Fplaying = true
    })

    this.wn.mousePressed(() =>{
      this.whatsNew_pop_up()
    })

    this.easy_btn.mousePressed(() =>{
      obs_dif_data[0].dif_l = 1;
    })

    this.normal_btn.mousePressed(() =>{
      obs_dif_data[0].dif_l = 2;
    })

    this.hard_btn.mousePressed(() =>{
      obs_dif_data[0].dif_l = 3;
    })

    this.extremly_hard_btn.mousePressed(() =>{
      obs_dif_data[0].dif_l = 4;
    })

    this.feed_back_h.mousePressed(() =>{
      this.feed_back_taking()
    })

    
    this.help.mousePressed(() =>{
      this.ui_tour(navWindow)
      this.bg_high.class("grey_bg")
      
    }) 
  

  }


  ui_tour(fromWhere){

    this.next_btn.position(windowWidth/2+90,windowHeight-120)
    this.back_btn.position(windowWidth/2-180,windowHeight-120) //height: windowHeight-120
    this.remove_btn.position(windowWidth/2-45,windowHeight-120) 
    this.function_bar.position(windowWidth/2-237.5,windowHeight-135)  //height: windowHeight-135
    var rec = 0

    if(fromWhere=="welcome"){
      which_func_exp = el[0];
      rec = 0
    }else if(fromWhere=="play"){
      which_func_exp = el[3];
      rec = 3
      this.bg_high.class("grey_bg");
    }else if(fromWhere=="account"){
      which_func_exp = el[6];
      rec = 6
    }

    //this.bg_high.class("grey_bg")


    this.next_btn.mousePressed(() =>{
      if(rec>=0&&rec<el.length-2){  //&&rec<2
        which_func_exp = el[rec+1]
        rec+=1
        console.log(rec)
      }
      if(rec==3){
        navWindow = ty[1] 
      }
      if(rec==6){
        navWindow = ty[2]
      }
    })

    this.remove_btn.mousePressed(() =>{
      this.bg_high.class("grey_bg_trans")
      this.instruction_give.html("")
      which_func_exp = "none"
      
      this.next_btn.position(windowWidth/2+90,windowHeight+15)
      this.back_btn.position(windowWidth/2-180,windowHeight+15) 
      this.remove_btn.position(windowWidth/2-45,windowHeight+15) 
      this.function_bar.position(windowWidth/2-237.5,windowHeight)  //height: windowHeight-135
    })

    this.back_btn.mousePressed(() =>{
      if(rec>0){   //&&rec<3
        which_func_exp = el[rec-1]
        rec-=1
        console.log(rec)
      }
      if(rec==2){
        navWindow = ty[0]
      }
      if(rec==5){
        navWindow = ty[1]
      }
    })

    console.log(rec) // at starting

  }


  whatsNew_pop_up(){
    swal(
      {
        
        title: `Current Version: Beta`,
        closeOnClickOutside: true,
        imageUrl:
        "https://assets.editor.p5js.org/60a34a42ddc9fb0024c1ce63/65f85693-46d3-4a95-9dae-421e953d0d05.png",
        imageSize: "350x350",
        //text: ("ㅤㅤㅤㅤㅤㅤㅤㅤ"+"UI designed,"+"ㅤㅤㅤㅤㅤㅤㅤㅤ"+"ㅤㅤㅤㅤㅤㅤ"+"Smooth navigation,"+"ㅤㅤㅤㅤㅤㅤ"+" ㅤㅤㅤㅤㅤㅤ"+" Game Mode: Single Player"),\
        confirmButtonText: "Close",
        text:`UI designed
        Smooth navigation
        Game Mode Added: Single Player
        Player can change their display name
        One type obstacle added`,
        allowOutsideClick: true
      }
    );
  }

  feed_back_taking(){
    swal(
      {
        title: `Your feedback is important to us!`,
        text: `Please write your suggestion
        OR
        Any bugs found please describe it below`,
        type: "input",
        showCancelButton: true,
        imageUrl:
          "https://assets.editor.p5js.org/60a34a42ddc9fb0024c1ce63/10b41a47-107b-4027-995c-a0a47aab9fc0.png",
        imageSize: "320 x 213",
        confirmButtonText: "Submit",
        allowOutsideClick: true
      },
      function(inputValue){
        if (inputValue === false) return false;
        
        if (inputValue === "") {
          swal.showInputError("You need to write something!");
          return false
        }
        
        //console.log(inputValue)
        suggestion_add(inputValue)
        //location.reload()
        //clear_up()
        //navWindow = ty[0];

      }/*,
      function(isConfirm) {
        if (isConfirm) {
          location.reload();
          //navWindow = ty[1]
        }
      }*/
    );

    
    
  }

  

  
  
}