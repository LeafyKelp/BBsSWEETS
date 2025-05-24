document.addEventListener('DOMContentLoaded', function(){
     const originalImage1 = document.querySelector('#cake1');
     const originalImage2 = document.querySelector('#cake2');
     const originalImage3 = document.querySelector('#cake3');
     const originalImage4 = document.querySelector('#cake4');
     const originalImage5 = document.querySelector('#cake5');
     const originalImage6 = document.querySelector('#cake6');
     const originalImage7 = document.querySelector('#cake7');
     const originalImage8 = document.querySelector('#cake8');
     const overlay = document.querySelector('#overlay');
     const copiedImage = document.querySelector('#copiedImage');

    originalImage1.addEventListener('click', () => {
    copiedImage.src = originalImage1.src;
    overlay.style.display = 'flex';
    });

    originalImage2.addEventListener('click', () => {
    copiedImage.src = originalImage2.src;
    overlay.style.display = 'flex';
    });

    originalImage3.addEventListener('click', () => {
    copiedImage.src = originalImage3.src;
    overlay.style.display = 'flex';
    });

    originalImage4.addEventListener('click', () => {
    copiedImage.src = originalImage4.src;
    overlay.style.display = 'flex';
    });

    originalImage5.addEventListener('click', () => {
    copiedImage.src = originalImage5.src;
    overlay.style.display = 'flex';
    });

    originalImage6.addEventListener('click', () => {
    copiedImage.src = originalImage6.src;
    overlay.style.display = 'flex';
    });

    originalImage7.addEventListener('click', () => {
    copiedImage.src = originalImage7.src;
    overlay.style.display = 'flex';
    });

    originalImage8.addEventListener('click', () => {
    copiedImage.src = originalImage8.src;
    overlay.style.display = 'flex';
    });

     overlay.addEventListener('click', () => {
     overlay.style.display = 'none';
  });

  const box1 = document.getElementById('c1');
  const box2 = document.getElementById('c2');
  const box3 = document.getElementById('c3');
  const box4 = document.getElementById('c4');
  const box5 = document.getElementById('c5');
  const box6 = document.getElementById('c6');
  const box7 = document.getElementById('c7');
  const box8 = document.getElementById('c8');

  const OgCBW = 270;
  const OgCBH = 300;

  const HCBW = 290;
  const HCBH = 320;
  // cquare1
  box1.addEventListener('mouseenter', function() {
    box1.style.width = HCBW + 'px';
    box1.style.height = HCBH + 'px';
  });

  box1.addEventListener('mouseleave', function() {
    box1.style.width = OgCBW + 'px';
    box1.style.height = OgCBH + 'px';
  });
  // cquare2
  box2.addEventListener('mouseenter', function() {
    box2.style.width = HCBW + 'px';
    box2.style.height = HCBH + 'px';
  });

  box2.addEventListener('mouseleave', function() {
    box2.style.width = OgCBW + 'px';
    box2.style.height = OgCBH + 'px';
  });
  // cquare3
  box3.addEventListener('mouseenter', function() {
    box3.style.width = HCBW + 'px';
    box3.style.height = HCBH + 'px';
  });

  box3.addEventListener('mouseleave', function() {
    box3.style.width = OgCBW + 'px';
    box3.style.height = OgCBH + 'px';
  });
  // cquare4
  box4.addEventListener('mouseenter', function() {
    box4.style.width = HCBW + 'px';
    box4.style.height = HCBH + 'px';
  });

  box4.addEventListener('mouseleave', function() {
    box4.style.width = OgCBW + 'px';
    box4.style.height = OgCBH + 'px';
  });
  // cquare5
  box5.addEventListener('mouseenter', function() {
    box5.style.width = HCBW + 'px';
    box5.style.height = HCBH + 'px';
  });

  box5.addEventListener('mouseleave', function() {
    box5.style.width = OgCBW + 'px';
    box5.style.height = OgCBH + 'px';
  });
  // cquare6
  box6.addEventListener('mouseenter', function() {
    box6.style.width = HCBW + 'px';
    box6.style.height = HCBH + 'px';
  });

  box6.addEventListener('mouseleave', function() {
    box6.style.width = OgCBW + 'px';
    box6.style.height = OgCBH + 'px';
  });
  // cquare7
  box7.addEventListener('mouseenter', function() {
    box7.style.width = HCBW + 'px';
    box7.style.height = HCBH + 'px';
  });

  box7.addEventListener('mouseleave', function() {
    box7.style.width = OgCBW + 'px';
    box7.style.height = OgCBH + 'px';
  });
  // cquare8
  box8.addEventListener('mouseenter', function() {
    box8.style.width = HCBW + 'px';
    box8.style.height = HCBH + 'px';
  });

  box8.addEventListener('mouseleave', function() {
    box8.style.width = OgCBW + 'px';
    box8.style.height = OgCBH + 'px';
  });

});
