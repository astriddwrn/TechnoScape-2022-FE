module.exports = {
    content: ["./**/*.html"],
    theme: {
        colors: {
            cBlue : '#6286E2',
            cBgLight: '#F3F3FF',
            cGray: '#6A6E72',
            cWhite: '#FFFFFF',
            cDarkerGray: '#595959',
            cLighterGray: '#C7C7C7',
            cPinkVC: '#FFC0E2',
            cPurPleVC: '#D9BBF0',
            CBlueVC: '#B2B6FF',
            cBgwhite: "#FAFAFF",
            cTextBlack: '#676767',
            cBlack: "#676767",
            cBgrBlue: "#73ACF9",
            cWhiteLiq: "#F9F9FE",
            cRed: "#FF7979",
            cInpGray : "#808080",
            CBlueLight : "#97B9F9",
            CGreen : "#7FF1F2",
            cGreenTransparent : "rgba(127, 241, 242, 0.4)",
            cCard : "rgba(128, 128, 128, 0.36)",
            cWhiteStep : "#F5F5F6",
            cColorTittle :
                "linear-gradient(90deg, #97B9F9 35%, #7FF1F2 78%)",
            cColortext :
                "linear-gradient(90deg, #97B9F9 20%, #7FF1F2 125%)",
            transparent: "transparent",
            cgreentest : "rgba(127, 241, 242, 0.3)",
            cBgmodal : "rgba(128, 128, 128, 0.3)",
            ctextmodal : "#ADADAD",
        },
        boxShadow: {
            'bsInput': '5px 7px 25px 5px rgba(213, 213, 213, 0.16)',
            'bsBtn' : '9px 11px 29px 7px rgba(104, 149, 235, 0.26)',
            'bsVCCard': '0px 5px 20px rgba(255, 192, 226, 0.55);',
            'bsVCMain': '4px 5px 20px rgba(103, 103, 103, 0.15)',
            'bsBtnBlue': '0px 2px 20px 0px #6997EC96;',
        },
        extend: {
            backgroundImage: {
                cBtnGradientCS: 'linear-gradient(90deg, #547EE2 0%, #5DA0FA 100%)',
                cLinearGradientRed: 'linear-gradient(90deg, #FF7D7D 50%, #EF7373 122.98%)',
                cLinearGradient: 'linear-gradient(90deg, rgba(84, 126, 226, 0.7) 0%, rgba(93, 160, 250, 0.7) 100%)',
                cBtnGradientBlue: "linear-gradient(90deg, #6288E2  0%, #73ACF9  100%)",
            },
            fontFamily: {
                'sans' : ['PJSRegular','Helvetica', 'Arial', 'sans-serif'],
                'PJSItalic': ['PJSItalic'],
                'PJSExtraBold' : ['PJSExtraBold'],
                'PJSExtraBoldItalic': ['PJSExtraBoldItalic'],
                'PJSBold' : ['PJSBold'],
                'PJSBoldItalic': ['PJSBoldItalic'],
                'PJSSemiBold' : ['PJSSemiBold'],
                'PJSSemiBoldItalic' : ['PJSSemiBoldItalic'],
                'PJSMedium' : ['PJSMedium'],
                'PJSMediumItalic' : ['PJSMediumItalic'],
                'PJSLight' : ['PJSLight'],
                'PJSLightItalic' : ['PJSLightItalic'],
                'PJSExtraLight' : ['PJSExtraLight'],
                'PJSExtraLightItalic' : ['PJSExtraLightItalic'],
                'Ethno' : ['Ethno'],
                'EthnoItalic' : ['EthnoItalic']
            }
        },
    },
    variants:{
        extends:{}
    },
    plugins: [],
}
