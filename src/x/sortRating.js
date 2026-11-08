// Sorts the list of barbers by their average customer rating, best first.
function sortByRating(barbers) { return [...barbers].sort((a, b) => b.rating - a.rating); }
module.exports = { sortByRating };
// note
