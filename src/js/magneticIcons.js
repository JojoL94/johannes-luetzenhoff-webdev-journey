export function animateMagneticSmiley() {
  // Selektiere alle Elemente mit der Klasse "magnetic-container"
  const buttons = document.querySelectorAll(".magnetic-container");
  const time = "250"; // Dauer der Animation in Millisekunden

  // Füge jedem Button die erforderlichen Event-Listener hinzu
  buttons.forEach((elm) => {
    elm.addEventListener("mousemove", move);      // Bei Mausbewegung
    elm.addEventListener("mouseenter", start);    // Wenn die Maus den Bereich betritt
    elm.addEventListener("mouseleave", end);      // Wenn die Maus den Bereich verlässt
  });

  // Funktion zum Abrufen der Childelemente mit spezifischen Klassen
  function getChilds($event) {
    return {
      // Hole alle Hintergrundelemente
      background: Array.from($event.target.querySelectorAll(".magnetic-background")),
      // Hole alle magnetischen Elemente
      element: Array.from($event.target.querySelectorAll(".magnetic-element")),
      // Hole alle Textelemente
      text: Array.from($event.target.querySelectorAll(".magnetic-text")),
    };
  }

  // Funktion, die bei Mausbewegung ausgeführt wird
  function move($event) {
    // Berechne die X- und Y-Koordinaten relativ zur Mitte des Elements
    const x = $event.layerX - $event.target.clientWidth / 2;
    const y = $event.layerY - $event.target.clientHeight / 2;
    // Hole die relevanten Kindelemente
    const { background, element, text } = getChilds($event);

    // Wende die Transformation auf jedes Hintergrundelement an
    background.forEach((bg) => {
      bg.style.transform = `translate(${x / 6}px, ${y / 6}px)`;
    });
    // Wende die Transformation auf jedes magnetische Element an
    element.forEach((el) => {
      el.style.transform = `translate(${x / 4}px, ${y / 4}px)`;
    });
    // Wende die Transformation auf jedes Textelement an
    text.forEach((txt) => {
      txt.style.transform = `translate(${x / 4}px, ${y / 4}px)`;
    });
  }

  // Funktion zum Starten der Animation (setzt die Transition-Eigenschaften)
  function startAnimation($event) {
    const { background, element, text } = getChilds($event);
    const transition = `all ${time}ms ease`; // Definiere die Transition-Dauer und -Kurve

    // Setze die Transition-Eigenschaft für jedes Hintergrundelement
    background.forEach((bg) => {
      bg.style.transition = transition;
    });
    // Setze die Transition-Eigenschaft für jedes magnetische Element
    element.forEach((el) => {
      el.style.transition = transition;
    });
    // Setze die Transition-Eigenschaft für jedes Textelement
    text.forEach((txt) => {
      txt.style.transition = transition;
    });
  }

  // Funktion zum Beenden der Animation (entfernt die Transition-Eigenschaften)
  function endAnimation($event) {
    const { background, element, text } = getChilds($event);

    // Entferne die Transition-Eigenschaft nach Ablauf der definierten Zeit
    setTimeout(() => {
      background.forEach((bg) => {
        bg.style.transition = "";
      });
      element.forEach((el) => {
        el.style.transition = "";
      });
      text.forEach((txt) => {
        txt.style.transition = "";
      });
    }, time);
  }

  // Funktion, die ausgeführt wird, wenn die Maus den Bereich betritt
  function start($event) {
    startAnimation($event);  // Starte die Animation
    endAnimation($event);    // Plane das Ende der Animation
  }

  // Funktion, die ausgeführt wird, wenn die Maus den Bereich verlässt
  function end($event) {
    const { background, element, text } = getChilds($event);

    startAnimation($event); // Starte die Animation

    // Setze die Transformationen aller Elemente zurück
    background.forEach((bg) => {
      bg.style.transform = `translate(0px, 0px)`;
    });
    element.forEach((el) => {
      el.style.transform = `translate(0px, 0px)`;
    });
    text.forEach((txt) => {
      txt.style.transform = `translate(0px, 0px)`;
    });

    endAnimation($event); // Beende die Animation
  }
}
