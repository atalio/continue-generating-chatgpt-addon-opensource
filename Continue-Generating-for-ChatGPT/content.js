/*
Author: @criskkky
Website: https://criskkky.carrd.co/
Extension URL: https://addons.mozilla.org/es/firefox/addon/continuegenerating-chatgpt/

Please rate 5 stars if it's useful <3
*/

(function () {
  function clickContinueButton() {
    const buttons = document.querySelectorAll(".btn");

    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i].innerText.includes("Continue generating")) {
        buttons[i].click();
        break;
      }
    }
  }

  setInterval(clickContinueButton, 1000);
})();