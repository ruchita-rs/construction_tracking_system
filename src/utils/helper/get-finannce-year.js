function getFinancialYear() {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth(); // 0 = January, 3 = April

    let startYear, endYear;

    if (currentMonth >= 3) { // April (3) to December (11)
        startYear = currentYear;
        endYear = currentYear + 1;
    } else { // January (0) to March (2)
        startYear = currentYear - 1;
        endYear = currentYear;
    }

    return `${startYear} - ${endYear}`;
}
module.exports = getFinancialYear;