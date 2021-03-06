//here's an example harmonic series, imagine it started at 10hz, and then you had 20,30,40,50,60,70,80,90,100
var HZ = [100,200,300,400,500,600,700,800,900,1000,1100,1200,1300,1400,1500,1600,1700,1800,1900,2000,2100,2200,2300,2400,2500,2600,2700,2800,2900,3000,3100,3200,3300,3400,3500,3600]; 

var audioCtx = new (window.AudioContext || window.webkitAudioContext)();


for (harm = 0; harm < HZ.length; harm ++) {
  var oscillator = audioCtx.createOscillator();
  oscillator.type = 'sine';
  oscillator.frequency.setValueAtTime(HZ[harm], audioCtx.currentTime ); 
  oscillator.connect(audioCtx.destination);
  oscillator.start(harm / 2);
  oscillator.stop((harm / 2) + .1);
}
