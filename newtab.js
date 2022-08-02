/**
 * update sections
 * get section element
 * update with storage sync
 */

const section1 = document.querySelector('div[form-1]')
const regex = new RegExp('^<iframe.*<\/iframe>$')

chrome.storage.sync.get(['code1'], result => {
    const code1 = result.code1
    if (regex.test(code1)) {
        // section1.append(document.createElement(code1))
        document.querySelector('[section-1]').innerHTML = code1
    } else {
        console.log("Code not valid: ", code1)
    }
})