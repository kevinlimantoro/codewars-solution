const longestUniqeSubstring = (s) => {
    // Creating a set to store the last positions of occurrence
    var seen = {}
    var maximum_length = 0;

    // starting the inital point of window to index 0
    var start = 0;
    for (var end = 0; end < s.length; end++) {
        // Checking if we have already seen the element or not
        if (!!seen[s[end]]) {
            // If we have seen the number, move the start pointer
            // to position after the last occurrence
            start = Math.max(start, seen[s[end]] + 1);
        }

        // Updating the last seen value of the character
        seen[s[end]] = end;
        maximum_length = Math.max(maximum_length, end - start + 1);
        console.log(maximum_length,start,end)
    }
    return maximum_length;
}

console.log(longestUniqeSubstring('geekforgeeks'))