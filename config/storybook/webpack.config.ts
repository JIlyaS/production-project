import path from "path";
import webpack from "webpack";
import { buildCssLoader } from "../build/loaders/buildCssLoader";
import { BuildPaths } from "../build/types/config";

export default ({ config }: { config: webpack.Configuration }) => {
  // extensions: ['.tsx', '.ts', '.js'],
  //   modules: [options.paths.src, 'node_modules'],
  const paths: BuildPaths = {
    build: "",
    html: "",
    entry: "",
    src: path.resolve(__dirname, "..", "..", "src"),
  };
  config.resolve.modules.push(paths.src);
  config.resolve.extensions.push(".ts", ".tsx");

  config.module.rules = config.module.rules.map((rule: any) => {
    if (/svg/.test(rule.test)) {
      return {
        ...rule,
        exclude: /\.svg$/i,
      };
    }

    return rule;
  });

  config.module.rules.push({
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  });

  config.module.rules.push(buildCssLoader(true));
  return config;
};
