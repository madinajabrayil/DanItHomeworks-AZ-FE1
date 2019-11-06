function showArrayList(arr) {
    var ul = document.createElement('ul');

    for (var i = 0; i < arr.length; i++) {

      if (Array.isArray(arr[i])) {
        li.appendChild(showArrayList(arr[i]));
      } else {
        li = document.createElement('li');
        li.appendChild(document.createTextNode(arr[i]));
        ul.appendChild(li);
      };

    };
    document.body.appendChild(ul);
    return document.body.appendChild(ul);
  };
  let arr = ['hello', 'world', 'Baku', ['hi', 'ok', '2020'], 'IBA Tech Academy',['List'], '2019', 'Hi', ['friend', 'peace', 'love']];
 showArrayList(arr);