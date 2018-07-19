
function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('div#nested div.target');
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('ul.ranked-list li');
  for (let i=0; i<lis.length; i++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n).toString();
  }
}

function deepestChild() {
  const next_node = document.querySelectorAll('div#grand-node');
  console.log(next_node);
  return next_node[next_node.length-1]
}
