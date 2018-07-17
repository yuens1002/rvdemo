import checkedURL from './img/checkmark-circle.png'
import checkURL from './img/circle-form.png'
const DEALERS = require('./dealers.json')

//in-app data in one place
const data = {
  breakpoints: {
    xs: 480,
    sm: 768,
    med: 992,
    lg: 1270
  },
  findPro: {
    mobile: 'FIND A PRO',
    tabletUp: 'Find a Pool Pro'
  },
  bez: {
    cta: 'Contact this Pro',
    hours: {
      title: 'Business Hours',
      weekdays: 'Weekdays',
      saturdays: 'Saturdays',
      sundays: 'Sundays',
      noSunday: ' - CLOSED'
    },
    subtitle: 'Can’t talk now? Click below to send an email.'
  },
  footer: {
    title: 'CONNECT WITH US',
    copyright: '&copy; 2017 Pool Pros',
    privacy: 'Privacy Policy',
    terms: 'Terms and Conditions'
  },
  options: {
    result: '7 dealers in 28226',
    filter: 'Filter Results',
    items: [
      'Service',
      'Installation',
      'Residential',
      'Commercial'
    ]
  },
  form: {
    icons: {
      notchecked: checkURL,
      checked: checkedURL
    },
    type: 'EMAIL',
    title: 'Premium Pools & Spas of Charlotte',
    subtitle: 'Fill out the form below and Premium Pools & Spas of Charlotte will get in touch.',
    helper: 'optional',
    textarea: [
      {
        id: 'comments',
        title: 'Comments or Questions',
        required: false,
        value: null
      }
    ],
    inputs: [
      {
        id: 'name',
        title: 'First and Last Name',
        required: true,
        value: null
      }, {
        id: 'phone',
        title: 'Phone Number',
        required: true,
        value: null
      }, {
        id: 'email',
        title: 'Email Address',
        required: true,
        value: null
      }
    ],
    radio: {
      title: 'Do you currently own a pool or spa?',
      value: 'Yes',
      options: [
        {
          id: 'own-yes',
          name: 'own',
          value: 'Yes',
          checked: true
        },
        {
          id: 'own-no',
          name: 'own',
          value: 'No',
          checked: false
        }
      ]
    }
  }
}

const commits = {
  setInputVal(payload) {
    console.log(payload)
    let pos = data.form.inputs.map(field => field.id).indexOf(payload.id)
    data.form.inputs[pos].value = payload.value
  },
  setTextAreaVal(payload) {
    data.form.textarea[0].value = payload
  },
  // currentBreakPoint(payload) {
  //   data.breakpoints.current = payload
  // }
  $commit(name, payload) {
    commits[name](payload)
  }
}

const $commit = commits.$commit
const PROBUTTON = data.findPro
const FORM = data.form
const OPTIONS = data.options
const FOOTER = data.footer
const PROVIDER = data.bez
const BREAKPOINTS = data.breakpoints
export {
  PROBUTTON,
  FORM,
  OPTIONS,
  $commit,
  DEALERS,
  FOOTER,
  PROVIDER,
  BREAKPOINTS
}
