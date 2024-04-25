//конвертируем секунды в формат HH:MM:SS, вместо :, в totalTime можно ставить любое разделение, которое нужно.
function converterSeconds(sec) {
   let hours = Math.floor(sec / 60 / 60);
   let minutes = Math.floor(sec / 60) - hours * 60;
   let seconds = sec % 60;

   let totalTime = ``;

   if (hours >= 1) {
      totalTime = `${hours}:${minutes}:${seconds}`;
   } else {
      totalTime = `${minutes}:${seconds}`;
   }

   return totalTime;
}

// subscribe @https://t.me/tipo_it
