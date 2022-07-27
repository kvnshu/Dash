// update graph urls
/**
 * 1. create event listener for submit button click
 * 3. update graph element with new url
*/
const input1 = document.querySelector('#code-1')
const form1 = document.querySelector('[form-1]')

form1.addEventListener('submit', e => {
    e.preventDefault()
    chrome.storage.sync.set({
        "code1": input1.value
    }, () => {
        console.log('code1 is set to ' + input1.value)
    })
})
