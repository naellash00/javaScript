class Vehicles {
    constructor(vehicleName, companyName, vehicleID) {
        this.vehicleName = vehicleName;
        this.companyName = companyName;
        this.vehicleID = vehicleID;
    }
}

class Car extends Vehicles {
    constructor(vehicleName, companyName, vehicleID, carType) {
        super(vehicleName, companyName, vehicleID);
        this.carType = carType;
    }
}

class Airplane extends Vehicles {
    constructor(vehicleName, companyName, vehicleID, airplaneType) {
        super(vehicleName, companyName, vehicleID);
        this.airplaneType = airplaneType;
    }
}

class Employee {
    constructor(employeeName, dateOfBirth, employeeID, licenseID, vehicleID) {
        this.employeeName = employeeName;
        this.dateOfBirth = dateOfBirth;
        this.employeeID = employeeID;
        this.licenseID = licenseID;
        this.vehicleID = vehicleID;
    }
}

class Driver extends Employee {

}
class Pilot extends Employee {

}

class Reservation {
    constructor(reservationDate, employeeID, vehicleID, reservationID) {
        this.reservationDate = reservationDate;
        this.employeeID = employeeID;
        this.vehicleID = vehicleID;
        this.reservationID = reservationID;
    }
}

const car1 = new Car('camry', 'toyota', 1234, 'sedan');
const car2 = new Car('mustang', 'ford', 5678, 'coupe');
const car3 = new Car('accord', 'honda', 1357, 'sedan');

const airplane1 = new Airplane('boeing747', 'boeing', 1245, 'jet');
const airplane2 = new Airplane('cessna172', 'textron aviation', 4578, 'light aircraft');

const reservations = [];

function checkEmployeeWithVehicle(employeeID, vehicle) {
    if (employeeID instanceof Pilot && vehicle instanceof Car) {
        console.log('The employee is not licensed to drive this vehicle');
    } else {
        const reservation = new Reservation(new Date(), employeeID.employeeID, vehicle.vehicleID, reservations.length);
        reservations[reservations.length] = reservation;
    }
}

// Example usage
const pilot1 = new Pilot('amal', '2000-06-15', 'P123', 'PL567', 'V789');
checkEmployeeWithVehicle(pilot1, car1);
checkEmployeeWithVehicle(pilot1, airplane1);

// Print reservations using map function
reservations.map((reservation) => console.log(reservation));
