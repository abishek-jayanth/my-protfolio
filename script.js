const menu = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const contactForm = document.querySelector("#contact-form");
const result = document.querySelector("#result");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Close navbar when scrolling
window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// Close navbar when a navigation link is clicked
const navLinks = document.querySelectorAll(".navbar a");
navLinks.forEach((link) => {
  link.onclick = () => {
    menu.classList.remove("bx-x");
    navbar.classList.remove("active");
  };
});

const typed = new Typed(".multiple-text", {
  strings: ["Software Engineer", "Frontend Developer", "Mobile Engineer"],
  typeSpeed: 50,
  backSpeed: 80,
  backDelay: 1200,
  loop: true,
});

const handleFormResult = (message, isFailure = false) => {
  if (!isFailure) {
    contactForm.reset();
  }

  // Remove any existing classes
  result.classList.remove("loading", "success", "error");

  // Add appropriate class based on result type
  if (isFailure) {
    result.classList.add("error");
  } else {
    result.classList.add("success");
  }

  result.innerHTML = message || "Form submitted successfully";
  result.classList.add("show");

  // Hide the result after 3 seconds with smooth animation
  setTimeout(() => {
    result.classList.remove("show");
  }, 5000);
};

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(contactForm);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        handleFormResult();
      } else {
        handleFormResult(json.message, true);
        console.log(response);
      }
    })
    .catch((error) => {
      handleFormResult("Something went wrong!", true);
      console.log(error);
    });
});
