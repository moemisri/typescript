interface Reportable {
  summary(): string;
}
const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true,
  summary(): string {
    return `Name ${this.name}`;
  },
};
const beverage = {
  name: "pepsi",
  carbonated: true,
  suger: 40,
  summary(): string {
    return `Name ${this.name}`;
  },
};
const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};
printSummary(oldCivic);
printSummary(beverage);
