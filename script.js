
			let h = document.querySelector('.h');
			let m = document.querySelector('.m');
			let s = document.querySelector('.s');
			
			function clock(){
				let data = new Date();
				let clockH = data.getHours()
			
				m.textContent = data.getMinutes() < 10 ? '0'+ data.getMinutes() : data.getMinutes();
				s.textContent = data.getSeconds() < 10 ? '0'+ data.getSeconds() : data.getSeconds() ;
				if(clockH > 12){
					clockH = clockH - 12
				}else{
					clockH = clockH
				}
				h.textContent = clockH ;
			}
			
			setInterval(clock , 1000 )
			
			
			
			