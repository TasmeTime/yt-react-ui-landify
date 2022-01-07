export const Colors = {
  Brand: {
    Purple: "#8C30F5",
    Purple800: "#D6B1FF",
    Purple100: "#F1E4FF",
    Turquoise: "#2EC5CE",
    Turquoise800: "#75E3EA",
    Turquoise100: "#D5FAFC",
    Orange: "#FE9A22",
    Orange800: "#FFC278",
    Orange100: "#FFE3C1",
    Pink: "#F22BB2",
    Pink800: "#FF72D2",
    Pink100: "#FFB1E6",
  },
  Text: {
    Gray900: "#18191F",
    Gray800: "#474A57",
    Gray700: "#969BAB",
    Gray300: "#D9DBE1",
    Gray200: "#EEEFF4",
    Gray100: "#F4F5F7",
  },
  Default: {
    White: "#FFFFFF",
    Black: "#0B0D17",
  },
  Accent: {
    PastelGreen: "#C1E5C0",
    PastelBlue: "#C0DAE5",
    Peach: "#F39F9F",
    LightPeach: "#FDD9D9",
    CottonCandy: "#FFC3D8",
    Cyan: "#A0DCFF",
  },
  Gradient: {
    White: ["#FFFFFFFF", "#FFFFFF00"],
    SubtleBlue: ["#D9E8EFFF", "#EAF2F5FF"],
  },
};

export const Shadows = {
  NavBar: "0px 1px 0px #E5E9F2",
  MobileMockUp: "10px 15px 30px rgba(41, 41, 42, 0.5)",
  Grey: "0px 30px 40px rgba(212, 217, 232, 0.2)",
  Dark: "0px 10px 20px rgba(41, 41, 42, 0.07)",
  Dark2: "-2px 4px 45px rgba(0, 0, 0, 0.13)",
  HeaderImage: "48px 24px 48px rgba(24, 37, 56, 0.12)",
  WebPreviewMockup: "50px 0px 70px rgba(0, 0, 0, 0.1)",
};

export const TextStyles = {
  Lable: {
    Small: {
      FontSize: "12px",
      LineHeight: "16px",
      LetterSpacing: "0",
      FontWeight: 600,
    },
    Medium: {
      FontSize: "14px",
      LineHeight: "20px",
      LetterSpacing: "0",
      FontWeight: 600,
    },
    Large: {
      FontSize: "20px",
      LineHeight: "30px",
      LetterSpacing: "0",
      FontWeight: 600,
    },
  },
  Heading: {
    H1: {
      FontSize: "72px",
      LineHeight: "98px",
      LetterSpacing: "0",
      FontWeight: 800,
    },
    H2: {
      FontSize: "48px",
      LineHeight: "64px",
      LetterSpacing: "0",
      FontWeight: 800,
    },
    H3: {
      FontSize: "40px",
      LineHeight: "54px",
      LetterSpacing: "0",
      FontWeight: 800,
    },
    H4: {
      FontSize: "28px",
      LineHeight: "40px",
      LetterSpacing: "0",
      FontWeight: 800,
    },
    H5: {
      FontSize: "24px",
      LineHeight: "32px",
      LetterSpacing: "0",
      FontWeight: 600,
    },
    H6: {
      FontSize: "20px",
      LineHeight: "30px",
      LetterSpacing: "0",
      FontWeight: 500,
    },
  },
  Lead: {
    Lead: {
      FontSize: "18px",
      LineHeight: "32px",
      LetterSpacing: "0",
      FontWeight: "normal",
    },
    Lead2: {
      FontSize: "14px",
      LineHeight: "24px",
      LetterSpacing: "0",
      FontWeight: 500,
    },
    Bundler: function (attr) {
      return `
      font-size: ${attr.FontSize};
      font-weight:  ${attr.FontWeight};
      line-height: ${attr.LineHeight};
      letter-spacing: ${attr.LetterSpacing};
      `;
    },
  },
  Body: {
    Body: {
      FontSize: "16px",
      LineHeight: "26px",
      LetterSpacing: "0",
      FontWeight: "normal",
    },
    Body2: {
      FontSize: "14px",
      LineHeight: "22px",
      LetterSpacing: "0",
      FontWeight: "normal",
    },
  },
  Subtitle: {
    Subtitle: {
      FontSize: "18px",
      LineHeight: "26px",
      LetterSpacing: "0",
      FontWeight: "bold",
    },
    Subtitle2: {
      FontSize: "18px",
      LineHeight: "26px",
      LetterSpacing: "0",
      FontWeight: 500,
    },
  },
  Bundler: function (attr) {
    return `
      font-size: ${attr.FontSize};
      font-weight:  ${attr.FontWeight};
      line-height: ${attr.LineHeight};
      letter-spacing: ${attr.LetterSpacing};
      `;
  },
};
