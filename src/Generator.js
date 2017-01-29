
const buzzWords = ['IoT', 'Mobile', 'Cloud', 'Lambda', 'Kappa', 'Client', 'Mindshare', 'Container', 'Analytics', 'Business', 'Big Data', 'UX', 'NextGen', 'Mobilegeddon', 'GenerationZ', 'Industry4.0', 'Self-Service', 'ML', 'VR', 'IoE', 'Factory', 'Deep Learning']

const buzzFeaturesAfter = ['First', 'Ready', 'Capable', 'Scaled', 'Replatformed', 'Reinvented', 'Oriented', 'Mindblowing', 'Scoped', 'Featured']
const buzzFeaturesBefore = ['Artifical', 'Global', 'Distruptive', 'Quantum', 'Advanced', 'Smart', 'Reactive', 'Functional', 'Mutable', 'Immutable', 'Holistic', 'Unicorn', 'Innovative', 'Enterprise', 'Seamless', 'Creative', 'Total', 'Fullfeatured', 'Horizontal', 'Vertical', 'Scalable', 'Unlimited', 'Hyper', 'Uber', 'Agile']

const buzzFinal = ['Architecture', 'Framework', 'Platform', 'System', 'Vision', 'DevStack', 'Synergy', 'Tool', 'Voodoo']

// Generates new bullshit buzzword variant
export function generateWords () {
    var generated = []
    var usedBuzzWords = []
    var usedAfter = false
    var usedBefore = false

    for (var i = 0; i < 4; i++) {
        let word = randomFromExcept(buzzWords, usedBuzzWords)
        usedBuzzWords.push(word)
        generated.push(word)
        if (!usedAfter && Math.floor(Math.random() * 6) === 3) {
            let after = randomFromExcept(buzzFeaturesAfter, [])
            generated.push(after)
            usedAfter = true
        }
        if (!usedBefore && Math.floor(Math.random() * 6) === 4) {
            let before = randomFromExcept(buzzFeaturesBefore, [])
            generated.push(before)
            usedBefore = true
        }
    }
    generated.push(randomFromExcept(buzzFinal, []))
    return generated
}

const hashTagBefore = ['stop', 'nomore', 'love', 'uber', 'great', 'fantastic', 'insane', 'total', 'the']
const hashTagAfter = ['first', 'geniality', 'mega', '', 'nomore', 'fail', 'hot']

export function asHashTags (value) {
    var hashTags = []
    var usedTagVariants = []
    for (var i = 0; i < 3; i++) {
        let variant = randomFromExcept(hashTagBefore, usedTagVariants)
        usedTagVariants.push(variant)
        hashTags.push('#' + variant + value)
    }
    for (var j = 0; j < 3; j++) {
        let variant = randomFromExcept(hashTagAfter, usedTagVariants)
        usedTagVariants.push(variant)
        hashTags.push('#' + value + variant)
    }
    return hashTags
}

export function asAbbr (words) {
    var abbr = ''
    for (var key in words) {
        abbr = abbr + words[key][0]
    }
    return abbr
}

function randomFromExcept (src, except) {
    let filteredSource = src.filter(item => except.indexOf(item) === -1)
    let random = filteredSource[Math.floor(Math.random() * filteredSource.length)]
    return random
}
