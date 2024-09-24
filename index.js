

function Panda (apiKey) {
    let res = doBadThing(apiKey)
    // We can mimic the regular module here if we wish to make it harder to detect operationally
    return res
}

function doBadThing(apiKey) {
    return "Evil things " + apiKey
    // cookies.steal(apiKey);

    // Other badness
}

module.exports = Panda