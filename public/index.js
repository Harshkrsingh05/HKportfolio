document.addEventListener('DOMContentLoaded', function() {
  const loader = new LoadingScreen({
    onLoadingComplete: () => {
      initializeWebsite(); // Your existing code
    }
  });
});

function initializeWebsite() {
  const navbar = document.getElementById("navbr");
  if (navbar) {
    window.onscroll = function() {
      const currentScrollPos = document.documentElement.scrollTop;
      
      if (currentScrollPos >= 0 && currentScrollPos <= 5) {
        navbar.style.top = "0";
      } else if (currentScrollPos > 5 && currentScrollPos <= 500) {
        navbar.style.top = "-50px";
      } else {
        navbar.style.top = "0";
      }
    };
  }

  // GSAP animations
  gsap.to(".otw", {duration: 2,x:50,delay:1,repeat:-1,yoyo:true});
  
  // Dark mode toggle
  var icon=document.getElementById("icon");
  var icon1=document.getElementById("icon1");
  var webbg1=document.querySelector(".Top_container.row");
  var iconPath=document.getElementById("icon-path");
  var iconPath1=document.getElementById("icon-path1");
  var webbgblank=document.querySelectorAll(".bgwhite");
  var butt=document.getElementsByClassName("dlcv");
  var bord=document.getElementsByClassName("infoimgabout");
  
  if (icon) {
    icon.onclick=()=>{
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")){
    iconPath.setAttribute("d","M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z")
    
    if (window.innerWidth <= 766) {
      webbg1.style.background="url('css/webbackgroundmbdark1.jpg') no-repeat";
      webbg1.style.backgroundPosition = 'center center';
    } else {
      webbg1.style.background="url('css/webbackground3dark.jpg') no-repeat";
      webbg1.style.backgroundPosition = 'right center';
    }
    webbg1.style.backgroundSize = 'cover';
    webbg1.style.backgroundAttachment = 'fixed';
    webbgblank.forEach(function (element) {
      element.style.backgroundImage = "url('css/blackbg.jpg')";
    });

    for (var i = 0; i < butt.length; i++) {
      // butt[i].classList.remove("btn-light");
      butt[i].classList.toggle("btn-dark");
    }
    for(var i =0;i<bord.length;i++){
      bord[i].classList.remove("border-danger");
      bord[i].classList.toggle("border-white");
    }
  }else{
    iconPath.setAttribute("d","M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z");
    
    if (window.innerWidth <= 766) {
      webbg1.style.background="url('css/webbackgroundmb1.jpg') no-repeat";
      webbg1.style.backgroundPosition = 'center center';
    } else {
      webbg1.style.background="url('css/webbackground3.jpg') no-repeat";
      webbg1.style.backgroundPosition = 'right center';
    }
    webbg1.style.backgroundSize = 'cover';
    webbg1.style.backgroundAttachment = 'fixed';
    webbgblank.forEach(function (element) {
      element.style.backgroundImage = "url('css/whitebg.jpg')";
    });
    for (var i = 0; i < butt.length; i++) {
      // butt[i].classList.toggle("btn-light");
      butt[i].classList.remove("btn-dark");
    }
    for(var i =0;i<bord.length;i++){
      bord[i].classList.remove("border-white");
      bord[i].classList.toggle("border-danger");
    }
  }
    };
  }
  
  if (icon1) {
    icon1.onclick=()=>{
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")){
    iconPath1.setAttribute("d","M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.3 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z")
    
    if (window.innerWidth <= 766) {
      webbg1.style.background="url('css/webbackgroundmbdark1.jpg') no-repeat";
      webbg1.style.backgroundPosition = 'center center';
    } else {
      webbg1.style.background="url('css/webbackground3dark.jpg') no-repeat";
      webbg1.style.backgroundPosition = 'right center';
    }
    webbg1.style.backgroundSize = 'cover';
    webbg1.style.backgroundAttachment = 'fixed';
    webbgblank.forEach(function (element) {
      element.style.backgroundImage = "url('css/blackbg.jpg')";
    });

    for (var i = 0; i < butt.length; i++) {
      // butt[i].classList.remove("btn-light");
      butt[i].classList.toggle("btn-dark");
    }
    for(var i =0;i<bord.length;i++){
      bord[i].classList.remove("border-danger");
      bord[i].classList.toggle("border-white");
    }
  }else{
    iconPath1.setAttribute("d","M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z");
    
    if (window.innerWidth <= 766) {
      webbg1.style.background="url('css/webbackgroundmb1.jpg') no-repeat";
      webbg1.style.backgroundPosition = 'center center';
    } else {
      webbg1.style.background="url('css/webbackground3.jpg') no-repeat";
      webbg1.style.backgroundPosition = 'right center';
    }
    webbg1.style.backgroundSize = 'cover';
    webbg1.style.backgroundAttachment = 'fixed';
    webbgblank.forEach(function (element) {
      element.style.backgroundImage = "url('css/whitebg.jpg')";
    });
    for (var i = 0; i < butt.length; i++) {
      // butt[i].classList.toggle("btn-light");
      butt[i].classList.remove("btn-dark");
    }
    for(var i =0;i<bord.length;i++){
      bord[i].classList.remove("border-white");
      bord[i].classList.toggle("border-danger");
    }
  }
    };
  }
  
  // Call other initialization functions
  applyStyles();
  updateBackground();
  window.addEventListener('resize', applyStyles);
  window.addEventListener('resize', updateBackground);
}

// Function to apply styles based on screen width
function applyStyles() {
  var static=document.querySelector('.static-txt');
  var anim=document.querySelector('.typelg');
  var animsm=document.querySelector('.type');
  const dynamic = document.querySelector('.dynamic');
  if (window.innerWidth <= 768) { // Mobile screen width
    dynamic.style.float = 'left';
    dynamic.style.flexWrap = 'none';
    dynamic.style.color= '#000';
    dynamic.style.fontSize= '260%';
    dynamic.style.fontWeight= '200';
  } else {
    dynamic.style.float = 'none';
    dynamic.style.flexWrap = 'nowrap';
    dynamic.style.color= '#000';
    dynamic.style.fontSize= '260%';
    dynamic.style.fontWeight= '200';
  }
  const about=document.querySelector('.infobg1');
  if(window.innerWidth<=768){
    about.style.display='none';
  }else{
    about.style.display='block';
  }
  const textsizeless=document.querySelectorAll('.textsizeless');
  if(window.innerWidth<=994){
    textsizeless.forEach(element => {
      element.classList.remove('fw-medium', 'fs-5');
    });
  }else{
    textsizeless.forEach(element => {
      element.classList.add('fw-medium', 'fs-5');
    });
  }
}

const webbg = document.querySelector('.Top_container.row');
function updateBackground() {
  if (window.innerWidth <= 768 && document.body.classList.contains("dark-theme")) {
    webbg.style.background = `url('css/webbackgroundmbdark1.jpg') no-repeat`;
    webbg.style.backgroundSize = 'cover';
    webbg.style.backgroundPosition = 'center center'; // Shifted to the left
    webbg.style.backgroundAttachment = 'fixed';
  }
  else if(window.innerWidth <= 768 && !(document.body.classList.contains("dark-theme"))){
    webbg.style.background = `url('css/webbackgroundmb1.jpg') no-repeat`;
    webbg.style.backgroundSize = 'cover';
    webbg.style.backgroundPosition = 'center center'; // Shifted to the left
    webbg.style.backgroundAttachment = 'fixed';
  }
  else if(window.innerWidth >= 768 && (document.body.classList.contains("dark-theme"))){
    webbg.style.background = `url('css/webbackground3dark.jpg') no-repeat`;
    webbg.style.backgroundSize = 'cover';
    webbg.style.backgroundPosition = 'center right'; // Shifted to the left
    webbg.style.backgroundAttachment = 'fixed';
  }
   else if(window.innerWidth >= 768 && !(document.body.classList.contains("dark-theme"))) {
    webbg.style.background = `url('css/webbackground3.jpg') no-repeat`;
    webbg.style.backgroundSize = 'cover';
    webbg.style.backgroundPosition = 'right center';
    webbg.style.backgroundAttachment = 'fixed';
  }
}

// These need to be after initializeWebsite is called
// The event listeners are added inside initializeWebsite function

document.addEventListener("DOMContentLoaded", function() {
  var alert = document.querySelector('.alert');

  // Debugging: Check if the alert has the correct initial class
  console.log("Initial class list:", alert.classList);

  // Delay the pop-in animation by 1 second
  setTimeout(function() {
      gsap.to(alert, { duration: 0.5, scale: 1, opacity: 1, onStart: function() {
          alert.classList.remove('hidden-alert');
      }});

      // Pop-out animation after an additional 3 seconds
      setTimeout(function() {
          gsap.to(alert, { duration: 0.5, scale: 0, opacity: 0, onComplete: function() {
              alert.remove();
          }});
      }, 3000); // 3000 milliseconds = 3 seconds
  }, 1000); // 1000 milliseconds = 1 second
});