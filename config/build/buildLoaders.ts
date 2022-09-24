import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  
  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
    };
  
  const htmlLoader = {
    test: /\.html$/,
    loader: 'html-loader'
  };

    const cssLoader = {
      test: /\.s[ac]ss$/i,
      use: [
        // // Creates `style` nodes from JS strings
        // "style-loader",
        options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        // Translates CSS into CommonJS
         {
            loader: "css-loader",
            options: {
              modules: {
                auto: (resPath: string) => resPath.includes('.module.'),
                localIdentName: options.isDev ? '[path][name]__[local]' : '[hash:base64:8]',
              },
            },
          },
        // Compiles Sass to CSS
        "sass-loader",
      ],
     }; 

    // Если не используем TS - нужен babel-loader
    const typescriptLoader = {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    };

    // const fontLoader = {
    //   test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
    //   use: [
    //     {
    //       loader: 'file-loader',
    //       options: {
    //         name: '[name].[ext]',
    //         outputPath: 'fonts/'
    //       }
    //     }
    //   ],
    // };

    const fontLoader = {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
    }

  return [
    svgLoader,
    fileLoader,
    htmlLoader,
    typescriptLoader,
    cssLoader,
    fontLoader,
    ];
}