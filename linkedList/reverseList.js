/**
 * Reverse the list in place
*/

const solution = (head) => {
    if(!head)return head;
    // 2 ptr approach
    let prev = null, current = head;
    let next;
    while(current){
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}
/**
 * Recursion
 */

const Recursion = (head) => {
    let newHead;
    const recurse = (node) => {
        if(!node)return null;
        newHead = node;
        if(head.next){
            newHead = recurse(head.next);
            head.next.next = head;
        }
        head.next = null
    }
    recurse(head);
    return newHead;
}