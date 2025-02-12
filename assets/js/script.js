var typed = new Typed(".typing",{
  strings:["","Web Development","Software Development","Front-end Development","Data Analytics","Application Development","E-Commerce Solutions"],
  typeSpeed:100,
  BackSpeed:60,
  loop:true
})
/*-----------------aside-----------------------------*/
const nav = document.querySelector(".nav"),
navList = nav.querySelectorAll("li"),
totalnavList = navList.length,
allSection = document.querySelectorAll(".section"),
totalSection = allSection.length;
for(let i=0; i<totalnavList; i++)
{
  const a=navList[i].querySelector("a");
  a.addEventListener("click", function()
 {
  removeBackSection();
for(let j=0; j<totalnavList; j++)
{
  if(navList[j].querySelector("a").classList.contains("active"))
  {
    addBackSection(j);
  // allSection[j].classList.add("back-section");
  }
 navList[j].querySelector("a").classList.remove("active"); 
}
this.classList.add("active")
showSection(this);
if(window.innerWidth <1200)
{
  asideSectionTogglerBtn();
}
 })
}
function removeBackSection()
{
for(let i=0; i<totalSection; i++)
  {
    allSection[i].classList.remove("back-section");

  }
}
function addBackSection(num)
{
  allSection[num].classList.add("back-section");
}
function showSection(element)
{
  for(let i=0; i<totalSection; i++)
  {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active")
}
function updateNav(element)
{
  for(let i=0; i<totalnavList; i++)
  {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
    {
      navList[i].querySelector("a").classList.add("active"); 
    }
  }
}
document.querySelector(".hire-me").addEventListener("click", function()
{
  const sectionIndex = this.getAttribute("data-section-index");
  //console.log(sectionIndex);
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
})
const navTogglerBtn = document.querySelector(".nav-toggler"),
aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () =>
{
 asideSectionTogglerBtn(); 
})
function asideSectionTogglerBtn()
{
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for(let i=0; i<totalSection; i++ )
  {
    allSection[i].classList.toggle("open");
  }
}

document.addEventListener("DOMContentLoaded", function() {
  var readMoreLink = document.getElementById("read-more-link");
  var additionalText = document.querySelector(".additional-text");

  readMoreLink.addEventListener("click", function(event) {
      event.preventDefault();
      if (additionalText.style.display === "none" || additionalText.style.display === "") {
          additionalText.style.display = "block";
          readMoreLink.textContent = "Read Less";
      } else {
          additionalText.style.display = "none";
          readMoreLink.textContent = "Read More";
      }
  });
});


