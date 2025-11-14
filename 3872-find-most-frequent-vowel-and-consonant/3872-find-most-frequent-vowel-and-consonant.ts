function maxFreqSum(s: string): number {
    let highestVowel = null
    let highestConsonant = null
    let vowelMap = { null: 0 }
    let consonantMap = { null: 0 }
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "a" || s[i] === "e" || s[i] === "i" || s[i] == "o" || s[i] == "u") {
            if (vowelMap[s[i]]) {
                vowelMap[s[i]] += 1
            } else {
                vowelMap[s[i]] = 1
            }
        } else {
            if (consonantMap[s[i]]) {
                consonantMap[s[i]] += 1
            } else {
                consonantMap[s[i]] = 1
            }
        }
        if (vowelMap[s[i]] > vowelMap[highestVowel]) {
            highestVowel = s[i]
        }

        if (consonantMap[s[i]] > consonantMap[highestConsonant]) {
            highestConsonant = s[i]
        }
    }
    return vowelMap[highestVowel] + consonantMap[highestConsonant]
};