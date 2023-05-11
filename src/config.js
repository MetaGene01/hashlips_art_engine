const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.sol;

// General metadata for Ethereum
const namePrefix = "MatrixCity - THE FOX ONE";
const description = "If you have a Fox, then you've been chosen to awake. Keep them, owning will give you access to the MatrixCity Ecosystem and protect you from any FUD via Cross-Functional DAO. There're only 3333 Foxes, which means only the Chosen Ones will be saved...";
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: "SMC",
  // Define how much % you want from secondary market sales 1000 = 10%
  seller_fee_basis_points: 1000,
  external_url: "https://matrixcitynft.com",
  creators: [
    {
      address: "2XyyfPbkqB7zgxsutumaru2Rk7DAAeGZ9wRQUagUXYEr",
      share: 50,
    },
    {
      address: "HhXgjE7q67SM1AMauXsetdTVRbn9LMtqLXab864LBP3c",
      share: 50,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 3333,
    layersOrder: [
      { name: "Tribe" },
      { name: "Dimension" },
      { name: "Background" },
      { name: "Eyes" },
      { name: "Fur" },
      { name: "Body" },
      { name: "Eyes Props" },
      { name: "Head" },
      // { name: "Mouth" },
      { name: "Neck" }
    ],
  },
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 1920,
  height: 1920,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};