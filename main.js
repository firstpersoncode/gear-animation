//object structure
function animateRotate(){
	this.d = 0;
	this.animate = function animate(el,dir) {
		var elem = document.getElementsByClassName(el);		
		var me = this;		

		//set the direction
		if(dir === "ccw"){
			this.d--;
		}
		else {
			this.d++;
		}

		//access all elements with same class
		for (var i = 0; i < elem.length;i++){			
			elem[i].style.WebkitTransform = "rotate("+this.d+"deg)";
			elem[i].style.MozTransform = "rotate("+this.d+"deg)";
			elem[i].style.MsTransform = "rotate("+this.d+"deg)";
			elem[i].style.OTransform = "rotate("+this.d+"deg)";
			elem[i].style.transform = "rotate("+this.d+"deg)";
		}		

		if(this.d > 359){
			this.d = 1;
		} else if(this.d < -359){
			this.d = -1;
		}

		setTimeout(function(){
			me.animate(el,dir);
		},20);
	}
}

//init the rotate animation
var objectRotateClock = new animateRotate(),objectRotateCounter = new animateRotate();

objectRotateClock.animate("clock-wise","cw");objectRotateCounter.animate("counter-clock-wise","ccw");