class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
 <header class="site-navbar py-3" role="banner">

      <div class="container-fluid">
        <div class="row align-items-center">
          
          <div class="col-6 col-xl-2 col-md-2 col-lg-2 col-sm-1" data-aos="fade-down">
            
            <h1 class="mb-0"><a href="cn.index.html" class="text-black "><img src="image/logo1.png" width="80%" height="auto" ></a></h1>
          </div>
          
          <div class="col-10 col-md-8 d-none d-xl-block" data-aos="fade-down">
            <nav class="site-navigation position-relative text-right text-lg-center" role="navigation">

              <ul class="site-menu js-clone-nav mx-auto d-none d-lg-block">
                <li class="active"><a href="cn.index.html"><span data-trans-h>首页</span></a></li>
                <li class="has-children">
                  <a>作品展廊</a>
                  <ul class="dropdown">
                 	<li><a href="cn_Chinese symbol.html">国潮纸艺</a></li>
                    <li><a href="cn.quilling.html">原创衍纸</a></li>
                  	<li><a href="cn.silk.html">真丝绽放</a></li>
                    <li><a href="cn.pj.html">纸艺丛林</a></li>
                    <li><a href="cn.bird.html">纸艺鸟类</a></li>
                    <li><a href="cn.motor.html">纸艺摩托</a></li>
                    <li><a href="cn.LL.html">仿真手工花</a></li>
                    <li><a href="cn.G.html">原创纸模</a></li>
                    <li><a href="cn.F.html">纸艺服饰</a></li>
                    
                   
                  </ul>
                </li>
                <!--<li><a href="services.html">Services</a></li>-->
                <li><a href="cn.about.html">关于我们</a></li>
                <li><a href="cn.contact.html">联系方式</a></li>
                
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
                  <a href="https://www.instagram.com/nanpaper_art/" target=“_blank” class="pl-3 pr-3"><span class="icon-instagram"></span></a>
                </li>
               
                 
                <li>
                  <a href="index.html"  class="pl-3 pr-3">English</a>
                </li>
               
               
               
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