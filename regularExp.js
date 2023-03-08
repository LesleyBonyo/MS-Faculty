function escapeRegExp(s) {
    s = s.replace(/[.,'"*+?^${}()|[\]\\]/g, "");
    s = s.split(" ").join("")
    return s; 
  }

  console.log(escapeRegExp("Marge, let's \"[went].\" I await {news} telegram."));