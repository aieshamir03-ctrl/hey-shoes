let obj = [{
    prod_image: "pics/Slipper/img1.jfif",
    prod_name: "Comfort Slides & Slippers Collection",
    prod_desc: "Discover 9 designs of ultimate comfort with our plush slippers and versatile slides in various textures and colors.",
    prod_price: "20$"
},
{
    prod_image: "pics/Slipper/img3.jfif",
    prod_name: "Relaxed Styles",
    prod_desc: "A curated selection of cozy footwear from Kholapori and Air Jordan, perfect for relaxing at home or casual outings.",
    prod_price: "10$"
},
{
    prod_image: "pics/Slipper/img2.jfif",
    prod_name: "Everyday Comfort Footwear",
    prod_desc: "Introducing 9 essential pairs of soft slippers and comfortable slides, designed for effortless style and all-day ease.",
    prod_price: "10$"
},
{
    prod_image: "pics/slipper/7.png",
    prod_name: "Soft Slippers & Casual Slides",
    prod_desc: "Step into comfort with these 9 modern styles, featuring fluffy textures, sleek designs, and ergonomic fits.",
    prod_price: "5$"
},
{
    prod_image: "pics/slipper/8.png",
    prod_name: "Home & Leisure Footwear",
    prod_desc: "Each of the 9 pairs offers a unique blend of warmth, softness, and practical elegance for your feet.",
    prod_price: "8$"
},
{
    prod_image: "pics/slipper/9.png",
    prod_name: "The Ultimate Comfort Selection",
    prod_desc: "Shop the comfort! A diverse collection of 9 slides and slippers in shades like grey, pink, black, and mint green.",
    prod_price: "10$"
},
{
    prod_image: "pics/Slipper/img4.jfif",
    prod_name: "Relaxation Footwear Range",
    prod_desc: "From luxurious faux fur to practical rubber soles, find your ideal relaxed footwear among these 9 options.",
    prod_price: "5$"
},
{
    prod_image: "pics/Slipper/img5.jfif",
    prod_name: "Stylish Indoor & Outdoor Comfort",
    prod_desc: "High-quality materials and thoughtful design are evident in all 9 comfort-focused footwear styles.",
    prod_price: "10$"
},
{
    prod_image: "pics/Slipper/img6.jpeg",
    prod_name: "Premium women's Indoor/Outdoor Slipper",
    prod_desc: "Durable and exceptionally comfortable footwear designed for lasting wear and maximum relaxation. **(Higher Price Item)**",
    prod_price: "9$"
}
];

var a=document.getElementById("cardwomen");
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