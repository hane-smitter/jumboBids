import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    appBar: {
        // borderRadius: 15,
        marginBlockStart: '0px',
        // marginBlockEnd: '20px',
        backgroundColor: '#020b14',
        color: '#ffffff'
    },
    navigation: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBlock: '10px',
    },
    heading: {
        color: 'rgba(0,183,255, 1)',
    },
    image: {
        display: 'block',
        height: '65px',
    },
    kenya:{
        display: 'block',
        height: '20px',
        marginLeft:'170px'
    },
    position: {
        position: 'relative',
        margin:'auto',
        height:'40px'
    },
    navLink: {
        marginInline: '5px',
        color: '#ffffff',//'#283c9d',
        fontWeight:'bold',
        fontFamily: 'Open Sans',
        fontSize:'18px',
        textDecoration: 'none',
        "&:hover": {
            textDecoration:'underline'
          },
    },
    navLink2: {
        marginInline: '5px',
        color: '#f0f0f0',//'#283c9d',
        fontWeight:'bold',
        fontFamily: 'Open Sans',
        fontSize:'18px',
        textDecoration: 'none',
    },
    navLinkMobi: {
        marginInline: '5px',
        fontWeight:'bold',
        fontFamily: 'Open Sans',
        fontSize:'18px',
        textDecoration: 'none',
        "&:hover": {
            textDecoration:'underline'
          },
    },
        kenya:{
        display: 'block',
        height: '20px',
        marginLeft:'170px'
    },
    time :{
        color: 'lime',
        backgroundColor:'#111',
        fontWeight:'bold',
        fontFamily: 'Open Sans',
        fontSize:'13px',
        textDecoration: 'none',
        // position:'absolute',
        // margin:'auto',
    },
    navContainer: {
        maxWidth: '400px',
    },
    rootTextField: {
        marginLeft: '5px',
    "& .MuiInputBase-root, .MuiFormLabel-root": {
    //   color: "#555",
      borderRadius:'0px',
      margin:'auto',
      backgroundColor:'#f0f0f0'
    },
    
      centar: {
        margin:'auto'
      }
  },
  btn: {
      borderRadius:'0px',
      padding: '8px',
      marginLeft:'5px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  logout:{
    borderRadius:'0px',
    padding: '2px',
    marginLeft:'5px',
  },
  purple: {

  },
  sb: {
    maxWidth:200,
    margin: 10,
    maxHeight:30,
    backgroundColor:'#4472c4',
    color:'#ffffff',
    marginRight:0,
  }
}));