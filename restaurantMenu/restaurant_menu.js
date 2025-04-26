const breakfastMenu = ['Pancakes - 12.99', 'Eggs Benedict - 16.99', 'Oatmeal - 8.99', 'Frittata - 14.99'];
const mainCourseMenu = ['Steak - 24.99', 'Pasta - 16.99', 'Burger - 12.99', 'Salmon - 21.99'];
const dessertMenu = ['Cake - 4.99', 'Ice Cream - 3.99', 'Pudding - 2.99', 'Fruit Salad - 7.99'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;