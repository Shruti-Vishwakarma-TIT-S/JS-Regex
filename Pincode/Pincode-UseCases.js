// Pincode UC1 & UC2: Validate Indian PIN code with additional features
class PincodeValidator {
    static validate(pincode) {
      // Automatically trim spaces from the PIN code
      if (typeof pincode !== "string" || pincode.trim() === "") {
        console.log(`Invalid Input: PIN code must be a non-empty string.`);
        return false;
      }
  
      const trimmedPincode = pincode.trim();
      
      // Regex pattern: PIN must start with a digit (1-9), be exactly 6 digits, and may include a single space
      const pinRegex = /^[1-9][0-9]{2} ?[0-9]{3}$/;

      if (pinRegex.test(trimmedPincode)) {
        console.log(`The PIN code "${trimmedPincode}" is valid.`);
        return true;
      }
  
      // Specific failure cases
      if (!/^\d+$/.test(trimmedPincode)) {
        console.log(
          `The PIN code "${trimmedPincode}" contains invalid characters. Please use only digits.`
        );
      } else if (trimmedPincode.length !== 6) {
        console.log(
          `The PIN code "${trimmedPincode}" must have exactly 6 digits. Current length: ${trimmedPincode.length}.`
        );
      } else if (/^[0]/.test(trimmedPincode)) {
        console.log(
          `The PIN code "${trimmedPincode}" is invalid. It cannot start with 0.`
        );
      } else {
        console.log(
          `The PIN code "${trimmedPincode}" does not meet the validation criteria.`
        );
      }
      return false;
    }
  
    // New Feature: Batch Validation
    static validateMultiple(pinCodes) {
      if (!Array.isArray(pinCodes)) {
      console.log("Invalid Input: Provide an array of PIN codes for batch validation.");
      return;
      }

      console.log("\nBatch Validation Results:");
      pinCodes.forEach((pincode) => {
       this.validate(pincode);
    });
}
    // Batch Validation
    static validateMultiple(pinCodes) {
      if (!Array.isArray(pinCodes)) {
        console.log("Invalid Input: Provide an array of PIN codes for batch validation.");
        return;
      }
  
      console.log("\nBatch Validation Results:");
      pinCodes.forEach((pincode) => {
        this.validate(pincode);
      });
    }
  }
  
  
  // Single PIN Code Validation
  PincodeValidator.validate("400088"); 
  PincodeValidator.validate("A400088"); 
  PincodeValidator.validate("012345"); 
  PincodeValidator.validate("40008"); 
  PincodeValidator.validate("4000888"); 
  PincodeValidator.validate("400 088"); 
  
  // Batch Validation
  PincodeValidator.validateMultiple([
    // Valid 
    "400 088",
    // Invalid  
    "A400088", 
    // Invalid
    "012345", 
    // Invalid 
    "40008",  
    // Invalid 
    "4000888", 
    // Invalid
    "400088#",
  ]);
  