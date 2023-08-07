### Part 1: Extend the Logger Service

First, let's extend the Logger service to include a method that logs errors.

1. Add a `logError` method to the `LoggerService`. This method should accept a string message and log it to the console prefixed with "ERROR:".

### Part 2: Extend the Calculator Service

Next, extend the Calculator service to include methods for multiplication and division.

1. Add a `multiply` method to the `CalculatorService`. This method should accept two numbers and return their product.

2. Add a `divide` method to the `CalculatorService`. This method should accept two numbers and return their quotient. Remember to handle the case where the denominator is 0, to prevent division by zero errors. If the denominator is 0, log an error using the `logError` method from the Logger service and return `null`.

### Part 3: Create a new Component

Finally, create a new component that uses these services.

1. Generate a new component named `CalculatorComponent`.

2. Inject the `CalculatorService` and `LoggerService` into this component.

3. Create four methods in the `CalculatorComponent`: `add()`, `subtract()`, `multiply()`, and `divide()`. Each method should use the corresponding method from `CalculatorService` to perform the operation on two numbers and log the result using the `LoggerService`. If an error occurs (such as dividing by zero), it should be logged using the `LoggerService's` `logError` method.

4. In the component's template, create a form with inputs for the two numbers and buttons to perform each of the four operations. When a button is clicked, the corresponding method from the `CalculatorComponent` should be called, and the result should be displayed in the template.

This lab should help to solidify the concepts of services, dependency injection, and component interaction in Angular, and give you practice extending existing services and components.