/**
 * Who likes it?
 * likes [] // must be "no one likes this"
 * likes ["Peter"] // must be "Peter likes this"
 * likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
 * likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
 * likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"
 */

function likes(names) {
    let len = names.length;
    let map = ['no one likes this',
        names[0] + ' likes this',
        names[0] + ' and ' + names[1] + ' like this',
        names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this',
        names[0] + ', ' + names[1] + ' and ' + (len - 2) + ' others like this']
    return len > 3 ? map[4] : map[len];
}