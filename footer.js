var foot = document.getElementById("foot")

foot.innerHTML = `
<style>    footer {
      margin-top: 100px;
      font-family: 'Arial', sans-serif;
      color: white;
      
      clear: both;
    }

    .footer-top {
      background: white;
      color: black;
      padding: 60px 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .footer-top .cta p {
      font-size: 12px;
      font-weight: 500;
      margin: 0 0 5px;
    }

    .footer-top h2 {
      
      font-size: 42px;
      font-weight: 600;
      position: relative;
      margin: 10px 0;
    }

    .footer-top h2::after {
      content: '';
      position: absolute;
      bottom: -9px;
      left: 0;
      width: 100%;
      height: 3px;
      background: #E7FF00;
      
    }

  

    .footer-bottom {
      background: #111;
      padding: 50px 30px;
      display: flex;
      flex-wrap: wrap;
      gap: 30px;
    }

    .footer-section {
      flex: 1;
      min-width: 200px;
    }

    .footer-section .logo {
      font-size: 20px;
      font-weight: bold;
      line-height: 1.4;
    }

    .footer-section h4 {
      font-size: 14px;
      margin-bottom: 12px;
      text-transform: uppercase;
    }

    .footer-section a {
      color: #fff;
      text-decoration: none;
      font-size: 14px;
      display: inline-block;
      margin: 5px 0;
    }
h1{
font-weight: bolder;
text-decoration: underline;

}
    .footer-section p {
      font-size: 14px;
      margin: 8px 0;
      line-height: 1.6;
    }
      .footer-section brand {
     font-weight: bolder;

    }
 
</style>
  <div class="container-fluid">
    <footer>
    <div class="footer-top">
      <div class="cta">
        <p>HEARD ENOUGH? →</p>
        <a href="contact.html" target="_blank" style="color:#111; text-decoration:none;">
          <h2>Contact us</h2>
        </a>
        <a href="#">→</a>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="footer-section brand">
           <img src="Extra/footlogo.png" alt="" height="200px">

      </div>
      <div class="footer-section">
      <h1>Quick Links </h1>
 <a href="home.html" target="_blank">Home</a> 
<br>
                <a href="contact.html" target="_blank">Contact Us</a> 
                <br>

                <a href="about.html" target="_blank">About Us</a> 
<br>
                

                <a href="feed.html" target="_blank">Feedback</a> 
<br>
                <a href="help.html" target="_blank">Help</a>
      </div>
      <div class="footer-section">
            <h1>Location </h1>

        <h4>LAHORE</h4>
        <a href="mailto:info@yourschoestore.com">info@yourschoestore.com</a><br>
        <p>+92 300 1234567<br>123 Mall Road, Lahore</p>
        <a href="#">SEE ON MAP →</a>
      </div>

      <div class="footer-section">
      <br><br>
        <h4>KARACHI</h4>
        <a href="mailto:karachi@yourschoestore.com">karachi@yourschoestore.com</a><br>
        <p>+92 300 7654321<br>ABC Plaza, Clifton, Karachi</p>
        <a href="https://www.google.com/maps/place/METRO+Stargate+Store,+Karachi/@24.8876409,67.1520719,17z/data=!3m1!4b1!4m6!3m5!1s0x3eb33999ec8ecc87:0xda9cc5004c86e53f!8m2!3d24.8876409!4d67.1520719!16s%2Fg%2F11f3m7rk06?entry=ttu&g_ep=EgoyMDI1MDkyMi4wIKXMDSoASAFQAw%3D%3D">SEE ON MAP →</a>
      </div>
    </div>
  </footer>
`