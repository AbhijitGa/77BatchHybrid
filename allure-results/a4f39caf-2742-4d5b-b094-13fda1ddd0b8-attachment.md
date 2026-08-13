# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: testsuit.spec.ts >> All test cases from test suit >> Add Employee test
- Location: tests\testsuit.spec.ts:12:9

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('//iframe[@id="rightMenu"]').contentFrame().locator('//h2[normalize-space()="Personal Details"]')
Expected: "Personal Details"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('//iframe[@id="rightMenu"]').contentFrame().locator('//h2[normalize-space()="Personal Details"]')

```

```yaml
- list:
  - listitem: Welcome sureshit
  - listitem:
    - link "Change Password":
      - /url: ./lib/controllers/CentralController.php?mtcode=CPW&capturemode=updatemode&id=USR012
  - listitem:
    - link "Logout":
      - /url: ./index.php?ACT=logout
- list:
  - listitem:
    - link "Admin":
      - /url: ./index.php?menu_no_top=eim
    - list:
      - listitem:
        - link "Company Info":
          - /url: "#"
        - list:
          - listitem:
            - link "General":
              - /url: index.php?uniqcode=GEN&menu_no_top=eim
          - listitem:
            - link "Locations":
              - /url: index.php?uniqcode=LOC&menu_no_top=eim
          - listitem:
            - link "Company Structure":
              - /url: index.php?uniqcode=CST&menu_no_top=eim
          - listitem:
            - link "Company Property":
              - /url: index.php?uniqcode=TCP&menu_no_top=eim&pageNo=1
      - listitem:
        - link "Job":
          - /url: "#"
        - list:
          - listitem:
            - link "Job Titles":
              - /url: index.php?uniqcode=JOB&menu_no_top=eim
          - listitem:
            - link "Job Specifications":
              - /url: index.php?uniqcode=SPC&menu_no_top=eim
          - listitem:
            - link "Pay Grades":
              - /url: index.php?uniqcode=SGR&menu_no_top=eim
          - listitem:
            - link "Employment Status":
              - /url: index.php?uniqcode=EST&menu_no_top=eim
          - listitem:
            - link "EEO Job Categories":
              - /url: index.php?uniqcode=EEC&menu_no_top=eim
      - listitem:
        - link "Qualification":
          - /url: "#"
        - list:
          - listitem:
            - link "Education":
              - /url: index.php?uniqcode=EDU&menu_no_top=eim
          - listitem:
            - link "Licenses":
              - /url: index.php?uniqcode=LIC&menu_no_top=eim
      - listitem:
        - link "Skills":
          - /url: "#"
        - list:
          - listitem:
            - link "Skills":
              - /url: index.php?uniqcode=SKI&menu_no_top=eim
          - listitem:
            - link "Languages":
              - /url: index.php?uniqcode=LAN&menu_no_top=eim
      - listitem:
        - link "Memberships":
          - /url: "#"
        - list:
          - listitem:
            - link "Membership Types":
              - /url: index.php?uniqcode=MEM&menu_no_top=eim
          - listitem:
            - link "Memberships":
              - /url: index.php?uniqcode=MME&menu_no_top=eim
      - listitem:
        - link "Nationality & Race":
          - /url: "#"
        - list:
          - listitem:
            - link "Nationality":
              - /url: index.php?uniqcode=NAT&menu_no_top=eim
          - listitem:
            - link "Ethnic Races":
              - /url: index.php?uniqcode=ETH&menu_no_top=eim
      - listitem:
        - link "Users":
          - /url: "#"
        - list:
          - listitem:
            - link "HR Admin Users":
              - /url: index.php?uniqcode=USR&menu_no_top=eim&isAdmin=Yes
          - listitem:
            - link "ESS Users":
              - /url: index.php?uniqcode=USR&menu_no_top=eim&isAdmin=No
          - listitem:
            - link "Admin User Groups":
              - /url: index.php?uniqcode=USG&menu_no_top=eim
      - listitem:
        - link "Email Notifications":
          - /url: "#"
        - list:
          - listitem:
            - link "Configuration":
              - /url: index.php?uniqcode=EMX&menu_no_top=eim
          - listitem:
            - link "Subscribe":
              - /url: index.php?uniqcode=ENS&menu_no_top=eim
      - listitem:
        - link "Project Info":
          - /url: "#"
        - list:
          - listitem:
            - link "Customers":
              - /url: index.php?uniqcode=CUS&menu_no_top=eim
          - listitem:
            - link "Projects":
              - /url: index.php?uniqcode=PRJ&menu_no_top=eim
          - listitem:
            - link "Project Activities":
              - /url: index.php?uniqcode=PAC&menu_no_top=eim
      - listitem:
        - link "Data Import/Export":
          - /url: "#"
        - list:
          - listitem:
            - link "Define Custom Export":
              - /url: index.php?uniqcode=CEX&menu_no_top=eim
          - listitem:
            - link "Export":
              - /url: index.php?uniqcode=CSE&menu_no_top=eim
          - listitem:
            - link "Define Custom Import":
              - /url: index.php?uniqcode=CIM&menu_no_top=eim
          - listitem:
            - link "Import":
              - /url: index.php?uniqcode=IMP&menu_no_top=eim
      - listitem:
        - link "Custom Fields":
          - /url: index.php?uniqcode=CTM&menu_no_top=eim
  - listitem:
    - link "PIM":
      - /url: ./index.php?menu_no_top=hr
    - list:
      - listitem:
        - link "Employee List":
          - /url: ./lib/controllers/CentralController.php?reqcode=EMP&VIEW=MAIN&sortField=0&sortOrder0=ASC
      - listitem:
        - link "Add Employee":
          - /url: ./lib/controllers/CentralController.php?reqcode=EMP&capturemode=addmode
  - listitem:
    - link "Leave":
      - /url: ./index.php?menu_no_top=leave
    - list:
      - listitem:
        - link "Leave Summary":
          - /url: "#"
        - list:
          - listitem:
            - link "Employee Leave Summary":
              - /url: lib/controllers/CentralController.php?leavecode=Leave&action=Leave_Select_Employee_Leave_Summary
      - listitem:
        - link "Define Days Off":
          - /url: "#"
        - list:
          - listitem:
            - link "Days Off":
              - /url: lib/controllers/CentralController.php?leavecode=Leave&action=Holiday_Weekend_List
          - listitem:
            - link "Specific Holidays":
              - /url: lib/controllers/CentralController.php?leavecode=Leave&action=Holiday_Specific_List
      - listitem:
        - link "Define Leave Types":
          - /url: lib/controllers/CentralController.php?leavecode=Leave&action=Leave_Type_Summary
      - listitem:
        - link "Assign Leave":
          - /url: lib/controllers/CentralController.php?leavecode=Leave&action=Leave_Apply_Admin_view
      - listitem:
        - link "Leave List":
          - /url: lib/controllers/CentralController.php?leavecode=Leave&action=Leave_FetchLeaveAdmin&NewQuery=1
  - listitem:
    - link "Time":
      - /url: ./index.php?menu_no_top=time
    - list:
      - listitem:
        - link "Timesheets":
          - /url: lib/controllers/CentralController.php?timecode=Time&action=View_Select_Employee
        - list:
          - listitem:
            - link "Print Timesheets":
              - /url: lib/controllers/CentralController.php?timecode=Time&action=Select_Timesheets_View
          - listitem:
            - link "Employee timesheets":
              - /url: lib/controllers/CentralController.php?timecode=Time&action=View_Select_Employee
      - listitem:
        - link "Attendance":
          - /url: lib/controllers/CentralController.php?timecode=Time&action=Show_Employee_Report
        - list:
          - listitem:
            - link "Employee Reports":
              - /url: lib/controllers/CentralController.php?timecode=Time&action=Show_Employee_Report
          - listitem:
            - link "Configuration":
              - /url: lib/controllers/CentralController.php?timecode=Time&action=Show_Attendance_Config
      - listitem:
        - link "Employee Reports":
          - /url: lib/controllers/CentralController.php?timecode=Time&action=Employee_Report_Define
      - listitem:
        - link "Project Reports":
          - /url: lib/controllers/CentralController.php?timecode=Time&action=Project_Report_Define
      - listitem:
        - link "Work shifts":
          - /url: lib/controllers/CentralController.php?timecode=Time&action=View_Work_Shifts
  - listitem:
    - link "Benefits":
      - /url: ./index.php?menu_no_top=benefits
    - list:
      - listitem:
        - link "Health savings plan":
          - /url: lib/controllers/CentralController.php?benefitcode=Benefits&action=Hsp_Summary&year=2026
        - list:
          - listitem:
            - link "Define HSP":
              - /url: lib/controllers/CentralController.php?benefitcode=Benefits&action=Define_Health_Savings_Plans
          - listitem:
            - link "Employee HSP Summary":
              - /url: lib/controllers/CentralController.php?benefitcode=Benefits&action=Hsp_Summary&year=2026
          - listitem:
            - link "HSP Payments Due":
              - /url: lib/controllers/CentralController.php?benefitcode=Benefits&action=List_Hsp_Due
          - listitem:
            - link "HSP Expenditures":
              - /url: lib/controllers/CentralController.php?benefitcode=Benefits&action=Hsp_Expenditures_Select_Year_And_Employee
          - listitem:
            - link "HSP Used":
              - /url: lib/controllers/CentralController.php?benefitcode=Benefits&action=Hsp_Used_Select_Year&year=2026
      - listitem:
        - link "Payroll schedule":
          - /url: lib/controllers/CentralController.php?benefitcode=Benefits&action=Benefits_Schedule_Select_Year
        - list:
          - listitem:
            - link "View Payroll Schedule":
              - /url: lib/controllers/CentralController.php?benefitcode=Benefits&action=Benefits_Schedule_Select_Year
          - listitem:
            - link "Add Pay Period":
              - /url: lib/controllers/CentralController.php?benefitcode=Benefits&action=View_Add_Pay_Period
  - listitem:
    - link "Recruitment":
      - /url: ./index.php?menu_no_top=recruit
    - list:
      - listitem:
        - link "Job Vacancies":
          - /url: lib/controllers/CentralController.php?recruitcode=Vacancy&action=List
      - listitem:
        - link "Applicants":
          - /url: lib/controllers/CentralController.php?recruitcode=Application&action=List
  - listitem:
    - link "Performance":
      - /url: index.php?uniqcode=KPI&menu_no_top=eim&uri=./symfony/web/index.php/performance/viewReview/mode/new
    - list:
      - listitem:
        - link "KPI List":
          - /url: index.php?uniqcode=KPI&menu_no_top=performance&uri=./symfony/web/index.php/performance/listDefineKpi
      - listitem:
        - link "Add KPI":
          - /url: index.php?uniqcode=KPI&menu_no_top=performance&uri=./symfony/web/index.php/performance/saveKpi
      - listitem:
        - link "Copy KPI":
          - /url: index.php?uniqcode=KPI&menu_no_top=performance&uri=./symfony/web/index.php/performance/copyKpi
      - listitem:
        - link "Add Review":
          - /url: index.php?uniqcode=KPI&menu_no_top=performance&uri=./symfony/web/index.php/performance/saveReview
      - listitem:
        - link "Reviews":
          - /url: index.php?uniqcode=KPI&menu_no_top=performance&uri=./symfony/web/index.php/performance/viewReview/mode/new
  - listitem:
    - link "Reports":
      - /url: ./index.php?menu_no_top=rep
    - list:
      - listitem:
        - link "View Reports":
          - /url: index.php?repcode=EMPVIEW&menu_no_top=rep
      - listitem:
        - link "Define Reports":
          - /url: index.php?repcode=EMPDEF&menu_no_top=rep
  - listitem:
    - link "Bug Tracker":
      - /url: ./index.php?menu_no_top=bug
  - listitem:
    - link "Help":
      - /url: "#"
    - list:
      - listitem:
        - link "Help Contents":
          - /url: help.php
      - listitem:
        - link "Support":
          - /url: http://www.orangehrm.com/subscribe-support.shtml
      - listitem:
        - link "Forum":
          - /url: http://www.orangehrm.com/forum/
      - listitem:
        - link "Blog":
          - /url: http://www.orangehrm.com/blog/
- iframe
- link "SureshIT":
  - /url: "#"
```

# Test source

```ts
  1  | //To provide all reusable function related to entire project
  2  | import { global } from "../lib/Global";
  3  | import { expect } from "@playwright/test";
  4  | export class general extends global {
  5  |     
  6  | 
  7  |     async openApplication() {
  8  |         await this.page.goto(this.url);
  9  |         console.log("application opened Successfully")
  10 |     }
  11 |     async login() {
  12 |         await this.page.locator(this.Textbox_username).fill(this.username);
  13 |         await this.page.locator(this.Textbox_password).fill(this.password);
  14 |         await this.page.locator(this.login_button).click();
  15 |         console.log("Login done succesffuly");
  16 | 
  17 |     }
  18 |     async logout() {
  19 |         await this.page.locator(this.logout_link).click();
  20 |         console.log("Logout done succesfully");
  21 | 
  22 |     }
  23 |     async addEmployee(){
  24 |         await this.page.locator(this.PIM).hover();
  25 |         await this.page.getByText(this.add_empselect).click();
  26 |         const frame = await this.page.frameLocator(this.addempFrame);
  27 |         await this.page.waitForTimeout(3000);
  28 |         await expect(frame.locator(this.titleaddEmp)).toHaveText('PIM : Add Employee');
  29 |         console.log("Add employee page loaded");
  30 |         await frame.locator(this.lastName).fill(this.LastName);
  31 |         await frame.locator(this.firstname).fill(this.FirstName);
  32 |         await frame.locator(this.middlename).fill(this.MiddleName);
  33 |         await frame.locator(this.nickname).fill(this.NickName);
  34 |         await frame.locator(this.firly).setInputFiles(this.filepath);
  35 |         await frame.locator(this.save).click();
> 36 |         await expect(frame.locator(this.titlepersonaldetail)).toHaveText('Personal Details');
     |                                                               ^ Error: expect(locator).toHaveText(expected) failed
  37 |         console.log("Employee added succesfully. you can edit or add more details now.");
  38 | 
  39 |     }
  40 | 
  41 | }
```