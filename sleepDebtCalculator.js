const getSleepHours = day => {
    day = day.toLowerCase();
    /*if (day === 'monday') {
      return 8;
    } else if (day === 'tuesday') {
      return 7;
    } else if (day === 'wednesday') {
      return 6;
    } else if (day === 'thursday') {
      return 5;
    } else if (day === 'friday') {
      return 4;
    } else if (day === 'saturday') {
      return 3;
    } else if (day === 'sunday') {
      return 2;
    } else {
      console.log(`${day}... What planet are you from...!?`)
    }*/
  
    switch (day) {
      case 'monday':
        return 8;
        break;
      case 'tuesday':
        return 7;
        break;
      case 'wednesday':
        return 6;
        break;
      case 'thursday':
        return 5;
        break;
      case 'friday':
        return 4;
        break;
      case 'saturday':
        return 3;
        break;
      case 'sunday':
        return 2;
        break;
      default:
        console.log(`${day}... What planet are you from...!?`)
    }
  }
  
  const getActualSleepHours = () => {
     return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  }
  
  const getIdealSleepHours = (personalPreference = 8) => {
    const idealHours = personalPreference;
    return idealHours * 7;
  }
  
  function calculateSleepDebt (personalPreference) {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(personalPreference);
  
    if (actualSleepHours === idealSleepHours) {
      console.log(`Right on sleeping beauty! You slept exactly the sufficient amount of hours!`);
    } else if (actualSleepHours > idealSleepHours) {
      console.log(`Ouff... Get on with it sleeping beauty... You slept ${actualSleepHours - idealSleepHours} hours over your sifficient amount of hours! `);
    } else {
      console.log(`Get back to bed sleeping beauty!!! You slept ${ idealSleepHours - actualSleepHours} hours too few compared to your sifficient amount of hours!`)
    }
  }
  
  
  console.log(calculateSleepDebt());