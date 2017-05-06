$(document).ready(function(){

  const expiration =  '5/31/17';
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
    'heated seats, keyless drive',
    'H2434631',
    'VOH0381',
    '25',
    '35,970',
    '29,900',
    239,
    '17,985',
    '0',
    'inc',
    '0',
    '8,604',
    '36',
    '7.5',
    '.25',
    '239',
    'Includes $1000 Loyalty Allowance',
    'vehicleImages/VOH0381.jpg',
    'http://www.volvocarsramsey.com/new/Volvo/2017-Volvo-S60-ramsey-nj-65c1bd250a0e0ae8192de0eb15ace27e.htm');


  vehicleArray[1] = new Vehicle(
    2017,
    'Volvo',
    'V60 T5 Premier',
    '',
    '5DR hatch',
    '4-cylinder',
    'Automatic AWD',
    'power brakes',
    'power steering',
    'power windows/locks/seats/mirrors,',
    'heated seats, convenience/protection package, BLIS',
    'H1336173',
    'VOH0219',
    '37',
    '42,485',
    '34,900',
    328,
    '21,667',
    '0',
    'inc',
    '0',
    '11,808',
    '36',
    '7.5',
    '.25',
    '328',
    'Includes $1000 Loyalty Allowance',
    'vehicleImages/VOH0219.jpg',
    'http://www.volvocarsramsey.com/new/Volvo/2017-Volvo-V60-ramsey-nj-e954ec7f0a0e0ae75af8e084392dfa32.htm');

  vehicleArray[2] = new Vehicle(
    2017,
    'Volvo',
    'XC60 T5 Inscription',
    '',
    '4DR',
    '4-cylinder',
    'Automatic AWD',
    'power brakes',
    'power steering',
    'power windows/locks/seats/mirrors,',
    'heated seats, child booster seat',
    'H2101360',
    'VOH0361',
    '36',
    '45,505',
    '36,900',
    387,
    '23,208',
    '0',
    'inc',
    '0',
    '12,932',
    '36',
    '7.5',
    '.25',
    '387',
    'Includes $1000 Loyalty Allowance',
    'vehicleImages/VOH0361.jpg',
    'http://www.volvocarsramsey.com/new/Volvo/2017-Volvo-XC60-ramsey-nj-40d9785b0a0e0adf3e0eb2a56443193e.htm');

  vehicleArray[3] = new Vehicle(
    2017,
    'Volvo',
    'S60 T5 AWD Inscription',
    '',
    '4DR',
    '4-cylinder',
    'Automatic AWD',
    'power brakes',
    'power steering',
    'power windows/locks/seats/mirrors,',
    'climate package, BLIS, platinum edition',
    'HB150497',
    'VOH0600',
    '37',
    '46,815',
    '39,400',
    387,
    '22,939',
    '0',
    'inc',
    '387',
    '13,932',
    '36',
    '7.5',
    '.25',
    '774xw',
    'Includes $1000 Volvo Loyalty',
    'vehicleImages/VOH0600.jpeg',
    'http://www.volvocarsramsey.com/new/Volvo/2017-Volvo-S60+Inscription-ramsey-nj-61c8e1620a0e0a6b3f70d6d875a61387.htm');


  vehicleArray[4] = new Vehicle(
    2017,
    'Volvo',
    'S90 T6 AWD Momentum',
    '',
    '4DR',
    '4-cylinder',
    'Automatic AWD',
    'power brakes',
    'power steering',
    'power windows/locks/seats/mirrors,',
    '19/" alloy wheels, vision/convenience/protection package',
    'H1015381',
    'VOH0551',
    '37',
    '59,260',
    '47,900',
    489,
    '30,815',
    '0',
    'inc',
    '0',
    '17,604',
    '36',
    '7.5',
    '.25',
    '489',
    'Includes $500 Volvo Loyalty',
    'vehicleImages/VOH0551.jpg',
    'http://www.volvocarsramsey.com/new/Volvo/2017-Volvo-S90-ramsey-nj-fac9a7380a0e0a17487440e2469cb2b1.htm');


  vehicleArray[5] = new Vehicle(
    2017,
    'Volvo',
    'XC90 T8 Inscription',
    '',
    '5DR hatch',
    '4-cylinder',
    'Automatic AWD',
    'power brakes',
    'power steering',
    'power windows/locks/seats/mirrors,',
    'vision/convenience/climate package, booster seat',
    'H1114908',
    'VOH0207',
    '51',
    '76,345',
    '61,315',
    699,
    '37,409',
    '0',
    'inc',
    '0',
    '27,261',
    '39',
    '7.5',
    '.25',
    '4,799',
    'Buy it Now price is $65,900 plus a $4585 goverment rebate',
    'vehicleImages/VOH0207.jpg',
    'http://www.volvocarsramsey.com/new/Volvo/2017-Volvo-XC90+Hybrid-ramsey-nj-de2c03a40a0e0ae85a0d6baeb70fac8c.htm');



  for (var i = 0; i < vehicleArray.length; i++) {
    listing(vehicleArray[i]);
  }



});
