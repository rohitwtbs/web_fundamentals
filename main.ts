const worker = new Worker('worker.js');

worker.postMessage(10);

worker.onmessage = (e) => {
  console.log('Received result from worker:', e.data);
};