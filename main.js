console.log('ml5 version:', ml5.version);
  
classifier = ml5.imageClassifier('MobileNet',modelLoaded);

  function modelLoaded() {
    console.log('Model Loaded!');
  }
      
  function check()
  {
    img = document.getElementById('bottle');
    classifier.classify(img, gotResult);
  }
  function check1()
  {
    img = document.getElementById('camera');
    classifier.classify(img, gotResult1);
  }
  function check2()
  {
    img = document.getElementById('toy');
    classifier.classify(img, gotResult2);
  }
  function check3()
  {
    img = document.getElementById('shirt');
    classifier.classify(img, gotResult3);
  }
  function check4()
  {
    img = document.getElementById('googles');
    classifier.classify(img, gotResult4);
  }

function gotResult(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    document.getElementById("answer").innerHTML = results[0].label;
    document.getElementById("a").innerHTML = "Bottle";
  }
}

function gotResult1(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    document.getElementById("answer1").innerHTML = results[0].label;
    document.getElementById("a1").innerHTML = "Camera";
  }
}

function gotResult2(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    document.getElementById("answer2").innerHTML = results[0].label;
    document.getElementById("a2").innerHTML = "Toy";
  }
}

function gotResult3(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    document.getElementById("answer3").innerHTML = results[0].label;
    document.getElementById("a3").innerHTML = "Active Shirt";
  }
}

function gotResult4(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    document.getElementById("answer4").innerHTML = results[0].label;
    document.getElementById("a4").innerHTML = "Glasses";
  }
}