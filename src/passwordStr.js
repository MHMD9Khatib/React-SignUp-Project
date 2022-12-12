document.querySelector(".pw-display-toggle-btn").addEventListener("click",function(){
    let el = document.querySelector(".pw-display-toggle-btn");
    if(el.classList.contains("active")){
      document.querySelector("#password").setAttribute("type","password");
      el.classList.remove("active");
    } else {
      document.querySelector("#password").setAttribute("type","text");
      el.classList.add("active");
    }
  });

  function getPasswordStrength(password){
    let s = 0;
    if(password.length > 6){
      s++;
    }
    if(password.length > 10){
      s++;
    }
    if(/[A-Z]/.test(password)){
      s++;
    }
    if(/[0-9]/.test(password)){
      s++;
    }
    if(/[^A-Za-z0-9]/.test(password)){
      s++;
    }
    return s;
  }

  document.querySelector("#password").addEventListener("focus",function(){
    document.querySelector(".pw-strength");
  });


  document.querySelector("#password").addEventListener("keyup",function(e){
    let password = e.target.value;
    let strength = getPasswordStrength(password);
    
    let passwordStrengthSpans = document.querySelectorAll(".box-1");
    let passwordStrengthSpans2 = document.querySelectorAll(".box-2");
    let passwordStrengthSpans3 = document.querySelectorAll(".box-3");
    let passwordStrengthSpans4 = document.querySelectorAll(".box-4");
    let passwordStrengthSpans5 = document.querySelectorAll(".box-5");
    strength = Math.max(strength,1);


    if(strength < 2){

      passwordStrengthSpans[0].style.background = "#CD3232";
      passwordStrengthSpans2[0].style.background = "#F0F2F5";
      passwordStrengthSpans3[0].style.background = "#F0F2F5";
      passwordStrengthSpans4[0].style.background = "#F0F2F5";
      passwordStrengthSpans5[0].style.background = "#F0F2F5";

    } else if(strength >= 2 && strength <= 4){

        passwordStrengthSpans[0].style.background = "#CD3232";
        passwordStrengthSpans2[0].style.background = "#CD3232";
        passwordStrengthSpans3[0].style.background = "#F0F2F5";
        passwordStrengthSpans4[0].style.background = "#F0F2F5";
        passwordStrengthSpans5[0].style.background = "#F0F2F5";
  
      } 
    // else if(strength >= 2 && strength <= 4){

    //   passwordStrengthSpans[0].style.background  = "#CD3232";
    //   passwordStrengthSpans2[0].style.background = "#CD3232";
    //   passwordStrengthSpans3[0].style.background = "#F0F2F5";
    //   passwordStrengthSpans4[0].style.background = "#F0F2F5";
    //   passwordStrengthSpans5[0].style.background = "#F0F2F5";

    // }else if(strength >= 4 && strength <= 6){

    //     passwordStrengthSpans[0].style.background  = "#FAAD14";
    //     passwordStrengthSpans2[0].style.background = "#FAAD14";
    //     passwordStrengthSpans3[0].style.background = "#FAAD14";
    //     passwordStrengthSpans4[0].style.background = "#F0F2F5";
    //     passwordStrengthSpans5[0].style.background = "#F0F2F5";
  
    //   }else if(strength >= 6 && strength <= 8){

    //     passwordStrengthSpans[0].style.background  = "#389E0D";
    //     passwordStrengthSpans2[0].style.background = "#389E0D";
    //     passwordStrengthSpans3[0].style.background = "#389E0D";
    //     passwordStrengthSpans4[0].style.background = "#389E0D";
    //     passwordStrengthSpans5[0].style.background = "#F0F2F5";
  
    //   } 
    else {

      passwordStrengthSpans[0].style.background = "#389E0D";
      passwordStrengthSpans2[0].style.background = "#389E0D";
      passwordStrengthSpans3[0].style.background = "#389E0D";
      passwordStrengthSpans4[0].style.background = "#389E0D";
      passwordStrengthSpans5[0].style.background = "#389E0D";

    }
  });
























