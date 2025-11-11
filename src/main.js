import './style.css'

document.querySelector('#app').innerHTML = `
  <!-- Header -->
  <header class="header">
    <div class="container">
      <div class="header-content">
        <div class="header-text">For Coaches, Consultants, & Info-Product Coaches</div>
        <a href="/application.html" class="header-btn">Apply Now</a>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <h1>Discover The Growth Engine That Scales Coaches & Info-Products to $100K/M in 90 Days</h1>
        <p class="subtitle">This is the same system behind over $150M+ in client revenue.</p>
      </div>

      <!-- Main Video -->
      <div class="video-wrapper">
        <wistia-player media-id="iwn51pnx1c" aspect="1.7777777777777777"></wistia-player>
      </div>

      <!-- CTA Box -->
      <div class="cta-box">
        <h2>HOW WE DO IT:</h2>
        <ul class="cta-list">
          <li>First, we thoroughly analyze your business, diving into key metrics like Conversion Rate Optimization, Average Order Values, Client LTV, Cost Per Acquisition, and your overall funnel and lead capture strategy.</li>
          <li>Secondly, we take this information and draft a plan tailored to your business and explain what adjustments your team needs & how to acquire your first customer with this new offer by making sure your brand is positioned to become a 1-of-1 authority in your market to attract more of your ideal clients.</li>
          <li>Thirdly, we reveal the exact methods we plan to employ to increase to lead acquisition over the next 12 months.</li>
          <li>Lastly, we provide you with the necessary guidance and fulfillment systems to reach $1m+/mo and hit target KPI.</li>
        </ul>
        <p class="cta-footer">If you want to take your business to the next level or simply discuss how your lead acquisition channels and team structure are performing, let's connect and see how we may be able to help.</p>
        <div class="btn-center">
          <a href="/application.html" class="btn">BOOK YOUR FREE SESSION</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Client Showcase -->
  <section class="clients-section">
    <div class="container">
      <h2>Trusted By Leading Companies</h2>
      <div class="clients-grid">
          <a href="https://theaipartner.io" target="_blank" rel="noopener" class="client-card">
            <div class="client-logo">
              <img src="/logos/theaipartner.png" alt="The AI Partner">
            </div>
          </a>
          <a href="https://cliniclaunchacademy.com" target="_blank" rel="noopener" class="client-card">
            <div class="client-logo">
              <img src="/logos/cla-logo.png" alt="Clinic Launch Academy">
            </div>
          </a>
          <a href="https://www.netrevenue.io/" target="_blank" rel="noopener" class="client-card">
            <div class="client-logo">
              <img src="/logos/netrevenue.svg" alt="Net Revenue">
            </div>
          </a>
          <a href="https://growacquisition.com/" target="_blank" rel="noopener" class="client-card">
            <div class="client-logo">
              <img src="/logos/growthaquisition.png" alt="GrowAcquisition">
            </div>
          </a>
          <a href="https://vibecodingos.com" target="_blank" rel="noopener" class="client-card">
            <div class="client-logo">
              <img src="/logos/vibecodingos.png" alt="VibeCodingOS">
            </div>
          </a>
          <a href="https://cloudhire.ai" target="_blank" rel="noopener" class="client-card">
            <div class="client-logo">
              <img src="/logos/cloudhire.png" alt="CloudHire">
            </div>
          </a>
          <a href="https://everwellusa.com" target="_blank" rel="noopener" class="client-card">
            <div class="client-logo">
              <img src="/logos/everwell.png" alt="Everwell">
            </div>
          </a>
          <a href="https://www.thepeptidemarket.com/" target="_blank" rel="noopener" class="client-card">
            <div class="client-logo">
              <img src="/logos/thepeptidemarket.png" alt="The Peptide Market">
            </div>
          </a>
          <a href="https://www.hvactoequity.com/" target="_blank" rel="noopener" class="client-card">
            <div class="client-logo">
              <img src="/logos/hvac.svg" alt="HVAC2Equity">
            </div>
          </a>
          <a href="https://peptipharmarx.com" target="_blank" rel="noopener" class="client-card">
            <div class="client-logo">
              <img src="/logos/peptipharma.png" alt="PeptiPharmaRx">
            </div>
          </a>
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
        <a href="/application.html" class="btn">BOOK YOUR FREE SESSION</a>
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
        <a href="/application.html" class="btn">BOOK YOUR FREE SESSION</a>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-logo">
          <img src="/logos/bbd-white.png" alt="Built By Design" />
        </div>
        <div class="footer-copyright">©2025 Built By Design. All rights reserved.</div>
        <div class="footer-disclaimer">
          <p>This website is not part of the YouTube, Google, or Facebook website; Google Inc or Facebook Inc.</p>
          <p>Also, this website is NOT endorsed by YouTube, Google or Facebook in any way. FACEBOOK is a trademark of FACEBOOK Inc. YOUTUBE is a trademark of GOOGLE Inc.</p>
        </div>
        <div class="footer-links">
          <a href="https://docs.google.com/document/d/1lotOxYoH52ZCpvMiRSH_ob995M7P_-8QmQLaCQEUR3I/edit?tab=t.0" target="_blank" rel="noopener">Privacy Policy</a>
          <span>-</span>
          <a href="https://docs.google.com/document/d/1K5m9ckVZD-MvrzYhaCTk_P5-Ufr1ICp25UF6VWDyALA/edit?tab=t.0" target="_blank" rel="noopener">Terms & Conditions</a>
        </div>
      </div>
    </div>
    <div class="footer-divider"></div>
  </footer>
`

// Track CTA button clicks
const ctaButtons = document.querySelectorAll('.btn');
ctaButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (typeof fbq !== 'undefined') {
      fbq('track', 'InitiateCheckout');
    }
  });
});
