class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeSortedLinkedList(list1, list2) {
  if (!list1 && !list2) return null;
  if (!list1) return list2;
  if (!list2) return list1;

  // holder for the head of the merged list;
  let temp = new ListNode();
  let current = temp;

  while (list1 && list2) {
    if (list1.val > list2.val) {
      current.next = list2;
      list2 = list2.next;
    } else {
      current.next = list1;
      list1 = list1.next;
    }
    // move current
    current = current.next;
  }

  // check if has remaining node
  if (!!list1) {
    current.next = list1;
  }

  if (!!list2) {
    current.next = list2;
  }

  return temp.next;
}
