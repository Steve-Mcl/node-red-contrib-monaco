const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './index.js',
  mode: 'production',
  devtool: false,
  performance: {
    hints: false,
    maxEntrypointSize: 5120000,
    maxAssetSize: 5120000
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'monaco.js'
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        parallel: true,
        minimizerOptions: {
          preset: [
            'default',
            {
              discardComments: { removeAll: true }
            }
          ]
        }
      }),
      new TerserPlugin({
        parallel: true,
        extractComments: true,
        terserOptions: {
          format: {
            comments: false
          },
          sourceMap: false
        }
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.ttf$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }),
    new ProgressBarPlugin(),
    new MiniCssExtractPlugin({
      filename: 'monaco.css'
    }),
    new MonacoWebpackPlugin({
      filename: '[name].worker.js',
      languages: ['javascript', 'typescript'],
      features: [
        '!accessibilityHelp',
        '!anchorSelect',
        'bracketMatching',
        '!caretOperations',
        'clipboard',
        'codeAction',
        '!codelens',
        '!colorPicker',
        'comment',
        'contextmenu',
        'coreCommands',
        'cursorUndo',
        '!dnd',
        'documentSymbols',
        'find',
        'folding',
        '!fontZoom',
        'format',
        'gotoError',
        'gotoLine',
        'gotoSymbol',
        'hover',
        '!iPadShowKeyboard',
        '!inPlaceReplace',
        'indentation',
        '!inlineHints',
        '!inspectTokens',
        '!linesOperations',
        '!linkedEditing',
        '!links',
        '!multicursor',
        'parameterHints',
        'quickCommand',
        '!quickHelp',
        'quickOutline',
        'referenceSearch',
        'rename',
        '!smartSelect',
        '!snippets',
        'suggest',
        '!toggleHighContrast',
        '!toggleTabFocusMode',
        '!transpose',
        '!unusualLineTerminators',
        '!viewportSemanticTokens',
        'wordHighlighter',
        '!wordOperations',
        '!wordPartOperations'
      ]
    })
  ]
};
