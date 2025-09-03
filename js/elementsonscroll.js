// IntersectionObserver Is Js Library For Animation.
const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) 
		{
			entry.target.classList.add('show');
		}
		else
		{
			entry.target.classList.remove('show');

		}
	});
	
});


const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));




const observer2 = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) 
		{
			entry.target.classList.add('show1');
		}
		else
		{
			entry.target.classList.remove('show1');

		}
	});
	
});


const hiddenElements2 = document.querySelectorAll(".hidden1");
hiddenElements2.forEach((el) => observer2.observe(el));