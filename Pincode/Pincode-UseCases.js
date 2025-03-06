
// Pincode UC1: Validate Indian PIN code (6 digits)
class PincodeValidator {
    static validate(pincode) {
      // Regex pattern for a valid 6-digit PIN code
      const pinRegex = /^[1-9][0-9]{5}$/;
  
      // Test the input pincode
      if (pinRegex.test(pincode)) {
        console.log(`The PIN code "${pincode}" is valid.`);
        return true;
      } else {
        console.log(`The PIN code "${pincode}" is invalid. Please provide a valid 6-digit code.`);
        return false;
      }
    }
  }
  
  // Valid 
  PincodeValidator.validate("400088"); 
  // Invalid (starts with 0)
  PincodeValidator.validate("012345"); 
  // Invalid (less than 6 digits)
  PincodeValidator.validate("40008");  
  // Invalid (more than 6 digits)
  PincodeValidator.validate("4000888"); 
  