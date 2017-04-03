$(document).ready(function(){

  const expiration =  '4/30/17';
  const vehicleArray = [];

  function Vehicle(
     year,
     make,
     model,
     color,
     doors,
     engine,
     transmission,
     brakes,
     steering,
     power,
     equipment,
     vin,
     stock,
     miles,
     msrp,
     buyPrice,
     leasePrice,
     residual,
     security,
     bankFee,
     moneyDown,
     totalPayment,
     months,
     milesPerYear,
     thereAfter,
     totalAtInception,
     additionalInfo,
     vehicleImage,
     vehicleUrl
    ){
      this.year = year;
      this.make = make;
      this.model = model;
      this.color = color;
      this.doors = doors;
      this.engine = engine;
      this.transmission = transmission;
      this.brakes = brakes;
      this.steering = steering;
      this.power = power;
      this.equipment = equipment;
      this.vin = vin;
      this.stock = stock;
      this.miles = miles;
      this.msrp = msrp;
      this.buyPrice = buyPrice;
      this.leasePrice = leasePrice;
      this.residual = residual;
      this.security = security;
      this.bankFee = bankFee;
      this.moneyDown = moneyDown;
      this.totalPayment = totalPayment;
      this.months = months;
      this.milesPerYear = milesPerYear;
      this.thereAfter = thereAfter;
      this.totalAtInception = totalAtInception;
      this.additionalInfo = additionalInfo;
      this.vehicleImage = vehicleImage;
      this.vehicleUrl = vehicleUrl;
  }

  function listing(thisCar){
    document.body.innerHTML += `
    <div class="specialContainer">
      <div class="specialContent leftContent">
        <h3 class="yearMake">${thisCar.year} ${thisCar.make}</h3>
        <h2 class="modelTrim">${thisCar.model}</h2>
        <img src="${thisCar.vehicleImage}" alt="volvo vehicle image" class="vehicleImage">
      </div>
      <div class="specialContent rightContent">
      <h3 class="leaseHead">Lease this vehicle for:</h3>
        <div class="leaseQuoteSection">

          <h1 class="lease">$${thisCar.leasePrice}</h1>
          <h3 class="monthsSections">/MO
            <br>
            ${thisCar.months} MOS
          </h3>
        </div>
        <h4 class="moneyDue">$${thisCar.totalAtInception} DUE AT SIGNING</h4>

        <p class="buyHead">Or buy for: <strong class="buyPrice">$${thisCar.buyPrice}</strong> </p>
        <a href="${thisCar.vehicleUrl}" class="linkButton" target="_blank">VIEW VEHICLE</a>

        <p class="disclaimer">VIN ${thisCar.vin}. Stk ${thisCar.stock}. ${thisCar.doors}, ${thisCar.engine}, ${thisCar.transmission},mileage: ${thisCar.miles} mi., air conditioning, power steering/ABS brakes/windows/locks/mirrors, cd/MP3, ${thisCar.equipment}. MSRP: $${thisCar.msrp}. $${thisCar.totalAtInception} due at inception. $${thisCar.moneyDown} down + 1st mo pymt $${thisCar.leasePrice}+ bank fee incl. + $0 sec dep. $${thisCar.totalPayment} ttl pymts/$${thisCar.residual} residual.${thisCar.additionalInfo} Prices include all costs to be paid by a consumer except for licensing, registration, taxes, and $299 doc. fee. Tier 1 credit approval thru primary lender. Lessee resp. for excess wear/tear. 10K mi. per yr/.25¢ per mi. over thereafter. See dealer for complete details. Not resp. for typos. Offers expire ${expiration}.</p>
      </div>
    </div>
    `

  }
vehicleArray[0] = new Vehicle(
  2017,
  'Volvo',
  'S60 T5 Dynamic AWD',
  '',
  '4DR',
  '4-cylinder',
  'Automatic AWD',
  'power brakes',
  'power steering',
  'power windows/locks/seats/mirrors,',
  'climate control, leather interior, heated seats, cruise control, drivers airbag, drivers airbag, dual airbags, side airbags, sunroof, alloy wheels',
  'H2426792',
  'VOH0148',
  '48',
  '37,970',
  '30,900',
  259,
  '18,885',
  '0',
  'inc',
  '259',
  '9,324',
  '36',
  '10',
  '.25',
  '259',
  'Includes $1000 Loyalty Cash',
  'vehicleImages/VOH0148.jpg',
  'http://www.volvocarsramsey.com/new/Volvo/2017-Volvo-S60-ramsey-nj-6c0162240a0e0adf3843aba0277776c7.htm');
  vehicleArray[1] = new Vehicle(
    2017,
    'Volvo',
    'S60 T5 Inscription AWD',
    '',
    '4DR',
    '4-cylinder',
    'Automatic AWD',
    'power brakes',
    'power steering',
    'power windows/locks/seats/mirrors,',
    '20" wheels, climate/convenience package, BLIS, climate control, leather interior, heated seats, cruise control, dual airbags, sunroof, spoiler, alloy wheels',
    'HB149000',
    'VOH0516',
    '39',
    '44,065',
    '36,900',
    295,
    '22,473',
    '0',
    'inc',
    '295',
    '10,620',
    '36',
    '10',
    '.25',
    '295',
    'Includes $1000 Loyalty Cash',
    'vehicleImages/VOH0516.jpg',
    'http://www.volvocarsramsey.com/new/Volvo/2017-Volvo-S60-ramsey-nj-bd345c5b0a0e0a6b505409aede057842.htm');
vehicleArray[2] = new Vehicle(
  2017,
  'Volvo',
  'XC60 T5 Inscription FWD',
  '',
  '5DR',
  '4-cylinder',
  'Automatic AWD',
  'power brakes',
  'power steering',
  'power windows/locks/seats/mirrors,',
  '20" wheels, heated seats, booster seat, climate control, leather interior, cruise control, dual airbags, side airbags, moonroof, keyless entry',
  'H2023106',
  'VOH0026',
  '33',
  '46,255',
  '37,600',
  359,
  '22,664',
  '0',
  'inc',
  '359',
  '14,001',
  '39',
  '10',
  '.25',
  '359',
  'Includes $1000 Loyalty Cash',
  'vehicleImages/VOH0026.jpg',
  'http://www.volvocarsramsey.com/new/Volvo/2017-Volvo-XC60-ramsey-nj-a281196f0a0e0a175fe7952972b56086.htm');

  vehicleArray[3] = new Vehicle(
    2017,
    'Volvo',
    'XC60 T6 Dynamic AWD',
    '',
    '5DR',
    '4-cylinder',
    'Automatic AWD',
    'power brakes',
    'power steering',
    'power windows/locks/seats/mirrors,',
    'preferred options package, climate control, leather interior, heated seats, cruise control, dual airbags, side airbags, moonroof',
    'H2031209',
    'VOH0044',
    '33',
    '50,015',
    '40,900',
    379,
    '25,007',
    '0',
    'inc',
    '379',
    '14,781',
    '39',
    '10',
    '.25',
    '379',
    'Includes $1000 Loyalty Cash',
    'vehicleImages/VOH0044.jpg',
    'http://www.volvocarsramsey.com/new/Volvo/2017-Volvo-XC60-ramsey-nj-28a392b40a0e0ae7308e83ecd90318e1.htm');
    vehicleArray[4] = new Vehicle(
      2017,
      'Volvo',
      'S90 T6 Momentum AWD',
      '',
      '4DR',
      '4-cylinder',
      'Automatic AWD',
      'power brakes',
      'power steering',
      'power windows/locks/seats/mirrors,',
      '19" wheels, momentum plus/vision/convenience package, air conditioning, climate control, leather interior, heated seats, cruise control, dual airbags, side airbags, sunroof, alloy wheels, keyless remote entry',
      'H1014776',
      'VOH0484',
      '74',
      '58,665',
      '48,900',
      489,
      '31,092',
      '0',
      'inc',
      '489',
      '17,604',
      '36',
      '10',
      '.25',
      '489',
      'Includes $500 Loyalty Cash.',
      'vehicleImages/VOH0484.jpg',
      'http://www.volvocarsramsey.com/new/Volvo/2017-Volvo-S90-ramsey-nj-89b4d60e0a0e0a1709e1ddd38d763333.htm');

    vehicleArray[5] = new Vehicle(
      2017,
      'Volvo',
      'S90 T6 Inscription AWD',
      '',
      '4DR',
      '4-cylinder',
      'Automatic AWD',
      'power brakes',
      'power steering',
      'power windows/locks/seats/mirrors,',
      '20" wheels, vision/climate/convenience package, climate control, leather interior, heated seats, cruise control, drivers airbag, dual airbags, side airbags, sunroof, alloy wheels, keyless remote entry',
      'H100693',
      'VOH0241',
      '5,701',
      '63,280',
      '53,200',
      579,
      '31,765',
      '0',
      'inc',
      '579',
      '20,844',
      '36',
      '10',
      '.25',
      '579',
      'Includes $500 Loyalty Cash',
      'vehicleImages/VOH0241.jpg',
      'http://www.volvocarsramsey.com/new/Volvo/2017-Volvo-S90-ramsey-nj-075a5e210a0e0a175837ce580fd241f3.htm');
    vehicleArray[6] = new Vehicle(
      2017,
      'Volvo',
      'XC90 T6 MOMENTUM PLUS AWD',
      '',
      '5DR',
      '4-cylinder',
      'Automatic AWD',
      'power brakes',
      'power steering',
      'power windows/locks/seats/mirrors,',
      '20" wheels, vision/climate package, booster seat, climate control, leather interior, heated seats, cruise control, drivers airbags, dual airbags, side airbags, 3rd row seat, moonroof, alloy wheels, keyless remote entry',
      'H1142900',
      'VOH0289',
      '47',
      '58,905',
      '53,100',
      679,
      '34,276',
      '0',
      'inc',
      '679',
      '34,164',
      '39',
      '10',
      '.25',
      '679',
      '',
      'vehicleImages/VOH0289.jpg',
      'http://www.volvocarsramsey.com/new/Volvo/2017-Volvo-XC90-ramsey-nj-73b6e03a0a0e0ae75af8e0847a5d6700.htm');
    vehicleArray[7] = new Vehicle(
      2017,
      'Volvo',
      'XC90 T6 INSCRIPTION AWD',
      '',
      '5DR',
      '4-cylinder',
      'Automatic AWD',
      'power brakes',
      'power steering',
      'power windows/locks/seats/mirrors,',
      '21" wheels, vision/climate/convenience package, booster seat, climate control, leather interior, heated seats, cruise control, drivers airbags, dual airbags, side airbags, 3rd row seat, moonroof, alloy wheels, keyless remote entry',
      'H1154756',
      'VOH0382',
      '4,505',
      '64,840',
      '58,700',
      799,
      '34,276',
      '0',
      'inc',
      '799',
      '31,161',
      '39',
      '10',
      '.25',
      '799',
      '',
      'vehicleImages/VOH0382.jpg',
      'http://www.volvocarsramsey.com/new/Volvo/2017-Volvo-XC90-ramsey-nj-66a1bbc10a0e0a6b652f5af0492d2960.htm');

      vehicleArray[8] = new Vehicle(
        2017,
        'Volvo',
        'XC90 T8 AWD',
        '',
        '5DR',
        '4-cylinder Hybrid',
        'Automatic AWD',
        'power brakes',
        'power steering',
        'power windows/locks/seats/mirrors,',
        '7 passenger, booster seat, vision/climate/convenience package, climate control, leather interior, heated seats, cruise control, drivers airbag, dual airbags, side airbags, 3rd row seat, sunroof, alloy wheels, keyless entry',
        'H1114908',
        'VOH0207',
        '37',
        '76,345',
        '61,900',
        849,
        '36,645',
        '0',
        'inc',
        '849',
        '33,111',
        '39',
        '10',
        '.25',
        '849',
        '',
        'vehicleImages/VOH0207.jpg',
        'http://www.volvocarsramsey.com/new/Volvo/2017-Volvo-XC90+Hybrid-ramsey-nj-de2c03a40a0e0ae85a0d6baeb70fac8c.htm');








  for (var i = 0; i < vehicleArray.length; i++) {
    listing(vehicleArray[i]);
  }



});
