import { test } from "@playwright/test";
import { general } from "../lib/General";
test("Login and Logout", async({page})=>{

   let object = new general(page);

   await object.openApplication();
   await object.login();
   await object.logout();
});