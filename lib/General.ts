//To provide all reusable function related to entire project
import { global } from "../lib/Global";
import { expect } from "@playwright/test";
export class general extends global {
    

    async openApplication() {
        await this.page.goto(this.url);
        console.log("application opened Successfully")
    }
    async login() {
        await this.page.locator(this.Textbox_username).fill(this.username);
        await this.page.locator(this.Textbox_password).fill(this.password);
        await this.page.locator(this.login_button).click();
        console.log("Login done succesffuly");

    }
    async logout() {
        await this.page.locator(this.logout_link).click();
        console.log("Logout done succesfully");

    }
    async addEmployee(){
        await this.page.locator(this.PIM).hover();
        await this.page.getByText(this.add_empselect).click();
        const frame = await this.page.frameLocator(this.addempFrame);
        await this.page.waitForTimeout(3000);
        await expect(frame.locator(this.titleaddEmp)).toHaveText('PIM : Add Employee');
        console.log("Add employee page loaded");
        await frame.locator(this.lastName).fill(this.LastName);
        await frame.locator(this.firstname).fill(this.FirstName);
        await frame.locator(this.middlename).fill(this.MiddleName);
        await frame.locator(this.nickname).fill(this.NickName);
        //await frame.locator(this.firly).setInputFiles(this.filepath);
        await frame.locator(this.save).click();
        await this.page.waitForTimeout(3000);
        //await expect(frame.locator(this.titlepersonaldetail)).toHaveText('Personal Details');
        await this.page.waitForTimeout(3000);
        console.log("Employee added succesfully. you can edit or add more details now.");

    }

}
