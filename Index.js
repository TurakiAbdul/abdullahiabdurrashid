
<!DOCTYPE html>
<html>
<head>
  <title>Abdullahi Abdurrashid Portfolio</title>
  <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet">
</head>

<body>
  <header>
    <h1>Abdullahi Abdurrashid</h1>
  </header>
  
  <nav>
    <a href="#about">About</a>
    <a href="#projects">Projects</a>
    <a href="#blog">Blog</a>
    <a href="#contact">Contact</a>
  </nav>
  
  <section id="about">
    <!-- About Me content -->
  </section>
  
  <section id="projects">
    <!-- Projects content -->
  </section>
  
  <section id="blog">
    <!-- Blog content -->
  </section>
  
  <section id="contact">
    <!-- Contact Me content -->
  </section>
  
  <script>
    // JavaScript code
    
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
    
    // Form submission
    document.getElementById('contact-form').addEventListener('submit', function (e) {
      e.preventDefault();
      
      // Get form values
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var message = document.getElementById('message').value;
      
      // Perform form validation
      
      // Perform form submission via AJAX or any other method
      
      // Display success message or error message
    });
  </script>
</body>
</html>
