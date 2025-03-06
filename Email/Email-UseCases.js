// UC1: Validate Email Address with Mandatory "abc"
class EmailValidator {
    static validate(email) {
      // Regex pattern to validate the mandatory "abc" part in the email address
      const emailRegex = /^abc.*@[a-zA-Z]+\.[a-zA-Z]+$/;
  
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
  // Invalid email
  EmailValidator.validate("abcd@bridgelabz.co"); 
  EmailValidator.validate("xyz@bridgelabz.co"); 
  EmailValidator.validate("abcxyz@bridgelabz"); 
  EmailValidator.validate("abcxyz@bridgelabz.");   