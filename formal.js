let obj = [{
    prod_image: "pics/formal/1.jpg",
    prod_name: "Modern Black Derby Shoe",
    prod_desc: " A contemporary take on a classic style, this black derby features a shiny finish and a bold, thick sole. It's a versatile choice that bridges the gap between formal and smart-casual.",
    prod_price: "20$"
},
{
    prod_image: "pics/formal/2.jpg",
    prod_name: "Brown Chunky Penny Loafer",
    prod_desc: "This stylish brown penny loafer features a modern, thick lug sole for a contemporary look. The perforated details on the toe add a touch of classic elegance.",
    prod_price: "25$"
},
{
    prod_image: "pics/formal/3.jpg",
    prod_name: "Formal Black Patent Oxford Shoes",
    prod_desc: " Crafted from high-gloss patent leather, these oxford shoes are designed for the most formal occasions. Their refined silhouette makes them the perfect companion for a tuxedo or formal suit..",
    prod_price: "10$"
},
{
    prod_image: "pics/formal/4.jpg",
    prod_name: "Simple Black Slip-On Formal Shoe",
    prod_desc: " A comfortable and easy-to-wear slip-on shoe, perfect for daily office use. Its simple and clean design offers a professional look without the hassle of laces..",
    prod_price: "15$"
},
{
    prod_image: "pics/formal/5.jpg",
    prod_name: "Classic Black Leather Derby with Brown Sole",
    prod_desc: "This timeless black derby shoe is a wardrobe essential for any gentleman. The contrasting brown sole adds a subtle touch of modern style and versatility.",
    prod_price: "20$"
},
{
    prod_image: "pics/formal/6.jpg",
    prod_name: " Elegant Black Patent Leather Oxford",
    prod_desc: "The ultimate in formal footwear, these high-shine patent leather oxfords are perfect for black-tie events. Their sleek and minimalist design exudes sophistication and class..",
    prod_price: "20$"
},
{
    prod_image: "pics/formal/7.jpg",
    prod_name: "Sleek Black Tassel Loafers",
    prod_desc: "These black tassel loafers offer a sophisticated and polished look. Their slip-on design provides both comfort and a touch of effortless elegance for any smart-casual occasion.",
    prod_price: "15$"
},

{
    prod_image: "pics/formal/8.jpg",
    prod_name: "Formal Black Patent Oxford Shoes",
    prod_desc: "Crafted from high-gloss patent leather, these oxford shoes are designed for the most formal occasions. ",
    prod_price: "25$"
},


{
    prod_image: "pics/formal/9.jpg",
    prod_name: "Stylized Pointed Toe Dress Shoe",
    prod_desc: "This shoe makes a bold statement with its shiny patent finish and a textured, snakeskin-like pattern.",
    prod_price: "10$"
}
];

var a=document.getElementById("cardformal");
for(var i=0;i<obj.length;i++){
    
a.innerHTML+=`
<div class="col col col-lg-4 col-mb-4 col-sm-6 d-flex justify-content-center ">
        <div class="card" style="width: 18rem;">
  <img src="${obj[i].prod_image}" class="card-img-top " id="imgcard" alt="...">
  <div class="card-body">
    <h5 class="card-title">${obj[i].prod_name}</h5>
    <p class="card-text">${obj[i].prod_desc}</p>
    <p class="card-text">${obj[i].prod_price}</p>
  <a href="order.html?image=${encodeURIComponent(obj[i].prod_image)}&name=${encodeURIComponent(obj[i].prod_name)}&price=${encodeURIComponent(obj[i].prod_price)}" class="btn btn-dark">Order Now</a>
  </div>
</div>
      </div>


`;
}