const express = require('express');
const res = require('express/lib/response');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.json());


// Exercise 1

let students = [
  { id: 1, name: 'John', grade: 'B' },
  { id: 2, name: 'Emily', grade: 'C' },
  { id: 3, name: 'David', grade: 'A' }
];

function updategrade(students, id, grade){
    for(let i=0; i < students.length ; i++){
    if(students[i].id ===id){
      students[i].grade = grade;
      break;
    }
  }
  return students
}

app.get("/students/grade",(req,res)=>{
  let id = parseInt(req.query.id);
  let grade = req.query.grade
  let result = updategrade(students, id, grade)
  console.log(result)
})

// Exercise 2

let products = [
  { id: 1, name: 'Laptop', price: 1000 },
  { id: 2, name: 'Monitor', price: 300 },
  { id: 3, name: 'Keyboard', price: 100 }
];

function deleteProductByid(product, id){
  return product.id !==id;
}

app.get("/products/delete", (req,res)=>{
  let id = parseInt(req.query.id);
  let result = products.filter(product=>deleteProductByid(product, id))
  products = result;
  console.log(result)
})

// Exercise 3

let employees = [
  { id: 1, name: 'John', department: 'Engineering' },
  { id: 2, name: 'Eve', department: 'Sales' },
  { id: 3, name: 'Mark', department: 'Marketing' }
];

function updateEmployeeById(employees, id, department){
  for(i=0; i < employees.length; i++){
    if(employees[i].id ===id){
      employees[i].department=department
    }
  }
  return employees
}

app.get("/employee/update", (req,res)=>{
  let id = parseInt(req.query.id)
  let department = req.query.department
  let result = updateEmployeeById(employees, id, department)
  console.log(result)
})


// Exercise 4

let books = [
  { id: 1, title: '1984', author: 'George Orwell' },
  { id: 2, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee' }
];

function deleteBookById(book,id){
  return book.id !== id
}

app.get("/books/delete", (req,res)=>{
  let id = parseInt(req.query.id)
  let result = books.filter(book=>deleteBookById(book,id))
  books = result
  console.log(result)
})

// Exercise 5

let cars = [
  { id: 1, make: 'Toyota', year: 2015 },
  { id: 2, make: 'Honda', year: 2008 },
  { id: 3, make: 'Tesla', year: 2020 }
];

function updateYearById(cars, id, year){
    for (i=0; i < cars.length; i++){
    if(cars[i].id === id){
    
      cars[i].year = year
    }
  }
  return cars
}

app.get("/cars/update", (req,res)=>{
  let id = parseInt(req.query.id);
  let year= parseInt(req.query.year);
  let result = updateYearById(cars, id, year)
  console.log(result)
})

//Exercise 6

let gadgets = [
  { id: 1, name: 'iPhone', brand: 'Apple' },
  { id: 2, name: 'Pixel', brand: 'Google' },
  { id: 3, name: 'Galaxy', brand: 'Samsung' }
];

function DeltegadgetById(gadget,id){
  return gadget.id !==id;
}

app.get("/gadgets/delete", (req,res)=>{
  let id = parseInt(req.query.id)
  let result = gadgets.filter(gadget=>DeltegadgetById(gadget,id)) 
  books=result
  console.log(result)
})

// Exercise 7

let projects = [
  { id: 1, name: 'Project Alpha', duration: 12 },
  { id: 2, name: 'Project Beta', duration: 10 },
  { id: 3, name: 'Project Gamma', duration: 8 }
];
function  updateDurationById(projects,id, duration){

for(i=0; i < projects.length; i++){
  if(projects[i].id===id){
    projects[i].duration = duration
  }
}
return projects
}


app.get("/projects/update", (req,res)=>{
  let id = parseInt(req.query.id)
  let duration= parseInt(req.query.duration)
  let result = updateDurationById(projects,id,duration)
  console.log(result)
})

// Exercise 8

let restaurants = [
  { id: 1, name: 'Pasta Palace', cuisine: 'Italian' },
  { id: 2, name: 'Dragon Wok', cuisine: 'Chinese' },
  { id: 3, name: 'Burger Barn', cuisine: 'American' }
];

function deletRestaurantById(restaurant,id){
  return restaurant.id !== id
}

app.get("/restaurants/delete",(req,res)=>{
  let id = parseInt(req.query.id)
  let result = restaurants.filter(restaurant=>deletRestaurantById(restaurant,id))
  restaurants = result
  console.log(result)
})

// Exercise 9

let athletes = [
  { id: 1, name: 'John', score: 85 },
  { id: 2, name: 'Mike', score: 92 },
  { id: 3, name: 'Sara', score: 88 }
];
function updateathleteById(athletes,id, score){
  
  for(i=0; i < athletes.length; i++){
    if(athletes[i].id === id){
    
      athletes[i].score = score
    }
  }
  return athletes
}


app.get("/athletes/update",(req,res)=>{
  let id = parseInt(req.query.id)
  let score= parseInt(req.query.score)
  let result = updateathleteById(athletes,id, score)
  console.log(result)
})

// Exercise 10

let movies = [
  { id: 1, title: 'Inception', rating: 8.8 },
  { id: 2, title: 'Titanic', rating: 7.8 },
  { id: 3, title: 'The Room', rating: 3.7 }
];

function deleteMovieById(movie,id){
  return movie.id !==id
}

app.get("/movies/delete", (req,res)=>{
  let id = parseInt(req.query.id)
  let result = movies.filter(movie=>deleteMovieById(movie,id))
  movies = result
  console.log(result)
})


//Exercise 11

let cities = [
  { id: 1, name: 'Los Angeles', population: 4000000 },
  { id: 2, name: 'New York', population: 8175133 },
  { id: 3, name: 'Chicago', population: 2695598 }
];
 
function updatePopulationById(cities, id, population){
  for(i=0; i < cities.length; i++){
    if(cities[i].id ===id){
      cities[i].population = population
    }
  }
  return cities
}

app.get("/cities/update", (req,res)=>{
  let id = parseInt(req.query.id)
  let population =req.query.population
  let result = updatePopulationById(cities, id, population)
  console.log(result)
})

//Exercise 12

let courses = [
  { id: 1, title: 'Mathematics', duration: '3 months' },
  { id: 2, title: 'Physics', duration: '4 months' },
  { id: 3, title: 'Chemistry', duration: '5 months' }
];

function deleteCoursesById(course, id){
  return course.id  !== id
}

app.get("/courses/delete",(req,res)=>{
  let id = parseInt(req.query.id)
  let result = courses.filter(course=>deleteCoursesById(course, id))
  courses = result
  console.log(result)
})

//Exercise 13

let pets = [
  { id: 1, name: 'Whiskers', type: 'Cat' },
  { id: 2, name: 'Rover', type: 'Fish' },
  { id: 3, name: 'Bella', type: 'Dog' }
];

function updatePetById(pets, id, type){
  for(i=0; i < pets.length; i++){
    if(pets[i].id === id){
      pets[i].type = type
    }
  }
  return pets
}

app.get("/pets/update", (req,res)=>{
  let id = parseInt(req.query.id)
  let type = req.query.type
  let result = updatePetById(pets, id, type)
  console.log(result)
})


// Exercise 14

let computers = [
  { id: 1, brand: 'Apple', model: 'MacBook Pro' },
  { id: 2, brand: 'Dell', model: 'XPS 13' },
  { id: 3, brand: 'HP', model: 'Spectre x360' }
];

function deleteComputerById(computer,id){
  return computer.id !==id
}

app.get("/computers/delete", (req,res)=>{
  let id = parseInt(req.query.id)
  let result = computers.filter(computer=>deleteComputerById(computer,id))
  computers = result
  console.log(result)
})

//Exercise 15

let appliances = [
  { id: 1, name: 'Microwave', wattage: 1000 },
  { id: 2, name: 'Toaster', wattage: 800 },
  { id: 3, name: 'Blender', wattage: 500 }
];

function updateapplianceById(appliances, id, wattage){
  for(i=0; i < appliances.length; i++){
    if(appliances[i].id === id){
      appliances[i].wattage = wattage
    }
  }
  return appliances
}

app.get("/appliances/update", (req,res)=>{
  let id = parseInt(req.query.id)
  let wattage = parseInt(req.query.wattage)
  let result = updateapplianceById(appliances, id, wattage)
  console.log(result)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
