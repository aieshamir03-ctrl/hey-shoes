let obj = [{
    prod_image: "pics/HEELS/img1.jpg",
    prod_name: "The Nine Heel Essentials",
    prod_desc: "Explore 9 signature designs featuring elegant black, striking gold, and sophisticated nude tones.",
    prod_price: "20$"
},
{
    prod_image: "pics/HEELS/img2.jpg",
    prod_name: "Kholapori: Full Style Spectrum",
    prod_desc: "A complete set of premium high heels and mules for every occasion, from day to evening.",
    prod_price: "15$"
},
{
    prod_image: "pics/HEELS/img3.jpg",
    prod_name: "Modern Heels: 9 Ways",
    prod_desc: "The best of Kholapori and Air Jordan Red in one frame, showcasing diverse textures and straps.",
    prod_price: "10$"
},
{
    prod_image: "pics/HEELS/img4.jpg",
    prod_name: "Footwear Gallery: Black, Gold & Nude",
    prod_desc: "Introducing 9 must-have pairs—strappy sandals, slip-on mules, and classic pumps.",
    prod_price: "20$"
},
{
    prod_image: "pics/HEELS/img5.jpg",
    prod_name: "Premium Sandal Collection (Set of 9)",
    prod_desc: "Each of the 9 styles offers a unique blend of comfort and high-fashion appeal.",
    prod_price: "10$"
},
{
    prod_image: "pics/HEELS/9.png",
    prod_name: "The Ultimate Heel Showcase",
    prod_desc: "Shop the look! A curated collection of 9 modern heels in essential wardrobe colors.",
    prod_price: "15$"
},
{
    prod_image: "pics/HEELS/img6.jpg",
    prod_name: "Designer Mules and Strappy Sandals",
    prod_desc: "From delicate straps to bold textures, find your perfect pair among these 9 exquisite designs.",
    prod_price: "10$"
},
{
    prod_image: "pics/HEELS/img7.jpg",
    prod_name: "Air Jordan Red & Kholapori: Top 9",
    prod_desc: "High-quality craftsmanship on display with 9 distinct sandal and heel varieties.",
    prod_price: "10$"
},
{
    prod_image: "pics/HEELS/img8.jpg",
    prod_name: "Contemporary High Heel Styles",
    prod_desc: "Complete your outfit with one of these 9 fashionable, high-end footwear selections.",
    prod_price: "15$"
}
];

var a=document.getElementById("cards");
for(var i=0;i<obj.length;i++){
    
a.innerHTML+=`
<div class="col ">
        <div class="card" style="width: 18rem;">
  <img src="${obj[i].prod_image}" class="card-img-top" id="img" alt="...">
  <div class="card-body">
    <h5 class="card-title">${obj[i].prod_name}</h5>
    <p class="card-text">${obj[i].prod_desc}</p>
    <p class="card-text">${obj[i].prod_price}</p>
 <a href="order.html?image=${encodeURIComponent(obj[i].prod_image)}&name=${encodeURIComponent(obj[i].prod_name)}&price=${encodeURIComponent(obj[i].prod_price)}" class="btn btn-dark">Order Now</a>  </div>
</div>
      </div>
`;
}