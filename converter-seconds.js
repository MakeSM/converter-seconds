//конвертируем секунды в формат HH:MM:SS, вместо :, в totalTime можно ставить любое разделение, которое нужно.
function converterSeconds(sec) {
   let hours = Math.floor(sec / 60 / 60);
   let minutes = Math.floor(sec / 60) - hours * 60;
   let seconds = sec % 60;

   let totalTime = ``;

   //формат без 0 в hours
   if (hours >= 1) {
      totalTime = `${hours}:${minutes}:${seconds}`;
   } else {
      totalTime = `${minutes}:${seconds}`;
   }

   //формат вывода с 0 в hours и в minutes, seconds, если они однозначные.
   /* 	totalTime = [
		hours.toString().padStart(2, '0'),
		minutes.toString().padStart(2, '0'),
		seconds.toString().padStart(2, '0'),
	].join(':'); */

   return totalTime;
}

// subscribe @https://t.me/tipo_it
