// let sections=document.querySelector('#wrapper section');

// let navLinks=document.querySelector("#wrapper #navigationbar #nav a");
// console.log(navLinks);
// let arr = Array.from(sections);
// let arr1 = Array.from(navLinks);
// window.onscroll = () => {
//         arr.forEach(section => {
//               let top=window.scrollY;
//               let offset=section.offsetTop;
//               let height=section.offsetHeight;
//               let id=section.getAttribute("id");
//               if(top >=offset && top <offset+height){
//                 arr1.forEach((links)=>{
//                    links.classList.remove("active");
//                    document.querySelector("#navigationbar #nav a[href=" + id + "]").classList.add("active");
//                 });
//               };
//         });
// };

let section = document.querySelectorAll('section')
let lists = document.querySelectorAll('#wrapper #navigationbar #nav a');
function activeLink(){
    lists.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}
lists.forEach((item) =>
item.addEventListener('click',activeLink));

window.onscroll = () =>{
  section.forEach(sec =>{
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    

    if(top >= offset && top < offset + height){
      lists.forEach(sec =>{
        // const target = document.querySelector(`[href='#${id}']`).parentElement;
        // activeLink(target);
      })
    }
    
  })
};




