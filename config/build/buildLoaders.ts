import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildCssLoader } from "./loaders/buildCssLoader";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options;
  const svgLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };

  const htmlLoader = {
    test: /\.html$/,
    loader: "html-loader",
  };

  const cssLoader = buildCssLoader(isDev);

  // Если не используем TS - нужен babel-loader
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const babelLoader = {
    test: /\.(js|jsx|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
        plugins: ["i18next-extract"],
      },
    },
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
    type: "asset/resource",
  };

  return [
    htmlLoader,
    fileLoader,
    svgLoader,
    babelLoader,
    typescriptLoader,
    cssLoader,
    fontLoader,
  ];
}
