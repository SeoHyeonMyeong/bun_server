
let regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
let email = "hell@ozz.com"

let regCVE = /^(CVE-[0-9]{4}-[0-9]{4},){0,2}CVE-[0-9]{4}-[0-9]{4}/g
let text1 = "CVE-2022-1111,CVE-2022-1111,CVE-2022-1234"
let text2 = "cve-2022-1234,CVE-2022-1422"

console.log(text1.match(regCVE))