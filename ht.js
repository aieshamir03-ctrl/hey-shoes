let obj = [
{
    prod_image: "pics/tops/18.png",
    prod_name: "Air Jordan Retro Yellow",
    prod_desc: "High-top sneakers with a bold yellow touch and premium comfort.",
    prod_price: "20$"
},
{
    prod_image: "pics/tops/17.png",
    prod_name: "Nike Blazer Classic White",
    prod_desc: "Minimal white sneakers with a clean and stylish finish.",
    prod_price: "15$"
},
{
    prod_image: "pics/tops/16.png",
    prod_name: "Nike Suede Black",
    prod_desc: "Soft suede design with modern all-black elegance.",
    prod_price: "30$"
},
{
    prod_image: "pics/tops/15.png",
    prod_name: "Air Jordan Retro Brown",
    prod_desc: "Classic Jordan look with unique brown tones.",
    prod_price: "25$"
},
{
    prod_image: "pics/tops/14.png",
    prod_name: "Air Jordan Grey Edition",
    prod_desc: "Neutral grey sneakers perfect for casual wear.",
    prod_price: "15$"
},
{
    prod_image: "pics/tops/13.png",
    prod_name: "Air Jordan Orange Blaze",
    prod_desc: "Energetic orange accents for a sporty style.",
    prod_price: "20$"
},
{
    prod_image: "pics/tops/12.png",
    prod_name: "Air Jordan Red Classic",
    prod_desc: "Iconic red & white sneakers loved by sneakerheads.",
    prod_price: "10$"
},
{
    prod_image: "pics/tops/11.png",
    prod_name: "Nike Dunk Panda",
    prod_desc: "Timeless black and white combo for every outfit.",
    prod_price: "20$"
},
{
    prod_image: "pics/tops/10.png",
    prod_name: "Nike Dunk Cream",
    prod_desc: "Sleek cream finish with modern casual vibes.",
    prod_price: "$20$"
}
];


var a=document.getElementById("cardht");
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