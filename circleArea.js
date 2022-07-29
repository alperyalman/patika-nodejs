function calculateCircleArea(r) {
    console.log(`Radius: ${r}, Area: ${Math.PI*r*r}`);
}

calculateCircleArea(process.argv[2]);