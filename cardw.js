let obj = [{
    prod_image: "Extra/kholapori.jfif",
    prod_name: "kholapori",
    prod_desc: "Many of our components require the use of JavaScript to function.",
    prod_price: "$500"
},
{
    prod_image: "jordan/AIR JORDAN 1 LOW red.png",
    prod_name: "Air Jordan Red",
    prod_desc: "Many of our components require the use of JavaScript to function.",
    prod_price: "$500"
},
{
    prod_image: "Extra/kholapori.jfif",
    prod_name: "kholapori",
    prod_desc: "Many of our components require the use of JavaScript to function.",
    prod_price: "$500"
},
{
    prod_image: "jordan/AIR JORDAN 1 LOW red.png",
    prod_name: "Air Jordan Red",
    prod_desc: "Many of our components require the use of JavaScript to function.",
    prod_price: "$500"
},
{
    prod_image: "Extra/kholapori.jfif",
    prod_name: "kholapori",
    prod_desc: "Many of our components require the use of JavaScript to function.",
    prod_price: "$500"
},
{
    prod_image: "jordan/AIR JORDAN 1 LOW red.png",
    prod_name: "Air Jordan Red",
    prod_desc: "Many of our components require the use of JavaScript to function.",
    prod_price: "$500"
},
{
    prod_image: "Extra/kholapori.jfif",
    prod_name: "kholapori",
    prod_desc: "Many of our components require the use of JavaScript to function.",
    prod_price: "$500"
},
{
    prod_image: "jordan/AIR JORDAN 1 LOW red.png",
    prod_name: "Air Jordan Red",
    prod_desc: "Many of our components require the use of JavaScript to function.",
    prod_price: "$500"
},{
    prod_image: "Extra/kholapori.jfif",
    prod_name: "kholapori",
    prod_desc: "Many of our components require the use of JavaScript to function.",
    prod_price: "$500"
},
{
    prod_image: "jordan/AIR JORDAN 1 LOW red.png",
    prod_name: "Air Jordan Red",
    prod_desc: "Many of our components require the use of JavaScript to function.",
    prod_price: "$500"
},{
    prod_image: "Extra/kholapori.jfif",
    prod_name: "kholapori",
    prod_desc: "Many of our components require the use of JavaScript to function.",
    prod_price: "$500"
},
{
    prod_image: "jordan/AIR JORDAN 1 LOW red.png",
    prod_name: "Air Jordan Red",
    prod_desc: "Many of our components require the use of JavaScript to function.",
    prod_price: "$500"
},{
    prod_image: "Extra/kholapori.jfif",
    prod_name: "kholapori",
    prod_desc: "Many of our components require the use of JavaScript to function.",
    prod_price: "$500"
},
{
    prod_image: "jordan/AIR JORDAN 1 LOW red.png",
    prod_name: "Air Jordan Red",
    prod_desc: "Many of our components require the use of JavaScript to function.",
    prod_price: "$500"
},{
    prod_image: "Extra/kholapori.jfif",
    prod_name: "kholapori",
    prod_desc: "Many of our components require the use of JavaScript to function.",
    prod_price: "$500"
},
{
    prod_image: "jordan/AIR JORDAN 1 LOW red.png",
    prod_name: "Air Jordan Red",
    prod_desc: "Many of our components require the use of JavaScript to function.",
    prod_price: "$500"
},{
    prod_image: "Extra/kholapori.jfif",
    prod_name: "kholapori",
    prod_desc: "Many of our components require the use of JavaScript to function.",
    prod_price: "$500"
},
{
    prod_image: "jordan/AIR JORDAN 1 LOW red.png",
    prod_name: "Air Jordan Red",
    prod_desc: "Many of our components require the use of JavaScript to function.",
    prod_price: "$500"
},{
    prod_image: "Extra/kholapori.jfif",
    prod_name: "kholapori",
    prod_desc: "Many of our components require the use of JavaScript to function.",
    prod_price: "$500"
},
{
    prod_image: "jordan/AIR JORDAN 1 LOW red.png",
    prod_name: "Air Jordan Red",
    prod_desc: "Many of our components require the use of JavaScript to function.",
    prod_price: "$500"
},

{
    prod_image: "slippers men/addidas.jpg",
    prod_name: "Men Sipper",
    prod_desc: "Many of our components require the use of JavaScript to function.",
    prod_price: "$4500"
}
];

var a=document.getElementById("cards");
for(var i=0;i<obj.length;i++){
    
a.innerHTML+=`
<div class="col ">
        <div class="card" style="width: 18rem;">
  <img src="${obj[i].prod_image}" class="card-img-top" id="imgcard" alt="...">
  <div class="card-body">
    <h5 class="card-title">${obj[i].prod_name}</h5>
    <p class="card-text">${obj[i].prod_desc}</p>
    <p class="card-text">${obj[i].prod_price}</p>
    <a href="order.html" class="btn btn-dark">Order Now</a>
  </div>
</div>
      </div>


`;
}