
  function openChat() {
    document.getElementById("chatPopup").style.display = "block";
  }

  function closeChat() {
    document.getElementById("chatPopup").style.display = "none";
  }

  const sendButton = document.getElementById('sendButton');
  const chatInput = document.getElementById('chatInput');
  const chatMessages = document.getElementById('chatMessages');
  
  sendButton.addEventListener('click', () => {
    const message = chatInput.value;
    if (message.trim() !== '') {
      chatMessages.innerHTML += "<p>You: " + message + "</p>";
      chatInput.value = '';
      simulateVolunteerResponse();
    }
  }); 

  function simulateVolunteerResponse() {
    setTimeout(function() {
      chatMessages.innerHTML += "<p>Volunteer: Thank you for reaching out! One of our agents will be online as soon as possible to help.Thank you for waiting.</p><br>";
    }, 1000);
  }

  document.querySelector('.phone-link').addEventListener('click', function() {
    var phoneNumber = '1564'; 
    window.location.href = 'tel:' + phoneNumber;
  });
  

  var slides = document.querySelectorAll('.slide');
  var currentSlide = 0;
  
  function showSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].className = 'slide active';
  }
  
  setInterval(showSlide, 5000);


  function leftScroll() {
    const left = document.querySelector(".scroll-images");
    left.scrollBy(200, 0);
  }
  function rightScroll() {
    const right = document.querySelector(".scroll-images");
    right.scrollBy(-200, 0);
  }