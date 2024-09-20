import { 
    capitalize, 
    allCaps, 
    capitalizeWords, 
    removeWhitespace, 
    kebabCase, 
    snakeCase, 
    camelCase, 
    shift, 
    makeHashTag, 
    isEmpty 
  } from '@cabbagesoup/stringlib'; // Replace './yourModule' with the actual file path
  

  // Example strings
  const sampleString = "  hello world from javascript   ";
  const shortString = "hi";
  const emptyString = "   ";
  const camelCaseString = "Camel case string";
  
  // Using capitalize function
  console.log("Capitalize: ", capitalize("hello")); // Output: Hello
  
  // Using allCaps function
  console.log("All Caps: ", allCaps("hello world")); // Output: HELLO WORLD
  
  // Using capitalizeWords function
  console.log("Capitalize Words: ", capitalizeWords("hello world from javascript")); // Output: Hello World From Javascript
  
  // Using removeWhitespace function
  console.log("Remove Whitespace: ", removeWhitespace(sampleString)); // Output: hello world from javascript
  
  // Using kebabCase function
  console.log("Kebab Case: ", kebabCase(sampleString)); // Output: hello-world-from-javascript
  
  // Using snakeCase function
  console.log("Snake Case: ", snakeCase(sampleString)); // Output: hello_world_from_javascript
  
  // Using camelCase function
  console.log("Camel Case: ", camelCase(camelCaseString)); // Output: helloWorldFromJavascript
  
  // Using shift function
  console.log("Shift: ", shift("shifted")); // Output: hifteds
  
  // Using makeHashTag function
  console.log("Make Hashtag: ", makeHashTag("JavaScript is awesome for web development")); 
  // Output: [ '#development', '#javascript', '#awesome' ] (depending on word length)
  
  // Using isEmpty function
  console.log("Is Empty (empty string): ", isEmpty(emptyString)); // Output: true
  console.log("Is Empty (non-empty string): ", isEmpty(shortString)); // Output: false
  