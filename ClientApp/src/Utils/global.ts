export function screamingSnakeToReadable(text: string) {
    let split = text.split("_");
    for (let index in split) {
        let word = split[index].toLocaleLowerCase();
        let newWord = "";
        for (let i = 0; i < word.length; i ++) {
            i == 0 ? newWord += word[i].toLocaleUpperCase() : newWord += word[i];
        }
        split[index] = newWord;
    }
    return split.join(" ");
}