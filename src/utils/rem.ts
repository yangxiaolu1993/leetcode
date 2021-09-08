function setRem() {
    const docEl = document.documentElement;
    const dpr = window.devicePixelRatio || 1;
  
    // set 1rem = viewWidth / 10
    function setRemUnit() {
      const rem = docEl.clientWidth / 10;
      docEl.style.fontSize = rem + 'px';
    }
  
    setRemUnit();
  
    // reset rem unit on page resize
    window.addEventListener('resize', setRemUnit);
    window.addEventListener('pageshow', function (e) {
      if (e.persisted) {
        setRemUnit();
      }
    });
  
    // detect 0.5px supports
    if (dpr >= 2) {
      const fakeBody = document.createElement('body');
      const testElement = document.createElement('div');
      testElement.style.border = '.5px solid transparent';
      fakeBody.appendChild(testElement);
      docEl.appendChild(fakeBody);
      if (testElement.offsetHeight === 1) {
        docEl.classList.add('hairlines');
      }
      docEl.removeChild(fakeBody);
    }
  }
  // 初始化
  setRem();
  // 改变窗口大小时重新设置 rem
  window.onresize = function () {
    setRem();
  };
  