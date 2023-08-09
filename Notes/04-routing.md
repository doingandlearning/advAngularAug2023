### Student Notes: Angular Routing Lab

#### **Basic Understanding of Routing**

- **What is Routing?**
  - Enables navigation from one view to another as users perform application tasks.
  - Used to achieve a single-page application feel without a full page refresh.

#### **Basic Routes:**
- Routes are configured in a routes array, mapping a path string to a component.
- Example:

  ```typescript
  const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent }
  ];
  ```

- Make sure to import and set up the `RouterModule` in your app module.

#### **Parameterized Routes:**

- Some routes may need to capture dynamic values in the URL. We achieve this using parameters.
  
  ```typescript
  { path: 'user/:id', component: UserComponent }
  ```

- The `:id` syntax in the path string defines a spot for a variable value (a parameter). This value can then be extracted in your component using Angular's `ActivatedRoute`.

#### **Child Routes:**

- Angular supports nested routes, allowing more complex layouts.
  
  ```typescript
  {
    path: 'user/:id', component: UserComponent, children: [
      { path: 'profile', component: UserProfileComponent }
    ]
  }
  ```

- When navigating to `/user/1/profile`, the `UserComponent` and its child `UserProfileComponent` will both be displayed.

#### **Wildcard Routes:**

- Capture all routes that don't match any of the defined routes. Useful for showing a "404 Not Found" view.
  
  ```typescript
  { path: '**', component: PageNotFoundComponent }
  ```

#### **Lazy Loading:**

- Allows you to load parts of your application only when needed, which can lead to a faster initial load time.
  
  ```typescript
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }
  ```

- Remember to remove the module from the imports array of your AppModule to ensure it's not loaded eagerly.

#### **Guards:**

- Used to protect routes and redirect users based on conditions like authentication.
  
  ```typescript
  { path: 'admin', component: AdminDashboardComponent, canActivate: [AuthGuard] }
  ```

- The `AuthGuard` is a service implementing the `CanActivate` interface, determining if the route can be activated.

#### **Named (Auxiliary) Routes:**

- Angular allows multiple named outlets, which can have their content set independently of each other.
  
  ```html
  <router-outlet></router-outlet>
  <router-outlet name="sidebar"></router-outlet>
  ```

  ```typescript
  { path: 'sidebar', component: SidebarComponent, outlet: 'sidebar' }
  ```

- Use `routerLink` to navigate, e.g., `routerLink="{ outlets: { sidebar: ['sidebar'] } }"`.

---

**Takeaway:** Angular provides robust routing capabilities, allowing developers to create intricate navigation structures with ease. From basic routing to lazy loading modules and protecting routes with guards, mastering Angular routing is key to creating efficient, user-friendly web applications. In this lab, you've explored various routing techniques in Angular, providing a foundation to build upon in your projects.