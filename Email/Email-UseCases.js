// UC1: Validate Email Address with Mandatory "abc"
class EmailValidator {
    static validate(email) {
    // Regex pattern for validation:
    // - Starts with "abc"
    // - Mandatory @ symbol
    // - Second part "bridgelabz"
    // - Mandatory "." followed by "co"
    // - Optional additional parts after "co" (e.g., ".in")
    const emailRegex = /^abc([._+-][a-zA-Z0-9]+)*@bridgelabz\.co(\.[a-zA-Z]{2,})?$/
      // Test the email address
      if (emailRegex.test(email)) {
        console.log(`The email "${email}" is valid.`);
        return true;
      } else {
        console.log(`The email "${email}" is invalid. It must start with "abc".`);
        return false;
      }
    }
  }
  
  // Valid Email
  EmailValidator.validate("abc@bridgelabz.co"); 
  EmailValidator.validate("abc.xyz@bridgelabz.co"); 
  EmailValidator.validate("abc.xyz@bridgelabz.co.in")
  // Invalid email 
  EmailValidator.validate("xyz@bridgelabz.co"); 
  EmailValidator.validate("abcd@bridgelabz.co");
  EmailValidator.validate("abc@bridgelabzcom"); 
  EmailValidator.validate("abcxyz@bridgelabz"); 
  EmailValidator.validate("abcxyz@bridgelabz.");   