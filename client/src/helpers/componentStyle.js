
const headerCss=(theme)=>({
        root: {
            width: '100%',
        },
        grow: {
            flexGrow: 1,
        },
        menuButton: {
            marginLeft: -12,
            marginRight: 20,
        },
        title: {
            display: 'block',
            color:'white',
        },
        linkStyle:{
            color:'white',
            textDecoration:'none'
        },
        sectionDesktop: {
            display: 'none',
            [theme.breakpoints.up('md')]: {
                display: 'flex',
            },
        },
        sectionMobile: {
            display: 'flex',
            [theme.breakpoints.up('md')]: {
                display: 'none',
            },
        },
    })

const footerCss=(theme)=>({
        root: {
            width: '100%',
            position:'fixed',
            bottom: '0px'
        },
        grow: {
            flexGrow: 1,
        },
    title: {
        fontSize:'15px',
        display: 'block'
    },
         appBarRoot:{
            background:'slategrey'
    }
    })

const homeCss=(theme)=>({
    paperStyle:{
        margin:'0 auto',
        padding:'40px',
        width:'70%',
    }
});

const profileCss=(theme)=>({
    card: {
        maxWidth: 400,
        margin:'14vh auto',
        [theme.breakpoints.down('xs')]:{
            width:300
        }
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    cardHead:{
        textAlign:'center'
    }

});

const notFoundCss=(theme)=>({
    card: {
        maxWidth: 400,
        margin:'14vh auto',
        [theme.breakpoints.down('xs')]:{
            width:300
        }
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    cardHead:{
        textAlign:'center'
    }

});

const indexCss=(theme)=>({
    mainWrapper:{

    },
    paperStyle:{
        margin:'0 auto',
        padding:'40px',
        width:'70%',
    }
});


export {
    headerCss,
    footerCss,
    homeCss,
    profileCss,
    notFoundCss,
    indexCss
}
