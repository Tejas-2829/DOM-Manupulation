function greetUser() {
      const name = document.getElementById('nameInput').value.trim();
      const greeting = document.getElementById('greeting');
      if (name) {
        greeting.textContent = `Hello, ${name}`;
      } else {
        greeting.textContent = 'Hello';
      }
    }

    function setupBox(boxId, color) {
      const box = document.getElementById(boxId);
      box.addEventListener('click', () => {
        box.style.backgroundColor = color.toLowerCase();
        document.getElementById('greeting').textContent = `You clicked ${color}`;
      });
    }

    setupBox('redBox', 'Red');
    setupBox('blueBox', 'Blue');
    setupBox('greenBox', 'Green');
    setupBox('yellowBox', 'Yellow');