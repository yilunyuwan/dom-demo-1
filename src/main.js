const div = dom.find('#test>.red')[0]; // 获取对应的元素
dom.style(div, 'color', 'white'); // 设置 div.style.color

console.log(dom.style(div, 'color'))

dom.style(div, { width: '100px', fontSize: '20px' })

const divList = dom.find('.red'); // 获取多个 div.red 元素
dom.each(divList, (n) => console.log(n)); // 遍历 divList 里的所有元素