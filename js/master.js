$(document).ready(function(){

  const expiration =  '2/28/17';
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

        <a href="${thisCar.vehicleUrl}" class="linkButton">VIEW VEHICLE</a>

        <p class="disclaimer">VIN ${thisCar.vin}. Stk ${thisCar.stock}. ${thisCar.doors}, ${thisCar.engine}, ${thisCar.transmission},mileage: ${thisCar.miles} mi., air conditioning, power steering/ABS brakes/windows/locks/mirrors, cd/MP3, ${thisCar.equipment}. MSRP: $${thisCar.msrp}. $${thisCar.totalAtInception} due at inception. $${thisCar.moneyDown} down + 1st mo pymt $${thisCar.leasePrice}+ bank fee incl. + $0 sec dep. $${thisCar.totalPayment} ttl pymts/$${thisCar.residual} residual.${thisCar.additionalInfo} Prices include all costs to be paid by a consumer except for licensing, registration, taxes, and $299 doc. fee. Tier 1 credit approval thru primary lender. Lessee resp. for excess wear/tear. 10K mi. per yr/.25¢ per mi. over thereafter. See dealer for complete details. Not resp. for typos. Offers expire ${expiration}.</p>
      </div>
    </div>
    `

  }


  vehicleArray[0] = new Vehicle(
    2017,
    'Volvo',
    'S60 T5 INSCRIPTION',
    'Ice Silver',
    '4DR',
    '4-cyl',
    'Automatic',
    'abs breaks,',
    'power steering,',
    'power windows/locks/seats/mirrors,',
    'heated seats,keyless drive, metallic paint',
    'HB138036',
    'VOH0359',
    27,
    '41,605',
    345,
    '21,218',
    0,
    'included',
    0,
    '12,420',
    36,
    10,
    '.25',
    0,
    ' Payment Includes $1,000 Conquest Allowance.',
    'vehicleImages/VOH0359.jpg',
    'http://www.volvocarsramsey.com/new/Volvo/2017-Volvo-S60-ramsey-nj-40d978380a0e0adf3e0eb2a5544a4cb2.htm');

  vehicleArray[2] = new Vehicle(
    2017,
    'Volvo',
    'XC60 T6 DYNAMIC AWD',
    'Ice White',
    '5DR hatch',
    '4-cylinder',
    'Automatic',
    'abs breaks',
    'power steering',
    'power windows/locks/seats/mirrors,',
    'heated seats, park assist, rear camera',
    'H2028510',
    'VOH0104',
    '31',
    '49,455',
    445,
    '26,211',
    '0',
    'inc',
    '0',
    '16,020',
    '36',
    '10',
    '.25',
    '0',
    ' Payment Includes $1,000 Conquest Allowance.',
    'vehicleImages/VOH0104.jpg',
    'http://www.volvocarsramsey.com/new/Volvo/2017-Volvo-XC60-ramsey-nj-a3ff0c390a0e0a6b278b2504bd62a4af.htm');
  vehicleArray[4] = new Vehicle(
    2017,
    'Volvo',
    'XC90 T6 MOMENTUM PLUS',
    'Onyx Black',
    '5DR hatch',
    '4-cylinder',
    '8 spd Automatic',
    'power brakes',
    'power steering',
    'power windows/locks/seats/mirrors,',
    '7 passenger, vision package, booster seat',
    'H1157440',
    'VOH0415',
    '38',
    '57,090',
    559,
    '33,683',
    '0',
    'inc',
    '4,100',
    '21,801',
    '39',
    '10',
    '.25',
    '4,659',
    '',
    'vehicleImages/VOH0415.jpg',
    'http://www.volvocarsramsey.com/new/Volvo/2017-Volvo-XC90-ramsey-nj-bd5270f60a0e0a1725c5dc929a99331b.htm');
  vehicleArray[5] = new Vehicle(
    2017,
    'Volvo',
    'XC90 T5 R-DESIGN',
    'Onyx Black',
    '5DR hatch',
    '4-cylinder',
    '8 spd Automatic',
    'power brakes',
    'power steering',
    'power windows/locks/seats/mirrors,',
    'vision/climate/convenience package',
    'H115111',
    'VOH0350',
    '37',
    '60,165',
    579,
    '35,497',
    '0',
    'inc',
    '4,100',
    '22,581',
    '39',
    '10',
    '.25',
    '4,679',
    '',
    'vehicleImages/VOH0350.jpg',
    'http://www.volvocarsramsey.com/new/Volvo/2017-Volvo-XC90-ramsey-nj-17a6ad140a0e0ae8779b2f8b29d5524a.htm');
  vehicleArray[6] = new Vehicle(
    2017,
    'Volvo',
    'XC90 T8 INSCRIPTION',
    'Ice White',
    '5DR hatch',
    'engine',
    'transmission',
    'power brakes',
    'power steering',
    'power windows/locks/seats/mirrors,',
    'vision/climate/convenience package, heads up display',
    'H1114908',
    'VOH0207',
    '72',
    '76,345',
    799,
    '36,645',
    '0',
    'inc',
    '4,100',
    '31,161',
    '39',
    '10',
    '.25',
    '4899',
    'additional info',
    'vehicleImages/VOH0207.jpg',
    'http://www.volvocarsramsey.com/new/Volvo/2017-Volvo-XC90+Hybrid-ramsey-nj-de2c03a40a0e0ae85a0d6baeb70fac8c.htm');
  vehicleArray[1] = new Vehicle(
    2017,
    'Volvo',
    'V60 T5 PREMIER',
    'Ice White',
    '5DR wagon',
    '4-cylinder',
    '8-speed Automatic',
    'power brakes',
    'power steering',
    'power windows/locks/seats/mirrors,',
    'BLIS, convenience package, heated seats',
    'H1336173',
    'VOH0219',
    '31',
    '42,485',
    379,
    '22,092',
    '0',
    'inc',
    '0',
    '13,644',
    '36',
    '10',
    '.25',
    '0',
    ' Payment Includes $1,000 Conquest Allowance.',
    'vehicleImages/VOH0219.jpg',
    'http://www.volvocarsramsey.com/new/Volvo/2017-Volvo-V60-ramsey-nj-e954ec7f0a0e0ae75af8e084392dfa32.htm');
  vehicleArray[3] = new Vehicle(
    2017,
    'Volvo',
    'S90 T6 MOMENTUM AWD',
    'Onyx Black',
    '4DR',
    '4-cylinder',
    '8-speed Automatic',
    'power brakes',
    'power steering',
    'power windows/locks/seats/mirrors,',
    'vision/climate/convenience package',
    'H1004640',
    'VOH0169',
    '37',
    '59,205',
    499,
    '30,194',
    '0',
    'inc',
    '0',
    '19,461',
    '39',
    '10',
    '.25',
    '499',
    '',
    'vehicleImages/VOH0169.jpg',
    'http://www.volvocarsramsey.com/new/Volvo/2017-Volvo-S90-ramsey-nj-8ae197f10a0e0a173bd765f24d400706.htm');


  for (var i = 0; i < vehicleArray.length; i++) {
    listing(vehicleArray[i]);
  }



});
