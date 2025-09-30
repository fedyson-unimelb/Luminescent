console.log("Hello, World!");
console.log("Consider a Field Agent having to keep track of multiple asset manually with no indication of the location of each asset. This can be a daunting task, especially when the assets are spread out over a large area or in a complex environment. With the help of technology, we can make this task much easier and more efficient.");

var agent = {
    name: "John Smith",
    role: "Field Agent",
    baseLocation: "Box Hill Tram Rd",
    workOrders: [{ id: 1, description: "Move Asset A", location: "Location A" }, { id: 2, description: "Return Asset B", location: "Location B" }],
};

console.log("\nAgent Details:\n", agent.name, "-", agent.role);
console.log("\nWork Orders:");
agent.workOrders.forEach(function(order) {
    console.log("ID:", order.id, "| Description:", order.description, "| Location:", order.location);
});