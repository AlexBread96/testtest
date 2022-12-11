document.addEventListener(
  "DOMContentLoaded",
  function () {
    const $code = document.querySelector(".main__promo-text");
    const $copyBtn = document.querySelector(".main_promo-btn");
    const $leave = document.querySelectorAll(".leaves g");
    const $hand = document.querySelector(".hand");
    const $leavesWrapper = document.querySelector(".leaves-wrapper");
    const $promo = document.querySelector(".promo");

    const random = [1, -1];

    $copyBtn.addEventListener("click", copyCode);

    function copyCode() {
      $code.select();
      document.execCommand("copy");
    }

    $hand.addEventListener("click", (e) => {
      [...$leave].forEach((element, i) => {
        element.style.transform = `translate(${
          100 * random[Math.floor(Math.random() * random.length)]
        }% , ${70 * random[Math.floor(Math.random() * random.length)]}%)`;
      });
      $leavesWrapper.style.pointerEvents = "none";
      $hand.style.display = "none";
      $promo.style.opacity = 1;
    });
  },
  false
);
