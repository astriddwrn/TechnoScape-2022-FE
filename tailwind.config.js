module.exports = {
    content: ["./*.html"],
    theme: {
        extend: {
            colors: {
                cBtnGradientCS: 'linear-gradient(90deg, #547EE2 0%, #5DA0FA 100%)',
                cLinearGradient: 'linear-gradient(90deg, rgba(84, 126, 226, 0.7) 0%, rgba(93, 160, 250, 0.7) 100%)',
                cBgLight: '#F3F3FF',
                cGray: '#6A6E72',
                cWhite: '#FFFFFF',
                cDarkerGray: '#595959',
            },
            boxShadow: {
                'bcInput': '5px 7px 25px 5px rgba(213, 213, 213, 0.16)',

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
            }
        },
    },
    variants:{
        extends:{}
    },
    plugins: [],
}
