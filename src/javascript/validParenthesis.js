function isValid(s) {
  if (s.length === 1) return false;
  const validParenthesisPairs = {
    "[": "]",
    "(": ")",
    "{": "}",
  };

  let stack = [];

  for (const parenthesisSymbol of s) {
    if (Object.keys(validParenthesisPairs).includes(parenthesisSymbol)) {
      stack.push(parenthesisSymbol);
      continue;
    }

    if (Object.values(validParenthesisPairs).includes(parenthesisSymbol)) {
      const last = stack.pop();
      if (validParenthesisPairs[last] !== parenthesisSymbol) return false;
    }
  }

  return stack.length === 0;
}

console.log(isValid("([]"));
