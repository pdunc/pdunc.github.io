var _MS_PER_DAY = 1000 * 60 * 60 * 24;

// a and b are js Date objects
function dateDiffInDays(a, b) {
	var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
	var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

	return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

time = document.getElementById('elapsed');

today = new Date();
then = new Date(2016, 8, 30); // September as month is 0 indexed

delta = dateDiffInDays(then, today);

time.textContent = delta;