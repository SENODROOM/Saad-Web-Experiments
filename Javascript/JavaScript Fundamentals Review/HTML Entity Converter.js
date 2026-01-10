function convertHTML(str) {
  // Create a mapping of characters to HTML entities
  const htmlEntities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
  };
  
  // Replace each character in the string if it exists in the mapping
  return str.replace(/[&<>"']/g, match => htmlEntities[match]);
}

// Test examples
console.log(convertHTML("Dolce & Gabbana")); // Dolce &amp; Gabbana
console.log(convertHTML("Hamburgers < Pizza < Tacos")); // Hamburgers &lt; Pizza &lt; Tacos
console.log(convertHTML("Sixty > twelve")); // Sixty &gt; twelve
console.log(convertHTML('Stuff in "quotation marks"')); // Stuff in &quot;quotation marks&quot;
console.log(convertHTML("Schindler's List")); // Schindler&apos;s List
console.log(convertHTML("<>")); // &lt;&gt;
console.log(convertHTML("abc")); // abc
