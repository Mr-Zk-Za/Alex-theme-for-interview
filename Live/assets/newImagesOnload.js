      function updateHeroImage() {

// Fetch a new image from Unsplash API
        fetch(`https://api.unsplash.com/photos/random?client_id=Tbj5uLS6sm3RiZvPXixMq_WrKGtPmi6ILIbIiW5F9as`).then(apiData => apiData.json()).then(filteredAPI => {

// Create a new image element
          let newImg = new Image();
          newImg.src = filteredAPI.urls.regular;
          newImg.srcset = filteredAPI.urls.regular;
          // newImg.classList.add("fade-in");

// Replace the existing image element with the new one
          let mediaWrapper = document.querySelector('.media-wrapper-container');
          mediaWrapper.innerHTML = "";
          mediaWrapper.appendChild(newImg);

// Wait for image to load
          newImg.onload = function() {

// Remove the hidden class from the container
            mediaWrapper.classList.remove("hidden");

// Show the new image with fade-in effect
            newImg.style.animation = "fadein 1s";
            newImg.style.display = "block";
          }
        }).catch(error => console.log(error));
      }

      window.addEventListener("load", updateHeroImage);