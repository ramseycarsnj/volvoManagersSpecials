$(document).ready(function(){

  const expiration =  '12/31/17';
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

// vehicleArray[0] = new Vehicle(
//   'New',
//   '2017',
//   'VOLVO',
//   'S60 T5 Dynamic AWD',
//   'BLACK',
//   '4 Dr',
//   '4 Cylinder',
//   'Auto w/OD',
//   'Power ABS',
//   'Power Steering',
//   'Windows, Locks, Seats, Mirrors',
//   'Leather Interior, Dual Airbags, Side Airbags, Moonroof',
//   'H2426612',
//   'VOH0158',
//   '42',
//   '38425',
//   '',
//   '',
//   '',
//   '',
//   '',
//   '',
//   '188',
//   '16907',
//   '0',
//   'INCLUDED',
//   '3180',
//   '6768',
//   '36',
//   '7500',
//   '0.25',
//   '3667',
//   'vehicleImages/VOH0158.png',
//   'https://www.volvocarsramsey.com/fleet-new/Volvo/2017-Volvo-S60-ramsey-nj-71fd80f30a0e0ae854d002e59757412c.htm');


  vehicleArray[0] = new Vehicle(
    'New',
    '2017',
    'VOLVO',
    'S60 T5 Inscription AWD',
    'black',
    '4 Dr',
    '4 Cylinder',
    'Auto w/OD',
    'Power ABS',
    'Power Steering',
    'Windows, Locks, Seats, Mirrors',
    'Leather Interior, CD Player, Moonroof, Alloy Wheels',
    'HB155131',
    'VOH0664',
    '52',
    '42615',
    '',
    '',
    '',
    '',
    '',
    '',
    '268',
    '18750',
    '0',
    '695',
    '3180',
    '9648',
    '36',
    '7500',
    '0.25',
    '3747',
    'vehicleImages/VOH0664.jpg',
    'https://www.volvocarsramsey.com/new/Volvo/2017-Volvo-S60+Inscription-ramsey-nj-590837220a0e0adf4dcd53fbe966e7ad.htm');

  vehicleArray[1] = new Vehicle(
    'New',
    '2017',
    'VOLVO',
    'V60 T5 PREMIER',
    'BLACK',
    'Wagon',
    '4 Cylinder',
    'Auto w/OD',
    'Power ABS',
    'Power Steering',
    'Windows, Locks, Seats, Mirrors',
    'Climate Control, Leather Interior, CD Player, Dual Airbags, Side Airbags, Moonroof, Keyless Remote Entry, Alarm System',
    'H1337025',
    'VOH0220',
    '17',
    '42485',
    '',
    '',
    '',
    '',
    '',
    '',
    '298',
    '17843',
    '0',
    'INCLUDED',
    '3180',
    '10728',
    '36',
    '7500',
    '0.25',
    '3478',
    'vehicleImages/VOH0220.jpeg',
    'https://www.volvocarsramsey.com/new/Volvo/2017-Volvo-V60-ramsey-nj-e954eccb0a0e0ae75af8e084cb2c93f5.htm');

  vehicleArray[2] = new Vehicle(
    'New',
    '2017',
    'VOLVO',
    'S60 T6 RDesign',
    'BLACK',
    '4 Dr',
    '4 Cylinder',
    'Auto w/OD',
    'Power ABS',
    'Power Steering',
    'Windows, Locks, Seats, Mirrors',
    'Climate Control, Leather Interior',
    'H2434444',
    'VOH0451',
    '31',
    '51465',
    '',
    '',
    '',
    '',
    '',
    '',
    '348',
    '22129',
    '0',
    'INCLUDED',
    '3180',
    '12528',
    '36',
    '7500',
    '0.25',
    '3529',
    'vehicleImages/VOH0451.jpg',
    'https://www.volvocarsramsey.com/fleet-new/Volvo/2017-Volvo-S60-ramsey-nj-751bc2120a0e0a1709e1ddd320399287.htm');

  // vehicleArray[4] = new Vehicle(
  //   'Demo',
  //   '2018',
  //   'VOLVO <span style="font-weight: 900; color:#033057;">DEMO</span>',
  //   'S90T5 MOMENTUM AWD',
  //   'BLACK',
  //   '4 Dr',
  //   '4 Cylinder',
  //   'Auto w/OD',
  //   'Power ABS',
  //   'Power Steering',
  //   'Windows, Locks, Seats, Mirrors',
  //   'Leather Interior, Moonroof',
  //   'JP016776',
  //   'VOJ0104',
  //   '4779',
  //   '56190',
  //   '',
  //   '',
  //   '',
  //   '',
  //   '',
  //   '',
  //   '388',
  //   '28656',
  //   '0',
  //   'INCLUDED',
  //   '3000',
  //   '13968',
  //   '36',
  //   '7500',
  //   '0.25',
  //   '3388',
  //   'vehicleImages/VOJ0104.jpeg',
  //   'https://www.volvocarsramsey.com/new/Volvo/2018-Volvo-S90-ramsey-nj-ace700a20a0e0adf5dc318960a8caafe.htm');

    vehicleArray[3] = new Vehicle(
      'New',
      '2018',
      'VOLVO',
      'V90CC T6 AWD',
      'BLACK',
      'Wagon',
      '4 Cylinder',
      'Auto w/OD',
      'Power ABS',
      'Power Steering',
      'Windows, Locks, Seats, Mirrors',
      'Leather Interior, Moonroof, BOWER AND WILKINS SOUND',
      'J1015792',
      'VOJ0237',
      '37',
      '68425',
      '',
      '',
      '',
      '',
      '',
      '',
      '468',
      '41055',
      '0',
      'INCLUDED',
      '4000',
      '14040',
      '30',
      '7500',
      '0.25',
      '4767',
      'vehicleImages/VOJ0237.jpeg',
      'https://www.volvocarsramsey.com/new/Volvo/2018-Volvo-V90+Cross+Country-ramsey-nj-9f06557c0a0e0adf10937696f008616a.htm');

    vehicleArray[4] = new Vehicle(
      'New',
      '2018',
      'VOLVO',
      'XC90 T6 Momentum AWD',
      'black',
      '7 Passenger',
      '4 Cylinder',
      'Auto w/OD',
      'Power ABS',
      'Power Steering',
      'Windows, Locks, Seats, Mirrors',
      'Momentum plus ,Child Booster,Convenience package',
      'J1333595',
      'VOJ0322',
      '27',
      '59190',
      '',
      '',
      '',
      '',
      '',
      '',
      '499',
      '34330',
      '0',
      '695',
      '4100',
      '19461',
      '39',
      '7500',
      '0.25',
      '4599',
      'vehicleImages/VOJ0322.jpeg',
      'https://www.volvocarsramsey.com/new/Volvo/2018-Volvo-XC90-ramsey-nj-aaea72e40a0e0aea7785924f6188142b.htm');








  for (var i = 0; i < vehicleArray.length; i++) {
    listing(vehicleArray[i]);
  }



});
