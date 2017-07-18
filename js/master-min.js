$(document).ready(function() {
    const e = "7/31/17";
    const o = [];
    function i(e, o, i, s, t, r, a, n, c, l, m, d, h, w, p, v, g, u, y, f, V, I, k, b, O, H, A, D, S) {
        this.year = e;
        this.make = o;
        this.model = i;
        this.color = s;
        this.doors = t;
        this.engine = r;
        this.transmission = a;
        this.brakes = n;
        this.steering = c;
        this.power = l;
        this.equipment = m;
        this.vin = d;
        this.stock = h;
        this.miles = w;
        this.msrp = p;
        this.buyPrice = v;
        this.leasePrice = g;
        this.residual = u;
        this.security = y;
        this.bankFee = f;
        this.moneyDown = V;
        this.totalPayment = I;
        this.months = k;
        this.milesPerYear = b;
        this.thereAfter = O;
        this.totalAtInception = H;
        this.additionalInfo = A;
        this.vehicleImage = D;
        this.vehicleUrl = S;
    }
    function s(o) {
        document.body.innerHTML += '<div class="specialContainer"><div class="specialContent leftContent"><h3 class="yearMake">' + o.year + "" + o.make + '</h3><h2 class="modelTrim">' + o.model + '</h2><img src="' + o.vehicleImage + '" alt="volvo vehicle image" class="vehicleImage"></div><div class="specialContent rightContent"><h3 class="leaseHead">Lease this vehicle for:</h3><div class="leaseQuoteSection"><h1 class="lease">$' + o.leasePrice + '</h1><h3 class="monthsSections">/MO<br>' + o.months + ' MOS</h3></div><h4 class="moneyDue">$' + o.totalAtInception + ' DUE AT SIGNING</h4><p class="buyHead">Or buy for: <strong class="buyPrice">$' + o.buyPrice + '</strong> </p><a href="' + o.vehicleUrl + '" class="linkButton" target="_blank">VIEW VEHICLE</a><p class="disclaimer">VIN ' + o.vin + ". Stk " + o.stock + ". " + o.doors + ", " + o.engine + ", " + o.transmission + ",mileage: " + o.miles + " mi., air conditioning, power steering/ABS brakes/windows/locks/mirrors, cd/MP3, " + o.equipment + ". MSRP: $" + o.msrp + ". $" + o.totalAtInception + " due at inception. $" + o.moneyDown + " down + 1st mo pymt $" + o.leasePrice + "+ bank fee incl. + $0 sec dep. $" + o.totalPayment + " ttl pymts/$" + o.residual + " residual. " + o.additionalInfo + ". Prices include all costs to be paid by a consumer except for licensing, registration, taxes, and $299 doc. fee. Tier 1 credit approval thru primary lender. Lessee resp. for excess wear/tear. 7.5K mi. per yr/.25¢ per mi. over thereafter. See dealer for complete details. Not resp. for typos. Offers expire " + e + ".</p></div></div>";
    }
    o[0] = new i(2017, "Volvo", "S60 T5 FWD DYNAMIC", "", "4DR", "4-cylinder", "Automatic FWD", "power brakes", "power steering", "power windows/locks/seats/mirrors,", "air conditioning, climate control, leather interior, sunroof, heated seats, keyless drive", "H2434631", "VOH0381", "34", "35,970", "31,900", 224, "16,546.20", "0", "inc", "2,700", "8,064", "36", "7.5", ".25", "2,959", "", "vehicleImages/VOH0381.jpeg", "http://www.volvocarsramsey.com/new/Volvo/2017-Volvo-S60-ramsey-nj-65c1bd250a0e0ae8192de0eb15ace27e.htm");
    o[1] = new i(2017, "Volvo", "S60 T5 INSCRIPTION", "", "4DR", "4-cylinder", "Automatic AWD", "power brakes", "power steering", "power windows/locks/seats/mirrors,", "air conditioning, climate control, leather interior, sunroof, convenience/BLIS package, spare tire, all wheel drive", "HB155622", "VOH0674", "27", "42,705", "37,900", 264, "20,071.35", "0", "inc", "2,700", "9,504", "36", "7.5", ".25", "2,999", "", "vehicleImages/VOH0674.jpeg", "http://www.volvocarsramsey.com/new/Volvo/2017-Volvo-S60+Inscription-ramsey-nj-590829aa0a0e0adf4dcd53fb67b96faf.htm");
    o[2] = new i(2017, "Volvo", "S60 T5 INSCRIPTION AWD PLATINUM", "", "4DR", "4-cylinder", "Automatic AWD", "power brakes", "power steering", "power windows/locks/seats/mirrors,", "air conditioning, climate control, leather interior, heated seats, sunroof, platinum/BLIS/climate package", "HB129056", "VOH0154", "34", "46,850", "39,900", 324, "20,961", "0", "inc", "2,700", "11,664", "36", "7.5", ".25", "3,059", "", "vehicleImages/VOH0154.jpg", "http://www.volvocarsramsey.com/new/Volvo/2017-Volvo-S60+Inscription-ramsey-nj-7127fd680a0e0ae717548d630f7f8faf.htm");
    o[3] = new i(2017, "Volvo", "S60 CROSS COUNTRY T5 AWD", "", "4DR", "4-cylinder", "Automatic AWD", "power brakes", "power steering", "power windows/locks/seats/mirrors,", "air conditioning, climate control, leather interior, sunroof, heated seats, dual/side airbags", "H2004874", "VOH0612", "27", "47,670", "40,900", 324, "22,881.60", "0", "inc", "2,700", "11,664", "36", "7.5", ".25", "3,059", "", "vehicleImages/VOH0612.jpeg", "http://www.volvocarsramsey.com/new/Volvo/2017-Volvo-S60+Cross+Country-ramsey-nj-a9ddb1db0a0e0ae80954dfccb4674224.htm");
    o[4] = new i(2017, "Volvo", "XC60 T6 INSCRIPTION", "", "4DR", "4-cylinder", "Automatic AWD", "power brakes", "power steering", "power windows/locks/seats/mirrors,", "air conditioning, climate control, leather interior, heated seats, sunroof, climate/advanced package", "H2132415", "VOH0468", "0", "52,845", "43,400", 399, "26,950.95", "0", "inc", "2,700", "12,924", "36", "7.5", ".25", "3,099", "", "vehicleImages/VOH0468.jpeg", "http://www.volvocarsramsey.com/new/Volvo/2017-Volvo-XC60-ramsey-nj-848e8f930a0e0a1709e1ddd37d7ffa61.htm");
    o[5] = new i(2017, "Volvo", "S90 T6 MOMENTUM PLUS AWD", "", "4DR", "4-cylinder", "Automatic AWD", "power brakes", "power steering", "power windows/locks/seats/mirrors,", 'air conditioning, climate control, leather interior, heated seats, sunroof, 19" wheels, vision/convenience/protection package', "H1013129", "VOH0441", "29", "59,260", "49,900", 399, "30,815", "0", "inc", "2,700", "14,364", "36", "10", ".25", "3,099", "", "vehicleImages/VOH0441.jpeg", "http://www.volvocarsramsey.com/new-inventory/index.htm");
    o[6] = new i(2017, "Volvo", "S90 T6 AWD INSCRIPTION", "", "4DR", "4-cylinder", "Automatic AWD", "power brakes", "power steering", "power windows/locks/seats/mirrors,", "air conditioning, climate control, leather interior, heated seats, sunroof, vision/climate/convenience package, bluetooth sound, protection package", "H1014131", "VOH0549", "706", "65,890", "55,900", 499, "33,603", "0", "inc", "2,700", "17,964", "36", "10", ".25", "3,199", "", "vehicleImages/VOH0549.jpeg", "http://www.volvocarsramsey.com/new-inventory/index.htm");
    o[7] = new i(2017, "Volvo", "XC90 T6 AWD MOMENTUM", "", "4DR", "4-cylinder", "Automatic AWD", "power brakes", "power steering", "power windows/locks/seats/mirrors,", 'air conditioning, climate control, leather interior, heated seats, sunroof, 20" wheels, momentum plus, vision package', "H1157881", "VOH0398", "27", "57,620", "52,620", 549, "34,578", "0", "inc", "2,700", "19,764", "36", "10", ".25", "3,299", "Includes $3,000 XC90 conquest. Conquest applies to current audi,bmw,m/b,acura,lexus infiniti,cadillac,lincoln,jeep lessees", "vehicleImages/VOH0398.jpeg", "http://www.volvocarsramsey.com/new/Volvo/2017-Volvo-XC90-ramsey-nj-88f283c40a0e0adf47fda79cfecd02c5.htm");
    o[8] = new i(2017, "Volvo", "V90 CROSS COUNTRY T6", "", "4DR", "4-cylinder", "Automatic FWD", "power brakes", "power steering", "power windows/locks/seats/mirrors,", 'air conditioning, climate control, leather interior, sunroof, heated seats, 20" wheels, child seat, air suspension, convenience package', "H1007574", "VOH0654", "88", "61,730", "55,900", 599, "35,186.10", "0", "inc", "2,700", "21,564", "36", "7.5", ".25", "3,899", "", "vehicleImages/VOH0654.jpeg", "http://www.volvocarsramsey.com/new/Volvo/2017-Volvo-V90+Cross+Country-ramsey-nj-590858420a0e0adf4dcd53fb7ccf2d3f.htm");
    for (var t = 0; t < o.length; t++) {
        s(o[t]);
    }
});