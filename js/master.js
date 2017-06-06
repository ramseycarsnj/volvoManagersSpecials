$(document).ready(function(){

  const expiration =  '6/30/17';
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

        <p class="disclaimer">VIN ${thisCar.vin}. Stk ${thisCar.stock}. ${thisCar.doors}, ${thisCar.engine}, ${thisCar.transmission},mileage: ${thisCar.miles} mi., air conditioning, power steering/ABS brakes/windows/locks/mirrors, cd/MP3, ${thisCar.equipment}. MSRP: $${thisCar.msrp}. $${thisCar.totalAtInception} due at inception. $${thisCar.moneyDown} down + 1st mo pymt $${thisCar.leasePrice}+ bank fee incl. + $0 sec dep. $${thisCar.totalPayment} ttl pymts/$${thisCar.residual} residual.${thisCar.additionalInfo} Prices include all costs to be paid by a consumer except for licensing, registration, taxes, and $299 doc. fee. Tier 1 credit approval thru primary lender. Lessee resp. for excess wear/tear. 7.5K mi. per yr/.25¢ per mi. over thereafter. See dealer for complete details. Not resp. for typos. Offers expire ${expiration}.</p>
      </div>
    </div>
    `



  }

  vehicleArray[0] = new Vehicle(
    2017,
    'Volvo',
    'S60 T5 Dynamic FWD',
    '',
    '4DR',
    '4-cylinder',
    'Automatic FWD',
    'power brakes',
    'power steering',
    'power windows/locks/seats/mirrors,',
    'air conditioning, climate control, leather interior, heated seats, moonroof',
    'H2428662',
    'VOH0200',
    '37',
    '37,970',
    '30,795',
    279,
    '18,988',
    '0',
    'inc',
    '2,500',
    '10,044',
    '36',
    '7.5',
    '.25',
    '2,500',
    'Includes $500 Loyalty Allowance',
    'vehicleImages/VOH0200.jpg',
    'http://www.volvocarsramsey.com/new/Volvo/2017-Volvo-S60-ramsey-nj-dd4bb81e0a0e0a175837ce580353bca6.htm');

    vehicleArray[1] = new Vehicle(
      2017,
      'Volvo',
      'XC60 T5 Inscription AWD',
      '',
      '4DR',
      '4-cylinder',
      'Automatic AWD',
      'power brakes',
      'power steering',
      'power windows/locks/seats/mirrors,',
      'air conditioning, climate control, heated seats, moonroof, 20" wheels, booster seat',
      'H2623106',
      'VOH0026',
      '47',
      '46,255',
      '38,295',
      349,
      '24,052',
      '2,500',
      'inc',
      '2,500',
      '12,564',
      '36',
      '7.5',
      '.25',
      '2,500',
      'Includes $500 Loyalty Allowance',
      'vehicleImages/VOH0026.jpg',
      'http://www.volvocarsramsey.com/new/Volvo/2017-Volvo-XC60-ramsey-nj-a281196f0a0e0a175fe7952972b56086.htm');

    vehicleArray[3] = new Vehicle(
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
      'air conditioning, climate control, leather interior, heated seats, moonroof, vision package, leather dash',
      'H1013028',
      'VOH0434',
      '81',
      '60,260',
      '49,995',
      459,
      '30,732',
      '0',
      'inc',
      '2,500',
      '16,524',
      '36',
      '7.5',
      '.25',
      '2,500',
      'Includes $500 Loyalty Allowance',
      'vehicleImages/VOH0434.jpg',
      'http://www.volvocarsramsey.com/new/Volvo/2017-Volvo-S90-ramsey-nj-1d8af4550a0e0adf16a64d1fc24f872e.htm');

    vehicleArray[2] = new Vehicle(
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
      'air conditioning, climate control, leather interior, heated seats, moonroof, vision/convenience package, momentum plus, 19" wheels',
      'H1015942',
      'VOH0550',
      '25',
      '59,260',
      '48,995',
      359,
      '30,815',
      '0',
      'inc',
      '2,500',
      '12,924',
      '36',
      '7.5',
      '.25',
      '2,500',
      'Includes $500 Loyalty Allowance',
      'vehicleImages/VOH0550.jpg',
      'http://www.volvocarsramsey.com/new/Volvo/2017-Volvo-S90-ramsey-nj-fac9a5fc0a0e0a17487440e2ee8fe71d.htm');

    vehicleArray[4] = new Vehicle(
      2017,
      'Volvo',
      'XC90 T6 Inscription AWD',
      '',
      '4DR',
      '4-cylinder',
      'Automatic AWD',
      'power brakes',
      'power steering',
      'power windows/locks/seats/mirrors,',
      'air conditioning, climate control, leather dash, heated seats, moonroof, vision/climate package, 21" wheels, booster seat',
      'H1176050',
      'VOH0564',
      '29',
      '63,990',
      '57,900',
      699,
      '37,114',
      '0',
      'inc',
      '2,500',
      '25,164',
      '36',
      '7.5',
      '.25',
      '2,500',
      '',
      'vehicleImages/VOH0564.jpg',
      'http://www.volvocarsramsey.com/new/Volvo/2017-Volvo-XC90-ramsey-nj-389608e10a0e0ae85b8927d0ad57fb9c.htm');


  for (var i = 0; i < vehicleArray.length; i++) {
    listing(vehicleArray[i]);
  }



});
