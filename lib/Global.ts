//To Provide test data and objects/element related to the entire project
import{Page} from "@playwright/test";
export class global {
    constructor(public page : Page) {

    }
//**************************Test data*****************************//
public url :string ='https://ctcorphyd.com/SureshIT/login.php'
public username :string = 'sureshit';
public password :string = 'sureshit';
public LastName :string = 'Gangathade';
public FirstName :string = 'Abhijit';
public MiddleName :string = 'Balaji';
public NickName :string = 'Abhi';
public filepath:string = "D:\\TestAutomation\\Playwright\\Workspace\\77Batch_Hybrid\\2023-06-23.png";


//**************************objects*****************************//
public Textbox_username : string = '//input[@name="txtUserName"]';
public Textbox_password : string = '//input[@name="txtPassword"]';
public login_button :string ='//input[@name="Submit"]';
public logout_link :string = '//a[normalize-space()="Logout"]';
public PIM :string = '//span[@class="drop current"]';
public add_empselect :string = 'Add Employee';
public addempFrame :string  = '//iframe[@id="rightMenu"]';
public titleaddEmp :string = '//div[@class="mainHeading"]';
public lastName :string = '//input[@id="txtEmpLastName"]';
public firstname :string = '//input[@id="txtEmpFirstName"]';
public middlename :string = '//input[@id="txtEmpMiddleName"]';
public nickname :string = '//input[@id="txtEmpNickName"]';
public firly : string = '//input[@id="photofile"]';
public save :string = '//input[@id="btnEdit"]';
public titlepersonaldetail :string = '//h2[normalize-space()="Personal Details"]';


}