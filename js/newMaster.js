$(document).ready(function(){

  const expiration =  '1/31/18';
  const vehicleArray = [];


  function Vehicle(
    vehicleStatus,
    year,
    make,
    model,
    color,
    bodyStyle,
    engine,
    transmission,
    brakes,
    steering,
    power,
    equipment,
    vin,
    stockNumber,
    miles,
    msrp,
    dealerDiscount,
    factoryDiscount,
    factoryRebate,
    additionalDiscounts,
    totalSavings,
    buyPrice,
    leasePrice,
    residual,
    security,
    bankFee,
    moneyDown,
    totalPayments,
    term,
    totalmiles,
    thereafter,
    totalAtInception,
    vehicleImage,
    vehicleUrl
    ){
    this.vehicleStatus = vehicleStatus;
    this.year = year;
    this.make = make;
    this.model = model;
    this.color = color;
    this.bodyStyle = bodyStyle;
    this.engine = engine;
    this.transmission = transmission;
    this.brakes = brakes;
    this.steering = steering;
    this.power = power;
    this.equipment = equipment;
    this.vin = vin;
    this.stockNumber = stockNumber;
    this.miles = miles;
    this.msrp = msrp;
    this.dealerDiscount = dealerDiscount;
    this.factoryDiscount = factoryDiscount;
    this.factoryRebate = factoryRebate;
    this.additionalDiscounts = additionalDiscounts;
    this.totalSavings = totalSavings;
    this.buyPrice = buyPrice;
    this.leasePrice = leasePrice;
    this.residual = residual;
    this.security = security;
    this.bankFee = bankFee;
    this.moneyDown = moneyDown;
    this.totalPayments = totalPayments;
    this.term = term;
    this.totalmiles = totalmiles;
    this.thereafter = thereafter;
    this.totalAtInception = totalAtInception;
    this.vehicleImage = vehicleImage;
    this.vehicleUrl = vehicleUrl;
  }

  function listing(thisCar){
    document.body.innerHTML += '<div class="specialContainer"><div class="specialContent leftContent"><h3 class="yearMake">' + thisCar.year + ' ' + thisCar.make + '</h3><h2 class="modelTrim">' + thisCar.model + '</h2><img src="' + thisCar.vehicleImage + '" alt="volvo vehicle image" class="vehicleImage"></div><div class="specialContent rightContent"><h3 class="leaseHead">Lease this vehicle for:</h3><div class="leaseQuoteSection"><h1 class="lease">$' + thisCar.leasePrice + '</h1><h3 class="monthsSections">/MO<br>' + thisCar.term + ' MOS</h3></div><h4 class="moneyDue">$' + thisCar.totalAtInception + ' DUE AT SIGNING</h4><a href="' + thisCar.vehicleUrl + '" class="linkButton" target="_blank">VIEW VEHICLE</a><p class="disclaimer">VIN ' + thisCar.vin + '. Stk ' + thisCar.stockNumber + '. ' + thisCar.bodyStyle + ', ' + thisCar.engine + ', ' + thisCar.transmission + ',mileage: ' + thisCar.miles + ' mi., air conditioning, power steering/ABS brakes/windows/locks/mirrors, cd/MP3, ' + thisCar.equipment + '. MSRP: $' + thisCar.msrp + '. $' + thisCar.totalAtInception + ' due at inception. $' + thisCar.moneyDown + ' down + 1st mo pymt $' + thisCar.leasePrice + '+ bank fee incl. + $0 sec dep. $' + thisCar.totalPayments + ' ttl pymts/$' + thisCar.residual + ' residual.' + thisCar.equipment + ' Prices include all costs to be paid by a consumer except for licensing, registration, and taxes. Tier 1 credit approval thru primary lender. Lessee resp. for excess wear/tear. ' + thisCar.totalmiles + ' mi. per yr/.25¢ per mi. over thereafter. See dealer for complete details. Not resp. for typos. Offers expire ' + expiration + '.</p></div></div>'




  }

  vehicleArray[3] = new Vehicle(
    "Demo",
    "2018",
    "VOLVO",
    "XC60 T5 MOMENTUM",
    "fusion red",
    "5 Dr Hatch",
    "4 Cylinder",
    "Auto",
    "",
    "",
    "",
    "Climate Control, Leather Interior, Moonroof, convenience pkg,vision pkg,advancepkg,navigation",
    "J1002223",
    "VOJ0094",
    "4747",
    "50440",
    "",
    "",
    "",
    "",
    "",
    "",
    "438",
    "17472",
    "0",
    "inc",
    "3450",
    "17082",
    "39",
    "7500",
    "0.25",
    "3888",
    'vehicleImages/VOJ0094.jpeg',
    'https://www.volvocarsramsey.com/new/Volvo/2018-Volvo-XC60-ramsey-nj-9d4f658a0a0e0ae867dfbbafb59aa427.htm');

  vehicleArray[4] = new Vehicle(
    "New",
    "2017",
    "VOLVO",
    "S90 T6 AWD INSCRIPTION",
    "BLACK",
    "4 Dr",
    "4 Cylinder",
    "Auto w/OD",
    "",
    "",
    "",
    "Climate Control, Leather Interior, Moonroof, Alloy Wheels, Alarm System, BOWERS AND WILKINS, VISION,CLIMATE,SPOILER",
    "H1017067",
    "VOH0529",
    "37",
    "65890",
    "",
    "",
    "",
    "",
    "",
    "",
    "468",
    "34262",
    "0",
    "INC",
    "5000",
    "16,848",
    "36",
    "7500",
    "0.25",
    "5408",
    'vehicleImages/VOH0529.jpeg',
    'https://www.volvocarsramsey.com/new/Volvo/2017-Volvo-S90-ramsey-nj-f07d06d10a0e0aea2f49d6a7748ccc1a.htm');

  vehicleArray[0] = new Vehicle(
    "New",
    "2017",
    "VOLVO",
    "S60 T5 AWD DYNAMIC",
    "WHITE",
    "4 Dr",
    "4 Cylinder",
    "Auto w/OD",
    "",
    "",
    "",
    "Leather Interior, Heated Seats, Side Airbags, Moonroof, Alarm System",
    "H2428662",
    "VOH0200",
    "39",
    "37970",
    "",
    "",
    "",
    "",
    "",
    "",
    "198",
    "17845",
    "0",
    "INC",
    "3180",
    "7128",
    "36",
    "7500",
    "0.25",
    "3378",
    'vehicleImages/VOH0200.jpeg',
    'https://www.volvocarsramsey.com/new/Volvo/2017-Volvo-S60-ramsey-nj-dd4bb81e0a0e0a175837ce580353bca6.htm');

  vehicleArray[1] = new Vehicle(
    "New",
    "2017",
    "VOLVO",
    "S60 T5 AWD INSCRIPTION PLATINUM",
    "BLACK",
    "4 Dr",
    "4 Cylinder",
    "Auto w/OD",
    "",
    "",
    "",
    "Leather Interior, Heated Seats, Moonroof, CLIMATE PKG ,BLIS,HARMON KARDON SOUND ",
    "HB126831",
    "VOH0140",
    "45",
    "46020",
    "",
    "",
    "",
    "",
    "",
    "",
    "298",
    "21169",
    "0",
    "INC",
    "3180",
    "10728",
    "36",
    "7500",
    "0.25",
    "3478",
    'vehicleImages/VOH0140.jpeg',
    'https://www.volvocarsramsey.com/used/Volvo/2017-Volvo-S60-ramsey-nj-2e3530e50a0e0adf43fd01e9a759f102.htm');

  vehicleArray[2] = new Vehicle(
    "New",
    "2017",
    "VOLVO",
    "S60 T6 AWD R-DESIGN",
    "RED",
    "4 Dr",
    "4 Cylinder",
    "Auto w/OD",
    "",
    "",
    "",
    "Leather Interior, Heated Seats, Moonroof",
    "H2433344",
    "VOH0356",
    "43",
    "49320",
    "",
    "",
    "",
    "",
    "",
    "",
    "348",
    "23180",
    "0",
    "INC",
    "3180",
    "12528",
    "36",
    "7500",
    "0.25",
    "3528",
    'vehicleImages/VOH0356.jpeg',
    'https://www.volvocarsramsey.com/new/Volvo/2017-Volvo-S60-ramsey-nj-2c400ee10a0e0adf3e0eb2a54872ba9f.htm');







  for (var i = 0; i < vehicleArray.length; i++) {
    listing(vehicleArray[i]);
  }



});
