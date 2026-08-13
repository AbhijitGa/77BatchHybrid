import { test } from "@playwright/test";
import { general } from "../lib/General";
test("@regression_Add Employee test", async({page})=>{

   let object = new general(page);

   await object.openApplication();
   await object.login();
   await object.addEmployee();
   await object.logout();
});
//This is my product