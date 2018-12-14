let store1, store2;

const init = () => {
  localforage.config();
  store1 = localforage.createInstance({
    name: "store2"
  });
  console.log(store1);
};

const jsTest = () => {
  const img = document.querySelector("#targetImage");
  img.style.position = "fixed";
  let top = 0;
  const range = 200;
  setInterval(() => {
    if (top > range) {
      top = 0;
    } else {
      top++;
    }

    if (top > range / 2) {
      img.style.top = `${range - top}px`;
    } else {
      img.style.top = `${top}px`;
    }
  }, 30);
};

const main = () => {
  console.log(localforage);
  init();
  jsTest();

  store1
    .setItem("key", "value")
    .then(v => console.log(v))
    .catch(e => console.error(e));
  store1
    .getItem("key")
    .then(v => console.log(v))
    .catch(e => console.error(e));

  // Array.from({
  //   length: 9999
  // }).forEach((v, i) => localStorage.setItem(String(i), i));
  // console.log("finish");

  // Array.from({
  //   length: 9999
  // }).forEach((v, i) => store1.setItem(String(i), i));
  // console.log("finish");
};

main();
