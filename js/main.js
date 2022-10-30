// 현재 webpack.config.js는 main.js를 진입점으로 transfile하고 있다.
// import 키워드를 통해 css도 함께 transfile하도록 도와준다.
import '../scss/main.scss'

console.log('Webpack!')