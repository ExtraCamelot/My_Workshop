window.addEventListener('load', function(){

	new Slider('.gallery-1');
	let slider2 = new Slider('.gallery-2');

	setInterval(function(){
		slider2.next();
	}, 3000);
});

class Slider{
	constructor(selector){
		this.root = document.querySelector(selector);
		this.btnPrev = this.root.querySelector('.buttons .prev');
		this.btnNext = this.root.querySelector('.buttons .next');
	
		this.images = this.root.querySelectorAll('.photos img');
		this.i = 0;
		this.animated = false;
	
		this.btnPrev.addEventListener('click', () => { this.prev() });
		this.btnNext.addEventListener('click', () => { this.next() });
	}

	prev(){
		if(!this.animated){
			this.animated = true;
			let imgHide = this.images[this.i];
		
			this.i--;

			if(this.i < 0){
				this.i = this.images.length - 1;
			}

			imgHide.animate([
				{ opacity: 1, transform: 'translateX(0)' }, 
				{ opacity: 0, transform: 'translateX(100%)' }
			], 
				{ duration: 500 }
			);
			let animate = this.images[this.i].animate([
				{ opacity: 1, transform: 'translateX(-100%)' }, 
				{ opacity: 1, transform: 'translateX(0)' }
			], 
				{ duration: 500 }
			);

			animate.addEventListener('finish', () => {
				imgHide.classList.remove('showed');
				this.animated = false;
			});
			this.images[this.i].classList.add('showed');
        }

	}

	next(){
		if(!this.animated){
			this.animated = true;
			let imgHide = this.images[this.i];
			this.i++;
	
			if(this.i >= this.images.length){
				this.i = 0;
			}
	
			imgHide.animate([
				{ opacity: 1, transform: 'translateX(0)' }, 
				{ opacity: 0, transform: 'translateX(-100%)' }
			], 
				{ duration: 500 }
			);
			let animate = this.images[this.i].animate([
				{ opacity: 1, transform: 'translateX(100%)' }, 
				{ opacity: 1, transform: 'translateX(0)' }
			], 
				{ duration: 500 }
			);
	
			animate.addEventListener('finish', () => {
				imgHide.classList.remove('showed');
				this.animated = false;
			});
			this.images[this.i].classList.add('showed');
        }
	}
}