$(document).ready(function(){

  const expiration =  '3/31/17';
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

        <a href="${thisCar.vehicleUrl}" class="linkButton" target="_blank">VIEW VEHICLE</a>

        <p class="disclaimer">VIN ${thisCar.vin}. Stk ${thisCar.stock}. ${thisCar.doors}, ${thisCar.engine}, ${thisCar.transmission},mileage: ${thisCar.miles} mi., air conditioning, power steering/ABS brakes/windows/locks/mirrors, cd/MP3, ${thisCar.equipment}. MSRP: $${thisCar.msrp}. $${thisCar.totalAtInception} due at inception. $${thisCar.moneyDown} down + 1st mo pymt $${thisCar.leasePrice}+ bank fee incl. + $0 sec dep. $${thisCar.totalPayment} ttl pymts/$${thisCar.residual} residual.${thisCar.additionalInfo} Prices include all costs to be paid by a consumer except for licensing, registration, taxes, and $299 doc. fee. Tier 1 credit approval thru primary lender. Lessee resp. for excess wear/tear. 10K mi. per yr/.25¢ per mi. over thereafter. See dealer for complete details. Not resp. for typos. Offers expire ${expiration}.</p>
      </div>
    </div>
    `

  }

  vehicleArray[0] = new Vehicle(
    2017,
    'Volvo',
    'S60 T5 AWD DYNAMIC',
    '',
    '4DR',
    '4-cylinder',
    'Automatic',
    'power brakes',
    'power steering',
    'power windows/locks/seats/mirrors,',
    'heated seats, vision package, navigation',
    'H2430591',
    'VOH0334',
    '18',
    '40,850',
    328,
    '20,425',
    '0',
    'inc',
    '0',
    '11,808',
    '36',
    '10',
    '.25',
    '0',
    ' Payment Includes $1,000 Conquest Allowance.',
    'vehicleImages/VOH0334.jpg',
    'http://www.volvocarsramsey.com/new/Volvo/2017-Volvo-S60-ramsey-nj-e5e2a1d70a0e0adf2f7fe0bb8d6fbfa6.htm');
  vehicleArray[1] = new Vehicle(
    2017,
    'Volvo',
    'XC60 T5 AWD DYNAMIC',
    '',
    '4DR',
    '4-cylinder',
    'Automatic',
    'power brakes',
    'power steering',
    'power windows/locks/seats/mirrors,',
    'climate/protection package, preferred option',
    'H2031350',
    'VOH0003',
    '6,860',
    '47,305',
    399,
    '21,479',
    '0',
    'inc',
    '0',
    '14,364',
    '36',
    '10',
    '.25',
    '0',
    'Includes $1000 conquest bonus cash',
    'vehicleImages/VOH0003.jpg',
    'http://www.volvocarsramsey.com/new/Volvo/2017-Volvo-XC60-ramsey-nj-29747b590a0e0a17689cb50d0fef227e.htm');
  vehicleArray[2] = new Vehicle(
    2017,
    'Volvo',
    'XC60 T6 DYNAMIC',
    '',
    '4DR',
    '4-cylinder',
    'Automatic',
    'power brakes',
    'power steering',
    'power windows/locks/seats/mirrors,',
    'heated seats, preffered option package',
    'H2099342',
    'VOH0358',
    '2,200',
    '50,045',
    408,
    '26,317',
    '0',
    'inc',
    '0',
    '14,688',
    '36',
    '10',
    '.25',
    '0',
    'Includes $1000 conquest bonus cash',
    'vehicleImages/VOH0358.jpg',
    'http://www.volvocarsramsey.com/new/Volvo/2017-Volvo-XC60-ramsey-nj-316668000a0e0ae8779b2f8b848745de.htm');
  vehicleArray[3] = new Vehicle(
    2017,
    'Volvo',
    'S60 T6 R-DESIGN',
    '',
    '4DR',
    '4-cyl',
    'Automatic',
    'abs breaks,',
    'power steering,',
    'power windows/locks/seats/mirrors,',
    'BLIS, 19" Ixion Wheels, Sport Chassis, Platinum Edition',
    'H243344',
    'VOH0356',
    20,
    '49,320',
    438,
    '24,166',
    0,
    'included',
    0,
    '15,768',
    36,
    10,
    '.25',
    0,
    ' Payment Includes $1,000 Conquest Allowance.',
    'vehicleImages/VOH0356.jpg',
    'http://www.volvocarsramsey.com/new/Volvo/2017-Volvo-S60-ramsey-nj-2c400ee10a0e0adf3e0eb2a54872ba9f.htm');
    vehicleArray[4] = new Vehicle(
      2017,
      'Volvo',
      'S90 T6 AWD MOMENTUM PLUS',
      '',
      '4DR',
      '4-cylinder',
      'Automatic',
      'power brakes',
      'power steering',
      'power windows/locks/seats/mirrors,',
      'vision package, pilot assist, rear camera, park assist',
      'H1015278',
      'VOH0455',
      '41',
      '57,190',
      458,
      '30,310',
      '0',
      'inc',
      '3,000',
      '16,488',
      '36',
      '10',
      '.25',
      '3,458',
      '',
      'vehicleImages/VOH0455.jpg',
      'http://www.volvocarsramsey.com/new/Volvo/2017-Volvo-S90-ramsey-nj-7a41c35a0a0e0a6b1b4f73a5d3c43d7b.htm');

  vehicleArray[5] = new Vehicle(
    2017,
    'Volvo',
    'XC90 T5 R-DESIGN',
    '',
    '5DR hatch',
    '4-cylinder',
    'Automatic',
    'abs breaks',
    'power steering',
    'power windows/locks/seats/mirrors,',
    '20" 5 Spoke Rims',
    'H1151111',
    'VOH0350',
    '37',
    '60,165',
    578,
    '34,895',
    '0',
    'inc',
    '4,100',
    '22,542',
    '39',
    '10',
    '.25',
    '4,678',
    '',
    'vehicleImages/VOH0350.jpg',
    'http://www.volvocarsramsey.com/new/Volvo/2017-Volvo-XC90-ramsey-nj-17a6ad140a0e0ae8779b2f8b29d5524a.htm');
  vehicleArray[6] = new Vehicle(
    2017,
    'Volvo',
    'XC90 T6 T8 INSCRIPTION HYBRID',
    '',
    '5DR hatch',
    '4-cylinder',
    '8 spd Automatic',
    'power brakes',
    'power steering',
    'power windows/locks/seats/mirrors,',
    'vision/climate/convenience package, booster seat',
    'H1114908',
    'VOH0207',
    '37',
    '76,345',
    898,
    '36,645',
    '0',
    'inc',
    '4,100',
    '35,022',
    '39',
    '10',
    '.25',
    '4,998',
    '',
    'vehicleImages/VOH0207.jpg',
    'http://www.volvocarsramsey.com/new/Volvo/2017-Volvo-XC90+Hybrid-ramsey-nj-de2c03a40a0e0ae85a0d6baeb70fac8c.htm');





  for (var i = 0; i < vehicleArray.length; i++) {
    listing(vehicleArray[i]);
  }



});
