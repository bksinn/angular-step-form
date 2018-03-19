import { Injectable } from '@angular/core';

import { FormData, Personal, Address, Income, Bank, Result } from './formData.model';
import { WorkflowService } from '../workflow/workflow.service';
import { STEPS } from '../workflow/workflow.model';

@Injectable()
export class FormDataService {

    private formData: FormData = new FormData();
    private isPersonalFormValid: boolean = false;
    private isIncomeFormValid: boolean = false;
    // private isWorkFormValid: boolean = false;
    private isBankFormValid: boolean = false;
    private isAddressFormValid: boolean = false;
    private isResultFormValid: boolean = true;

    constructor(private workflowService: WorkflowService) {
    }

    getPersonal(): Personal {
        // Return the Personal data
        var personal: Personal = {
            loanAmount: this.formData.loanAmount,
            termPeriod: this.formData.termPeriod,
            zip: this.formData.zip,
            city: this.formData.city,
            state: this.formData.state,
            prefix: this.formData.prefix,
            firstName: this.formData.firstName,
            lastName: this.formData.lastName,
            homePhone: this.formData.homePhone,
            workPhone: this.formData.workPhone,
            mobilePhone: this.formData.mobilePhone,
            email: this.formData.email,
            dob: this.formData.dob,
            ssn: this.formData.ssn,
            driversLicense: this.formData.driversLicense,
            issuingState: this.formData.issuingState,
            militaryService: this.formData.militaryService
        };
        return personal;
    }

    setUserLocation(data: Personal) {
        this.formData.city = data.city;
        this.formData.state = data.state;
        this.formData.issuingState = data.issuingState;
        this.formData.zip = data.zip;
        this.formData.homePhone = data.homePhone;
        this.formData.mobilePhone = data.mobilePhone;
        this.formData.workPhone = data.workPhone;
    }

    setPersonal(data: Personal) {
        // Update the Personal data only when the Personal Form had been validated successfully
        this.isPersonalFormValid = true;
        this.formData.loanAmount = data.loanAmount;
        this.formData.termPeriod = data.termPeriod;
        this.formData.prefix = data.prefix;
        this.formData.firstName = data.firstName;
        this.formData.lastName = data.lastName;
        this.formData.homePhone = data.homePhone;
        this.formData.workPhone = data.workPhone;
        this.formData.mobilePhone = data.mobilePhone;
        this.formData.email = data.email;
        this.formData.dob = data.dob;
        this.formData.ssn = data.ssn;
        this.formData.driversLicense = data.driversLicense;
        this.formData.issuingState = data.issuingState;
        this.formData.militaryService = data.militaryService;
        // Validate Personal Step in Workflow
        this.workflowService.validateStep(STEPS.personal);
    }

    getIncome(): Income {
        // Return the Income data
        var income: Income = {
            incomeSource: this.formData.incomeSource,
            employerName: this.formData.employerName,
            paymentType: this.formData.paymentType,
            employmentYears: this.formData.employmentYears,
            employmentMonths: this.formData.employmentMonths,
            payFrequency: this.formData.payFrequency,
            netAmount: this.formData.netAmount,
            jobTitle: this.formData.jobTitle,
        };
        return income;
    }

    setIncome(data: Income) {
        // Update the Income data only when the Income Form had been validated successfully
        this.isIncomeFormValid = true;
        this.formData.incomeSource = data.incomeSource;
        this.formData.employerName = data.employerName;
        this.formData.paymentType = data.paymentType;
        this.formData.employmentYears = data.employmentYears;
        this.formData.employmentMonths = data.employmentMonths;
        this.formData.payFrequency = data.payFrequency;
        this.formData.netAmount = data.netAmount;
        this.formData.jobTitle = data.jobTitle;
        // Validate Income Step in Workflow
        this.workflowService.validateStep(STEPS.income);
    }

    getBank(): Bank {
        // Return the bank type
        var bank: Bank = {
            bankName: this.formData.bankName,
            accountNumber: this.formData.accountNumber,
            routingNumber: this.formData.routingNumber,
            bankTimeYears: this.formData.bankTimeYears,
            bankTimeMonths: this.formData.bankTimeMonths,
            accountType: this.formData.accountType
        };
        return bank;
    }

    clearRoutingNumber(data: Bank) {
        this.formData.routingNumber = '';
    }

    setRoutingNumber(data: Bank) {
        this.formData.routingNumber = data.routingNumber;
    }

    setBank(data: Bank) {
        // Update the bank type only when the Bank Form had been validated successfully
        this.isBankFormValid = true;
        this.formData.bankName = data.bankName;
        this.formData.accountNumber = data.accountNumber;
        this.formData.routingNumber = data.routingNumber;
        this.formData.bankTimeYears = data.bankTimeYears;
        this.formData.bankTimeMonths = data.bankTimeMonths;
        this.formData.accountType = data.accountType;
        // Validate Bank Step in Workflow
        this.workflowService.validateStep(STEPS.bank);
    }

    getAddress(): Address {
        // Return the Address data
        var address: Address = {
            street: this.formData.street,
            city: this.formData.city,
            state: this.formData.state,
            zip: this.formData.zip,
            residentialStatus: this.formData.residentialStatus,
            addressYears: this.formData.addressYears,
            addressMonths: this.formData.addressMonths
        };
        return address;
    }

    setCity(data: Address) {
        this.formData.city = data.city;
    }

    setState(data: Address) {
        this.formData.state = data.state;
    }

    setAddress(data: Address) {
        // Update the Address data only when the Address Form had been validated successfully
        this.isAddressFormValid = true;
        this.formData.street = data.street;
        this.formData.city = data.city;
        this.formData.state = data.state;
        this.formData.zip = data.zip;
        this.formData.addressMonths = data.addressMonths;
        this.formData.addressYears = data.addressYears;
        this.formData.residentialStatus = data.residentialStatus;
        // Validate Address Step in Workflow
        this.workflowService.validateStep(STEPS.address);
    }

    getResult(): Result {
        // Return the Address data
        var result: Result = {
            isTCAccepted: this.formData.isTCAccepted,

        };
        return result;
    }

    setResult(data: Result) {
        // Update the Address data only when the Address Form had been validated successfully
        this.isResultFormValid = true;
        this.formData.isTCAccepted = data.isTCAccepted;

        // Validate Address Step in Workflow
        this.workflowService.validateStep(STEPS.result);
    }

    getFormData(): FormData {
        // Return the entire Form Data
        return this.formData;
    }

    resetFormData(): FormData {
        // Reset the workflow
        this.workflowService.resetSteps();
        // Return the form data after all this.* members had been reset
        this.formData.clear();
        this.isPersonalFormValid = this.isIncomeFormValid = this.isBankFormValid = this.isAddressFormValid = this.isResultFormValid = false;
        return this.formData;
    }

    isFormValid() {
        // Return true if all forms had been validated successfully; otherwise, return false
        return this.isPersonalFormValid &&
            this.isIncomeFormValid &&
            this.isBankFormValid &&
            this.isResultFormValid &&
            this.isAddressFormValid;
    }
}