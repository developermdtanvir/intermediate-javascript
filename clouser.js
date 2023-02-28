/*
 *Title : Javascript Closures
 * Description : Javascript closures Practical Example
 * Author : Tanvir Hossain
 * Date : 2/28/2023
 */

function makeSizer(size) {
  return function () {
    document.body.style.fontSize = `${size}px`;
  };
}

const size12 = makeSizer(12);
const size14 = makeSizer(14);
const size16 = makeSizer(16);
const size20 = makeSizer(20);

document.getElementById("size-12").onclick = size12;
document.getElementById("size-14").onclick = size14;
document.getElementById("size-16").onclick = size16;

document.getElementById("size-20").onclick = size20;
