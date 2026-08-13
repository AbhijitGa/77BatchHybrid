import { test } from '@playwright/test';
import { general } from '../lib/General';
test.describe("All test cases from test suit", () => {
    test("Login and Logout", async ({ page }) => {

        let object = new general(page);

        await object.openApplication();
        await object.login();
        await object.logout();
    });
    test("Add Employee test", async ({ page }) => {

        let object = new general(page);

        await object.openApplication();
        await object.login();
        await object.addEmployee();
        await object.logout();
    });
});