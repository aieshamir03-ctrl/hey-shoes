let obj = [{
    prod_image: "pics/women-sport/img1.jfif",
    prod_name: "Performance Sneakers Collection",
    prod_desc: "Discover 9 dynamic designs of athletic sneakers and running shoes, engineered for performance and comfort.",
    prod_price: "10$"
},
{
    prod_image: "pics/women-sport/img2.jfif",
    prod_name: "Kholapori & Air Jordan: Athletic Styles",
    prod_desc: "A curated selection of sporty footwear from Kholapori and Air Jordan, perfect for your workouts and active days.",
    prod_price: "15$"
},
{
    prod_image: "pics/women-sport/img3.jfif",
    prod_name: "Running & Training Footwear",
    prod_desc: "Introducing 9 essential pairs of cutting-edge sneakers, designed for optimal support, cushioning, and style.",
    prod_price: "15$"
},
{
    prod_image: "pics/women-sport/img4.jfif",
    prod_name: "Dynamic Sports Shoes",
    prod_desc: "Step up your game with these 9 modern athletic styles, featuring responsive soles, breathable uppers, and secure fits.",
    prod_price: "10$"
},
{
    prod_image: "pics/women-sport/img5.jfif",
    prod_name: "Active Lifestyle Sneakers",
    prod_desc: "Each of the 9 pairs offers a unique blend of innovative technology and sleek aesthetics for the active individual.",
    prod_price: "10$"
},
{
    prod_image: "pics/women-sport/img6.jfif",
    prod_name: "The Ultimate Athletic Shoe Showcase",
    prod_desc: "Shop the performance! A diverse collection of 9 running and training shoes in shades like black, white, pink, and vibrant green.",
    prod_price: "13$"
},
{
    prod_image: "pics/sport-men/7.jpg",
    prod_name: "High-Performance Footwear Range",
    prod_desc: "From lightweight trainers to robust running shoes, find your ideal athletic footwear among these 9 advanced options.",
    prod_price: "20$"
},
{
    prod_image: "pics/sport-men/8.jpg",
    prod_name: "Modern Running Shoe Essentials",
    prod_desc: "High-quality materials and thoughtful design are evident in all 9 sport-focused footwear styles, ensuring durability and comfort.",
    prod_price: "10$"
},
{
    prod_image: "pics/sport-men/9.jpg",
    prod_name: "Men's Premium Multi-Sport Shoe",
    prod_desc: "Boost your stride with this fashionable and functional sneaker, offering superior cushioning and support. **(Higher Price Item)**",
    prod_price: "20$"
}
];

var a=document.getElementById("cardsportw");
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