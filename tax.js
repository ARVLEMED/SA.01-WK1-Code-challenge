const readline = require('readline');
const prompt = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    
    let payee;
    if (grossSalary < 24000) {
        payee = grossSalary * 0.01;
    } else if (grossSalary >= 24000 && grossSalary <= 32333) {
        payee = grossSalary * 0.25;
    } else if (grossSalary > 32333 && grossSalary <= 500000) {
        payee = grossSalary * 0.30;
    } else if (grossSalary > 500000 && grossSalary <= 800000) {
        payee = grossSalary * 0.325;
    } else {
        payee = grossSalary * 0.35;
    }

    let nhifDeductions;
    if (grossSalary <= 5999) {
        nhifDeductions = 150;
    } else if (grossSalary >= 6000 && grossSalary <= 7999) {
        nhifDeductions = 300;
    } else if (grossSalary >= 8000 && grossSalary <= 11999) {
        nhifDeductions = 400;
    } else if (grossSalary >= 12000 && grossSalary <= 14999) {
        nhifDeductions = 500;
    } else if (grossSalary >= 15000 && grossSalary <= 19999) {
        nhifDeductions = 600;
    } else if (grossSalary >= 20000 && grossSalary <= 24999) {
        nhifDeductions = 750;
    } else if (grossSalary >= 25000 && grossSalary <= 29999) {
        nhifDeductions = 850;
    } else if (grossSalary >= 30000 && grossSalary <= 34999) {
        nhifDeductions = 900;
    } else if (grossSalary >= 35000 && grossSalary <= 39999) {
        nhifDeductions = 950;
    } else if (grossSalary >= 40000 && grossSalary <= 44999) {
        nhifDeductions = 1000;
    } else if (grossSalary >= 45000 && grossSalary <= 49999) {
        nhifDeductions = 1100;
    } else if (grossSalary >= 50000 && grossSalary <= 59999) {
        nhifDeductions = 1200;
    } else if (grossSalary >= 60000 && grossSalary <= 69999) {
        nhifDeductions = 1300;
    } else if (grossSalary >= 70000 && grossSalary <= 79999) {
        nhifDeductions = 1400;
    } else if (grossSalary >= 80000 && grossSalary <= 89999) {
        nhifDeductions = 1500;
    } else if (grossSalary >= 90000 && grossSalary <= 99999) {
        nhifDeductions = 1600;
    } else {
        nhifDeductions = 1700; 
    }

    const nssfDeductions = grossSalary * 0.06;
    const housingLevy = grossSalary* 0.015;

    const totalDeductions = payee + nhifDeductions + nssfDeductions + housingLevy;
    const netSalary = grossSalary - totalDeductions;

    return {
        grossSalary:grossSalary,
        payee: payee,
        nhifDeductions: nhifDeductions,
        nssfDeductions: nssfDeductions,
        netSalary: netSalary,
        housingLevy:housingLevy
    };
}
prompt.question("Enter basic salary: ", (input) => {
    const basicSalary = Number(input);

    prompt.question("Enter benefits: ", (input) => {
        const benefits = Number(input);
        if (isNaN(basicSalary) || isNaN(benefits)) {
            console.log("Invalid input");
            prompt.close();
            return;
        }

        const salaryReport = calculateNetSalary(basicSalary, benefits);
        console.log(`Gross Salary: Ksh ${salaryReport.grossSalary.toFixed(2)}`);
        console.log(`Payee (Tax): Ksh ${salaryReport.payee.toFixed(2)}`);
        console.log(`NHIF Deductions: Ksh ${salaryReport.nhifDeductions.toFixed(2)}`);
        console.log(`NSSF Deductions: Ksh ${salaryReport.nssfDeductions.toFixed(2)}`);
        console.log(`Net Salary: Ksh ${salaryReport.netSalary.toFixed(2)}`);
        console.log(`Housing Levy: Ksh ${salaryReport.housingLevy.toFixed(2)}`);

        prompt.close();
    });
});