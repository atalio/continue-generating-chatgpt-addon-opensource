/* Version: 2.3 |
-----------------
Author: @criskkky
Website: https://criskkky.carrd.co/
Extension URL: https://addons.mozilla.org/es/firefox/addon/continuegenerating-chatgpt/

Please rate 5 stars if it's useful <3
*/

(function () {
  const startUp = 1;
  const body = document.body;

  const iconURL = "https://raw.githubusercontent.com/criskkky/continue-generating-chatgpt-addon-opensource/main/src/rgpt.svg";

  function showNotification() {
    const notification = document.createElement("div");
    const iconLink = document.createElement("a");
    const icon = document.createElement("img");
    icon.src = iconURL;
    icon.style.cssText = "width: 30px; height: 30px";
    iconLink.href = "https://addons.mozilla.org/es/firefox/addon/continuegenerating-chatgpt/";
    iconLink.target = "_blank";
    iconLink.title = "Continue Generating Auto-Clicker";
    iconLink.appendChild(icon);
    notification.appendChild(iconLink);

    notification.style.cssText = "position: fixed; top: 0px; right: 5px; align-items: center; padding: 10px; z-index: 9999;";
    body.appendChild(notification);

    notification.animate(
      [
        { opacity: 1, transform: 'translateY(-60px)'},
        { opacity: 1, transform: 'translateY(0)'},
      ],
      { duration: 600, easing: "ease-in-out" }
    ).onfinish = () => {
      icon.animate(
        [
          { transform: 'rotate(0deg)' },
          { transform: 'rotate(-360deg)' },
        ],
        { duration: 500, easing: "linear", iterations: Infinity }
      );
    };

    setTimeout(() => {
      notification.animate(
        [
          { opacity: 1, transform: 'translateY(0) rotate(-360deg)' },
          { opacity: 1, transform: 'translateY(-60px) rotate(-360deg)' },
        ],
        { duration: 1000, easing: "ease-in-out" }
      ).onfinish = () => {
        notification.remove();
      };
    }, 2000);
  }

  function clickContinueButton() {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes && mutation.addedNodes.length > 0) {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE && node.innerText.includes("Continue generating")) {
              node.click();
              if (startUp) {
                showNotification();
              }
            }
          });
        }
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });
  }

  if (startUp) {
    showNotification();
  }

  clickContinueButton();
})();