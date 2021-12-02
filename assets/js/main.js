/**
* Template Name: Day - v4.3.0
* Template URL: https://bootstrapmade.com/day-multipurpose-html-template-for-free/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }


      // typeWriter


  const typeWriter = selector => {
    const el = document.querySelector(selector)
    const text = el.innerHTML
  
    ;(function _type(i = 0) {
      if (i === text.length) return
  
      el.innerHTML =
        text.substring(0, i + 1) + '<span aria-hidden="true"></span>'
      setTimeout(() => _type(i + 1), 100)
    })()
  }
  
  typeWriter(".js-type-writer")
  


  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 16
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Header fixed top on scroll
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    let headerOffset = selectHeader.offsetTop
    let nextElement = selectHeader.nextElementSibling
    const headerFixed = () => {
      if ((headerOffset - window.scrollY) <= 0) {
        selectHeader.classList.add('fixed-top')
        nextElement.classList.add('scrolled-offset')
      } else {
        selectHeader.classList.remove('fixed-top')
        nextElement.classList.remove('scrolled-offset')
      }
    }
    window.addEventListener('load', headerFixed)
    onscroll(document, headerFixed)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})()




            // New Form




            
    //Contact Us
    $("#submit_btn").click(function () {

      //disable submit button on click
      $("#submit_btn").attr("disabled", "disabled");
      $("#submit_btn span").text('Sending');
      $("#submit_btn i").removeClass('d-none');

      var user_name = $('input[name=first_name]').val() + ' ' + $('input[name=last_name]').val();
      var user_email = $('input[name=email]').val();
      var user_message = $('textarea[name=message]').val();

      //simple validation at client's end
      var post_data, output;
      var proceed = true;
      if (user_name == "") {
          proceed = false;
      }
      if (user_email == "") {
          proceed = false;
      }
      // if (user_phone == "") {
      //proceed = false;
      // }

      if (user_message == "") {
          proceed = false;
      }
      //everything looks good! proceed...
      if (proceed) {

          //data to be sent to server
          post_data = {
              'userName': user_name,
              'userEmail': user_email,
              'userPhone': user_phone,
              'userMessage': user_message
          };

          //Ajax post data to server
          $.post('contact.php', post_data, function (response) {

              //load json data from server and output message
              if (response.type == 'error') {
                  output = '<div class="alert-danger" style="padding:10px; margin-bottom:30px;">' + response.text + '</div>';
              } else {
                  output = '<div class="alert-success" style="padding:10px; margin-bottom:30px;">' + response.text + '</div>';

                  //reset values in all input fields
                  $('.contact-form input').val('');
                  $('.contact-form textarea').val('');
              }

              $("#result").hide().html(output).slideDown();

              // enable submit button on action done
              $("#submit_btn").removeAttr("disabled");
              $("#submit_btn span").text('Contact Now');
              $("#submit_btn i").addClass('d-none');

          }, 'json');

      }
      else {
          output = '<div class="alert-danger" style="padding:10px; margin-bottom:30px;">Please provide the missing fields.</div>';
          $("#result").hide().html(output).slideDown();

          // enable submit button on action done
          $("#submit_btn").removeAttr("disabled");
          $("#submit_btn span").text('Contact Now');
          $("#submit_btn i").addClass('d-none');
      }

  });
