$(document).ready(function(){

  const expiration =  '7/31/17';
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
    'S60 T5 FWD DYNAMIC',
    '',
    '4DR',
    '4-cylinder',
    'Automatic FWD',
    'power brakes',
    'power steering',
    'power windows/locks/seats/mirrors,',
    'air conditioning, climate control, leather interior, sunroof, heated seats, keyless drive',
    'H2434631',
    'VOH0381',
    '34',
    '35,970',
    '31,900',
    259,
    '16,546.20',
    '0',
    'inc',
    '2,700',
    '9,329',
    '36',
    '7.5',
    '.25',
    '2,959',
    '',
    'vehicleImages/VOH0381.jpeg',
    'http://www.volvocarsramsey.com/new/Volvo/2017-Volvo-S60-ramsey-nj-dd4bb81e0a0e0a175837ce580353bca6.htm');

  vehicleArray[1] = new Vehicle(
    //ONYX
    2017,
    'Volvo',
    'S60 T5 INSCRIPTION',
    '',
    '4DR',
    '4-cylinder',
    'Automatic AWD',
    'power brakes',
    'power steering',
    'power windows/locks/seats/mirrors,',
    'air conditioning, climate control, leather interior, sunroof, convenience/BLIS package, spare tire, all wheel drive',
    'HB155622',
    'VOH0674',
    '27',
    '42,705',
    '37,900',
    299,
    '20,071.35',
    '0',
    'inc',
    '2,700',
    '10,764',
    '36',
    '7.5',
    '.25',
    '2,999',
    '',
    'vehicleImages/VOH0674.jpeg',
    'http://www.volvocarsramsey.com/new/Volvo/2017-Volvo-S60-ramsey-nj-dd4bb81e0a0e0a175837ce580353bca6.htm');
  vehicleArray[2] = new Vehicle(
    2017,
    'Volvo',
    'S60 T5 INSCRIPTION AWD PLATINUM',
    '',
    '4DR',
    '4-cylinder',
    'Automatic AWD',
    'power brakes',
    'power steering',
    'power windows/locks/seats/mirrors,',
    'air conditioning, climate control, leather interior, heated seats, sunroof, platinum/BLIS/climate package',
    'HB129056',
    'VOH0154',
    '34',
    '46,850',
    '39,900',
    359,
    '20,961',
    '0',
    'inc',
    '2,700',
    '12,924',
    '36',
    '7.5',
    '.25',
    '3,059',
    '',
    'vehicleImages/VOH0154.jpeg',
    'http://www.volvocarsramsey.com/new/Volvo/2017-Volvo-S60-ramsey-nj-dd4bb81e0a0e0a175837ce580353bca6.htm');

    vehicleArray[3] = new Vehicle(
      // Osmium
      2017,
      'Volvo',
      'S60 CROSS COUNTRY T5 AWD',
      '',
      '4DR',
      '4-cylinder',
      'Automatic AWD',
      'power brakes',
      'power steering',
      'power windows/locks/seats/mirrors,',
      'air conditioning, climate control, leather interior, sunroof, heated seats, dual/side airbags',
      'H2004874',
      'VOH0612',
      '27',
      '47,670',
      '40,900',
      359,
      '22,881.60',
      '0',
      'inc',
      '2,700',
      '12,924',
      '36',
      '7.5',
      '.25',
      '3,059',
      '',
      'vehicleImages/VOH0612.jpeg',
      'http://www.volvocarsramsey.com/new/Volvo/2017-Volvo-S60-ramsey-nj-dd4bb81e0a0e0a175837ce580353bca6.htm');


  vehicleArray[4] = new Vehicle(
    2017,
    'Volvo',
    'XC60 T6 INSCRIPTION',
    '',
    '4DR',
    '4-cylinder',
    'Automatic AWD',
    'power brakes',
    'power steering',
    'power windows/locks/seats/mirrors,',
    'air conditioning, climate control, leather interior, heated seats, sunroof, climate/advanced package',
    'H2132415',
    'VOH0468',
    '0',
    '52,845',
    '43,400',
    399,
    '26,950.95',
    '0',
    'inc',
    '2,700',
    '12,924',
    '36',
    '7.5',
    '.25',
    '3,099',
    '',
    'vehicleImages/VOH0468.jpeg',
    'http://www.volvocarsramsey.com/new/Volvo/2017-Volvo-S60-ramsey-nj-dd4bb81e0a0e0a175837ce580353bca6.htm');
  vehicleArray[5] = new Vehicle(
    2017,
    'Volvo',
    'S90 T6 MOMENTUM PLUS AWD',
    '',
    '4DR',
    '4-cylinder',
    'Automatic AWD',
    'power brakes',
    'power steering',
    'power windows/locks/seats/mirrors,',
    'air conditioning, climate control, leather interior, heated seats, sunroof, 19" wheels, vision/convenience/protection package',
    'H1013129',
    'VOH0441',
    '29',
    '59,260',
    '49,900',
    399,
    '30,815',
    '0',
    'inc',
    '2,700',
    '14,364',
    '36',
    '10',
    '.25',
    '3,099',
    '',
    'vehicleImages/VOH0441.jpeg',
    'http://www.volvocarsramsey.com/new/Volvo/2017-Volvo-S60-ramsey-nj-dd4bb81e0a0e0a175837ce580353bca6.htm');

  vehicleArray[6] = new Vehicle(
    2017,
    'Volvo',
    'S90 T6 AWD INSCRIPTION',
    '',
    '4DR',
    '4-cylinder',
    'Automatic AWD',
    'power brakes',
    'power steering',
    'power windows/locks/seats/mirrors,',
    'air conditioning, climate control, leather interior, heated seats, sunroof, vision/climate/convenience package, bluetooth sound, protection package',
    'H1014131',
    'VOH0549',
    '706',
    '65,890',
    '55,900',
    499,
    '33,603',
    '0',
    'inc',
    '2,700',
    '17,964',
    '36',
    '10',
    '.25',
    '3,199',
    '',
    'vehicleImages/VOH0549.jpeg',
    'http://www.volvocarsramsey.com/new/Volvo/2017-Volvo-S60-ramsey-nj-dd4bb81e0a0e0a175837ce580353bca6.htm');

  vehicleArray[7] = new Vehicle(
    // ICE WHITE
    2017,
    'Volvo',
    'XC90 T6 AWD MOMENTUM',
    '',
    '4DR',
    '4-cylinder',
    'Automatic AWD',
    'power brakes',
    'power steering',
    'power windows/locks/seats/mirrors,',
    'air conditioning, climate control, leather interior, heated seats, sunroof, 20\" wheels, momentum plus, vision package',
    'H1157881',
    'VOH0398',
    '27',
    '57,620',
    '28,900',
    599,
    '34,578',
    '0',
    'inc',
    '2,700',
    '21,564',
    '36',
    '10',
    '.25',
    '3,299',
    '',
    'vehicleImages/VOH0398.jpeg',
    'http://www.volvocarsramsey.com/new/Volvo/2017-Volvo-S60-ramsey-nj-dd4bb81e0a0e0a175837ce580353bca6.htm');

    vehicleArray[8] = new Vehicle(
      2017,
      'Volvo',
      'V90 CROSS COUNTRY T6',
      '',
      '4DR',
      '4-cylinder',
      'Automatic FWD',
      'power brakes',
      'power steering',
      'power windows/locks/seats/mirrors,',
      'air conditioning, climate control, leather interior, sunroof, heated seats, 20" wheels, child seat, air suspension, convenience package',
      'H1007574',
      'VOH0654',
      '88',
      '61,730',
      '55,900',
      599,
      '35,186.10',
      '0',
      'inc',
      '2,700',
      '21,564',
      '36',
      '7.5',
      '.25',
      '3,899',
      '',
      'vehicleImages/VOH0654.jpeg',
      'http://www.volvocarsramsey.com/new/Volvo/2017-Volvo-S60-ramsey-nj-dd4bb81e0a0e0a175837ce580353bca6.htm');

    vehicleArray[9] = new Vehicle(
      // CWP
      2017,
      'Volvo',
      'XC90 T6 AWD INSCRIPTION',
      '',
      '4DR',
      '4-cylinder',
      'Automatic AWD',
      'power brakes',
      'power steering',
      'power windows/locks/seats/mirrors,',
      'air conditioning, climate control, leather interior, heated seats, moonroof, 21" wheels, bluetooth audio, vision/climate/convenience/protection package',
      'H1131724',
      'VOH0183',
      '5,185',
      '67,785',
      '59,800',
      799,
      '37,563',
      '0',
      'inc',
      '2,700',
      '28,764',
      '36',
      '10',
      '.25',
      '3,499',
      '',
      'vehicleImages/VOH0183.jpeg',
      'http://www.volvocarsramsey.com/new/Volvo/2017-Volvo-S60-ramsey-nj-dd4bb81e0a0e0a175837ce580353bca6.htm');















  for (var i = 0; i < vehicleArray.length; i++) {
    listing(vehicleArray[i]);
  }



});
