import './style.css'

// Placeholder for video embed functionality
// In production, you would integrate with Wistia or your video platform

document.querySelector('#app').innerHTML = `
  <!-- Header -->
  <header class="header">
    <div class="container">
      <div class="header-text">For Coaches, Consultants, & Agency Owners</div>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <h1>Discover The Growth Engine That Scales Coaches & agencies to $100K/M in 90 Days</h1>
        <p class="subtitle">This is the system behind over $300M in client revenue and powering the growth of 4,000 businesses today</p>
      </div>

      <!-- Main Video -->
      <div class="video-wrapper">
        <wistia-player media-id="nk20cslou9" aspect="1.7777777777777777"></wistia-player>
      </div>

      <!-- CTA Box -->
      <div class="cta-box">
        <h2>Book A Free Agency Growth Session Where We Will:</h2>
        <ul class="cta-list">
          <li>Look at your current setup and map out exactly how the 4 systems would apply based on your niche, offer, and current bottlenecks.</li>
          <li>Show you exactly how to set this up into your business today so you see results quickly.</li>
        </ul>
        <div class="btn-center">
          <a href="#" class="btn">BOOK YOUR FREE SESSION</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Logo Slider -->
  <section class="logo-section">
    <div class="container">
      <h2>Trusted By Leading Companies</h2>
    </div>
    <div class="logo-slider">
      <div class="logo-track">
        <div class="logo-slide">
          <img src="https://via.placeholder.com/150x60/333/fff?text=Company+1" alt="Company 1">
          <img src="https://via.placeholder.com/150x60/333/fff?text=Company+2" alt="Company 2">
          <img src="https://via.placeholder.com/150x60/333/fff?text=Company+3" alt="Company 3">
          <img src="https://via.placeholder.com/150x60/333/fff?text=Company+4" alt="Company 4">
          <img src="https://via.placeholder.com/150x60/333/fff?text=Company+5" alt="Company 5">
          <img src="https://via.placeholder.com/150x60/333/fff?text=Company+6" alt="Company 6">
          <img src="https://via.placeholder.com/150x60/333/fff?text=Company+7" alt="Company 7">
          <img src="https://via.placeholder.com/150x60/333/fff?text=Company+8" alt="Company 8">
        </div>
        <div class="logo-slide" aria-hidden="true">
          <img src="https://via.placeholder.com/150x60/333/fff?text=Company+1" alt="Company 1">
          <img src="https://via.placeholder.com/150x60/333/fff?text=Company+2" alt="Company 2">
          <img src="https://via.placeholder.com/150x60/333/fff?text=Company+3" alt="Company 3">
          <img src="https://via.placeholder.com/150x60/333/fff?text=Company+4" alt="Company 4">
          <img src="https://via.placeholder.com/150x60/333/fff?text=Company+5" alt="Company 5">
          <img src="https://via.placeholder.com/150x60/333/fff?text=Company+6" alt="Company 6">
          <img src="https://via.placeholder.com/150x60/333/fff?text=Company+7" alt="Company 7">
          <img src="https://via.placeholder.com/150x60/333/fff?text=Company+8" alt="Company 8">
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials (Hidden) -->
  <section class="testimonials" style="display: none;">
    <div class="container">
      <div class="testimonial-grid">
        <!-- Testimonial 1 -->
        <div class="testimonial">
          <div class="testimonial-header">
            <h3>Luke Salela</h3>
            <div class="testimonial-stats">
              <div>New monthly revenue: $180,000</div>
              <div>New annual revenue: $2,160,000</div>
              <div>Timeframe: 20 months</div>
            </div>
          </div>
          <div class="video-thumbnail">
            <iframe 
              src="https://fast.wistia.net/embed/iframe/YOUR_VIDEO_ID?seo=false&videoFoam=true" 
              frameborder="0" 
              allow="autoplay; fullscreen" 
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <!-- Testimonial 2 -->
        <div class="testimonial">
          <div class="testimonial-header">
            <h3>Luke Kintzel</h3>
            <div class="testimonial-stats">
              <div>New monthly revenue: $120,000</div>
              <div>New annual revenue: $1,440,000</div>
              <div>Timeframe: 8 months</div>
            </div>
          </div>
          <div class="video-thumbnail">
            <iframe 
              src="https://fast.wistia.net/embed/iframe/YOUR_VIDEO_ID?seo=false&videoFoam=true" 
              frameborder="0" 
              allow="autoplay; fullscreen" 
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <!-- Testimonial 3 -->
        <div class="testimonial">
          <div class="testimonial-header">
            <h3>Otavio Zerbini</h3>
            <div class="testimonial-stats">
              <div>New monthly revenue: $110,000</div>
              <div>New annual revenue: $1,320,000</div>
              <div>Timeframe: 10 months</div>
            </div>
          </div>
          <div class="video-thumbnail">
            <iframe 
              src="https://fast.wistia.net/embed/iframe/YOUR_VIDEO_ID?seo=false&videoFoam=true" 
              frameborder="0" 
              allow="autoplay; fullscreen" 
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <!-- Testimonial 4 -->
        <div class="testimonial">
          <div class="testimonial-header">
            <h3>Thibault Doutriaux</h3>
            <div class="testimonial-stats">
              <div>New monthly revenue: $105,000</div>
              <div>New annual revenue: $1,260,000</div>
              <div>Timeframe: 14 months</div>
            </div>
          </div>
          <div class="video-thumbnail">
            <iframe 
              src="https://fast.wistia.net/embed/iframe/YOUR_VIDEO_ID?seo=false&videoFoam=true" 
              frameborder="0" 
              allow="autoplay; fullscreen" 
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <!-- Testimonial 5 -->
        <div class="testimonial">
          <div class="testimonial-header">
            <h3>Zander Woodford-Smith</h3>
            <div class="testimonial-stats">
              <div>New monthly revenue: $95,000</div>
              <div>New annual revenue: $1,140,000</div>
              <div>Timeframe: 18 months</div>
            </div>
          </div>
          <div class="video-thumbnail">
            <iframe 
              src="https://fast.wistia.net/embed/iframe/YOUR_VIDEO_ID?seo=false&videoFoam=true" 
              frameborder="0" 
              allow="autoplay; fullscreen" 
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <!-- Testimonial 6 -->
        <div class="testimonial">
          <div class="testimonial-header">
            <h3>Sam Urparni</h3>
            <div class="testimonial-stats">
              <div>New monthly revenue: $85,000</div>
              <div>New annual revenue: $1,020,000</div>
              <div>Timeframe: 14 months</div>
            </div>
          </div>
          <div class="video-thumbnail">
            <iframe 
              src="https://fast.wistia.net/embed/iframe/YOUR_VIDEO_ID?seo=false&videoFoam=true" 
              frameborder="0" 
              allow="autoplay; fullscreen" 
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>

      <!-- Mid CTA -->
      <div class="btn-center" style="margin-bottom: 60px;">
        <a href="#" class="btn">BOOK YOUR FREE SESSION</a>
      </div>

      <!-- More Testimonials -->
      <div class="testimonial-grid">
        <!-- Testimonial 7 -->
        <div class="testimonial">
          <div class="testimonial-header">
            <h3>Kewanee scaled her agency to $30K months in 6 months</h3>
          </div>
          <div class="video-thumbnail">
            <iframe 
              src="https://fast.wistia.net/embed/iframe/YOUR_VIDEO_ID?seo=false&videoFoam=true" 
              frameborder="0" 
              allow="autoplay; fullscreen" 
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <!-- Testimonial 8 -->
        <div class="testimonial">
          <div class="testimonial-header">
            <h3>Cameron scaled from $5K - $60K months at just 18 years old.</h3>
          </div>
          <div class="video-thumbnail">
            <iframe 
              src="https://fast.wistia.net/embed/iframe/YOUR_VIDEO_ID?seo=false&videoFoam=true" 
              frameborder="0" 
              allow="autoplay; fullscreen" 
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <!-- Testimonial 9 -->
        <div class="testimonial">
          <div class="testimonial-header">
            <h3>Martin added an extra $27K per month in MRR in 6 months.</h3>
          </div>
          <div class="video-thumbnail">
            <iframe 
              src="https://fast.wistia.net/embed/iframe/YOUR_VIDEO_ID?seo=false&videoFoam=true" 
              frameborder="0" 
              allow="autoplay; fullscreen" 
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <!-- Testimonial 10 -->
        <div class="testimonial">
          <div class="testimonial-header">
            <h3>In 3 months, Luca went from zero clients to $10K/weeks.</h3>
          </div>
          <div class="video-thumbnail">
            <iframe 
              src="https://fast.wistia.net/embed/iframe/YOUR_VIDEO_ID?seo=false&videoFoam=true" 
              frameborder="0" 
              allow="autoplay; fullscreen" 
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <!-- Testimonial 11 -->
        <div class="testimonial">
          <div class="testimonial-header">
            <h3>Jimmy signed a $120K client in the first week & doubled his MRR from $40K to $80K per month in just 6 months.</h3>
          </div>
          <div class="video-thumbnail">
            <iframe 
              src="https://fast.wistia.net/embed/iframe/YOUR_VIDEO_ID?seo=false&videoFoam=true" 
              frameborder="0" 
              allow="autoplay; fullscreen" 
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <!-- Testimonial 12 -->
        <div class="testimonial">
          <div class="testimonial-header">
            <h3>Ethan scaled from a freelancer making $2K per month to building a team & scaling towards $100K months.</h3>
          </div>
          <div class="video-thumbnail">
            <iframe 
              src="https://fast.wistia.net/embed/iframe/YOUR_VIDEO_ID?seo=false&videoFoam=true" 
              frameborder="0" 
              allow="autoplay; fullscreen" 
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>

      <!-- Final CTA -->
      <div class="btn-center" style="margin-top: 60px;">
        <a href="#" class="btn">BOOK YOUR FREE SESSION</a>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-copyright">©2025 Imperium Labs LTD</div>
        <div class="footer-disclaimer">
          <p>This website is not part of the YouTube, Google, or Facebook website; Google Inc or Facebook Inc.</p>
          <p>Also, this website is NOT endorsed by YouTube, Google or Facebook in any way. FACEBOOK is a trademark of FACEBOOK Inc. YOUTUBE is a trademark of GOOGLE Inc.</p>
        </div>
        <div class="footer-links">
          <a href="#">Privacy Policy</a>
          <span>-</span>
          <a href="#">Terms & Conditions</a>
          <span>-</span>
          <a href="#">Earnings Disclaimer</a>
          <span>-</span>
          <a href="#">Data Protection</a>
        </div>
      </div>
    </div>
    <div class="footer-divider"></div>
  </footer>
`
