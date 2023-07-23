export default function resolve() {
    let CT = JSON.parse(localStorage.getItem("Category"))
    let BL = JSON.parse(localStorage.getItem("Blacklist"))
    let categories = []
    let params = []
    let safeMode = false

    /* For Categories */
    let trueCount = 0
    for (const key in CT) {
        if (CT[key]) {
            switch (key) {
                case "Code":
                    categories.push("Programming")
                    break
                case "Misc":
                    categories.push("Miscellaneous")
                    categories.push("Pun")
                    categories.push("Christmas")
                    break
                case "Dark":
                    categories.push("Dark")
                    break
                case "Spooky":
                    categories.push("Spooky")
                    break
            }
            ++trueCount
        }
    }

    if (trueCount === 4 || trueCount === 0) categories = ["Any"] // If all the Categories are selected then replace with Any

    /* For Parameters */
    for (const key in BL) {
        if (BL[key]) {
            switch (key) {
                case "NSFW":
                    params.push("nsfw")
                    params.push("explicit")
                    safeMode = true
                    break
                case "Religious":
                    params.push("religious")
                    break
                case "Racist":
                    params.push("racist")
                    break
                case "Sexist":
                    params.push("sexist")
                    break
            }
        }
    }

    if (categories.includes("Dark") && safeMode) {
        safeMode = false
    }

    let resolveURL = categories.join(',') + "?blacklistFlags=" + params.join(',') + (safeMode?"&safe-mode" : "") + "&format=txt"
    return "https://v2.jokeapi.dev/joke/" + resolveURL
}

