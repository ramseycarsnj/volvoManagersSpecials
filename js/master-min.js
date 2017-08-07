$(document).ready(function() {
    const e = "8/31/17";
    const o = [];
    function s(e, o, s, r, i, a, t, n, c, l, m, d, w, p, h, y, v, g, u, b, V, f, k, H, I, D, O, A, S) {
        this.year = e;
        this.make = o;
        this.model = s;
        this.color = r;
        this.doors = i;
        this.engine = a;
        this.transmission = t;
        this.brakes = n;
        this.steering = c;
        this.power = l;
        this.equipment = m;
        this.vin = d;
        this.stock = w;
        this.miles = p;
        this.msrp = h;
        this.buyPrice = y;
        this.leasePrice = v;
        this.residual = g;
        this.security = u;
        this.bankFee = b;
        this.moneyDown = V;
        this.totalPayment = f;
        this.months = k;
        this.milesPerYear = H;
        this.thereAfter = I;
        this.totalAtInception = D;
        this.additionalInfo = O;
        this.vehicleImage = A;
        this.vehicleUrl = S;
    }
    function r(o) {
        document.body.innerHTML += '<div class="specialContainer"><div class="specialContent leftContent"><h3 class="yearMake">' + o.year + "" + o.make + '</h3><h2 class="modelTrim">' + o.model + '</h2><img src="' + o.vehicleImage + '" alt="volvo vehicle image" class="vehicleImage"></div><div class="specialContent rightContent"><h3 class="leaseHead">Lease this vehicle for:</h3><div class="leaseQuoteSection"><h1 class="lease">$' + o.leasePrice + '</h1><h3 class="monthsSections">/MO<br>' + o.months + ' MOS</h3></div><h4 class="moneyDue">$' + o.totalAtInception + " DUE AT SIGNING</h4>" + o.buyPrice + '<a href="' + o.vehicleUrl + '" class="linkButton" target="_blank">VIEW VEHICLE</a><p class="disclaimer">VIN ' + o.vin + ". Stk " + o.stock + ". " + o.doors + ", " + o.engine + ", " + o.transmission + ",mileage: " + o.miles + " mi., air conditioning, power steering/ABS brakes/windows/locks/mirrors, cd/MP3, " + o.equipment + ". MSRP: $" + o.msrp + ". $" + o.totalAtInception + " due at inception. $" + o.moneyDown + " down + 1st mo pymt $" + o.leasePrice + "+ bank fee incl. + $0 sec dep. $" + o.totalPayment + " ttl pymts/$" + o.residual + " residual. " + o.additionalInfo + ". Prices include all costs to be paid by a consumer except for licensing, registration, taxes, and $299 doc. fee. Tier 1 credit approval thru primary lender. Lessee resp. for excess wear/tear. 7.5K mi. per yr/.25¢ per mi. over thereafter. See dealer for complete details. Not resp. for typos. Offers expire " + e + ".</p></div></div>";
    }
    o[0] = new s(2017, " Volvo", "S60 Dynamic T5 FWD", "White", "4DR wagon", "4-cylinder", "Automatic FWD", "power brakes", "power steering", "power windows/locks/seats/mirrors,", "air conditioning, climate control,Keyless Drive, heated seats", "H243", "VOH0560", "25", "35,970", '<p class="buyHead">Or buy for: <strong class="buyPrice">$30,500</strong> </p>', 199, "19,423", "0", "inc", "2,900", "4,776", "24", "7.5", ".25", "3,099", "Includes $500 Loyalty", "vehicleImages/VOH0560.jpg", "http://www.volvocarsramsey.com/new/Volvo/2017-Volvo-S60-ramsey-nj-fff0238f0a0e0a6b0f6fe52281c1e9e2.htm");
    o[1] = new s(2017, " Volvo", "S60 T5 Dynamic AWD", "White", "4DR", "4-cylinder", "Automatic AWD", "power brakes", "power steering", "power windows/locks/seats/mirrors,", "air conditioning, climate control, heated seats, Keyless Drive", "H2428662", "VOH0200", "39", "37,970", '<p class="buyHead">Or buy for: <strong class="buyPrice">$31,900</strong> </p>', 229, "20,503", "0", "inc", "2,900", "5,496", "24", "7.5", ".25", "3,129", "Includes Owner Loyalty", "vehicleImages/VOH0200.jpg", "http://www.volvocarsramsey.com/new/Volvo/2017-Volvo-S60-ramsey-nj-dd4bb81e0a0e0a175837ce580353bca6.htm");
    o[2] = new s(2017, " Volvo", "S60 Inscription AWD", "Silver", "4DR", "4-cylinder", "Automatic AWD", "power brakes", "power steering", "power windows/locks/seats/mirrors,", "air conditioning, climate control, heated seats, convenience package, BLIS", "HB195254", "VOH0676", "29", "42,615", "", 249, "23,018", "0", "inc", "2,900", "5,976", "24", "10", ".25", "3,149", "Includes Owner Loyalty", "vehicleImages/VOH0676.jpg", "http://www.volvocarsramsey.com/new/Volvo/2017-Volvo-S60+Inscription-ramsey-nj-91b122c40a0e0a6b3b5b9d259f99d5aa.htm");
    o[3] = new s(2017, " Volvo", "V60 T5 FWD Premier", "Black", "4DR", "4-cylinder", "Automatic FWD", "power brakes", "power steering", "power windows/locks/seats/mirrors,", "air conditioning, climate control, heated seats, convenience/protection package, BLIS", "H1337055", "VOH0220", "37", "42,485", '<p class="buyHead">Or buy for: <strong class="buyPrice">$35,900</strong> </p>', 299, "23,366", "0", "inc", "2,900", "7,176", "24", "10", ".25", "3,199", "Includes Owner Loyalty", "vehicleImages/VOH0220.jpg", "http://www.volvocarsramsey.com/new/Volvo/2017-Volvo-V60-ramsey-nj-e954eccb0a0e0ae75af8e084cb2c93f5.htm");
    o[4] = new s(2017, " Volvo", "S60 T5 Inscription Platinum AWD", "Maple", "4DR", "4-cylinder", "Automatic AWD", "power brakes", "power steering", "power windows/locks/seats/mirrors,", "air conditioning, climate control, platinum/climate package, BLIS", "HB196284", "VOH0696", "21", "46,220", '<p class="buyHead">Or buy for: <strong class="buyPrice">$39,700</strong> </p>', 299, "24,034", "0", "inc", "2,900", "7,176", "24", "10", ".25", "3,199", "Includes Owner Loyalty", "vehicleImages/VOH0696.jpg", "http://www.volvocarsramsey.com/new/Volvo/2017-Volvo-S60+Inscription-ramsey-nj-dedfb35b0a0e0ae7513b8f851b66e6a9.htm");
    o[5] = new s(2017, " Volvo", "XC60 Dynamic T6 AWD ", "Sand", "4DR", "4-cylinder", "Automatic AWD", "power brakes", "power steering", "power windows/locks/seats/mirrors,", 'air conditioning, climate control, heated seats, 20" wheels, booster seat, preferred options', "H02220816", "VOH0703", "39", "50,890", "", 359, "29,516", "0", "inc", "2,900", "8,616", "24", "7.5", ".25", "3,259", "Includes Owner Loyalty", "vehicleImages/VOH0703.jpg", "http://www.volvocarsramsey.com/new/Volvo/2017-Volvo-XC60-ramsey-nj-7e95e11f0a0e0ae965f9dd8440c585b6.htm");
    o[6] = new s(2017, " Volvo", "S90 T6 Momentum AWD", "White", "4DR", "4-cylinder", "Automatic AWD", "power brakes", "power steering", "power windows/locks/seats/mirrors,", "air conditioning, climate control, Momentum plus, vision/convenience package, spoiler", "H1013146", "VOH0482", "57", "58,915", "", 399, "34,759", "0", "inc", "2,900", "9,576", "24", "7.5", ".25", "3,299", "Includes Owner Loyalty", "vehicleImages/VOH0482.jpg", "http://www.volvocarsramsey.com/new/Volvo/2017-Volvo-S90-ramsey-nj-89b4d5b40a0e0a1709e1ddd37a913866.htm");
    o[7] = new s(2017, " Volvo", "S90 Inscription T6 AWD", "Grey", "4DR", "4-cylinder", "Automatic AWD", "power brakes", "power steering", "power windows/locks/seats/mirrors,", "air conditioning, climate control, leather interior, sunroof, heated seats, keyless drive, bowers &amp; wilkins audio, vision/climate/convenience package", "H1014134", "VOH0549", "706", "65,890", '<p class="buyHead">Or buy for: <strong class="buyPrice">$54,900</strong> </p>', 459, "38,730", "0", "inc", "2,900", "11,016", "24", "7.5", ".25", "3,359", "Includes Loyalty Cash", "vehicleImages/VOH0549.jpg", "http://www.volvocarsramsey.com/new/Volvo/2017-Volvo-S90-ramsey-nj-fac9a6730a0e0a17487440e2b692fd0a.htm");
    o[8] = new s(2017, " Volvo", "XC90 Momentum Plus T6 AWD", "Sand", "4DR", "4-cylinder", "Automatic AWD", "power brakes", "power steering", "power windows/locks/seats/mirrors,", "air conditioning, climate control, leather interior, sunroof, heated seats, keyless drive, vision/climate/convenience package", "H1186640", "VOH0653", "27", "61,140", '<p class="buyHead">Or buy for: <strong class="buyPrice">$55,900</strong> </p>', 499, "36,099", "0", "inc", "2,900", "11,016", "36", "7.5", ".25", "3,359", "Includes $3500 Conquest Cash", "vehicleImages/VOH0653.jpg", "http://www.volvocarsramsey.com/new/Volvo/2017-Volvo-XC90-ramsey-nj-590843190a0e0adf4dcd53fbf094d8bb.htm");
    o[9] = new s(2017, " Volvo", "V90 Cross Country T6", "Blue", "4DR", "4-cylinder", "Automatic AWD", "power brakes", "power steering", "power windows/locks/seats/mirrors,", 'air conditioning, climate control, heated seats, leather interior, 20" wheels, child seat, air suspension, convenience package', "H1007674", "VOH0654", "37", "61,730", '<p class="buyHead">Or buy for: <strong class="buyPrice">$54,900</strong> </p>', 599, "35,186", "0", "inc", "2,900", "21,564", "36", "7.5", ".25", "3,499", "Includes $500 Loyalty", "vehicleImages/VOH0654.jpg", "http://www.volvocarsramsey.com/new/Volvo/2017-Volvo-V90+Cross+Country-ramsey-nj-590858420a0e0adf4dcd53fb7ccf2d3f.htm");
    o[10] = new s(2017, " Volvo", "XC90 Inscription T6 AWD", "Sand", "4DR", "4-cylinder", "Automatic FWD", "power brakes", "power steering", "power windows/locks/seats/mirrors,", 'air conditioning, climate control, leather interior, sunroof, heated seats, keyless drive, Booster seat, 21" wheels, vision/climate package', "H1173480", "VOH0534", "39", "64,190", '<p class="buyHead">Or buy for: <strong class="buyPrice">$59,900</strong> </p>', 599, "36,588", "0", "inc", "2,900", "21,564", "36", "7.5", ".25", "3,499", "Includes $3500 Conquest Cash", "vehicleImages/VOH0534.jpg", "http://www.volvocarsramsey.com/new/Volvo/2017-Volvo-XC90-ramsey-nj-f5a358b10a0e0ae737dd71df3d547ddc.htm");
    o[11] = new s(2017, " Volvo", "XC90 Inscription T8 Hybrid", "Black", "4DR", "4-cylinder", "Automatic AWD", "power brakes", "power steering", "power windows/locks/seats/mirrors,", "air conditioning, climate control, leather interior, sunroof, heated seats, keyless drive, Booster seat, vision/climate/convenience package", "H118749", "VOH0198", "96", "76,905", '<p class="buyHead">Or buy for: <strong class="buyPrice">64,775</strong> </p>', 659, "38,452", "0", "inc", "4,900", "23,724", "36", "7.5", ".25", "5,559", "Includes $3500 Conquest Cash", "vehicleImages/VOH0198.jpg", "http://www.volvocarsramsey.com/new/Volvo/2017-Volvo-XC90+Hybrid-ramsey-nj-d90595f80a0e0ae85a0d6baedf3b9ca5.htm");
    for (var i = 0; i < o.length; i++) {
        r(o[i]);
    }
});