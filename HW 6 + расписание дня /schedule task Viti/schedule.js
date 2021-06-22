function wakeUp(alarmСlock) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (alarmСlock) {
        resolve('Починаємо новий день')
      } else {
        reject('ще спимо')
      }
    }, 200)
  })
}

function feedTheCat(husbandFedTheCat) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (husbandFedTheCat) {
        reject('Не треба робити вигляд, що ти голодний, тебе нагодували')
      } else {
        resolve('Смачного, рудий!')
      }
    }, 500)
  })
}

function morningProcedures(availableWater) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (availableWater) {
        resolve('З добрим ранком');
      } else {
        reject('Чистимо зуби з чайника, ранок починається не з кави')
      }
    }, 500)
  })
}

function eat(cookedFood) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (cookedFood) {
        resolve('Om-nom-nom');
      } else {
        reject('хай йому грець, треба щось готувати')
      }
    }, 1500)
  })
}

function doExercise(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (time) {
        resolve(`Моя спина каже "Дякую"`);
      } else {
        reject('24години в добі, то мало((')
      }
    }, 1000)
  })
}

function getShower() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('З легким паром');
    }, 400)
  })
}

function goLearnEnglish(teacherHasTime) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (teacherHasTime) {
        resolve('London is the capital of Great Britain');
      } else {
        reject('Maybe next time')
      }
    }, 1300);
  })
}

function cook(ingredients) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ingredients) {
        resolve('Наготували смаколиків');
      } else {
        reject('Облом, ще в магазин треба бігти');
      }
    }, 800)
  })
}

function goLearnJS(lecture) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (lecture) {
        resolve('Per aspera ad astra(лат.)')
      } else {
        reject('у всьому винні бобри)')
      }
    }, 2000);
  })
}

function goSleep() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Надобраніч')
    }, 500);
  })
}

// wakeUp(true)
//   .then(result => {
//     console.log(result);

//     return feedTheCat(false)
//   })
//   .then(result => {
//     console.log(result);

//     return morningProcedures('there is water')
//   })
//   .then(result => {
//     console.log(result);

//     return eat(true)
//   })
//   .then(result => {
//     console.log(result);

//     return doExercise('I have enought time')
//   })
//   .then(result => {
//     console.log(result);

//     return getShower()
//   })
//   .then(result => {
//     console.log(result);

//     return goLearnEnglish('She has time')
//   })
//   .then(result => {
//     console.log(result);

//     return cook('I need food')
//   })
//   .then(result => {
//     console.log(result);

//     return eat('I am hungry')
//   })
//   .then(result => {
//     console.log(result);

//     return goLearnJS('today is lecture day')
//   })
//   .then(result => {
//     console.log(result);

//     return goSleep()
//   })
//   .then(result => {
//     console.log(result);
//   })
//   .catch(reason => {
//     console.log('******reason error******');
//     console.log(reason);
//     console.log('******reason error******');
//   })
//   .finally(() => {
//     console.log('Zzzzz....sweet dreams')
//   })


async function startTheDay() {
  try {
    let goodMorning = await wakeUp(true);
    console.log(goodMorning);
    
    let fedCat = await feedTheCat(false);
    console.log(fedCat);
    
    let washUp = await morningProcedures('there is water');
    console.log(washUp);

    let omnomnom = await eat(true);
    console.log(omnomnom);

    let sport = await doExercise('I have enought time');
    console.log(sport);

    let shower = await getShower();
    console.log((shower));

    let english = await goLearnEnglish('She has time');
    console.log(english);

    let cooking = await cook('I need food');
    console.log(cooking);

    await eat('I am hungry');
    console.log(omnomnom);

    let js = await goLearnJS('today is lecture day');
    console.log(js);

    let inBed = await goSleep();
    console.log(inBed);
  }
  catch (reason) {
    console.log('******reason error******');
    console.log(reason);
    console.log('******reason error******');
  }
}

startTheDay()