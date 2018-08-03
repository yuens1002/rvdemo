import checkedURL from './img/checkmark-circle.png'
import checkURL from './img/circle-form.png'
const DEALERS = require('./dealers.json')

//in-app data in one place
const data = {
  // *** to revert to js grid ***
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
  filter: {
    result: '7 dealers in 28226',
    filter: 'Filter Results',
    items: [
      'Service Pro',
      'Installation Pro',
      'Residential Pro',
      'Commercial Pro'
    ],
    selected: {
      filters: []
    }
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
    let pos = data.form.inputs.map(field => field.id).indexOf(payload.id)
    data.form.inputs[pos].value = payload.value
  },
  setTextAreaVal(payload) {
    data.form.textarea[0].value = payload
  },
  // filterCard() {
  //   card
  // },
  setSelectedFilter(payload, callback) {
    //card has service keyword


    let _proxy = new Proxy(data.filter.selected, {
      // set (target, prop, val) {
      //   console.log('updated')
      //   return Reflect.set(target, prop, val)
      // },
      set (target, prop, val) {
        Reflect.set(target, prop, val)
        let hasCertification = DEALERS.dealers.map(dealer => {
          console.log(dealer.data.certifications)
          return dealer.data.certifications.some(cert => {
            return data.filter.selected.filters.includes(cert)
          })
        })
        let cards = document.querySelectorAll('.flex--lg-3__cell')
        for (let i = 0; i < cards.length; i++) {
          !hasCertification[i] && (cards[i].style = 'display:none')
          hasCertification[i] && (cards[i].style = 'display: block')
        }
        return true;
      }
    })
    payload.selected ?
      _proxy.filters.push(payload.value) :
      _proxy.filters = _proxy.filters.filter(e => e !== payload.value)
    // console.log(data.filter.selected.filters)
  },
  // *** to revert to js grid ***
  // currentBreakPoint(payload) {
  //   data.breakpoints.current = payload
  // }
  $commit(name, payload) {
    commits[name](payload)
  }
}

const dispatch = {

  $dispatch(name, payload) {
    dispatch[name](payload)
  }
}

const $commit = commits.$commit
const PROBUTTON = data.findPro
const FORM = data.form
const FILTER = data.filter
const FOOTER = data.footer
const PROVIDER = data.bez
const BREAKPOINTS = data.breakpoints
export {
  PROBUTTON,
  FORM,
  FILTER,
  $commit,
  DEALERS,
  FOOTER,
  PROVIDER,
  BREAKPOINTS
}
