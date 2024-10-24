//alert("hello");

 function showSlideber(){
	 
	 const sidebar = document.querySelector('.slide_ber');
	 sidebar.style.display = "flex";
 }
 
 function closeSlideber(){
	 
	 const sidebar = document.querySelector('.slide_ber');
	 sidebar.style.display = "none ";
 }
 
 
 //animation effect none
 
 	//scroll nav fix
	//sticky funciton
	
	
	let nav = document.querySelector('.nav-position');
	
	window.addEventListener("scroll", function(){
		nav.classList.toggle("sticky", window.scrollY > 0);
	});
	
	//typenaimation
		
	const text  = document.querySelector(".sec-text");
	
	const textload = () => {
		setTimeout(() => {
			text.textContent = "Web Designer";
		},0);setTimeout(() => {
			text.textContent = " Content Creator";
		},4000);setTimeout(() => {
			text.textContent = " Graphic Desinar";
		},8000);setTimeout(() => {
			text.textContent = "Blogger";
		},12000);setTimeout(() => {
			text.textContent = " SEO Expert";
		},16000);
	}
	textload();
	setInterval(textload, 20000);
	
	
	//function scrolltopimg(){
		
	//	window.scrollTo(0.1);
		//alert("hello");
//	}*/


		//scroll Button
//	let byButon = getElementsByClassName("scroll-to-top-img");

	function scrolltopimg(){
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
		}
		// scroll perfect position section
	/*	function showSection(){
			document.body.scrollTop = 700;
			document.documentElement.scrollTop = 700;
		}// scroll perfect position section blog
		function showSectionService(){
			document.body.scrollTop = 500;
			document.documentElement.scrollTop = 500;
		}
		*/

	/*
		//scroll down animation all secttion
		const hiddenElements = documents.querySelectorAll(".blockAnitransform");
		hiddenElements.forEach(el) => observer.observer(el);
		
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			console.log(entry)
			if(entry.inIntersecting){
				entry.target.classList.add('showAnitransform');
			}else{
				entry.target.classList.remove('showAnitransform');
			}
		});
	});
	*/
	//copy code
	//	window.addEventListener("scroll", function(){
//		nav.classList.toggle("sticky", window.scrollY > 0);
//});
	/*
function showSection(){
	
		
	const scrollAdd = querySelector('.service-per');
		window.addEventListener("click", function (){
		scrollAdd.classList.toggle("addwidth", window.scrollY > 0);
	})
	
}*/


const navigationHeith = document.querySelector('.nav-position').offsetHeight;
//console.log(navigationHeith);

//console.log(document.documentElement);
document.documentElement.style.setProperty('--scroll-padding', navigationHeith -1 + "px");
