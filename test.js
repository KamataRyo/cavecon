for (var i = 0; i < 100 ; i++){
	console.log(i);
	if (Math.round(i / 2) === i / 2) {
		(function(){
			console.log(i)
		})();
	};
}