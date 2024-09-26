export function animateMagneticSmiley() {
  const buttons = document.querySelectorAll(".magnetic-container");
  const time = "250";
  buttons.forEach((elm) => {
    elm.addEventListener("mousemove", move);
    elm.addEventListener("mouseenter", start);
    elm.addEventListener("mouseleave", end);
  });

  function getChilds($event) {
    return {
      background: $event.target.querySelector(".magnetic-background"),
      element: $event.target.querySelector(".magnetic-element"),
      text: $event.target.querySelector(".magnetic-text"),
    };
  }

  function move($event) {
    const x = $event.layerX - $event.target.clientWidth / 2;
    const y = $event.layerY - $event.target.clientHeight / 2;
    const { background, element, text } = getChilds($event);
  
    if (background && element && text) {
      background.style.transform = `translate(${x / 6}px, ${y / 6}px)`;
      element.style.transform = `translate(${x / 4}px, ${y / 4}px)`;
      text.style.transform = `translate(${x / 4}px, ${y / 4}px)`;
    }
  }
  
  function startAnimation($event) {
    const { background, element, text } = getChilds($event);
    const transition = `all ${time}ms ease`;
  
    if (background && element && text) {
      background.style.transition = transition;
      element.style.transition = transition;
      text.style.transition = transition;
    }
  }
  
  function endAnimation($event) {
    const { background, element, text } = getChilds($event);
  
    setTimeout(() => {
      if (background && element && text) {
        background.style.transition = "";
        element.style.transition = "";
        text.style.transition = "";
      }
    }, time);
  }
  
  function end($event) {
    const { background, element, text } = getChilds($event);
  
    startAnimation($event);
  
    if (background && element && text) {
      background.style.transform = `translate(0px, 0px)`;
      element.style.transform = `translate(0px, 0px)`;
      text.style.transform = `translate(0px, 0px)`;
    }
  
    endAnimation($event);
  }

  function start($event) {
    startAnimation($event);
    endAnimation($event);
  }

  function end($event) {
    const { background, element, text } = getChilds($event);

    startAnimation($event);

    background.style.transform = `translate(0px, 0px)`;
    element.style.transform = `translate(0px, 0px)`;
    text.style.transform = `translate(0px, 0px)`;

    endAnimation($event);
  }
}