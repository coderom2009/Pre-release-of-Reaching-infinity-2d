class SPGame{
    constructor(){
        this.score= 0
        this.name = null
        this.positionX = 0
        this.positionY = 0
        this.index = 0;
        
    }

    startSP(){
        playerSP = new Player();
        //scoreSP = playerSP.getScore();
        playerCharSP = createSprite(windowWidth/2,windowHeight-windowHeight/4-75,75,75)
        playerCharSP.addImage(playerCharSP_IMG)
        playerCharSP.scale = 0.35
        //obsGroup1 = new Group();
        //this.addSprites(obsGroup1,15,obsAlien1_img,0.5)
        //obsGroup2 = new Group();
        //this.addSprites(obsGroup2,10,obsAlien2_img,0.7)
        //coinGroup = new Group();
        //this.addSprites(coinGroup,25,coinImg,0.9)
        //icyGroup = new Group();
        //this.addSprites(icyGroup,6,icyImg,0.8)
        platformGroup = new Group();
        //this.addSprites(platformGroup,60,platformImg,0.6) //pos

        //platform creation//
        
        
    }

    addSprites(spriteGroup, numberOfSprites, spriteImage, scale, positions = []) {
        for (var i = 0; i < numberOfSprites; i++){
          var x, y;
    
          //C41 //SA
          if (positions.length > 0) {
            x = positions[i].x;
            y = positions[i].y;
            spriteImage = positions[i].image;
          } else {
            x = random(width / 2 + 150, width / 2 - 150);
            y = random(-height * 4.5, height - 400);
          }
          var sprite = createSprite(x, y);
          sprite.addImage("sprite", spriteImage);
    
          sprite.scale = scale;
          spriteGroup.add(sprite);
        }
    }

    addPlatforms(arr,spriteG,so,rand,tCanGo){
      
      
      var canExe = true

      if(arr[0].l_tn>11){
        tCanGo = false
      }
      
      if(frameCount%15 == 0&&canExe==true&&tCanGo==true&&obs_dif_data[0].dif_l != 0){
        //var rand = Math.round(random(1,4))
        
        if(so == rand){
          console.log("same no...");
        }else{
          switch(rand){
            case 1:console.log("1"),so = 1;
            break;
    
            case 2:console.log("2"),so = 2;
            break;
    
            case 3:console.log("3"),so = 3;
            break;
    
            case 4:console.log("4"),so = 4;
            break;
    
            default: break;
          }
          so=rand
          s=so
          //console.log(platformsCreated,levelsCreated)
          //start
          
          //arr.splice(arr.length,0,{t:2});
          this.creating_multi(arr,so,canExe,spriteG);
          


        }
        
        
        //console.log(canExe)
      }
       
        //done : checking val and printing in consaoel
        //next: making var d_2,d_3,x,y. Splicing the array and making spro=ites
      
      
      

    }


    creating_multi(array,val,canGo,sG){

      var timesCanExe = true
      var var_1 ,var_2 ,var_3
      var x,y
      var highestY_tn = 0
      var w
      window.w =w;
      
      //window.base = base
      var sampleVar = []
      window.sampleVar = sampleVar; //here sample var  <=


      if(array[0].l_tn==0){
        highestY_tn = windowHeight-windowHeight/4-195
        //console.log(highestY_tn)
      }else if(array[0].l_tn!=0){
        highestY_tn = (windowHeight-windowHeight/4-195)-(array[0].l_tn*250)
      }

      if(array[0].l_tn==0){
        base = createSprite(windowWidth/2,windowHeight-windowHeight/4+55,windowWidth,30)
        platformGroup.add(base)
        base.debug = true
        base.setCollider("rectangle",0,50,base.width,base.height+100)
      }


      if(val == 1&&timesCanExe==true){ //creation of 3 blocks


        console.log("3 block")
        array.splice(array.length,0,{level: array[0].l_tn+1,type: 1,s1:null,s2:null,s3:null})
        array[0].l_tn +=1

        for(var i=1; i<4 ; i++){
          console.log(i)

          if(i==1){

            x=windowWidth/2-380
            y=highestY_tn;                                       //done

            array[array.length-1].s1 = "platform_L"+ array[0].l_tn +"_P"+i
            array[array.length-1].s1 = createSprite(x,y,215,27) //w changing to array s1/s2/s3
            array[array.length-1].s1.debug = true
            array[array.length-1].s1.setCollider("rectangle",0,0,215,27)
            platformGroup.add(array[array.length-1].s1)
            console.log(x,y)
            
          }else if(i==2){

            x=windowWidth/2
            y=highestY_tn;

            array[array.length-1].s2 = "platform_L"+ array[0].l_tn +"_P"+i
            array[array.length-1].s2 = createSprite(x,y,215,27) //w changing to array s1/s2/s3
            array[array.length-1].s2.debug = true
            array[array.length-1].s2.setCollider("rectangle",0,0,215,27)
            platformGroup.add(array[array.length-1].s2)
            console.log(x,y)

          }else if(i==3){

            x=windowWidth/2+380
            y=highestY_tn;

            array[array.length-1].s3 = "platform_L"+ array[0].l_tn +"_P"+i
            array[array.length-1].s3 = createSprite(x,y,215,27) //w changing to array s1/s2/s3
            array[array.length-1].s3.debug = true
            array[array.length-1].s3.setCollider("rectangle",0,0,215,27)
            platformGroup.add(array[array.length-1].s3)
            console.log(x,y)
          }
        }

        
        array[0].p_tn +=3
        

      }else if((val == 2||val == 3||val == 4)&&timesCanExe==true){//creation of 2 blocks


        console.log("2 block")
        array.splice(array.length,0,{level: array[0].l_tn+1,type: val,s1:null,s2:null})
        array[0].l_tn +=1


        for(var i=1; i<3 ; i++){

          console.log(i)

          if(i==1){

            if(val == 2){
              x=windowWidth/2-190
              y=highestY_tn;
              array[array.length-1].s1 = "platform_L"+ array[0].l_tn +"_P"+i
              array[array.length-1].s1 = createSprite(x,y,215,27)
              array[array.length-1].s1.debug = true
              array[array.length-1].s1.setCollider("rectangle",0,0,215,27)
              platformGroup.add(array[array.length-1].s1)
              console.log(x,y)
            }else if( val == 3){
              x=windowWidth/2-380
              y=highestY_tn;
              array[array.length-1].s1 = "platform_L"+ array[0].l_tn +"_P"+i
              array[array.length-1].s1 = createSprite(x,y,215,27)
              array[array.length-1].s1.debug = true
              array[array.length-1].s1.setCollider("rectangle",0,0,215,27)
              platformGroup.add(array[array.length-1].s1)
              console.log(x,y)
            }else if(val == 4){
              x=windowWidth/2
              y=highestY_tn;
              array[array.length-1].s1 = "platform_L"+ array[0].l_tn +"_P"+i
              array[array.length-1].s1 = createSprite(x,y,215,27)
              array[array.length-1].s1.debug = true
              array[array.length-1].s1.setCollider("rectangle",0,0,215,27)
              platformGroup.add(array[array.length-1].s1)
              console.log(x,y)
            }
            
          }else if(i==2){

            if(val == 2){
              x=windowWidth/2+190
              y=highestY_tn;
              array[array.length-1].s2 = "platform_L"+ array[0].l_tn +"_P"+i
              array[array.length-1].s2 = createSprite(x,y,215,27)
              array[array.length-1].s2.debug = true
              array[array.length-1].s2.setCollider("rectangle",0,0,215,27)
              platformGroup.add(array[array.length-1].s2)
              console.log(x,y)
              //array.splice(array.length,0,{level: array[0].l_tn+1,type: 2})
            }else if( val == 3){
              x=windowWidth/2
              y=highestY_tn;
              array[array.length-1].s2 = "platform_L"+ array[0].l_tn +"_P"+i
              array[array.length-1].s2 = createSprite(x,y,215,27)
              array[array.length-1].s2.debug = true
              array[array.length-1].s2.setCollider("rectangle",0,0,215,27)
              platformGroup.add(array[array.length-1].s2)
              console.log(x,y)
              //array.splice(array.length,0,{level: array[0].l_tn+1,type: 3})
            }else if(val == 4){
              x=windowWidth/2+380
              y=highestY_tn;
              array[array.length-1].s2 = "platform_L"+ array[0].l_tn +"_P"+i
              array[array.length-1].s2 = createSprite(x,y,215,27)
              array[array.length-1].s2.debug = true
              array[array.length-1].s2.setCollider("rectangle",0,0,215,27)
              platformGroup.add(array[array.length-1].s2)
              console.log(x,y)
              //array.splice(array.length,0,{level: array[0].l_tn+1,type: 4})
            }
            
          }
        }
        
        array[0].p_tn +=2
        

      }else{
        console.log("Error occured !!!")
      }
    }
    
    addObstacles(array_platforms,array_obs_d,sprite_group_obs,current_level,current_platform,last_platform){
      if(current_level<array_platforms.length-1){ 
        if(array_obs_d[0].dif_l<=2&&array_obs_d[0].dif_l>=1){//pre-indication ** ** ** levels
          if(current_level==last_platform){//pre-indication ** ** **
            if(array_obs_d[0].dif_l==1){//easy level


              if(array_obs_d[0].c_obs_name !="obs"+current_level){
                array_obs_d.splice(1,1,{obs: "obs"+current_level,pointing_towrads:`not`,platform:0,made: false})
                array_obs_d[0].c_obs_name = "obs"+current_level;
              }

              //if(array_obs_d.length>1){
                //array_obs_d.splice(2,1,)
                //array_platforms[current_level-1].obs.position.x
                if(obs_group.length>1){
                  obs_group[0].remove()
                }
              //}
              //array_obs_d.splice(array_obs_d.length,0,{obs: null,pointing_towrads:`not`,platform:0})
              
              var r = Math.round(random(1,3))

              if(array_platforms[current_level+1].type!=1){
                if(r==3){
                  r=2
                }
              }
              

              var pos_obs_x;
              var pos_obs_y;

              if(r==1){
                pos_obs_x = array_platforms[current_level+1].s1.position.x+Math.round(random(-20,20));
                pos_obs_y = array_platforms[current_level+1].s1.position.y-50;
              }else if(r==2){
                pos_obs_x = array_platforms[current_level+1].s2.position.x+Math.round(random(-20,20));
                pos_obs_y = array_platforms[current_level+1].s2.position.y-50;
              }else if(r==3){
                pos_obs_x = array_platforms[current_level+1].s3.position.x+Math.round(random(-20,20));
                pos_obs_y = array_platforms[current_level+1].s3.position.y-50;
              }

              
              if(array_obs_d[array_obs_d.length-1].made == false){
                array_obs_d[array_obs_d.length-1].platform = r;
                array_obs_d[array_obs_d.length-1].obs = createSprite(pos_obs_x,pos_obs_y)
                array_obs_d[array_obs_d.length-1].obs.addImage(obs_img_post)
                array_obs_d[array_obs_d.length-1].obs.scale = 1
                array_obs_d[array_obs_d.length-1].obs.setCollider("rectangle")
                array_obs_d[array_obs_d.length-1].obs.debug = true
                obs_group.add(array_obs_d[array_obs_d.length-1].obs)
                array_obs_d[array_obs_d.length-1].made = true;
                fr_val = frameCount;
              }
              if(frameCount==fr_val+20){
                //array_obs_d[array_obs_d.length-1].obs.addImage(trans_img)
              }

              if(obs_group.length>=1&&obs_group[0]!=null||obs_group[0]!=undefined){

                playerCharSP.collide(obs_group[0]); 

                if(playerCharSP.overlap(obs_group[0])){
                  this.gameOver();        
                  //clear_up()        
                }
  
              }
              
              
              
              

            }else if(array_obs_d[0].dif_l==2){//normal level
              

              if(array_obs_d[0].c_obs_name !="obs"+current_level){
                array_obs_d.splice(1,1,{obs: "obs"+current_level,pointing_towrads:`not`,platform:0,made: false})
                array_obs_d[0].c_obs_name = "obs"+current_level;
              }

              //if(array_obs_d.length>1){
                //array_obs_d.splice(2,1,)
                //array_platforms[current_level-1].obs.position.x
                if(obs_group.length>2){
                  obs_group[0].remove()
                }
              //}
              //array_obs_d.splice(array_obs_d.length,0,{obs: null,pointing_towrads:`not`,platform:0})
              
              var r = Math.round(random(1,3))

              if(array_platforms[current_level+1].type!=1){
                if(r==3){
                  r=2
                }
              }
              

              var pos_obs_x;
              var pos_obs_y;
              var random_x_pos = Math.round(random(-57.5,57.5))
              if(random_x_pos>0){
                random_x_pos = Math.round(random(57.5,0))
              }else{
                random_x_pos = Math.round(random(-57.5,0))
              }

              if(r==1){
                pos_obs_x = array_platforms[current_level+1].s1.position.x+random_x_pos;
                pos_obs_y = array_platforms[current_level+1].s1.position.y-50;
              }else if(r==2){
                pos_obs_x = array_platforms[current_level+1].s2.position.x+random_x_pos;
                pos_obs_y = array_platforms[current_level+1].s2.position.y-50;
              }else if(r==3){
                pos_obs_x = array_platforms[current_level+1].s3.position.x+random_x_pos;
                pos_obs_y = array_platforms[current_level+1].s3.position.y-50;
              }

              
              if(array_obs_d[array_obs_d.length-1].made == false){
                array_obs_d[array_obs_d.length-1].platform = r;
                array_obs_d[array_obs_d.length-1].obs = createSprite(pos_obs_x,pos_obs_y)
                array_obs_d[array_obs_d.length-1].obs.addImage(obs_img_post)
                array_obs_d[array_obs_d.length-1].obs.scale = 1
                array_obs_d[array_obs_d.length-1].obs.setCollider("rectangle")
                array_obs_d[array_obs_d.length-1].obs.debug = true
                obs_group.add(array_obs_d[array_obs_d.length-1].obs)
                array_obs_d[array_obs_d.length-1].made = true;
                fr_val = frameCount;
              }
              if(frameCount==fr_val+20){
                //array_obs_d[array_obs_d.length-1].obs.addImage(trans_img)
              }


              if(obs_group.length>=1&&obs_group[0]!=null||obs_group[0]!=undefined){

                playerCharSP.collide(obs_group[0]); 

                if(playerCharSP.overlap(obs_group[0])){
                  this.gameOver();  
                  //clear_up()              
                }
  
              }
              
              if(obs_group.length<=2&&obs_group[1]!=null||obs_group[1]!=undefined){
  
                playerCharSP.collide(obs_group[1]); 

                if(playerCharSP.overlap(obs_group[0])){
                  this.gameOver();        
                  //clear_up()        
                }
  
              }

            }
          }
        }else if(array_obs_d[0].dif_l<=3&&array_obs_d[0].dif_l<=4){//post-indication ** ** ** levels

          if(array_obs_d[0].dif_l==3){

            if(array_obs_d[0].c_obs_name !="obs"+current_level){
              array_obs_d.splice(1,1,{obs: "obs"+current_level,pointing_towrads:`not`,platform:0,made: false})
              array_obs_d[0].c_obs_name = "obs"+current_level;
            }


            //if(array_obs_d.length>1){
              //array_obs_d.splice(2,1,)
              //array_platforms[current_level-1].obs.position.x
              if(obs_group.length>2){
                obs_group[0].remove()
                /*if(last_platform<current_level){
                  obs_group[2].remove()
                }*/
              }

              
            //}
            //array_obs_d.splice(array_obs_d.length,0,{obs: null,pointing_towrads:`not`,platform:0})
            
            var r = Math.round(random(1,3))

            if(array_platforms[current_level+1].type!=1){
              if(r==3){
                r=2; //local
              }
            }
            

            var pos_obs_x;
            var pos_obs_y;
            var random_x_pos = Math.round(random(-57.5,57.5))
            if(random_x_pos>0){
              random_x_pos = Math.round(random(57.5,0))
            }else{
              random_x_pos = Math.round(random(-57.5,0))
            }
            if(obs_group[1]!=undefined){
              if(Math.round(random(1,0))%2==0){// if it will be 1
                //r = obs_group[1].
              }

            }

            if(r==1){
              pos_obs_x = array_platforms[current_level+1].s1.position.x+random_x_pos;
              pos_obs_y = array_platforms[current_level+1].s1.position.y-50;
            }else if(r==2){
              pos_obs_x = array_platforms[current_level+1].s2.position.x+random_x_pos;
              pos_obs_y = array_platforms[current_level+1].s2.position.y-50;
            }else if(r==3){
              pos_obs_x = array_platforms[current_level+1].s3.position.x+random_x_pos;
              pos_obs_y = array_platforms[current_level+1].s3.position.y-50;
            }

            
            if(array_obs_d[array_obs_d.length-1].made == false){
              array_obs_d[array_obs_d.length-1].platform = r;
              array_obs_d[array_obs_d.length-1].obs = createSprite(pos_obs_x,pos_obs_y,85,74)
              array_obs_d[array_obs_d.length-1].obs.setCollider("rectangle",0,0,87,76)
              array_obs_d[array_obs_d.length-1].obs.addImage(obs_img_post)
              array_obs_d[array_obs_d.length-1].obs.debug = true
              obs_group.add(array_obs_d[array_obs_d.length-1].obs)
              array_obs_d[array_obs_d.length-1].made = true;
              fr_val = frameCount;
            }
            if(frameCount==fr_val+20){
              //array_obs_d[array_obs_d.length-1].obs.addImage(trans_img)
            }

            if(times_collided==0&&obs_group.length>=1&&obs_group[0]!=null||obs_group[0]!=undefined){

              playerCharSP.collide(obs_group[0]); 
              if(playerCharSP.overlap(obs_group[0])){
                this.gameOver();
                //clear_up()
                //times_collided=1;
              }

            }
            
            if(times_collided==0&&obs_group.length==2&&obs_group[1]!=null||obs_group[1]!=undefined){

              playerCharSP.collide(obs_group[1]); 
              if(playerCharSP.overlap(obs_group[1])){
                this.gameOver();
                //clear_up()
                //times_collided=1;
              }

            }
            

          }else if(array_obs_d[0].dif_l==4){

          }

        }
      }
    }

    gameOver(){
      
      
      came_from_play_lose = true
      navWindow = ty[0];
      this.clear_up_sp();
      //clear_up()
      isSPclicked == false
      


      
      
    }


    clear_up_sp(){
      if(exlevelData.length!=1){
          for(var io = 1;io<exlevelData.length;io++){
              if(exlevelData[io].type==2||exlevelData[io].type==3||exlevelData[io].type==4){
                  for(var iq = 1;iq<=2;iq++){
                      if(iq==1){
                          exlevelData[io].s1.remove();  
                      }else if(iq==2){
                          exlevelData[io].s2.remove(); 
                          exlevelData.splice(io,1,)
                      }
                  }
              }else if(exlevelData[io].type==1){
                  for(var iq = 1;iq<=3;iq++){
                      if(iq==1){
                          exlevelData[io].s1.remove();  
                      }else if(iq==2){
                          exlevelData[io].s2.remove();
                      }else if(iq==3){
                          exlevelData[io].s3.remove();
                          exlevelData.splice(io,1,)
                      }
                  }
              }
          }
          base.remove()
          //playerCharSP.remove()                          //here    "//"add   remove seroius
          playerCharSP.position.x = windowWidth/2
          playerCharSP.position.y = windowHeight-windowHeight/4-75


          if(obs_dif_data.length>=1){
              for(var po=1;po<obs_dif_data.length;po++){
                  obs_dif_data[po].obs.remove()
              }
              
          }
  
      }
    }

    

}