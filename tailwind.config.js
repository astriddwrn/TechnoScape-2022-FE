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
        },
        boxShadow: {
            'bsInput': '5px 7px 25px 5px rgba(213, 213, 213, 0.16)',
            'bsBtn' : '9px 11px 29px 7px rgba(104, 149, 235, 0.26)',

        },
        extend: {
            backgroundImage: {
                cBtnGradientCS: 'linear-gradient(90deg, #547EE2 0%, #5DA0FA 100%)',
                cLinearGradientRed: 'linear-gradient(90deg, #FF7D7D 50%, #EF7373 122.98%)',
                cLinearGradient: 'linear-gradient(90deg, rgba(84, 126, 226, 0.7) 0%, rgba(93, 160, 250, 0.7) 100%)',
               
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
