document.addEventListener("DOMContentLoaded", () => {
  const fidget1 = document.getElementById("fidget1");
  const fidget2 = document.getElementById("fidget2");

  function addSpinListener(fidget, containerId) {
    fidget.addEventListener("click", () => {
      const rotatingContainer = document.getElementById(containerId);

      // Remove the spin class to reset the animation
      rotatingContainer.classList.remove("spin");

      // Trigger reflow to restart the animation
      void rotatingContainer.offsetWidth;

      // Add the spin class to start the animation
      rotatingContainer.classList.add("spin");

      // Remove the spin class after 7 seconds to allow for subsequent spins
      setTimeout(() => {
        rotatingContainer.classList.remove("spin");
      }, 11000); // 7 seconds
    });
  }

  addSpinListener(fidget1, "fidget1");
  addSpinListener(fidget2, "triangular");
});
