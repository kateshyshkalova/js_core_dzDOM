console.log(document);
let bgcolor = prompt('Оберіть фон для сторінки');
let bd = document.getElementsByTagName('body');
bd[0].style.backgroundColor = bgcolor;

let texttype = prompt('Оберіть тип шрифта на сторінці - fontFamily');
bd[0].style.fontFamily = texttype;
console.log(bd);

let h1Align = prompt('Оберіть вирівнювання для заголовка h1');
let h1 = document.getElementsByTagName('h1');
h1[0].style.textAlign = h1Align;
console.log(h1);

let pcolor = prompt('Оберіть фон для параграфа з посиланнями');
let p = document.getElementsByTagName('p');
p[0].style.backgroundColor = pcolor;
console.log(p);

let ptextcolor = prompt('Оберіть колір тексту для параграфа з посиланнями');
p[0].style.color = ptextcolor;
console.log(p);

let ahref = document.getElementsByTagName('a');
console.log(ahref);
for (let i = 0; i < ahref.length; i++) {
    let link = prompt(`Оберіть ${i + 1}-е посилання`);
    ahref[i].textContent = `${link}`;
    ahref[i].href = link;
    ahref[i].style.color = prompt(`Оберіть колір посилання ${ahref[i]}`);
}

let div = document.getElementsByTagName('div');
console.log(div);
div[0].style.color = prompt(`Оберіть колір тексту у елементі div`);
div[0].style.fontSize = prompt(`Оберіть розмір тексту у елементі div`);
div[0].style.fontWeight = prompt(`Оберіть товщину  тексту у елементі div`);

let li = document.getElementsByTagName('li');
console.log(li);
let marker = prompt(`Оберіть тип маркера для маркованого списку на сторінці`);
for (let i = 0; i < li.length; i++) {
    li[i].style.listStyleType = marker;
}
