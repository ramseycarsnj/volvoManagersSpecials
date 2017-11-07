$(document).ready(function(){

  const expiration =  '11/30/17';
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
    document.body.innerHTML += '<div class="specialContainer"><div class="specialContent leftContent"><h3 class="yearMake">' + thisCar.year + ' ' + thisCar.make + '</h3><h2 class="modelTrim">' + thisCar.model + '</h2><img src="' + thisCar.vehicleImage + '" alt="volvo vehicle image" class="vehicleImage"></div><div class="specialContent rightContent"><h3 class="leaseHead">Lease this vehicle for:</h3><div class="leaseQuoteSection"><h1 class="lease">$' + thisCar.leasePrice + '</h1><h3 class="monthsSections">/MO<br>' + thisCar.term + ' MOS</h3></div><h4 class="moneyDue">$' + thisCar.totalAtInception + ' DUE AT SIGNING</h4><a href="' + thisCar.vehicleUrl + '" class="linkButton" target="_blank">VIEW VEHICLE</a><p class="disclaimer">VIN ' + thisCar.vin + '. Stk ' + thisCar.stockNumber + '. ' + thisCar.bodyStyle + ', ' + thisCar.engine + ', ' + thisCar.transmission + ',mileage: ' + thisCar.miles + ' mi., air conditioning, power steering/ABS brakes/windows/locks/mirrors, cd/MP3, ' + thisCar.equipment + '. MSRP: $' + thisCar.msrp + '. $' + thisCar.totalAtInception + ' due at inception. $' + thisCar.moneyDown + ' down + 1st mo pymt $' + thisCar.leasePrice + '+ bank fee incl. + $0 sec dep. $' + thisCar.totalPayments + ' ttl pymts/$' + thisCar.residual + ' residual.' + thisCar.equipment + ' Prices include all costs to be paid by a consumer except for licensing, registration, taxes, and $299 doc. fee. Tier 1 credit approval thru primary lender. Lessee resp. for excess wear/tear. ' + thisCar.totalmiles + ' mi. per yr/.25¢ per mi. over thereafter. See dealer for complete details. Not resp. for typos. Offers expire ' + expiration + '.</p></div></div>'




  }

  vehicleArray[3] = new Vehicle(
    'New',
    '2018',
    'Volvo',
    'XC60 T5 AWD MOMENTUM',
    'Osmium Grey',
    '4 Dr',
    '2.0L I-4 cyl',
    'Auto AWD',
    'Power ABS',
    'Power',
    'Windows, Locks',
    'vision package, navigation, heated steering wheel, metallic paint',
    'J1019608',
    'VOJ0264',
    '37',
    '46,340',
    '',
    '',
    '',
    '',
    '',
    '',
    '449',
    '26,413',
    'waived',
    'included',
    '3,450',
    '16,164',
    '36',
    '7,500',
    '0.25',
    '4,198',
    'vehicleImages/VOJ0264.jpg',
    'https://www.volvocarsramsey.com/new/Volvo/2018-Volvo-XC60-ramsey-nj-2a0843ab0a0e0a6b247e108104fd49cd.htm');


  vehicleArray[4] = new Vehicle(
    'New',
    '2018',
    'Volvo',
    'XC90 T6 AWD MOMENTUM',
    'Onyx Black',
    '4 Dr',
    '2.0L I-4 cyl',
    'Auto AWD',
    'Power ABS',
    'Power',
    'Windows, Locks',
    '7 passenger, convenience package, booster seat, 21.5" spoke rims, heated steering wheel',
    'J1197593',
    'VOJ0095',
    '27',
    '60,805',
    '',
    '',
    '',
    '',
    '',
    '',
    '529',
    '34,658',
    'waived',
    'included',
    '4,100',
    '20,631',
    '39',
    '7,500',
    '0.25',
    '4,928',
    'vehicleImages/VOJ0095.jpg',
    'https://www.volvocarsramsey.com/new/Volvo/2018-Volvo-XC90-ramsey-nj-a2a35aef0a0e0ae867dfbbafecb5b59b.htm');


    vehicleArray[0] = new Vehicle(
      'New',
      '2017',
      'Volvo',
      'S60 T5 AWD DYNAMIC',
      'Ice White',
      '4 Dr',
      '2.0L I-4 cyl',
      'Auto AWD',
      'Power ABS',
      'Power',
      'Windows, Locks',
      'keyless drive, leather interior, air conditioning, climate control',
      'H2428662',
      'VOH0200',
      '27',
      '37,970',
      '',
      '',
      '',
      '',
      '',
      '',
      '238',
      '18,225',
      'waived',
      'included',
      '3,180',
      '7,140',
      '30',
      '7,500',
      '0.25',
      '3,717',
      'vehicleImages/VOH0200.jpg',
      'https://www.volvocarsramsey.com/new/Volvo/2017-Volvo-S60-ramsey-nj-dd4bb81e0a0e0a175837ce580353bca6.htm');


    vehicleArray[2] = new Vehicle(
      'New',
      '2018',
      'Volvo',
      'S90 T5 AWD MOMENTUM',
      'Onyx Black',
      '4 Dr',
      '2.0L I-4 cyl',
      'Auto AWD',
      'Power ABS',
      'Power',
      'Windows, Locks',
      'convenience package, heated steering wheel, metallic paint, air conditioning, climate control',
      'JP016776',
      'VOJ0104',
      '4,879',
      '56,190',
      '',
      '',
      '',
      '',
      '',
      '',
      '398',
      '14,328',
      'waived',
      'included',
      '3,000',
      '14,328',
      '36',
      '7,500',
      '0.25',
      '3,697',
      'vehicleImages/VOJ0104.jpg',
      'https://www.volvocarsramsey.com/new/Volvo/2018-Volvo-S90-ramsey-nj-ace700a20a0e0adf5dc318960a8caafe.htm');

    vehicleArray[1] = new Vehicle(
      'New',
      '2017',
      'Volvo',
      'V60 CROSS COUNTRY AWD',
      'Onyx Black',
      '4 Dr',
      '2.0L I-4 cyl',
      'Auto AWD',
      'Power ABS',
      'Power',
      'Windows, Locks',
      'convenience package, BLIS',
      'H1036148',
      'VOH0430',
      '38',
      '46,980',
      '',
      '',
      '',
      '',
      '',
      '',
      '348',
      '20,201',
      'waived',
      'included',
      '3,180',
      '12,528',
      '36',
      '7,500',
      '0.25',
      '3,827',
      'vehicleImages/VOH0430.jpg',
      'https://www.volvocarsramsey.com/new/Volvo/2017-Volvo-V60+Cross+Country-ramsey-nj-141e3bac0a0e0ae7362623032b56adeb.htm');

    vehicleArray[5] = new Vehicle(
      'New',
      '2018',
      'Volvo',
      'XC90 T6 INSCRIPTION',
      'Onyx Black',
      '4 Dr',
      '2.0L I-4 cyl',
      'Auto AWD',
      'Power ABS',
      'Power',
      'Windows, Locks',
      'heated steering wheel, 21" wheels, convenience package',
      'J1201593',
      'VOJ0058',
      '41',
      '64,340',
      '',
      '',
      '',
      '',
      '',
      '',
      '598',
      '34,743',
      'waived',
      'included',
      '4,100',
      '23,322',
      '39',
      '7,500',
      '0.25',
      '4,997',
      'vehicleImages/VOJ0058.jpg',
      'https://www.volvocarsramsey.com/new/Volvo/2018-Volvo-XC90-ramsey-nj-1cb082160a0e0ae867dfbbafe6fa9004.htm');



  for (var i = 0; i < vehicleArray.length; i++) {
    listing(vehicleArray[i]);
  }



});
