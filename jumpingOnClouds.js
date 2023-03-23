function jumpingOnClouds(c, k) {
	var energy = 100
	for(let i = 0; i < c.length; i++) {
		var next = (i + k) % c.length
		var jumpedTo = c[next]
		if(jumpedTo === 1) {
			energy = energy - 1 - 2
		} else {
			energy = energy - 1
		}
    i = next
    i--
    if(next === 0) break;
	}
  return energy
}
// console.log(jumpingOnClouds([0,0,1,0,0,1,1,0], 2))