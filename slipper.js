let obj = [
  {
    prod_image: "pics/slippers-men/1.jpg",
    prod_name: "Brown Kholapuri",
    prod_desc: "Classic handmade leather slipper.",
    prod_price: "$500"
  },
  {
    prod_image: "pics/slippers-men/2.jpg",
    prod_name: "Black Strap",
    prod_desc: "Soft sole with dual straps.",
    prod_price: "$500"
  },
  {
    prod_image: "pics/slippers-men/3.jpg",
    prod_name: "Black Slide",
    prod_desc: "Simple and stylish slip-on.",
    prod_price: "$500"
  },
  {
    prod_image: "pics/slippers-men/4.jpg",
    prod_name: "White Slide",
    prod_desc: "Trendy white casual slipper.",
    prod_price: "$500"
  },
  {
    prod_image: "pics/slippers-men/5.jpg",
    prod_name: "Nike Slide",
    prod_desc: "Branded casual comfort wear.",
    prod_price: "$500"
  },
  {
    prod_image: "pics/slippers-men/6.jpg",
    prod_name: "Grey Strap",
    prod_desc: "Modern slipper with soft base.",
    prod_price: "$500"
  },
  {
    prod_image: "pics/slippers-men/7.jpg",
    prod_name: "White Logo",
    prod_desc: "Sporty look with bold logo.",
    prod_price: "$500"
  },
  {
    prod_image: "pics/slippers-men/8.jpg",
    prod_name: "Striped Slide",
    prod_desc: "Casual black slipper with stripes.",
    prod_price: "$500"
  },
  {
    prod_image: "pics/slippers-men/9.jpg",
    prod_name: "Men’s Slipper",
    prod_desc: "Premium black comfort slipper.",
    prod_price: "$4500"
  }
];



var a=document.getElementById("cardslipper");
for(var i=0;i<obj.length;i++){
    
a.innerHTML+=`
<div class="col col col-lg-4 col-mb-4 col-sm-6 d-flex justify-content-center ">
        <div class="card" style="width: 18rem;">
  <img src="${obj[i].prod_image}" class="card-img-top " id="imgcard" alt="...">
  <div class="card-body">
    <h5 class="card-title">${obj[i].prod_name}</h5>
    <p class="card-text">${obj[i].prod_desc}</p>
    <p class="card-text">${obj[i].prod_price}</p>
 <a href="order.html?image=${encodeURIComponent(obj[i].prod_image)}&name=${encodeURIComponent(obj[i].prod_name)}&price=${encodeURIComponent(obj[i].prod_price)}" class="btn btn-dark">Order Now</a>  </div>
</div>
      </div>


`;
}