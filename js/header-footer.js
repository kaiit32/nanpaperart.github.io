class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header class="site-navbar py-3" role="banner">

        <div class="container-fluid">
          <div class="row align-items-center">
            
            <div class="col-6 col-xl-2 col-md-2 col-lg-2 col-sm-1" data-aos="fade-down">
              
              <h1 class="mb-0"><a href="index.html" class="text-black "><img src="image/logo1.png" width="80%" height="auto" ></a></h1>
            </div>
            
            <div class="col-10 col-md-8 d-none d-xl-block" data-aos="fade-down">
              <nav class="site-navigation position-relative text-right text-lg-center" role="navigation">
  
                <ul class="site-menu js-clone-nav mx-auto d-none d-lg-block">
                  <li class="active"><a href="index.html"><span data-trans-h>Home</span></a></li>
                  <li class="has-children">
                    <a >Gallery</a>
                    <ul class="dropdown">
                      <li><a href="Chinese symbol.html">Chinese Symbol</a></li>
                      <li><a href="quilling.html">Quill Craft</a></li>
                      <li><a href="silk.html">Silk in Bloom</a></li>
					  <li><a href="LL.html">Life-like Flowers</a></li>
                      <li><a href="pj.html">Paper Jungle</a></li>
                      <li><a href="bird.html">Birds Soaring</a></li>
                      <li><a href="motor.html">On Track</a></li>
                      <li><a href="G.html">Geometric Play</a></li>
                      <li><a href="F.html">Paper Fashion</a></li>
                      
                     
                    </ul>
                  </li>
                  <!--<li><a href="services.html">Services</a></li>-->
                  <li><a href="about.html">About</a></li>
                  <li><a href="contact.html">Contact</a></li>
                  
                </ul>
              </nav>
            </div>
            
  
            <div class="col-6 col-xl-2 text-right" data-aos="fade-down">
              <div class="d-none d-xl-inline-block">
                <ul class="site-menu js-clone-nav ml-auto list-unstyled d-flex text-right mb-0" data-class="social">
                 
                 <li>
                    <a href="https://www.weibo.com/u/1039072702"  target=“_blank” class="pl-0 pr-3"><span class="icon-weibo"></span></a>
                  </li>
                   
                  <li>
                    <a href="https://www.youtube.com/channel/UCodwvjW5kVpB_TdMXmqnUgQ" target=“_blank” class="pl-3 pr-3"><span class="icon-youtube-play"></span></a>
                  </li>
                  
                  <li>
                    <a href="https://www.instagram.com/nanpaper_art/" target=“_blank” class="pl-3 pr-3"><span class="icon-instagram"></span></a>
                  </li>
                 
                  <li>
                    <a href="cn.index.html" class="pl-3 pr-3">中文</a>
                  </li>
                  
                 <!--
                      <li class="pl-3 pr-3" class="form-control mt-5" >	
                          <select id="langs"  >
                          <option value="en">English</option>
                          <option value="cn">简体中文</option>
                          </select>                
                      </li>
                   -->
                 
                </ul>
              </div>
  
              <div class="d-inline-block d-xl-none ml-md-0 mr-auto py-3" style="position: relative; top: 3px;"><a href="#" class="site-menu-toggle js-menu-toggle text-black"><span class="icon-menu h3"></span></a></div>
  
            </div>
  
          </div>
        </div>
        
      </header>
        `
    }
}

customElements.define('my-header', MyHeader)