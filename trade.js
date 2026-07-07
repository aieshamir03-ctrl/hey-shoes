let obj = [
{
    prod_image: "pics/tradional/1.png",
    prod_name: "Classic Black Sandals",
    prod_desc: "Simple black leather slip-ons.",
    prod_price: "10$"
},
{
    prod_image: "pics/tradional/2.png",
    prod_name: "Pointed Black Flats",
    prod_desc: "Elegant pointed flats for daily wear.",
    prod_price: "20$"
},
{
    prod_image: "pics/tradional/3.png",
    prod_name: "Bow Tie Black Slippers",
    prod_desc: "Trendy bow design in black style.",
    prod_price: "15$"
},
{
    prod_image: "pics/tradional/4.png",
    prod_name: "Brown Kolhapuri Flats",
    prod_desc: "Handmade design with comfy fit.",
    prod_price: "10$"
},
{
    prod_image: "pics/tradional/5.png",
    prod_name: "Beige Casual Flats",
    prod_desc: "Neutral beige sandals for all-day comfort.",
    prod_price: "15$"
},
{
    prod_image: "pics/tradional/6.png",
    prod_name: "Embroidered Green Khussa",
    prod_desc: "Traditional style with colorful embroidery.",
    prod_price: "10$"
},
{
    prod_image: "pics/tradional/7.png",
    prod_name: "Golden Khussa",
    prod_desc: "Classic golden touch for festive look.",
    prod_price: "10$"
},
{
    prod_image: "pics/tradional/8.png",
    prod_name: "Peach Kolhapuri Flats",
    prod_desc: "Soft peach sandals with modern twist.",
    prod_price: "12$"
},
{
    prod_image: "pics/tradional/9.jpg",
    prod_name: "Silver Fancy Slippers",
    prod_desc: "Shiny silver flats with stone work.",
    prod_price: "10$"
}
];

var a=document.getElementById("cardtrade");
for(var i=0;i<obj.length;i++){
    
a.innerHTML+=`
<div class="col col col-lg-4 col-mb-4 col-sm-6 d-flex justify-content-center ">
        <div class="card" style="width: 18rem;">
  <img src="${obj[i].prod_image}" class="card-img-top" id="imgcard" alt="...">
  <div class="card-body">
    <h5 class="card-title">${obj[i].prod_name}</h5>
    <p class="card-text">${obj[i].prod_desc}</p>
    <p class="card-text">${obj[i].prod_price}</p>
 <a href="order.html?image=${encodeURIComponent(obj[i].prod_image)}&name=${encodeURIComponent(obj[i].prod_name)}&price=${encodeURIComponent(obj[i].prod_price)}" class="btn btn-dark">Order Now</a>  </div>
</div>
      </div>


`;
}