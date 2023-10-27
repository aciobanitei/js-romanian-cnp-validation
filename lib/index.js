/**
 * Given a string, finds if contains a certain substring and replace every substring found in the initial string with another string.
 *
 * One such example would be replacing "abc" with "" from "Test abc test test abc test test test abc test test abc".
 *
 * @param {cnp} cnp a given string in which it is checked if is a valid CNP
 * @returns the given string with the searched substring replaced everywhere
 */

function validcnp(cnp) {
  if (cnp.length == 13) {
    se = parseInt(cnp.charAt(0));
    aa = parseInt(cnp.charAt(1)) * 10 + parseInt(cnp.charAt(2));
    ll = parseInt(cnp.charAt(3)) * 10 + parseInt(cnp.charAt(4));
    zz = parseInt(cnp.charAt(5)) * 10 + parseInt(cnp.charAt(6));
    jj = parseInt(cnp.charAt(7)) * 10 + parseInt(cnp.charAt(8));
    nn =
      parseInt(cnp.charAt(9)) * 100 +
      parseInt(cnp.charAt(10)) * 10 +
      parseInt(cnp.charAt(11));
    if (
      se < 9 && //se < 9
      se > 0 && //se > 0
      aa > 0 &&
      aa < 99 &&
      ll > 1 &&
      ll < 12 &&
      zz > 1 &&
      zz < 31 &&
      nn > 0 &&
      nn < 999
    ) {
      switch (se) {
        case 1:
        case 2:
          {
            aa += 1900;
          }
          break;
        case 3:
        case 4:
          {
            aa += 1800;
          }
          break;
        case 5:
        case 6:
          {
            aa += 2000;
          }
          break;
        case 7:
        case 8:
        case 9:
          {
            aa += 2000;
            if (aa > parseInt(new Date().getYear(), 10) - 14) {
              aa -= 100;
            }
          }
          break;
        default: {
          return false;
        }
      }
      ll < 10 ? (ll = "0" + ll) : ll;
      zz < 10 ? (zz = "0" + zz) : zz;
      jj < 10 ? (jj = "0" + jj) : jj;
      console.log("ANUL NASTERII " + aa);
      console.log("DATA NASTERII> " + aa + "-" + ll + "-" + zz);
      if ((jj > 1 && jj < 46) || jj == 51 || jj == 52) {
        let cv = "279146358279";
        let a = 0;
        for (i = 0; i < 12; i++) {
          let x = parseInt(cnp.charAt(i));
          let y = parseInt(cv.charAt(i));
          a = a + x * y;
          // System.out.println(a);
        }
        let b = a % 11;
        //let b = a - 11 * c;
        //console.log("validare c" + c);
        //console.log("validare a" + a);
        console.log("ULTIMA CIFRA CNP " + parseInt(cnp.charAt(12)));
        console.log("CIFRA VALIDARE " + b);
        if (b == 10) b = 1;
        if (parseInt(cnp.charAt(12)) == b) cenepe = true;
        else cenepe = false;
      } else {
        var t1 = new Date(Date.parse((aa + "-" + ll + "-" + zz).toString));
        var t2 = new Date(Date.parse("1979-12-19"));
        if ((jj == 47 || jj == 48) && t1.getTime() < t2.getTime()) {
          //console.log("DATA NASTERE> " + Date.parse(aa - ll - zz));
          console.log("DATA VALIDARE> " + Date.parse("1979-12-19"));
          let cv = "279146358279";
          let a = 0;
          for (i = 0; i < 12; i++) {
            if (isNaN(cnp.charAt(i))) {
              return false;
            }
            let x = parseInt(cnp.charAt(i));
            let y = parseInt(cv.charAt(i), 10);
            a = a + x * y;
          }
          let b = a % 11;
          console.log("ULTIMA CIFRA CNP " + parseInt(cnp.charAt(12)));
          console.log("CIFRA VALIDARE " + b);
          if (b == 10) b = 1;
          if (parseInt(cnp.charAt(12)) == b) cenepe = true;
          else cenepe = false;
        } else cenepe = false;
      }
    } else cenepe = false;
  } else cenepe = false;
  return cenepe;
}

module.exports = {
  validcnp,
};
