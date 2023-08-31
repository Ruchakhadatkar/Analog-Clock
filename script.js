const hour = document.querySelector(".hour");
    const minute = document.querySelector(".minute");
    const second = document.querySelector(".second");

    setInterval(() => {
      let date = new Date();
      let h = date.getHours();
      let m = date.getMinutes();
      let s = date.getSeconds();

      console.log(h, m, s);

      let hr = (h % 12) * 30 + m / 2 + 90;
      let min = m * 6 + 90;
      let sec = s * 6 + 90;

      hour.style.transform = `rotate(${hr}deg)`;
      minute.style.transform = `rotate(${min}deg)`;
      second.style.transform = `rotate(${sec}deg)`;
    }, 1000);