console.log(">>> RPM Hire has assets located in the Box Hill jobsite of the Suburban Rail Loop.");
console.log(">>> Recently, there has been a requirement to move multiple crash barriers and signage to Doncaster.");

console.log("\nINFO: Calculating closest field agent for duty.")

var a = {
    id: 1,
    name: "John Smith",
    role: "In-House Driver",
    location: "Mont Albert",
    status: "Active",
};

var b = {
    id: 2,
    name: "Alice Bell",
    role: "Supervisor",
    location: "Epping",
    status: "Active",
};

var cmdb_ci = {
    id: 1,
    name: "Crash Barrier",
    location: "Box Hill"
}

console.log(`INFO: ${cmdb_ci.name} -> ${cmdb_ci.id} is currently at ${cmdb_ci.location}.`);
console.log(`INFO: Finding Agent | Agent: ${a.id} - ${a.name} is currently located in ${a.location}.`);
console.log(`INFO: Calculating Utilisation...`);
console.log(`\nINFO: Agent is well suited for the task. Creating Work Order Task...`);
console.log(`INFO: Work Order Task WOT100012 created. Assigned to ${a.name}`);


