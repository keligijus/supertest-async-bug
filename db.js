"use-strict";

module.exports = {
  get() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const rand = Math.round(Math.random() + 0.2);
        return rand ? resolve({ hello: "world" }) : reject(new Error("NOOO!"));
      }, 1000);
    });
  }
};
