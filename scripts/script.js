const COUNTRY_NAMES = [
  { id: Math.random(), name: 'AED', pound: 'United Arab Emirates Dirham' },
  { id: Math.random(), name: 'AFN', pound: 'Afghan Afghani' },
  { id: Math.random(), name: 'ALL', pound: 'Albanian Lek' },
  { id: Math.random(), name: 'AMD', pound: 'Armenian Dram' },
  { id: Math.random(), name: 'ANG', pound: 'Dutch Guilders' },
  { id: Math.random(), name: 'AOA', pound: 'Angolan Kwanza' },
  { id: Math.random(), name: 'ARS', pound: 'Argentine Peso' },
  { id: Math.random(), name: 'AUD', pound: 'Australian Dollar' },
  { id: Math.random(), name: 'AWG', pound: 'Aruban Florin' },
  { id: Math.random(), name: 'AZN', pound: 'Azerbaijani Manat' },
  {
    id: Math.random(),
    name: 'BAM',
    pound: 'Bosnia-Herzegovina Convertible Mark',
  },
  { id: Math.random(), name: 'BBD', pound: 'Barbadian Dollar' },
  { id: Math.random(), name: 'BDT', pound: 'Bangladeshi Taka' },
  { id: Math.random(), name: 'BGN', pound: 'Bulgarian Lev' },
  { id: Math.random(), name: 'BHD', pound: 'Bahraini Dinar' },
  { id: Math.random(), name: 'BIF', pound: 'Burundian Franc' },
  { id: Math.random(), name: 'BMD', pound: 'Bermudian Dollar' },
  { id: Math.random(), name: 'BND', pound: 'Bruneian Dollar' },
  { id: Math.random(), name: 'BOB', pound: 'Bolivian Boliviano' },
  { id: Math.random(), name: 'BRL', pound: 'Brazilian Real' },
  { id: Math.random(), name: 'BSD', pound: 'Bahamian Dollar' },
  { id: Math.random(), name: 'BTN', pound: 'Bhutanese Ngultrum' },
  { id: Math.random(), name: 'BWP', pound: 'Botswanan Pula' },
  { id: Math.random(), name: 'BZD', pound: 'Belizean Dollar' },
  { id: Math.random(), name: 'CAD', pound: 'Canadian Dollar' },
  { id: Math.random(), name: 'CDF', pound: 'Congolese Franc' },
  { id: Math.random(), name: 'CHF', pound: 'Swiss Franc' },
  { id: Math.random(), name: 'CLF', pound: 'Chilean Unit of Account UF' },
  { id: Math.random(), name: 'CLP', pound: 'Chilean Peso' },
  { id: Math.random(), name: 'CNH', pound: 'Chinese Yuan Offshore' },
  { id: Math.random(), name: 'CNY', pound: 'Chinese Yuan' },
  { id: Math.random(), name: 'COP', pound: 'Colombian Peso' },
  { id: Math.random(), name: 'CUP', pound: 'Cuban Peso' },
  { id: Math.random(), name: 'CVE', pound: 'Cape Verdean Escudo' },
  { id: Math.random(), name: 'CZK', pound: 'Czech Republic Koruna' },
  { id: Math.random(), name: 'DJF', pound: 'Djiboutian Franc' },
  { id: Math.random(), name: 'DKK', pound: 'Danish Krone' },
  { id: Math.random(), name: 'DOP', pound: 'Dominican Peso' },
  { id: Math.random(), name: 'DZD', pound: 'Algerian Dinar' },
  { id: Math.random(), name: 'EGP', pound: 'Egyptian Pound' },
  { id: Math.random(), name: 'ERN', pound: 'Eritrean Nakfa' },
  { id: Math.random(), name: 'ETB', pound: 'Ethiopian Birr' },
  { id: Math.random(), name: 'EUR', pound: 'Euro' },
  { id: Math.random(), name: 'FJD', pound: 'Fijian Dollar' },
  { id: Math.random(), name: 'FKP', pound: 'Falkland Islands Pound' },
  { id: Math.random(), name: 'GBP', pound: 'British Pound Sterling' },
  { id: Math.random(), name: 'GEL', pound: 'Georgian Lari' },
  { id: Math.random(), name: 'GHS', pound: 'Ghanaian Cedi' },
  { id: Math.random(), name: 'GIP', pound: 'Gibraltar Pound' },
  { id: Math.random(), name: 'GMD', pound: 'Gambian Dalasi' },
  { id: Math.random(), name: 'GNF', pound: 'Guinean Franc' },
  { id: Math.random(), name: 'GTQ', pound: 'Guatemalan Quetzal' },
  { id: Math.random(), name: 'GYD', pound: 'Guyanaese Dollar' },
  { id: Math.random(), name: 'HKD', pound: 'Hong Kong Dollar' },
  { id: Math.random(), name: 'HNL', pound: 'Honduran Lempira' },
  { id: Math.random(), name: 'HRK', pound: 'Croatian Kuna' },
  { id: Math.random(), name: 'HTG', pound: 'Haitian Gourde' },
  { id: Math.random(), name: 'HUF', pound: 'Hungarian Forint' },
  { id: Math.random(), name: 'IDR', pound: 'Indonesian Rupiah' },
  { id: Math.random(), name: 'ILS', pound: 'Israeli New Sheqel' },
  { id: Math.random(), name: 'INR', pound: 'Indian Rupee' },
  { id: Math.random(), name: 'IQD', pound: 'Iraqi Dinar' },
  { id: Math.random(), name: 'IRR', pound: 'Iranian Rial' },
  { id: Math.random(), name: 'ISK', pound: 'Icelandic Krona' },
  { id: Math.random(), name: 'JMD', pound: 'Jamaican Dollar' },
  { id: Math.random(), name: 'JOD', pound: 'Jordanian Dinar' },
  { id: Math.random(), name: 'JPY', pound: 'Japanese Yen' },
  { id: Math.random(), name: 'KES', pound: 'Kenyan Shilling' },
  { id: Math.random(), name: 'KGS', pound: 'Kyrgystani Som' },
  { id: Math.random(), name: 'KHR', pound: 'Cambodian Riel' },
  { id: Math.random(), name: 'KMF', pound: 'Comorian Franc' },
  { id: Math.random(), name: 'KPW', pound: 'North Korean Won' },
  { id: Math.random(), name: 'KRW', pound: 'South Korean Won' },
  { id: Math.random(), name: 'KWD', pound: 'Kuwaiti Dinar' },
  { id: Math.random(), name: 'KYD', pound: 'Caymanian Dollar' },
  { id: Math.random(), name: 'KZT', pound: 'Kazakhstani Tenge' },
  { id: Math.random(), name: 'LAK', pound: 'Laotian Kip' },
  { id: Math.random(), name: 'LBP', pound: 'Lebanese Pound' },
  { id: Math.random(), name: 'LKR', pound: 'Sri Lankan Rupee' },
  { id: Math.random(), name: 'LRD', pound: 'Liberian Dollar' },
  { id: Math.random(), name: 'LSL', pound: 'Basotho Maloti' },
  { id: Math.random(), name: 'LYD', pound: 'Libyan Dinar' },
  { id: Math.random(), name: 'MAD', pound: 'Moroccan Dirham' },
  { id: Math.random(), name: 'MDL', pound: 'Moldovan Leu' },
  { id: Math.random(), name: 'MGA', pound: 'Malagasy Ariary' },
  { id: Math.random(), name: 'MKD', pound: 'Macedonian Denar' },
  { id: Math.random(), name: 'MMK', pound: 'Myanma Kyat' },
  { id: Math.random(), name: 'MNT', pound: 'Mongolian Tugrik' },
  { id: Math.random(), name: 'MOP', pound: 'Macanese Pataca' },
  { id: Math.random(), name: 'MRU', pound: 'Mauritanian Ouguiya' },
  { id: Math.random(), name: 'MUR', pound: 'Mauritian Rupee' },
  { id: Math.random(), name: 'MVR', pound: 'Maldivian Rufiyaa' },
  { id: Math.random(), name: 'MWK', pound: 'Malawian Kwacha' },
  { id: Math.random(), name: 'MXN', pound: 'Mexican Peso' },
  { id: Math.random(), name: 'MYR', pound: 'Malaysian Ringgit' },
  { id: Math.random(), name: 'MZN', pound: 'Mozambican Metical' },
  { id: Math.random(), name: 'NAD', pound: 'Namibian Dollar' },
  { id: Math.random(), name: 'NGN', pound: 'Nigerian Naira' },
  { id: Math.random(), name: 'NOK', pound: 'Norwegian Krone' },
  { id: Math.random(), name: 'NPR', pound: 'Nepalese Rupee' },
  { id: Math.random(), name: 'NZD', pound: 'New Zealand Dollar' },
  { id: Math.random(), name: 'OMR', pound: 'Omani Rial' },
  { id: Math.random(), name: 'PAB', pound: 'Panamanian Balboa' },
  { id: Math.random(), name: 'PEN', pound: 'Peruvian Nuevo Sol' },
  { id: Math.random(), name: 'PGK', pound: 'Papua New Guinean Kina' },
  { id: Math.random(), name: 'PHP', pound: 'Philippine Peso' },
  { id: Math.random(), name: 'PKR', pound: 'Pakistani Rupee' },
  { id: Math.random(), name: 'PLN', pound: 'Polish Zloty' },
  { id: Math.random(), name: 'PYG', pound: 'Paraguayan Guarani' },
  { id: Math.random(), name: 'QAR', pound: 'Qatari Rial' },
  { id: Math.random(), name: 'RON', pound: 'Romanian Leu' },
  { id: Math.random(), name: 'RSD', pound: 'Serbian Dinar' },
  { id: Math.random(), name: 'RUB', pound: 'Russian Ruble' },
  { id: Math.random(), name: 'RWF', pound: 'Rwandan Franc' },
  { id: Math.random(), name: 'SAR', pound: 'Saudi Arabian Riyal' },
  { id: Math.random(), name: 'SCR', pound: 'Seychellois Rupee' },
  { id: Math.random(), name: 'SDG', pound: 'Sudanese Pound' },
  { id: Math.random(), name: 'SEK', pound: 'Swedish Krona' },
  { id: Math.random(), name: 'SGD', pound: 'Singapore Dollar' },
  { id: Math.random(), name: 'SHP', pound: 'Saint Helena Pound' },
  { id: Math.random(), name: 'SLL', pound: 'Sierra Leonean Leone' },
  { id: Math.random(), name: 'SOS', pound: 'Somali Shilling' },
  { id: Math.random(), name: 'SRD', pound: 'Surinamese Dollar' },
  { id: Math.random(), name: 'SYP', pound: 'Syrian Pound' },
  { id: Math.random(), name: 'SZL', pound: 'Swazi Emalangeni' },
  { id: Math.random(), name: 'THB', pound: 'Thai Baht' },
  { id: Math.random(), name: 'TJS', pound: 'Tajikistani Somoni' },
  { id: Math.random(), name: 'TMT', pound: 'Turkmenistani Manat' },
  { id: Math.random(), name: 'TND', pound: 'Tunisian Dinar' },
  { id: Math.random(), name: 'TOP', pound: "Tongan Pa'anga" },
  { id: Math.random(), name: 'TRY', pound: 'Turkish Lira' },
  { id: Math.random(), name: 'TTD', pound: 'Trinidad and Tobago Dollar' },
  { id: Math.random(), name: 'TWD', pound: 'Taiwan New Dollar' },
  { id: Math.random(), name: 'TZS', pound: 'Tanzanian Shilling' },
  { id: Math.random(), name: 'UAH', pound: 'Ukrainian Hryvnia' },
  { id: Math.random(), name: 'UGX', pound: 'Ugandan Shilling' },
  { id: Math.random(), name: 'USD', pound: 'United States Dollar' },
  { id: Math.random(), name: 'UYU', pound: 'Uruguayan Peso' },
  { id: Math.random(), name: 'UZS', pound: 'Uzbekistan Som' },
  { id: Math.random(), name: 'VND', pound: 'Vietnamese Dong' },
  { id: Math.random(), name: 'VUV', pound: 'Ni-Vanuatu Vatu' },
  { id: Math.random(), name: 'WST', pound: 'Samoan Tala' },
  { id: Math.random(), name: 'XAF', pound: 'CFA Franc BEAC' },
  { id: Math.random(), name: 'XCD', pound: 'East Caribbean Dollar' },
  { id: Math.random(), name: 'XDR', pound: 'Special Drawing Rights' },
  { id: Math.random(), name: 'XOF', pound: 'CFA Franc BCEAO' },
  { id: Math.random(), name: 'XPF', pound: 'CFP Franc' },
  { id: Math.random(), name: 'YER', pound: 'Yemeni Rial' },
  { id: Math.random(), name: 'ZAR', pound: 'South African Rand' },
  { id: Math.random(), name: 'ZMW', pound: 'Zambian Kwacha' },
]
// variable
const twoSelectInput = document.querySelectorAll('.country-input select')
const firstSelect = document.querySelector('.country-input .frist-select')
const secondSelect = document.querySelector('.country-input .second-select')
const supmitInput = document.querySelector('.country-input input')
const informationDiv = document.querySelector(' .information')
const amountInput = document.querySelector(' .amount-input')
const inputExchange = document.querySelector(' .amount-input i')

// drow options
function drowOptions() {
  const items = COUNTRY_NAMES.map((item) => {
    return `
            <option value="${item.name} || ${item.pound} " >
                ${item.name} || ${item.pound}
            </option>
        `
  })
  twoSelectInput.forEach((everyOne) => (everyOne.innerHTML = items.join('')))
}
drowOptions()

// events
firstSelect.addEventListener('change', getInputVal)

secondSelect.addEventListener('change', getInputVal)

// ubdate option with img
let fristInputVal
let secondInputVal
let fristImg
let secondImg
let FristSliceTwoLetter
let secondSliceTwoLetter
let FristSliceThreeLetter
let secondSliceThreeLetter

function getInputVal(e) {
  if (e.target.attributes.class.value == 'frist-select') {
    fristInputVal = e.target.value
    FristSliceTwoLetter = fristInputVal.slice(0, 2)
    FristSliceThreeLetter = fristInputVal.slice(0, 3)
    firstSelect.style.background = `url('https://flagsapi.com/${FristSliceTwoLetter}/shiny/32.png') no-repeat 6px #000`
    fristImg = `url('https://flagsapi.com/${FristSliceTwoLetter}/shiny/32.png') no-repeat 6px #000`
    fetcData(FristSliceThreeLetter)
  } else {
    secondInputVal = e.target.value
    secondSliceTwoLetter = secondInputVal.slice(0, 2)
    secondSliceThreeLetter = secondInputVal.slice(0, 3)
    secondSelect.style.background = `url('https://flagsapi.com/${secondSliceTwoLetter}/shiny/32.png') no-repeat 6px #000`
    secondImg = `url('https://flagsapi.com/${secondSliceTwoLetter}/shiny/32.png') no-repeat 6px #000`
  }
}

// fetch data
let countryData
function fetcData(CountryId) {
  fetch(
    `https://v6.exchangerate-api.com/v6/5a0d9ebfcb3535ee614567a8/latest/${CountryId}`,
  )
    .then((res) => res.json())
    .then((data) => (countryData = data.conversion_rates))
    .catch((err) => console.log(err))
}

//function get amount
let amount = 1
amountInput.addEventListener('change', setAmount)
function setAmount(e) {
  amount = e.target.value
}

//find currency converter function
supmitInput.addEventListener('click', function (e) {
  e.preventDefault()
  if (amount !== '') {
    informationDiv.innerHTML = `${amount} ${FristSliceThreeLetter} = ${
      countryData[secondSliceThreeLetter] * amount
    }  ${secondSliceThreeLetter}`
  } else {
    informationDiv.innerHTML = `1 ${FristSliceThreeLetter} = ${countryData[secondSliceThreeLetter]}  ${secondSliceThreeLetter}`
  }
})

//exchange two inputs
inputExchange.addEventListener('click', exhangeTwoInputs)

function exhangeTwoInputs() {
  let update1 = firstSelect.value
  let update2 = secondSelect.value
  let updateImg = firstSelect.style.background
  let updateImg2 = secondSelect.style.background

  firstSelect.value = update2
  secondSelect.value = update1
  firstSelect.style.background = updateImg2
  secondSelect.style.background = updateImg

  FristSliceThreeLetter = update2.slice(0, 3)
  secondSliceThreeLetter = update1.slice(0, 3)
  FristSliceTwoLetter = update2.slice(0, 2)
  secondSliceTwoLetter = update1.slice(0, 2)

  secondInputVal = update2
  fristInputVal = update1
  fetcData(FristSliceThreeLetter)
}
