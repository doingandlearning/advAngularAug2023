## **Angular Client-Side Security Lab Exercise**

**Objective:** To gain hands-on experience with Angular's built-in security mechanisms and understand common web vulnerabilities.

### **Prerequisites:**

1. Basic knowledge of Angular.
2. An Angular project set up using Angular CLI.

### **Exercise Steps:**

#### **1. Exploring Angular's XSS Protection:**

- **Task:** Create a component that attempts to interpolate and bind malicious strings to simulate potential XSS attacks.
  
- **Instructions:**
    1. In the component, define strings containing potential XSS payloads, e.g.,:
    ```typescript
    public maliciousString: string = "<img src='x' onerror='alert(\"Hacked!\")'>";
    ```
    2. Display these strings using Angular's interpolation (`{{ }}`), property bindings, and other methods.
    3. Observe Angular's behavior and discuss how Angular treats this potential threat.

#### **2. Bypassing Sanitization:**

- **Task:** Explore how Angular's `DomSanitizer` works and how it can be (unsafely) used to bypass the default sanitization process.
  
- **Instructions:**
    1. Use `DomSanitizer` to mark a malicious string as `bypassSecurityTrustHtml` and then bind it to innerHTML.
    2. Reflect on why bypassing sanitization is generally discouraged and the risks involved.

#### **3. Handling URLs Safely:**

- **Task:** Understand the potential risks with URLs and see how Angular handles them.
  
- **Instructions:**
    1. Try binding potentially harmful URLs using property bindings in Angular.
    2. Observe how Angular treats these URLs.

#### **4. Dependency Injection Security:**

- **Task:** Explore how Angular's strict dependency injection system can prevent rogue service insertions.
  
- **Instructions:**
    1. Create a service that holds sensitive data.
    2. Try to create a rogue/mock service that mimics the original service.
    3. Attempt to provide the rogue service instead of the original one. Discuss how Angular's DI system can help in such scenarios.

#### **5. OWASP Vulnerabilities Discussion:**

- **Task:** Divide students into groups. Each group picks one of the OWASP Top Ten vulnerabilities to research and discuss.
  
- **Instructions:**
    1. Each group should provide a brief description of the vulnerability, potential risks, real-world incidents (if any), and mitigation strategies.
    2. Discuss how Angular or general frontend practices can mitigate these vulnerabilities. 
    3. Reflect on how frontend and backend security measures should complement each other.

#### **6. Bonus Task - Security Headers:**

Even though the students won't have direct access to server-side configurations, you can still discuss the importance of various security headers like `Content-Security-Policy`, `X-Frame-Options`, etc.

- **Instructions:**
    1. Use online tools like [Security Headers](https://securityheaders.com/) to analyze popular websites.
    2. Discuss the results and the importance of each header.

---

This lab exercise provides a comprehensive understanding of Angular's built-in client-side security mechanisms and encourages students to think critically about potential vulnerabilities. The OWASP discussion can tie these hands-on exercises to real-world scenarios, fostering a deeper appreciation of web security.