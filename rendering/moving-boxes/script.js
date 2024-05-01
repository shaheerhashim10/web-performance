const { containerWidth, registerNextClick } = setup();

const elements = Array.from(document.querySelectorAll('.element'));

// Reading and Writing happening at the same time again and again caused reflows

/* registerNextClick(function (timestamp) {
  elements.forEach((element, index) => {
    const top = element.offsetTop;
    const nextPosition = +(
      ((Math.sin(top + timestamp / 1000) + 1) / 2) *
      containerWidth
    );
    element.style.transform = `translateX(${nextPosition}px)`;
  });
}); */

// Separing the Read and Write removed the Reflows

/* registerNextClick(function (timestamp) {
  const nextPositions = elements.map((element) => {
    const top = element.offsetTop;
    const nextPosition = +(
      ((Math.sin(top + timestamp / 1000) + 1) / 2) *
      containerWidth
    );
    return nextPosition;
  });

  elements.forEach((element, index) => {
    const nextPosition = nextPositions[index];
    element.style.transform = `translateX(${nextPosition}px)`;
  });
}); */

// requestAnimationFrame makes sure that read and writes do not happen at the same time but it is not optimal

/* registerNextClick(function (timestamp) {
  elements.forEach((element, index) => {
    const top = element.offsetTop;
    const nextPosition = +(
      ((Math.sin(top + timestamp / 1000) + 1) / 2) *
      containerWidth
    );

    requestAnimationFrame(() => {
      element.style.transform = `translateX(${nextPosition}px)`;
    });
  });
}); */

// Using FastDOM can solve this animation problem in which a lot of animation frames were being created
registerNextClick(function (timestamp) {
  elements.forEach((element, index) => {
    fastdom.measure(() => {
      const top = element.offsetTop;
      const nextPosition = +(
        ((Math.sin(top + timestamp / 1000) + 1) / 2) *
        containerWidth
      );

      fastdom.mutate(() => {
        element.style.transform = `translateX(${nextPosition}px)`;
      });
    });
  });
});
