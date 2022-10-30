// import
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

// export
module.exports = {
  // 파일을 읽어들이기 시작하는 진입점 설정
  entry: './js/main.js',

  // 결과물(번들)을 반환하는 설정
  output: {
    // defalut가 dist
    // path: path.resolve(__dirname, 'dist'),

    // output filename도 기존의 이름과 같다.
    // filename: 'main.js',

    // 기존의 결과물을 제거하고 다시 만듦
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.s?css/,
        use: [
          // 순서가 중요하다.
          // sass-loader가 먼저 sass를 먼저 읽고,
          // postcss-loader를 통해 css를 읽는다.
          // 그 다음에, css-loader를 통해 css를 읽고,
          // style-loader를 통해 적용시킨다.
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ]
      },
    ]
  },
  
  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'static' }
      ]
    })
  ],

  devServer: {
    host: 'localhost'
  }
}