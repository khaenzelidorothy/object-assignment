// Create a User object with properties like name, stepsWalked (an array of daily steps), and a method totalSteps() 
// that calculates and returns the total number of steps walked. Add another method averageSteps() that returns the average steps per day.

//create object User, with properties name,stepsWalked
//create method totalSteps that calculates the total number of steps 
//iterate through the array of steps and add using reduce method
//create a method that calculates the average steps
//using the length divide the total number of steps with the length

const user ={
    name:'Dorothy',
    stepsWalked:[200,300,400,400,500,600],
    totalSteps:function(){ 
        let sum = this.stepsWalked.reduce((acc, num)=> acc+num, 0)
        return sum
    },
    averageSteps:function(){
        return (this.totalSteps())/(this.stepsWalked.length)
        
    }
}
console.log(user.totalSteps());
user.averageSteps();
console.log(user.averageSteps());

//  Create a Recipe constructor with name, ingredients (array), and cookTime in minutes. Add a method displayRecipe() 
// that logs the name and all ingredients in a readable list, and another method isQuickMeal() that returns true if cookTime is 30 minutes or less.

//create a recipe constructor with,name,ingredients and cooktime
//create a method displayRecipe that prints out the name and all ingredients
//create a method isquickmeal that checks the cooktime 
//if its less than 30 minutes we return true

function Recipe(name,ingredients,cookTime){
    this.name = name;
    this.ingredients = ingredients;
    this.cookTime = cookTime;
    this.displayRecipe = function(){
        return`${this.name}; ${this.ingredients}`;    
    }
    this.isQuickMeal = function(){
            return cookTime<=30
        }
    }
const recipe = new Recipe('Tea',['sugar','tealeaves','milk','coffee'],25);
console.log(recipe.displayRecipe());
recipe.isQuickMeal();
console.log(recipe.isQuickMeal());

// // Create a Car object with properties like model, mileage, and serviceHistory (an array of service dates). 
// // Add a method addService(date) to add a new service record, and lastServiceDate() to return the most recent service date.

//create an object car with properties model,mileage,servicehistory
//create a function that adds a new date to the array of servicehistory
//return the array 
//create a function that returns the most recent service date using the last index
 const car ={
    model:'suzuki',
    mileage: 3500,
    serviceHistory:['12th','15th','25th'],
    addService: function(date){
    this.serviceHistory.push(date);
    return this.serviceHistory
    },
    lastServiceDate:function(){
        return this.serviceHistory.at(-1);
    }
 }
 console.log(car.addService('13th'));
 console.log(car.lastServiceDate());



// //  Create a Playlist object with a property songs (an array of song titles). Add methods addSong(title) to add a song,
// //  removeSong(title) to delete one, and listSongs() to log all songs currently in the playlist.

//create an object with properties songs
//create a method addsong that adda a song to the array(push)
//create a method removesong
//remove one of the songs from the array(shift)

const playlist = {
    songs:['helplessly','aminata','nairobi','love yourself'],
    addSongs:function(song){
     this.songs.push(song);
     return this.songs;
    },
    removeSongs:function(){
    return this.songs.shift()
    },
    listSongs:function(){
        return this.songs  
    }
}

console.log(playlist.addSongs('return'));
console.log(playlist.removeSongs());
console.log(playlist.listSongs());

//Create a Course constructor with title, lessons (an array), and completedLessons (array). Add a method markComplete(lesson) 
// that adds the lesson to completedLessons, and a method getProgress() that returns a string like "3 out of 5 lessons completed".

//create a constructor course with properties title,lessons and completedlessons
//create a method that adds the leeson to the completedlessons if its completed
//using push to add the completed lesson
// create a method getprogress that prints out 

function Course(title,lessons,completedLessons){
    this.title = title
    this.lessons = lessons
    this.completedLessons = completedLessons
    this.markComplete = function(lesson){
            this.completedLessons.push(lesson)
            return this.completedLessons
        }
    
    this.getProgress = function(){
        const completedCount = this.completedLessons.length
        const totalLessons =this.lessons.length
        return `${completedCount} out of ${totalLessons} lessons completed`
    }
}

const course = new Course('education',['science','English','Mathematics','Biology','Social studies'],[])
course.markComplete('Mathematics')
course.markComplete('Biology')
course.markComplete('English')
// console.log(course.markComplete('English'));
console.log(course.completedLessons);

console.log(course.getProgress());







 
 









