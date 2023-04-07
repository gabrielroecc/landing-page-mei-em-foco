const rightPart = document.querySelector('.right-part');

rightPart.addEventListener('scroll', function() {
  const steps = document.querySelectorAll('.step-by-step .step');

  steps.forEach(step => {
    const rect = step.getBoundingClientRect();
    const isVisible = (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );

    const number = step.querySelector('.number');
    const topDistance = rect.top;
    if (topDistance <= 150) { // altere o valor aqui para ajustar a distância
      number.style.backgroundColor = '#bfe5ff'; // muda a cor do número para vermelho
    } else {
      number.style.backgroundColor = ''; // volta a cor original do número
    }
  });
});
