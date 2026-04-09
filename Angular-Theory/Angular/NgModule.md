# NgModule

1. declarations: The components, directives, and pipes that belong to the NgModule. A new application project's root NgModule has only one component, called AppComponent.

2. imports: Other NgModules you are using, so that you can use their declarables. The newly generated root NgModule imports BrowserModule in order to use browser-specific services such as DOM rendering, sanitization, and location.

3. providers: Providers of services that components in other NgModules can use. There are no providers in a newly generated root NgModule.

4. bootstrap: The entry component that Angular creates and inserts into the index.html host web page, thereby bootstrapping the application. This entry component, AppComponent, appears in both the declarations and the bootstrap arrays.


In: src/app/app.module.ts (default AppModule)


// imports
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

// @NgModule decorator with its metadata
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}