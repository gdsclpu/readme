// ===========================================================================
//                                  README
// ===========================================================================
function readme() {
  // ========================== Personal infos ===============================
  const nameOfUser = document.getElementById('nameOfUser').value, //name
    GitHubUsername = document.getElementById('GitHubUsername').value, //github username
    aboutMe = document.getElementById('aboutme').value, //about me
    study = document.getElementById('study').value, //course and college
    learnings = document.getElementById('learn').value, //learn about
    collab = document.getElementById('collab').value, //collaborate
    helps = document.getElementById('helps').value, //help
    goals = document.getElementById('goals').value; // goals
    
   
  //====================== social media usernames =============================
  const linkedinUsername = document.getElementById('linkedinUsername').value.replace("-", ""),
    twitterUsername = document.getElementById('twitterUsername').value,
    facebookUsername = document.getElementById('facebookUsername').value,
    instagramUsername = document.getElementById('instagramUsername').value,
    currentTheme = localStorage.getItem('theme');


  //dark theme
  if (currentTheme == 'dark') {
    // ========================== Formation of output ===============================
    var message =
      'Your readme code is copied to the clipboard. Since you have chosen dark theme, enable darkmode in GitHub.';
    var theme = 'dark';
  }

  //light theme
  else {
    // ========================== Formation of output ===============================
    var message = 'Your readme code is copied to the clipboard.';
    var theme='blue-green';
  }
  // Just Change the theme Name!!
  
  var markdown=  `
  # Hi ,I am ${nameOfUser}! <img src="https://raw.githubusercontent.com/debdutgoswami/debdutgoswami/master/assets/gifs/Hi.gif" width="30px">
  <br>
  
  ![](https://komarev.com/ghpvc/?username=${GitHubUsername}&color=blue)<br>
  
  ## ${aboutMe}<br>
  
  - 👨‍🏭 I’m currently pursuing **${study}** <br>
  - 🏫 I’m currently learning **${learnings}** <br>
  - 🙌 I’m looking to collaborate on **${collab}** <br>
  - 🤔 I’m looking for help with **${helps}**<br>
  - 🥅 Upcoming Goals: **${goals}** <br>
  
  `;
  var markdown2=` ## Tools and Languages
  
  <div>
  
  `;
 var markdown3= ` 
 </div>
 
 <br>

 ## 🕵 Take a look at my repositories and let's get in touch!<br>
  
  
  [![Linkedin Badge](https://img.shields.io/badge/-${linkedinUsername}-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/${linkedinUsername}/)](https://www.linkedin.com/in/${linkedinUsername}/) 
  [![Twitter Badge](https://img.shields.io/badge/-@${twitterUsername}-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/${twitterUsername})](https://twitter.com/${twitterUsername}) 
  [![Facebook Badge](https://img.shields.io/badge/-${facebookUsername}-3b5998?style=flat-square&labelColor=3b5998&logo=facebook&logoColor=white&link=https://www.facebook.com/${facebookUsername})](https://www.facebook.com/${facebookUsername}) 
  [![Instagram Badge](https://img.shields.io/badge/-@${instagramUsername}-E4405F?style=flat-square&logo=instagram&logoColor=white&link=https://www.instagram.com/${instagramUsername})](https://www.instagram.com/${instagramUsername}) 
  
  
  ## 📈 Github Stats:
  
  
  <br>
  <a href="https://github.com/${GitHubUsername}">
  <img align="center" src="https://github-readme-stats.vercel.app/api?username=${GitHubUsername}&show_icons=true&include_all_commits=true&theme=midnight-purple&count_private=true">
  </a>
  <br><br>
  <a href="https://github.com/remcohalman/github-readme-stats">
  <img align="center" src="https://github-readme-stats.anuraghazra1.vercel.app/api/top-langs/?username=${GitHubUsername}&layout=compact&theme=${theme}" />
  </a>
  <br>
  <br><br>
  
  [![GitHub Streak](https://github-readme-streak-stats.herokuapp.com/?user=${GitHubUsername})](https://git.io/streak-stats)
  
  `;
//Array of all possible Languages and tools
const id=[`c`,`c++`,`java`,`python`,`js`,`r`,`sql`,`go`,`swift`,`css`,`html`,`kotlin`,`swift`,`cobol`,`matlab`,`shell`,`julia`,`typescript`,`kotlin`,`fortran`,`asm`,`mongodb`,`rust`,`sas`,`dart`,`nodejs`,`angular`,`lua`,`elixir`,`photoshop`,`figma`,`illustrator`,`canva`,`premiere`];
 
//Driver Code to get the required logos
for(var i=0;i<id.length;i++){
  var find = document.getElementById(id[i]);  
  if(find.checked==true){
    var x=`<img style="margin: 20px" src="https://github.com/D3FaltXD/Icons/blob/main/icons/${id[i]}.svg" alt="${id[i]}" height="50" />   &nbsp;  &nbsp;`;
    markdown2=markdown2.concat(x) ;
   }
}

  markdown=markdown.concat(markdown2,markdown3) // finally combine all three part of the logos
  // ========================== Outputing Results ===============================
  console.log(currentTheme);
  console.log(markdown);
  copyToClipboard(markdown);
  alert(message);
}

// ============================================================
//                    COPYTOCLIPBOARD
// ============================================================
function copyToClipboard(text) {
  var dummy = document.createElement('textarea');
  document.body.appendChild(dummy);
  dummy.value = text;
  dummy.select();
  document.execCommand('copy');
  document.body.removeChild(dummy);
}
