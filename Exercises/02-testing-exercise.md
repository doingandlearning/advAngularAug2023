## Lab: Testing and Service Provisioning in Angular

### Introduction:
In this lab, you will delve deep into testing components and services in Angular. You will focus on the **ToggleSwitch** component and the **TextAnalyzerService**. Additionally, you'll experiment with various ways to provide services.

### Objectives:
- Write tests for the `ToggleSwitch` component.
- Write tests for the `TextAnalyzerService`.
- Explore different methods for providing services in Angular.

---

### Part 1: Testing the ToggleSwitch Component

1. Start by creating a new spec file `toggle-switch.component.spec.ts`.
2. Write tests to:
   - Ensure the component gets created.
   - Validate the initial state of the switch.
   - Simulate a button click and verify that the toggle state and count update correctly.
   - Simulate multiple button clicks and check the toggle count.

---

### Part 2: Testing the TextAnalyzerService

1. In the `text-analyzer.service.spec.ts` file:
   - Create a spy for the `LoggerService` to avoid real logging during tests.
   - Write a test to ensure the service gets instantiated.
   - Write tests to validate word and character counts for given texts. Ensure that logging occurs as expected.

---

### Part 3: Service Provisioning

1. **Module Level Provisioning**:
   - Provide the `TextAnalyzerService` in the `AppModule` using the `providers` array. Validate its availability in any component.

2. **Component Level Provisioning**:
   - Remove the service from the `AppModule` and provide it in a component using the `providers` array in the `@Component` decorator. Validate its scope and lifecycle.

3. **Using useClass**:
   - Create a new service called `AdvancedTextAnalyzerService` that extends `TextAnalyzerService`.
   - In the `AppModule`, provide the `TextAnalyzerService` using `useClass` to provide `AdvancedTextAnalyzerService` instead. Validate that components now receive the advanced service instead of the basic one.

---

### If time permits challenges:

1. **Enhance ToggleSwitch**:
   - Extend the `ToggleSwitch` component to accept a color input. The switch button should change color based on this input.
   - Write tests to validate this new functionality.

2. **Deep Dive into Text Analysis**:
   - Enhance the `TextAnalyzerService` (or create a new service) to count the number of vowels and consonants in the text.
   - Write tests for this new functionality. Ensure your tests cover edge cases, like texts with numbers or special characters.

3. **Service Provisioning Deep Dive**:
   - Experiment with other providers' options like `useValue`, `useFactory`, and `multi`. Understand the use cases and implications of each.

---

### Conclusion:
By the end of this lab, you should be more comfortable with testing components and services in Angular. You should also have a deeper understanding of service provisioning and its different strategies. Remember, proper tests and understanding of service scopes are crucial for building scalable and maintainable Angular applications.