function Excuse() {
	
	var myDog = ['Avoiding','Jumping','Matching','Blocking','Finding','Navigating','Singing','Dancing', 'Sorting', 'Collecting', 'Building', 'Protecting','Creating','Trading','Repairing','Catching', 'Launching'];
	
	var who = myDog[Math.round(Math.random()*(myDog.length-1))];
	
	document.getElementById('excuses').innerHTML = '<div><br>' + who +'<br></div>'
	
}