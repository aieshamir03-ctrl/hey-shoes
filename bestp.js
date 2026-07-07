let obj = [{
    prod_image: "pics/tops/12.png",
    prod_name: "Air Jordan Red Classic",
    prod_desc: "Iconic red & white sneakers loved by sneakerheads.",
    prod_price: "10$"
},
{
    prod_image: "pics/sneckers/7.jpg",
    prod_name: "Nike Dunk Royal Blue",
    prod_desc: "Bold blue sneakers for a fresh vibe.",
    prod_price: "10$"
},


{
    prod_image: "pics/women-sport/img2.jfif",
    prod_name: "Air Jordan: Athletic Styles",
    prod_desc: "A curated selection of sporty footwear",
    prod_price: "15$"
}
];

var a=document.getElementById("cards");
for(var i=0;i<obj.length;i++){
    
a.innerHTML+=`
<div class="col ">
        <div class="card" style="width: 18rem;">
  <img src="${obj[i].prod_image}" class="card-img-top " id="imgcard" alt="...">
  <div class="card-body">
    <h5 class="card-title">${obj[i].prod_name}</h5>
    <p class="card-text">${obj[i].prod_desc}</p>
    <p class="card-text">${obj[i].prod_price}</p>
 <a href="order.html?image=${encodeURIComponent(obj[i].prod_image)}&name=${encodeURIComponent(obj[i].prod_name)}&price=${encodeURIComponent(obj[i].prod_price)}" class="btn btn-dark">Order Now</a>  </div>
  </div>
</div>
      </div>


`;
}