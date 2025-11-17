function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
    let string1=""
    let string2=""

    for(let i=0;i<word1.length;i++){
        string1+=word1[i]
    }
    for(let i=0;i<word2.length;i++){
        string2+=word2[i]
    }

    return string1===string2
};