var search_icon = document.querySelector(".search-icon");
var search_bar = document.querySelector(".search-bar");
var back_arrow = document.querySelector(".back-arrow");
var cancel_btn = document.querySelector(".cancel");
var search_bar_lg = document.querySelector(".search-bar_lg")
var search_icon_lg = document.querySelector(".search-icon_lg");
var all_microsoft_btn = document.querySelector(".all-microsoft");
var all_microsoft_btn_id = document.querySelector("#all_microsoft");
var all_menu = document.querySelector(".all-menu");
var all_menu_id = document.querySelector("#all_menu");
var hamburger = document.querySelector(".hamburger");
var side_menu = document.querySelector(".features");
var soft_name = document.querySelector(".soft-name");
var soft_menu = document.querySelector(".soft-menu");
var pc_name = document.querySelector(".pc-name");
var pc_menu = document.querySelector(".pc-menu");
var ent_name = document.querySelector(".ent-name");
var ent_menu = document.querySelector(".ent-menu");
var bus_name = document.querySelector(".bus-name");
var bus_menu = document.querySelector(".bus-menu");
var dev_name = document.querySelector(".dev-name");
var dev_menu = document.querySelector(".dev-menu");
var other_name = document.querySelector(".other-name");
var other_menu = document.querySelector(".other-menu");

search_icon.addEventListener('click', ()=>{
    search_bar.style.display = "block";
});

back_arrow.addEventListener('click', ()=>{
    search_bar.style.display="none";    
});

search_icon_lg.addEventListener('click', ()=>{
    search_bar_lg.style.display = "block";
});

cancel_btn.addEventListener('click', ()=>{
    search_bar_lg.style.display="none";    
});

all_microsoft_btn.addEventListener('click', ()=>{
    if (all_menu.style.display === "none") {
        all_menu.style.display = "block";
    } else {
       all_menu.style.display = "none";
    }
});

document.onclick = function(e){
    if(e.target.id !== 'all_menu' && e.target.id !== 'all_microsoft'){
        all_menu.style.display="none";
    }
};

hamburger.addEventListener('click', ()=>{
    // side_menu.style.transform="translate(0)";
    side_menu.classList.toggle('-translate-x-full');
});

soft_name.addEventListener('click', ()=>{
    soft_menu.classList.toggle('-translate-y-full');
    soft_menu.classList.toggle('hidden');
});
pc_name.addEventListener('click', ()=>{
    pc_menu.classList.toggle('-translate-y-full');
    pc_menu.classList.toggle('hidden');
});
ent_name.addEventListener('click', ()=>{
    ent_menu.classList.toggle('-translate-y-full');
    ent_menu.classList.toggle('hidden');
});
bus_name.addEventListener('click', ()=>{
    bus_menu.classList.toggle('-translate-y-full');
    bus_menu.classList.toggle('hidden');
});
dev_name.addEventListener('click', ()=>{
    dev_menu.classList.toggle('-translate-y-full');
    dev_menu.classList.toggle('hidden');
});

other_name.addEventListener('click', ()=>{
    other_menu.classList.toggle('-translate-y-full');
    other_menu.classList.toggle('hidden');
});