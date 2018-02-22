function produceDrivingRange(max_distance){
	return function(start, stop){
		const blocks = start.split('th')[0] > stop.split('th')[0] ? start.split("th")[0] - stop.split("th")[0] : stop.split("th")[0] - start.split("th")[0]
		return max_distance - blocks >= 0 ? `within range by ${max_distance - blocks}` : `${blocks - max_distance} blocks out of range`
	}
}

function produceTipCalculator(tip_percentage){
	return function(fare){
		return fare * tip_percentage
	}
}