// Define classes for Ticket, Movie, Auditorium, Concession, and Schedule
class Ticket {
    constructor(movie, showTime, price, seatNumber, isOnlinePurchase) {
        this.movie = movie;
        this.showTime = showTime;
        this.price = price;
        this.seatNumber = seatNumber;
        this.isOnlinePurchase = isOnlinePurchase;
    }
}

class Movie {
    constructor(title, duration, genre) {
        this.title = title;
        this.duration = duration;
        this.genre = genre;
    }
}

class Auditorium {
    constructor(number, capacity) {
        this.number = number;
        this.capacity = capacity;
    }
}

class Concession {
    constructor(item, price, quantity) {
        this.item = item;
        this.price = price;
        this.quantity = quantity;
    }
}

class Schedule {
    constructor(movie, showTime, auditorium, ticketPrice) {
        this.movie = movie;
        this.showTime = showTime;
        this.auditorium = auditorium;
        this.ticketPrice = ticketPrice;
    }
}

// Define functions for ticketing
function sellTicket(movie, showTime, price, seatNumber, isOnlinePurchase) {
    // Logic for selling ticket
    let ticket = new Ticket(movie, showTime, price, seatNumber, isOnlinePurchase);
    // Additional logic for managing reservations and sales
    return ticket;
}

// Define functions for concessions
function sellConcession(item, price, quantity) {
    // Logic for selling concession
    let concession = new Concession(item, price, quantity);
    // Additional logic for managing inventory and sales
    return concession;
}

// Define functions for movie scheduling
function createSchedule(movie, showTime, auditorium, ticketPrice) {
    // Logic for creating schedule
    let schedule = new Schedule(movie, showTime, auditorium, ticketPrice);
    // Additional logic for managing schedules
    return schedule;
}

// Example Usage:
let movie1 = new Movie("Inception", "2h 28min", "Sci-Fi");
let auditorium1 = new Auditorium(1, 100);
let schedule1 = createSchedule(movie1, "March 18, 2024 18:00", auditorium1, 10.50);
console.log(schedule1);

let ticket1 = sellTicket(movie1, "March 18, 2024 18:00", 10.50, "A12", true);
console.log(ticket1);

let concession1 = sellConcession("Popcorn", 5.50, 2);
console.log(concession1);
