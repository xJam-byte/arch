const path = require("path");

module.exports = {
  entry: "./src/index.js", // Замените путь на ваш файл входа
  output: {
    filename: "bundle.js", // Имя выходного файла
    path: path.resolve(__dirname, "dist"), // Путь для сохранения собранного бандла
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // Лоадер для JavaScript файлов
          options: {
            presets: ["@babel/preset-env"], // Настройка Babel
          },
        },
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "@svgr/webpack", // Лоадер для SVG файлов
            options: {
              throwIfNamespace: false,
            },
          },
        ],
      },
    ],
  },
};
