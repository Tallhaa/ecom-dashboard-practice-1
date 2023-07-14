const mongoose = require('mongoose');

main().catch((err) => console.log(err));
async function main() {
    mongoose.connect("mongodb+srv://talhajutt4880:tallha.jutt4880@cluster0.0pswmcu.mongodb.net/ecom-dashboard-practice-1");
}