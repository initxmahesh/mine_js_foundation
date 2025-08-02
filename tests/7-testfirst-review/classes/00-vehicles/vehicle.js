/* eslint-disable no-unused-vars */

class Vehicle {
  constructor([wheelTotal, energySource, manufacturer]) {
    this.wheelTotal = wheelTotal;
    this.energySource = energySource;
    this.manufacturer = manufacturer;
    this.isOn = false;
  }
  getSpec(key) {
    return key === "getSpec" ? undefined : this[key];
  }
}

class Tesla extends Vehicle {
  constructor([
    milesPerCharge,
    model,
    chargePercentage,
    minutesToCharge,
    vehicleSpecs,
  ]) {
    super(vehicleSpecs[0]);
    this.milesPerCharge = milesPerCharge;
    this.model = model;
    this.chargePercentage = chargePercentage;
    this.minutesToCharge = minutesToCharge;
  }

  minutesToFullCharge(currentCharge) {
    const remainingCharge = 100 - currentCharge;
    const minutesNeeded = (remainingCharge / 100) * this.minutesToCharge;
    return `${minutesNeeded} minutes until the charge is full!`;
  }
}
