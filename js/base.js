window.onload=function(){
	var dade3=document.getElementsByClassName('dade3');
	/*console.log('dade3');*/
	for(var i=0;i<dade3.length;i++){
		/*alert('1');*/
		if(Math.random()>0.8){
			dade3[i].textContent='1';
			
			}
		else{
			
			dade3[i].textContent='0';
			
			}
		
		dade3[i].onclick=function(){
			if(this.textContent=='1'){
				this.style.background='white';
				alert('bow!!');
				
				}
				else{
				this.style.background='#c40000';
				
				}
			
			}
		
		
		}
	
	
	
	
	
	}