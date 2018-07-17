import { Base } from './base'
import { FOOTER } from '../store'
import imgpPros from '../img/pool-pros-logo-footer.png'
import twitterIcon from '../img/twitter-icon.png'
import fbIcon from '../img/facebook-icon.png'
import ytIcon from '../img/youtube-icon.png'

const template = `
  <div class="footer__branding">
    <div class="footer__branding__logo">
      <a href="/"><img src=${imgpPros}
      class="img-responsive" alt="pool pros"
      title="Pool Pros"></a>
    </div>
    <div class="footer__branding__social footer__branding__social--text">${FOOTER.title}</div>
    <div class="footer__branding__social">
      <div class="footerIcon"><a href="#"><img src=${twitterIcon} class="img-responsive" alt="twitter" title"Twitter"></a></div>
      <div class="footerIcon"><a href="#"><img src=${fbIcon} class="img-responsive" alt="facebook" tittle="Facebook" style="width:10px"></a></div>
      <div class="footerIcon"><a href="#"><img src=${ytIcon} class="img-responsive" alt="youtube" title="YouTube"></a></div>
    </div>
    <div class="footer__disclaimer">
      <ul class="list list--unstyled list--inline --textWhite">
        <li class="list__items">${FOOTER.copyright}</li>
        <li class="list__items">|</li>
        <li class="list__items">${FOOTER.privacy}</li>
        <li class="list__items">|</li>
        <li class="list__items">${FOOTER.terms}</li>
      </ul>
    </div>
  </div>
`

const footer= new Base('footer', {template, className: 'footer flex--column__notMain'})
const footerElm = footer.element
export default footerElm
