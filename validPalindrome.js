function validPalindrome(s){
    s = s.toLowerCase();
    //s = s.replace(/[.,'"*+?^${}()|[\]\\]/g, "");
    s = s.replace(/[^a-z0-9]/g,'');
    s = s.split(" ").join("")
    console.log(s);
    //console.log(s);
    let newS;
    newS = s.split('').reverse();
    newS = newS.join('');
    if (s == newS)
    {
        return true;
    } 
    else {
        return false;
    }
}
console.log(validPalindrome("Marge, let's \"[went].\" I await {news} telegram."));