$(document).ready(function(){

  const expiration =  '9/30/17';
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
    miles,
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
    this.miles = miles;
    this.thereafter = thereafter;
    this.totalAtInception = totalAtInception;
    this.vehicleImage = vehicleImage;
    this.vehicleUrl = vehicleUrl;
  }

  function listing(thisCar){
    document.body.innerHTML += '<div class="specialContainer"><div class="specialContent leftContent"><h3 class="yearMake">' + thisCar.year + ' ' + thisCar.make + '</h3><h2 class="modelTrim">' + thisCar.model + '</h2><img src="' + thisCar.vehicleImage + '" alt="volvo vehicle image" class="vehicleImage"></div><div class="specialContent rightContent"><h3 class="leaseHead">Lease this vehicle for:</h3><div class="leaseQuoteSection"><h1 class="lease">$' + thisCar.leasePrice + '</h1><h3 class="monthsSections">/MO<br>' + thisCar.term + ' MOS</h3></div><h4 class="moneyDue">$' + thisCar.totalAtInception + ' DUE AT SIGNING</h4><a href="' + thisCar.vehicleUrl + '" class="linkButton" target="_blank">VIEW VEHICLE</a><p class="disclaimer">VIN ' + thisCar.vin + '. Stk ' + thisCar.stockNumber + '. ' + thisCar.bodyStyle + ', ' + thisCar.engine + ', ' + thisCar.transmission + ',mileage: ' + thisCar.miles + ' mi., air conditioning, power steering/ABS brakes/windows/locks/mirrors, cd/MP3, ' + thisCar.equipment + '. MSRP: $' + thisCar.msrp + '. $' + thisCar.totalAtInception + ' due at inception. $' + thisCar.moneyDown + ' down + 1st mo pymt $' + thisCar.leasePrice + '+ bank fee incl. + $0 sec dep. $' + thisCar.totalPayments + ' ttl pymts/$' + thisCar.residual + ' residual.' + thisCar.equipment + ' Prices include all costs to be paid by a consumer except for licensing, registration, taxes, and $299 doc. fee. Tier 1 credit approval thru primary lender. Lessee resp. for excess wear/tear. 7.5K mi. per yr/.25¢ per mi. over thereafter. See dealer for complete details. Not resp. for typos. Offers expire ' + expiration + '.</p></div></div>'




  }

  vehicleArray[0] = new Vehicle(
    'New',
    '2017',
    'Volvo',
    'S60 T5 AWD Dynamic',
    'White',
    '4 Dr',
    '4 Cylinder',
    'Auto w/OD',
    'Power ABS',
    'Power',
    'Windows, Locks',
    'Leather Interior, Moonroof',
    'H2428662',
    'VOH0200',
    '35',
    '37,970',
    '',
    '',
    '',
    '',
    '',
    '',
    '269',
    '17,086',
    'waived',
    'included',
    '3180',
    '10,404',
    '36',
    '7,500',
    '0.25',
    '3,449',
    'vehicleImages/VOH0200.jpg',
    'http://www.volvocarsramsey.com/new/Volvo/2017-Volvo-S60-ramsey-nj-dd4bb81e0a0e0a175837ce580353bca6.htm');

    vehicleArray[1] = new Vehicle(
      'New',
      '2017',
      'Volvo',
      'V60 T5 Wagon',
      'Black',
      'Wagon',
      '4 Cylinder',
      'Auto w/OD',
      'Power ABS',
      'Power',
      'Windows, Locks, Seats, Mirrors',
      'Climate Control, Leather Interior, Moonroof',
      'H1337025',
      'VOH0220',
      '37',
      '42,485',
      '',
      '',
      '',
      '',
      '',
      '',
      '309',
      '18693',
      'waived',
      'included',
      '3,180',
      '11,844',
      '36',
      '7,500',
      '0.25',
      '3,489',
      'vehicleImages/VOH0220.jpg',
      'http://www.volvocarsramsey.com/new/Volvo/2017-Volvo-V60-ramsey-nj-e954eccb0a0e0ae75af8e084cb2c93f5.htm');


      vehicleArray[2] = new Vehicle(
        'New',
        '2017',
        'Volvo',
        'S60 T5 AWD Platinum',
        'White',
        '4 Dr',
        '4 Cylinder',
        'Auto w/OD',
        'Power ABS',
        'Power',
        'Windows, Locks, Seats, Mirrors, PLATINUM PACKAGE',
        'Air Conditioning, Climate Control, Leather Interior',
        'HB127402',
        'VOH0160',
        '37',
        '47,825',
        '',
        '',
        '',
        '',
        '',
        '',
        '329',
        '20,336',
        'WAIVED',
        'INCLUDED',
        '3,180',
        '11,844',
        '36',
        '12,564',
        '0.25',
        '3,509',
        'vehicleImages/VOH0160.jpg',
        'http://www.volvocarsramsey.com/new/Volvo/2017-Volvo-S60+Inscription-ramsey-nj-7729fe320a0e0a173bd765f210555da4.htm');

        vehicleArray[3] = new Vehicle(
          'New',
          '2017',
          'VOLVO',
          'XC60 T6',
          'BLUE',
          '4 Dr',
          '4 Cylinder',
          'Auto w/OD',
          'Power ABS',
          'Power',
          'Windows, Locks, Seats',
          'Air Conditioning, Climate Control, Leather Interior, Heated Seats',
          'H2208816',
          'VOH0703',
          '54',
          '50,890',
          '',
          '',
          '',
          '',
          '',
          '',
          '345',
          '24,936',
          'WAIVED',
          'INCLUDED',
          '3,680',
          '12,420',
          '36',
          '7,500',
          '0.25',
          '4,045',
          'vehicleImages/VOH0703.jpg',
          'http://www.volvocarsramsey.com/new/Volvo/2017-Volvo-XC60-ramsey-nj-7e95e11f0a0e0ae965f9dd8440c585b6.htm');


  for (var i = 0; i < vehicleArray.length; i++) {
    listing(vehicleArray[i]);
  }



});
