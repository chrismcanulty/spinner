let timerStart = 100;
let spinShape = ["|   ", "/   ", "-   ", "\\   ", "|   ", "/   ", "-   ", "\\   ", "|   ", "\n"]

function spinner (spins) {
  for (let i = 0; i < spins.length; i++) {
    setTimeout(() => {process.stdout.write(`\r${spins[i]}`)
  }, timerStart)
  timerStart += 200;
  }
}

spinner(spinShape);
